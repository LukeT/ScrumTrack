package api

import (
	"errors"
	"strings"
)

// HTTP Router
// Implementation is implemented as a radix-tree, making it fast to lookup a route. This implementation prefers fixed
// routes over wildcard, since wildcards are normally used as fallback routes.

type RouteNode struct {
	Parent           *RouteNode
	Children         map[string]*RouteNode
	IsPlaceholder    bool
	PlaceholderIdent string
	Value            string
	PlaceholderNode  *RouteNode
	Handler          *Handler
}

func (no *RouteNode) AddChild(node *RouteNode) {
	no.Children[node.Value] = node
}

func MakeRouteNode(parent *RouteNode) *RouteNode {
	return &RouteNode{
		Parent:        parent,
		Children:      make(map[string]*RouteNode),
		IsPlaceholder: false,
	}
}

type RouteTable struct {
	root         *RouteNode
	staticRoutes map[string]*RouteNode
}

// Insert a new route.
func (table *RouteTable) Insert(method string, path string, handler *Handler) {
	str := strings.Split(path, "/")

	// Make base node for HTTP Verbs
	if _, ok := table.root.Children[method]; !ok {
		table.root.Children[method] = MakeRouteNode(table.root)
	}

	// Get the base node.
	newestNode := table.root.Children[method]

	// Loop through all segments in the URL
	for _, value := range str {
		lowerValue := strings.ToLower(value)
		var node *RouteNode

		// If the node exists, the current position is that.
		if str, ok := newestNode.Children[lowerValue]; ok {
			node = str
		} else {
			no := MakeRouteNode(newestNode)

			no.Value = lowerValue

			// If the URL has a placeholder, we should make sure.
			no.IsPlaceholder = strings.HasPrefix(value, ":")

			// Make the placeholder key.
			if no.IsPlaceholder {
				no.PlaceholderIdent = value[1:]
			}

			node = no
			newestNode.AddChild(node)
		}

		// If we have a placeholder, keep track of it.
		if node.IsPlaceholder {
			newestNode.PlaceholderNode = node
		}

		newestNode = node
	}

	newestNode.Handler = handler
}

// Find a route.
func (table *RouteTable) Find(method string, path string) (*Handler, map[string]string, error) {
	root := table.root.Children[method]
	params := make(map[string]string)
	// Split the string into segments
	parts := strings.Split(path, "/")
	valid := true

	// Check the verb exists
	if _, exist := table.root.Children[method]; exist {
		// Loop through parts
		for _, value := range parts {
			// Only compare lower case
			lowerValue := strings.ToLower(value)

			// Check for exact match
			if a, b := root.Children[lowerValue]; b {
				root = a
				// If this level has a placeholder, that's fine
			} else if a := root.PlaceholderNode; a != nil {
				params[root.PlaceholderNode.PlaceholderIdent] = value
				root = root.PlaceholderNode
			} else {
				// No match, give up
				valid = false
			}
		}

		// Return the handler fn if valid.
		if root.Handler != nil && valid {
			return root.Handler, params, nil
		}
	}

	return &Handler{}, make(map[string]string), errors.New("unable to find suitable handler")
}

func MakeRouteTable() *RouteTable {
	return &RouteTable{
		root:         &RouteNode{Children: make(map[string]*RouteNode)},
	}
}
