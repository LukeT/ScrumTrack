package interfaces

import (
	"database/sql/driver"
)

// Implementation based upon https://github.com/axiomzen/null/blob/v6.0.0/sql/sql.go

func MakeNullInt32(value interface{}) NullInt32 {
	switch v := value.(type) {
	case NullInt32:
		return NullInt32{Valid: v.Valid, Int32: v.Int32}
	case int64:
		{
			if v == 0 {
				return MakeNullInt32(nil)
			}

			val := NullInt32{}
			val.Scan(value)
			return val
		}

	case int32:
		{
			if v == 0 {
				return MakeNullInt32(nil)
			}

			val := NullInt32{}
			val.Scan(int64(v))
			return val
		}

	default:
		return NullInt32{Valid: false, Int32: 0}
	}
}

type NullInt32 struct {
	Int32 int32
	Valid bool // Valid is true if Int64 is not NULL
}

// Scan implements the Scanner interface.
func (n *NullInt32) Scan(value interface{}) error {
	if value == nil {
		n.Int32, n.Valid = 0, false
		return nil
	}

	n.Valid = true

	switch v := value.(type) {
	case int32:
		n.Int32 = v
	default:
		n.Int32 = int32(value.(int64))
	}

	return nil
}

// Value implements the driver Valuer interface.
func (n NullInt32) Value() (driver.Value, error) {
	if !n.Valid {
		return nil, nil
	}
	return int64(n.Int32), nil
}
