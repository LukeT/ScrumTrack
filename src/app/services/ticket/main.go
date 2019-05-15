package main

import (
	common2 "app/api/ticket/common"
	"app/common/helpers"
	"app/common/proto"
	"app/common/service"
	"app/common/service/interfaces"
	"app/services/ticket/common"
	"app/services/ticket/proto"
	"app/services/workflow/proto"
	"context"
	"github.com/jinzhu/copier"
	"github.com/jinzhu/gorm"
)

type TicketSvc struct {
	Service interfaces.Svc
}

// Fetch all tickets
func (t *TicketSvc) GetAll(_ context.Context, req *ticket_svc_ticket.GetAllRequest) (*ticket_svc_ticket.TicketsListResponse, error) {
	response := &ticket_svc_ticket.TicketsListResponse{}
	query := t.Service.GetDb().Where("project_code = ?", req.ProjectSC).Where("location_type = ?", req.LocationType.String())

	// Filter by sprint id
	if req.SprintId != 0 {
		query = query.Where("sprint_id = ?", req.SprintId)
	}

	// Filter by ticket status.
	if len(req.Status) != 0 {
		statuses := make([]string, len(req.Status))

		for _, v := range req.Status {
			statuses = append(statuses, v.String())
		}

		query = query.Where("id in (?)", statuses)
	}

	// Filter by workflow id.
	if req.WorkflowId != 0 {
		query = query.Where("workflow_id = ?", req.WorkflowId)
	}

	resp := []common.Ticket{}

	// Fetch from the db
	if err := query.Find(&resp).Error; err != nil {
		response.Error = &ticket_common.Error{Error: "Something went wrong"}
	}

	// Convert to protobufs
	tickets := make([]*ticket_svc_ticket.Ticket, len(resp))

	for k, v := range resp {
		tickets[k] = common.ToProto(&v)
	}

	response.Tickets = tickets

	return response, nil
}

func (t *TicketSvc) Create(_ context.Context, ticket *ticket_svc_ticket.Ticket) (*ticket_svc_ticket.TicketResponse, error) {
	// Convert to DB model
	resp := &ticket_svc_ticket.TicketResponse{}
	create := common.FromProto(ticket)

	/// Set defaults
	create.LocationType = common.Pending
	create.SprintId = interfaces.NullInt32{}
	create.Status = helpers.Open

	// Create
	if err := t.Service.GetDb().Create(&create).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to create ticket"}

		return resp, nil
	}

	// Convert to wire format
	resp.Ticket = common.ToProto(create)

	return resp, nil
}

func (t *TicketSvc) Update(_ context.Context, ticket *ticket_svc_ticket.Ticket) (*ticket_svc_ticket.TicketResponse, error) {
	resp := &ticket_svc_ticket.TicketResponse{}

	// Fetch the current ticket from the database
	query := t.Service.GetDb().Where("project_code = ?", ticket.ProjectCode).Where("id = ?", ticket.Id)
	baseTicket := &common.Ticket{}

	if err := query.First(baseTicket).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		resp.Error = &ticket_common.Error{Error: "Ticket not found"}
		return resp, nil
	}

	ticketSnap := common.TakeSnapshot(baseTicket)


	// Copy changed values
	copier.Copy(baseTicket, common.FromProto(ticket))

	// Save the ticket
	if err := t.Service.GetDb().Save(baseTicket).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to update ticket"}

		return resp, nil
	}

	common.CompareSnapshot(t.Service, ticketSnap, baseTicket)
	resp.Ticket = common.ToProto(baseTicket)

	return resp, nil
}

func (t *TicketSvc) Get(_ context.Context, req *ticket_svc_ticket.GetRequest) (*ticket_svc_ticket.TicketResponse, error) {
	resp := &ticket_svc_ticket.TicketResponse{}

	// Find the  ticket
	ticket, err := common2.FindTicket(t.Service, req.ProjectSC, req.TicketId)

	if err != nil {
		resp.Error = &ticket_common.Error{Error: "Ticket not found"}

		return resp, nil
	}

	// Convert to wire format.
	resp.Ticket = common.ToProto(ticket)

	return resp, nil
}

func (t *TicketSvc) GetComments(_ context.Context, req *ticket_svc_ticket.GetRequest) (*ticket_svc_ticket.CommentsListResponse, error) {
	res := &ticket_svc_ticket.CommentsListResponse{}

	// Fetch all comments
	comments := []common.TicketComment{}
	query := t.Service.GetDb().Where("project_code = ?", req.ProjectSC).Where("ticket_id = ?", req.TicketId)

	if err := query.Find(&comments).Error; err != nil || gorm.IsRecordNotFoundError(err) {
		res.Error = &ticket_common.Error{Error: "Unable to fetch tickets"}
	}

	// Convert to wire format
	commentsResp := make([]*ticket_svc_ticket.TicketComment, len(comments))

	for k, v := range comments {
		commentsResp[k] = common.CommentToProto(&v)
	}

	res.Comments = commentsResp

	return res, nil
}

func (t *TicketSvc) CreateComment(_ context.Context, req *ticket_svc_ticket.TicketComment) (*ticket_svc_ticket.CommentResponse, error) {
	resp := &ticket_svc_ticket.CommentResponse{}
	create := common.CommentFromProto(req)

	// Create the new comment
	if err := t.Service.GetDb().Create(&create).Error; err != nil {
		resp.Error = &ticket_common.Error{Error: "Unable to create ticket"}

		return resp, nil
	}

	// Convert to wire format.
	resp.Comment = common.CommentToProto(create)

	return resp, nil
}

