package common

import (
	"app/common/service/interfaces"
	"app/services/ticket/common"
	"github.com/jinzhu/gorm"
)

func FindTicket(svc interfaces.Svc, ProjectId string, TicketId int32) (*common.Ticket, error) {
	ticket := &common.Ticket{}

	if err := svc.GetDb().Where("project_code = ?", ProjectId).Where("id = ?", TicketId).First(ticket).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		return ticket, err
	}

	return ticket, nil
}

func FindTicketByPrevious(svc interfaces.Svc, ProjectId string, Location common.LocationType, TicketId int32, SprintId int32) (*common.Ticket, error) {
	ticket := &common.Ticket{}

	val := svc.GetDb().Where("project_code = ?", ProjectId).Where("location_type = ?", Location)

	if SprintId == 0 {
		val = val.Where("sprint_id IS NULL")
	} else {
		val = val.Where("sprint_id = ?", SprintId)
	}

	if TicketId == 0 {
		val = val.Where("previous_ticket IS NULL")
	} else {
		val = val.Where("previous_ticket = ?", TicketId)
	}

	if err := val.First(ticket).Error; gorm.IsRecordNotFoundError(err) || err != nil {
		return ticket, err
	}

	return ticket, nil
}
