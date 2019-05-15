# Workflow Service _ticket.svc.workflow_
The workflow service handles creation, finding and deletion of workflow rules.

## Methods
### Workflow.Get(ticket.common.Empty) returns (WorkflowConfigurations);
Fetch all workflow rules

### Workflow.GetOne(WorkflowId) returns (WorkflowConfigurationResponse);
Fetch a single workflow rule

### Workflow.Create(WorkflowConfiguration) returns (WorkflowConfigurationResponse);
Creates a single workflow rule

### Workflow.Update(WorkflowConfiguration) returns (WorkflowConfigurationResponse);
Update a single workflow rule

### Workflow.Delete(WorkflowId) returns (ticket.common.VoidResponse);
Delete a workflow rule.
