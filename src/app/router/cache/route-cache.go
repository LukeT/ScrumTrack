package cache

import (
	"app/common/discovery"
	"errors"
	"fmt"
	"strings"
)

type RouterCache struct {
	Agent      discovery.DiscoveryAgent
	SvcMapping map[string]discovery.DiscoveredService
}

func (cache *RouterCache) Find(url string) (*discovery.DiscoveredService, string, error) {
	// Split the URL to calculate parts
	urls := strings.Split(url, "/")[1:]

	// If the URL contains 2 parts, the service is grouped
	if len(urls) >= 2 && urls[1] != "" {
		urlPrimary := fmt.Sprintf("ticket.api.%s.%s", urls[0], urls[1])

		if discovered, err := cache.Agent.Find(urlPrimary); err == nil {
			return discovered, strings.Join(urls[2:], "/"), nil
		}
	}

	// The service isn't grouped.
	urlSecondary := fmt.Sprintf("ticket.api.%s", urls[0])

	if discovered, err := cache.Agent.Find(urlSecondary); err == nil {
		return discovered, strings.Join(urls[1:], "/"), nil
	}

	return &discovery.DiscoveredService{}, "", errors.New("no such service")
}

func InitRouterCache(agent discovery.DiscoveryAgent) RouterCache {
	return RouterCache{
		agent,
		make(map[string]discovery.DiscoveredService),
	}
}
