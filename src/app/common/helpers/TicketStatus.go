package helpers

import ticket_common "app/common/proto"

type TicketStatus string

const (
	Open TicketStatus = "open"
	InProgress TicketStatus = "in-progress"
	Closed TicketStatus = "closed"
)


func StatusFromWire(rule ticket_common.TicketStatus) TicketStatus {
	switch rule {
	case ticket_common.TicketStatus_Open:
		return Open
	case ticket_common.TicketStatus_InProgress:
		return InProgress
	case ticket_common.TicketStatus_Closed:
		return Closed
	}

	// Default to new.
	return Open
}

func StatusToWire(rule TicketStatus) ticket_common.TicketStatus {
	switch rule {
	case Open:
		return ticket_common.TicketStatus_Open
	case InProgress:
		return ticket_common.TicketStatus_InProgress
	case Closed:
		return ticket_common.TicketStatus_Closed
	}

	// Default to new.
	return ticket_common.TicketStatus_Open
}