func (t *TicketSvc) Move(ctx context.Context, req *ticket_svc_ticket.MoveRequest) (*ticket_common.Status, error) {
	targetTicket, _ := common2.FindTicket(t.Service, req.ProjectCode, req.TicketId)
	sourceTicketAfter, err2 := common2.FindTicketByPrevious(t.Service, req.ProjectCode, targetTicket.LocationType, targetTicket.Id, targetTicket.SprintId.Int32)

	targetSnap := common.TakeSnapshot(targetTicket)
	sourceAfterSnap  := common.TakeSnapshot(sourceTicketAfter)

	// Update sprint status
	if req.SprintId == 0 {
		targetTicket.LocationType = common.Backlog
		targetTicket.SprintId = interfaces.MakeNullInt32(nil)
	} else {
		targetTicket.LocationType = common.Sprint
		targetTicket.SprintId = interfaces.MakeNullInt32(req.SprintId)

		wfClient := ticket_svc_workflow.GetWorkflowClient(t.Service)

		data, err := wfClient.GetInitialColumn(ctx, &ticket_common.Empty{})

		if err != nil {
			return &ticket_common.Status{Status: false}, nil
		}

		targetTicket.WorkflowId = data.WorkflowId
	}

	targetTicketAfter, err3 := common2.FindTicketByPrevious(t.Service, req.ProjectCode, targetTicket.LocationType, req.PreviousTicket, req.SprintId)

	targetAfterSnap  := common.TakeSnapshot(sourceTicketAfter)

	// If the previous ticket is us, then we're just swapping place.
	if req.TicketId == req.PreviousTicket {
		prev := targetTicket.PreviousTicket

		targetTicket.PreviousTicket.Int32 = sourceTicketAfter.Id
		sourceTicketAfter.PreviousTicket = prev

		t.Service.GetDb().Save(sourceTicketAfter)
		t.Service.GetDb().Save(targetTicket)

		common.CompareSnapshot(t.Service, sourceAfterSnap, sourceTicketAfter)
		common.CompareSnapshot(t.Service, targetSnap, targetTicket)
	} else {
		sourceTicketAfter.PreviousTicket = targetTicket.PreviousTicket
		targetTicket.PreviousTicket = interfaces.MakeNullInt32(req.PreviousTicket)
		targetTicketAfter.PreviousTicket = interfaces.MakeNullInt32(targetTicket.Id)

		// If the previous ticket wasn't null, update
		if err2 == nil {
			t.Service.GetDb().Save(sourceTicketAfter)
			common.CompareSnapshot(t.Service, sourceAfterSnap, sourceTicketAfter)
		}

		t.Service.GetDb().Save(targetTicket)
		common.CompareSnapshot(t.Service, targetSnap, targetTicket)

		// If there is a ticket after to update
		if err3 == nil {
			t.Service.GetDb().Save(targetTicketAfter)
			common.CompareSnapshot(t.Service, targetAfterSnap, targetTicketAfter)
		}
	}

	return &ticket_common.Status{Status: true}, nil
}

func (t *TicketSvc) MoveWithinSprint(ctx context.Context, req *ticket_svc_ticket.MoveWithinSprintRequest) (*ticket_common.Status, error) {
	wfClient := ticket_svc_workflow.GetWorkflowClient(t.Service)

	workflow, err := wfClient.GetOne(ctx, &ticket_svc_workflow.WorkflowId{ WorkflowId: req.WorkflowId })

	if err != nil || workflow.Error != nil {
		return &ticket_common.Status{Status: false}, nil
	}

	targetTicket, _ := common2.FindTicket(t.Service, req.ProjectCode, req.TicketId)

	snap := common.TakeSnapshot(targetTicket)

	if targetTicket.Status != helpers.StatusFromWire(workflow.Workflow.Status) {
		targetTicket.Status = helpers.StatusFromWire(workflow.Workflow.Status)
	}


	targetTicket.WorkflowId = req.WorkflowId
	targetTicket.WorkflowPosition = req.Order

	t.Service.GetDb().Save(targetTicket)

	common.CompareSnapshot(t.Service, snap, targetTicket)

	return &ticket_common.Status{Status: true}, nil
}

func (t *TicketSvc) GetCategories(ctx context.Context, req *ticket_svc_ticket.GetAllRequest) (*ticket_svc_ticket.Categories, error) {
	rows, err := t.Service.GetDb().Table("tickets").Where("project_code = ?", req.ProjectSC).Select("category, count(id) as count").Group("category").Rows()

	if err != nil {
		return &ticket_svc_ticket.Categories{}, nil
	}

	var (
		count int32
		category string
	)

	slice := make([]*ticket_svc_ticket.Category, 0)

	for rows.Next() {
		err := rows.Scan(&category, &count)

		if err == nil {
			slice = append(slice, &ticket_svc_ticket.Category{
				Name: category,
				Count: count,
			})
		}
	}

	return &ticket_svc_ticket.Categories{ Categories: slice }, nil
}


func main() {
	svc := service.CreateService(ticket_svc_ticket.PackageName)

	ticket_svc_ticket.RegisterTicketsHandler(&svc, &TicketSvc{&svc})

	svc.Run(func(svc interfaces.Svc) {
		// Migrate ticket models.
		svc.GetDb().Model(common.Ticket{}).Related(&common.TicketComment{})
		svc.GetDb().LogMode(true)
		svc.GetDb().AutoMigrate(&common.Ticket{})
		svc.GetDb().AutoMigrate(&common.TicketComment{})
	})
}
