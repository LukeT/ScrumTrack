package common

import (
	"app/services/ticket/proto"
)

type Node struct {
	Node *ticket_svc_ticket.Ticket
	Next *Node
}

func addNode(arr []*ticket_svc_ticket.Ticket, node *Node, idx int32) {
	arr[idx] = node.Node

	if node.Next != nil {
		addNode(arr, node.Next, idx+1)
	}
}

// Sort the linked list of tickets into a valid order.
func Sort(list []*ticket_svc_ticket.Ticket) []*ticket_svc_ticket.Ticket {
	if len(list) == 0 {
		return list
	}

	nullCount := 0
	rootNode := &Node{}
	maps := make(map[int32]*Node)

	// For each ticket, store it in a map
	for _, b := range list {
		maps[b.Id] = &Node{Node: b}

		// If a ticket has no previous, store it.
		if b.PreviousTicket == 0 {
			nullCount++
			rootNode = maps[b.Id]
		}
	}

	// We've found multiple start tickets, we should give up.
	println("Got more than 1 null, bailing out.")
	if nullCount > 1 {
		return list
	}

	// Loop through all tickets, chaining them.
	for _, b := range list {
		if b.PreviousTicket != 0 {
			maps[b.PreviousTicket].Next = maps[b.Id]
		}
	}
	// Add all tickets into single, flat array.
	sorted := make([]*ticket_svc_ticket.Ticket, len(list))
	addNode(sorted, rootNode, 0)

	return sorted
}
