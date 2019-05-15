// Code generated by protoc-gen-go. DO NOT EDIT.
// source: src/app/common/proto/common.proto

package ticket_common

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type TicketStatus int32

const (
	TicketStatus_Open       TicketStatus = 0
	TicketStatus_InProgress TicketStatus = 1
	TicketStatus_Closed     TicketStatus = 2
)

var TicketStatus_name = map[int32]string{
	0: "Open",
	1: "InProgress",
	2: "Closed",
}

var TicketStatus_value = map[string]int32{
	"Open":       0,
	"InProgress": 1,
	"Closed":     2,
}

func (x TicketStatus) String() string {
	return proto.EnumName(TicketStatus_name, int32(x))
}

func (TicketStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{0}
}

type LogType int32

const (
	LogType_SPRINT_CHANGED   LogType = 0
	LogType_TITLE_CHANGED    LogType = 1
	LogType_ASSIGNEE_CHANGED LogType = 2
	LogType_WEIGHT_CHANGED   LogType = 3
	LogType_LOCATION_CHANGED LogType = 4
	LogType_STATUS_CHANGED   LogType = 5
	LogType_REPRIORITISED    LogType = 6
)

var LogType_name = map[int32]string{
	0: "SPRINT_CHANGED",
	1: "TITLE_CHANGED",
	2: "ASSIGNEE_CHANGED",
	3: "WEIGHT_CHANGED",
	4: "LOCATION_CHANGED",
	5: "STATUS_CHANGED",
	6: "REPRIORITISED",
}

var LogType_value = map[string]int32{
	"SPRINT_CHANGED":   0,
	"TITLE_CHANGED":    1,
	"ASSIGNEE_CHANGED": 2,
	"WEIGHT_CHANGED":   3,
	"LOCATION_CHANGED": 4,
	"STATUS_CHANGED":   5,
	"REPRIORITISED":    6,
}

func (x LogType) String() string {
	return proto.EnumName(LogType_name, int32(x))
}

func (LogType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{1}
}

type Error struct {
	Error                string   `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Error) Reset()         { *m = Error{} }
func (m *Error) String() string { return proto.CompactTextString(m) }
func (*Error) ProtoMessage()    {}
func (*Error) Descriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{0}
}

func (m *Error) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Error.Unmarshal(m, b)
}
func (m *Error) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Error.Marshal(b, m, deterministic)
}
func (m *Error) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Error.Merge(m, src)
}
func (m *Error) XXX_Size() int {
	return xxx_messageInfo_Error.Size(m)
}
func (m *Error) XXX_DiscardUnknown() {
	xxx_messageInfo_Error.DiscardUnknown(m)
}

var xxx_messageInfo_Error proto.InternalMessageInfo

func (m *Error) GetError() string {
	if m != nil {
		return m.Error
	}
	return ""
}

type VoidResponse struct {
	Error                *Error   `protobuf:"bytes,1,opt,name=error,proto3" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *VoidResponse) Reset()         { *m = VoidResponse{} }
func (m *VoidResponse) String() string { return proto.CompactTextString(m) }
func (*VoidResponse) ProtoMessage()    {}
func (*VoidResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{1}
}

func (m *VoidResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VoidResponse.Unmarshal(m, b)
}
func (m *VoidResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VoidResponse.Marshal(b, m, deterministic)
}
func (m *VoidResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VoidResponse.Merge(m, src)
}
func (m *VoidResponse) XXX_Size() int {
	return xxx_messageInfo_VoidResponse.Size(m)
}
func (m *VoidResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_VoidResponse.DiscardUnknown(m)
}

var xxx_messageInfo_VoidResponse proto.InternalMessageInfo

func (m *VoidResponse) GetError() *Error {
	if m != nil {
		return m.Error
	}
	return nil
}

