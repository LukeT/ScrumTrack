package main

import (
	"app/common/helpers"
	"app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/workflow/common"
	"app/services/workflow/proto"
	"github.com/jinzhu/gorm"
	"golang.org/x/net/context"
	"sort"
)

type WorkflowSvc struct {
	Service interfaces.Svc
}

func (t *WorkflowSvc) Get(context.Context, *ticket_common.Empty) (*ticket_svc_workflow.WorkflowConfigurations, error) {
	res := ticket_svc_workflow.WorkflowConfigurations{}
	rules := []common.WorkflowRule{}

	// Find all rules
	if err := t.Service.GetDb().Preload("Allowed").Find(&rules).Error; err != nil || gorm.IsRecordNotFoundError(err) {
		res.Error = &ticket_common.Error{Error: "Unable to fetch workflow"}
	}

	// Convert to wire format
	ruleRes := make([]*ticket_svc_workflow.WorkflowConfiguration, len(rules))

	for k, v := range rules {
		ruleRes[k] = common.ToProto(&v)
	}

	res.Workflows = ruleRes

	return &res, nil
}

func (t *WorkflowSvc) GetOne(_ context.Context, id *ticket_svc_workflow.WorkflowId) (*ticket_svc_workflow.WorkflowConfigurationResponse, error) {
	resp := &ticket_svc_workflow.WorkflowConfigurationResponse{}
	workflow := &common.WorkflowRule{}

	// Find a single rule
	if err := t.Service.GetDb().Where("id = ?", id.WorkflowId).First(workflow).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Workflow not found"}

		return resp, nil
	}

	resp.Workflow = common.ToProto(workflow)

	return resp, nil
}


func (t *WorkflowSvc) Create(_ context.Context, wf *ticket_svc_workflow.WorkflowConfiguration) (*ticket_svc_workflow.WorkflowConfigurationResponse, error) {
	resp := &ticket_svc_workflow.WorkflowConfigurationResponse{}

	// Create new rule
	workflow := &common.WorkflowRule{
		Order: uint(wf.Order),
		MaxItems: uint(wf.MaxItems),
		Name: wf.Name,
		Status: helpers.StatusFromWire(wf.Status),
	}

	// Update allowed
	workflow.Allowed = make([]*common.WorkflowRule, len(wf.Allow))

	for k, v := range wf.Allow {
		wfr := &common.WorkflowRule{}

		t.Service.GetDb().Where("id = ?", v).First(wfr)

		workflow.Allowed[k] = wfr
	}

	// Save
	t.Service.GetDb().Save(workflow)

	// Convert back to wire
	resp.Workflow = common.ToProto(workflow)

	return resp, nil
}

func (t *WorkflowSvc) Update(_ context.Context, wf *ticket_svc_workflow.WorkflowConfiguration) (*ticket_svc_workflow.WorkflowConfigurationResponse, error) {
	resp := &ticket_svc_workflow.WorkflowConfigurationResponse{}
	workflow := &common.WorkflowRule{}

	// Find a rule
	if err := t.Service.GetDb().Where("id = ?", wf.Id).First(workflow).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Workflow not found"}

		return resp, nil
	}

	status := helpers.StatusFromWire(wf.Status)
	isDifferent := status != workflow.Status

	// Update properties
	workflow.Name = wf.Name
	workflow.Order = uint(wf.Order)
	workflow.MaxItems = uint(wf.MaxItems)
	workflow.Status = status

	// Update allowed
	workflow.Allowed = make([]*common.WorkflowRule, len(wf.Allow))

	for k, v := range wf.Allow {
		wfr := &common.WorkflowRule{}

		t.Service.GetDb().Where("id = ?", v).First(wfr)

		workflow.Allowed[k] = wfr
	}

	// Save
	t.Service.GetDb().Save(workflow)

	// Convert back to wire
	resp.Workflow = common.ToProto(workflow)


	if isDifferent {
		// todo: update all tickets..
	}

	return resp, nil
}

func (t *WorkflowSvc) Delete(_ context.Context, id *ticket_svc_workflow.WorkflowId) (*ticket_common.VoidResponse, error) {
	resp := &ticket_common.VoidResponse{}

	// Delete the workflow rule based on id
	if err := t.Service.GetDb().Where("id = ?", id.WorkflowId).Delete(&common.WorkflowRule{}).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to destroy"}

		return resp, nil
	}

	return resp, nil
}

func (t *WorkflowSvc) GetInitialColumn(ctx context.Context, empty *ticket_common.Empty) (*ticket_svc_workflow.InitialColumn, error) {
	data, err := t.Get(ctx, empty)

	if err != nil {
		return nil, err
	}

	// Sort the workflows
	sort.Slice(data.Workflows, func(i, j int) bool {
		return data.Workflows[i].Order< data.Workflows[j].Order
	})

	// Find the first open one.
	for _, v := range data.Workflows {
		if v.Status == ticket_common.TicketStatus_Open {
			return &ticket_svc_workflow.InitialColumn{WorkflowId: int32(v.Id)}, nil
		}
	}

	// Default to the first one.
	return &ticket_svc_workflow.InitialColumn{WorkflowId: int32(data.Workflows[0].Id)}, nil
}

func main() {
	svc := service.CreateService(ticket_svc_workflow.PackageName)

	ticket_svc_workflow.RegisterWorkflowHandler(&svc, &WorkflowSvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		svc.GetDb().AutoMigrate(&common.WorkflowRule{})
		svc.GetDb().Model(&common.WorkflowRule{}).Related(&common.WorkflowRule{}, "Allowed")
	})
}
