package helpers

import ticket_common "app/common/proto"

type LogType string

const (
	SprintChanged LogType = "sprint"
	TitleChanged LogType = "title"
	AssigneeChanged LogType = "assignee"
	WeightChanged LogType = "weight"
	LocationChanged LogType = "location"
	StatusChanged LogType = "status"
	Reprioritised LogType = "reprioritised"
)


func LogFromWire(rule ticket_common.LogType) LogType{
	switch rule {
	case ticket_common.LogType_SPRINT_CHANGED:
		return SprintChanged
	case ticket_common.LogType_STATUS_CHANGED:
		return StatusChanged
	case ticket_common.LogType_WEIGHT_CHANGED:
		return WeightChanged
	case ticket_common.LogType_TITLE_CHANGED:
		return TitleChanged
	case ticket_common.LogType_ASSIGNEE_CHANGED:
		return AssigneeChanged
	case ticket_common.LogType_LOCATION_CHANGED:
		return LocationChanged
	case ticket_common.LogType_REPRIORITISED:
		return Reprioritised
	}

	// Default to new.
	return SprintChanged
}

func LogToWire(rule LogType) ticket_common.LogType {
	switch rule {
	case SprintChanged:
		return ticket_common.LogType_SPRINT_CHANGED;
	case StatusChanged:
		return ticket_common.LogType_STATUS_CHANGED;
	case WeightChanged:
		return ticket_common.LogType_WEIGHT_CHANGED;
	case TitleChanged:
		return ticket_common.LogType_TITLE_CHANGED;
	case AssigneeChanged:
		return ticket_common.LogType_ASSIGNEE_CHANGED;
	case LocationChanged:
		return ticket_common.LogType_LOCATION_CHANGED;
	case Reprioritised:
		return ticket_common.LogType_REPRIORITISED;
	}

	return ticket_common.LogType_SPRINT_CHANGED
}