type Status struct {
	Status               bool     `protobuf:"varint,1,opt,name=Status,proto3" json:"Status,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Status) Reset()         { *m = Status{} }
func (m *Status) String() string { return proto.CompactTextString(m) }
func (*Status) ProtoMessage()    {}
func (*Status) Descriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{2}
}

func (m *Status) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Status.Unmarshal(m, b)
}
func (m *Status) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Status.Marshal(b, m, deterministic)
}
func (m *Status) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Status.Merge(m, src)
}
func (m *Status) XXX_Size() int {
	return xxx_messageInfo_Status.Size(m)
}
func (m *Status) XXX_DiscardUnknown() {
	xxx_messageInfo_Status.DiscardUnknown(m)
}

var xxx_messageInfo_Status proto.InternalMessageInfo

func (m *Status) GetStatus() bool {
	if m != nil {
		return m.Status
	}
	return false
}

type Empty struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Empty) Reset()         { *m = Empty{} }
func (m *Empty) String() string { return proto.CompactTextString(m) }
func (*Empty) ProtoMessage()    {}
func (*Empty) Descriptor() ([]byte, []int) {
	return fileDescriptor_16b84d1227308210, []int{3}
}

func (m *Empty) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Empty.Unmarshal(m, b)
}
func (m *Empty) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Empty.Marshal(b, m, deterministic)
}
func (m *Empty) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Empty.Merge(m, src)
}
func (m *Empty) XXX_Size() int {
	return xxx_messageInfo_Empty.Size(m)
}
func (m *Empty) XXX_DiscardUnknown() {
	xxx_messageInfo_Empty.DiscardUnknown(m)
}

var xxx_messageInfo_Empty proto.InternalMessageInfo

func init() {
	proto.RegisterEnum("ticket.common.TicketStatus", TicketStatus_name, TicketStatus_value)
	proto.RegisterEnum("ticket.common.LogType", LogType_name, LogType_value)
	proto.RegisterType((*Error)(nil), "ticket.common.Error")
	proto.RegisterType((*VoidResponse)(nil), "ticket.common.VoidResponse")
	proto.RegisterType((*Status)(nil), "ticket.common.Status")
	proto.RegisterType((*Empty)(nil), "ticket.common.Empty")
}

func init() { proto.RegisterFile("src/app/common/proto/common.proto", fileDescriptor_16b84d1227308210) }

var fileDescriptor_16b84d1227308210 = []byte{
	// 297 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x91, 0x41, 0x4f, 0xc2, 0x30,
	0x14, 0xc7, 0x19, 0xb2, 0x81, 0x4f, 0x20, 0xb5, 0x21, 0xc6, 0x8b, 0x09, 0x72, 0x32, 0x1c, 0x46,
	0xa2, 0x9e, 0xbc, 0x4d, 0x68, 0xa0, 0x09, 0xd9, 0x48, 0x5b, 0x35, 0xf1, 0x62, 0x10, 0x1a, 0x42,
	0x94, 0xb5, 0x69, 0xeb, 0x81, 0x4f, 0xe2, 0xd7, 0x35, 0x2b, 0x30, 0xd4, 0x53, 0xdf, 0xff, 0x97,
	0xf7, 0xfb, 0xbf, 0x43, 0xe1, 0xda, 0x9a, 0xc5, 0x60, 0xae, 0xf5, 0x60, 0xa1, 0x36, 0x1b, 0x95,
	0x0f, 0xb4, 0x51, 0x4e, 0xed, 0x43, 0xec, 0x03, 0x6e, 0xb9, 0xf5, 0xe2, 0x43, 0xba, 0x78, 0x07,
	0x7b, 0x57, 0x10, 0x12, 0x63, 0x94, 0xc1, 0x1d, 0x08, 0x65, 0x31, 0x5c, 0x06, 0xdd, 0xe0, 0xe6,
	0x94, 0xed, 0x42, 0xef, 0x01, 0x9a, 0xcf, 0x6a, 0xbd, 0x64, 0xd2, 0x6a, 0x95, 0x5b, 0x89, 0xfb,
	0xbf, 0xb7, 0xce, 0x6e, 0x3b, 0xf1, 0x9f, 0xb6, 0xd8, 0x57, 0x1d, 0xdc, 0x2e, 0x44, 0xdc, 0xcd,
	0xdd, 0x97, 0xc5, 0x17, 0x87, 0xc9, 0x6b, 0x0d, 0xb6, 0x4f, 0xbd, 0x3a, 0x84, 0x64, 0xa3, 0xdd,
	0xb6, 0x7f, 0x0f, 0x4d, 0xe1, 0x8b, 0xf6, 0x42, 0x03, 0x6a, 0x99, 0x96, 0x39, 0xaa, 0xe0, 0x36,
	0x00, 0xcd, 0x67, 0x46, 0xad, 0x8c, 0xb4, 0x16, 0x05, 0x18, 0x20, 0x1a, 0x7e, 0x2a, 0x2b, 0x97,
	0xa8, 0xda, 0xff, 0x0e, 0xa0, 0x3e, 0x55, 0x2b, 0xb1, 0xd5, 0x12, 0x63, 0x68, 0xf3, 0x19, 0xa3,
	0xa9, 0x78, 0x1b, 0x4e, 0x92, 0x74, 0x4c, 0x46, 0xa8, 0x82, 0xcf, 0xa1, 0x25, 0xa8, 0x98, 0x92,
	0x12, 0x05, 0xb8, 0x03, 0x28, 0xe1, 0x9c, 0x8e, 0x53, 0x72, 0xa4, 0xd5, 0x42, 0x7e, 0x21, 0x74,
	0x3c, 0x39, 0xca, 0x27, 0xc5, 0xe6, 0x34, 0x1b, 0x26, 0x82, 0x66, 0x69, 0x49, 0x6b, 0xfe, 0x8c,
	0x48, 0xc4, 0x13, 0x2f, 0x59, 0x58, 0x9c, 0x61, 0x64, 0xc6, 0x68, 0xc6, 0xa8, 0xa0, 0x9c, 0x8c,
	0x50, 0xf4, 0x88, 0x5f, 0xd1, 0xff, 0x5f, 0x78, 0x8f, 0xfc, 0x73, 0xf7, 0x13, 0x00, 0x00, 0xff,
	0xff, 0xb8, 0x34, 0xfd, 0xca, 0xa4, 0x01, 0x00, 0x00,
}
