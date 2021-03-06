// Code generated by protoc-gen-go. DO NOT EDIT.
// source: src/app/services/project/proto/project.proto

package ticket_svc_project

import (
	proto1 "app/common/proto"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
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

type Shortcode struct {
	Shortcode            string   `protobuf:"bytes,1,opt,name=shortcode,proto3" json:"shortcode"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Shortcode) Reset()         { *m = Shortcode{} }
func (m *Shortcode) String() string { return proto.CompactTextString(m) }
func (*Shortcode) ProtoMessage()    {}
func (*Shortcode) Descriptor() ([]byte, []int) {
	return fileDescriptor_6b61e0de3a3fe2a4, []int{0}
}

func (m *Shortcode) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Shortcode.Unmarshal(m, b)
}
func (m *Shortcode) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Shortcode.Marshal(b, m, deterministic)
}
func (m *Shortcode) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Shortcode.Merge(m, src)
}
func (m *Shortcode) XXX_Size() int {
	return xxx_messageInfo_Shortcode.Size(m)
}
func (m *Shortcode) XXX_DiscardUnknown() {
	xxx_messageInfo_Shortcode.DiscardUnknown(m)
}

var xxx_messageInfo_Shortcode proto.InternalMessageInfo

func (m *Shortcode) GetShortcode() string {
	if m != nil {
		return m.Shortcode
	}
	return ""
}

type Project struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name"`
	Shortcode            string   `protobuf:"bytes,2,opt,name=shortcode,proto3" json:"shortcode"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Project) Reset()         { *m = Project{} }
func (m *Project) String() string { return proto.CompactTextString(m) }
func (*Project) ProtoMessage()    {}
func (*Project) Descriptor() ([]byte, []int) {
	return fileDescriptor_6b61e0de3a3fe2a4, []int{1}
}

func (m *Project) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Project.Unmarshal(m, b)
}
func (m *Project) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Project.Marshal(b, m, deterministic)
}
func (m *Project) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Project.Merge(m, src)
}
func (m *Project) XXX_Size() int {
	return xxx_messageInfo_Project.Size(m)
}
func (m *Project) XXX_DiscardUnknown() {
	xxx_messageInfo_Project.DiscardUnknown(m)
}

var xxx_messageInfo_Project proto.InternalMessageInfo

func (m *Project) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Project) GetShortcode() string {
	if m != nil {
		return m.Shortcode
	}
	return ""
}

type ProjectResponse struct {
	Project              *Project      `protobuf:"bytes,1,opt,name=project,proto3" json:"project"`
	Error                *proto1.Error `protobuf:"bytes,2,opt,name=error,proto3" json:"error"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *ProjectResponse) Reset()         { *m = ProjectResponse{} }
func (m *ProjectResponse) String() string { return proto.CompactTextString(m) }
func (*ProjectResponse) ProtoMessage()    {}
func (*ProjectResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6b61e0de3a3fe2a4, []int{2}
}

func (m *ProjectResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectResponse.Unmarshal(m, b)
}
func (m *ProjectResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectResponse.Marshal(b, m, deterministic)
}
func (m *ProjectResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectResponse.Merge(m, src)
}
func (m *ProjectResponse) XXX_Size() int {
	return xxx_messageInfo_ProjectResponse.Size(m)
}
func (m *ProjectResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectResponse proto.InternalMessageInfo

func (m *ProjectResponse) GetProject() *Project {
	if m != nil {
		return m.Project
	}
	return nil
}

func (m *ProjectResponse) GetError() *proto1.Error {
	if m != nil {
		return m.Error
	}
	return nil
}

type ProjectsResponse struct {
	Project              []*Project    `protobuf:"bytes,1,rep,name=project,proto3" json:"project"`
	Error                *proto1.Error `protobuf:"bytes,2,opt,name=error,proto3" json:"error"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *ProjectsResponse) Reset()         { *m = ProjectsResponse{} }
func (m *ProjectsResponse) String() string { return proto.CompactTextString(m) }
func (*ProjectsResponse) ProtoMessage()    {}
func (*ProjectsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_6b61e0de3a3fe2a4, []int{3}
}

func (m *ProjectsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ProjectsResponse.Unmarshal(m, b)
}
func (m *ProjectsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ProjectsResponse.Marshal(b, m, deterministic)
}
func (m *ProjectsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ProjectsResponse.Merge(m, src)
}
func (m *ProjectsResponse) XXX_Size() int {
	return xxx_messageInfo_ProjectsResponse.Size(m)
}
func (m *ProjectsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ProjectsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ProjectsResponse proto.InternalMessageInfo

func (m *ProjectsResponse) GetProject() []*Project {
	if m != nil {
		return m.Project
	}
	return nil
}

func (m *ProjectsResponse) GetError() *proto1.Error {
	if m != nil {
		return m.Error
	}
	return nil
}

func init() {
	proto.RegisterType((*Shortcode)(nil), "ticket.svc.project.Shortcode")
	proto.RegisterType((*Project)(nil), "ticket.svc.project.Project")
	proto.RegisterType((*ProjectResponse)(nil), "ticket.svc.project.ProjectResponse")
	proto.RegisterType((*ProjectsResponse)(nil), "ticket.svc.project.ProjectsResponse")
}

func init() {
	proto.RegisterFile("src/app/services/project/proto/project.proto", fileDescriptor_6b61e0de3a3fe2a4)
}

var fileDescriptor_6b61e0de3a3fe2a4 = []byte{
	// 261 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0xd2, 0x29, 0x2e, 0x4a, 0xd6,
	0x4f, 0x2c, 0x28, 0xd0, 0x2f, 0x4e, 0x2d, 0x2a, 0xcb, 0x4c, 0x4e, 0x2d, 0xd6, 0x2f, 0x28, 0xca,
	0xcf, 0x4a, 0x4d, 0x2e, 0x01, 0xd1, 0x25, 0xf9, 0x30, 0x9e, 0x1e, 0x98, 0x27, 0x24, 0x54, 0x92,
	0x99, 0x9c, 0x9d, 0x5a, 0xa2, 0x57, 0x5c, 0x96, 0xac, 0x07, 0x95, 0x91, 0xe2, 0x49, 0xce, 0xcf,
	0xcd, 0xcd, 0xcf, 0x83, 0xa8, 0x50, 0xd2, 0xe4, 0xe2, 0x0c, 0xce, 0xc8, 0x2f, 0x2a, 0x49, 0xce,
	0x4f, 0x49, 0x15, 0x92, 0xe1, 0xe2, 0x2c, 0x86, 0x71, 0x24, 0x18, 0x15, 0x18, 0x35, 0x38, 0x83,
	0x10, 0x02, 0x4a, 0xd6, 0x5c, 0xec, 0x01, 0x10, 0x33, 0x84, 0x84, 0xb8, 0x58, 0xf2, 0x12, 0x73,
	0x61, 0x6a, 0xc0, 0x6c, 0x54, 0xcd, 0x4c, 0xe8, 0x9a, 0x4b, 0xb8, 0xf8, 0xa1, 0x9a, 0x83, 0x52,
	0x8b, 0x0b, 0xf2, 0xf3, 0x8a, 0x53, 0x85, 0x4c, 0xb9, 0xd8, 0xa1, 0x6e, 0x02, 0x9b, 0xc3, 0x6d,
	0x24, 0xad, 0x87, 0xe9, 0x5c, 0x3d, 0x98, 0x2e, 0x98, 0x5a, 0x21, 0x2d, 0x2e, 0xd6, 0xd4, 0xa2,
	0xa2, 0xfc, 0x22, 0xb0, 0x1d, 0xdc, 0x46, 0x22, 0x30, 0x4d, 0x50, 0x6f, 0xb9, 0x82, 0xe4, 0x82,
	0x20, 0x4a, 0x94, 0x4a, 0xb9, 0x04, 0xa0, 0xfa, 0x8b, 0xb1, 0x5b, 0xcb, 0x4c, 0x0b, 0x6b, 0x8d,
	0x66, 0x33, 0x72, 0x71, 0xc0, 0xec, 0x15, 0xf2, 0xe4, 0x62, 0x76, 0x4f, 0x2d, 0x11, 0x92, 0xc5,
	0x66, 0x0b, 0x3c, 0xe8, 0xa5, 0x94, 0xf1, 0x39, 0x02, 0xe6, 0x74, 0x17, 0x2e, 0x36, 0xf7, 0xd4,
	0x12, 0xc7, 0x9c, 0x1c, 0x21, 0x0c, 0xeb, 0x73, 0x0b, 0x4a, 0x2a, 0xa5, 0x54, 0xf0, 0x18, 0x02,
	0x0f, 0x80, 0x24, 0x36, 0x70, 0xcc, 0x1b, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0xac, 0xdf, 0xb5,
	0xec, 0x4b, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ProjectsClient is the client API for Projects service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ProjectsClient interface {
	Get(ctx context.Context, in *Shortcode, opts ...grpc.CallOption) (*ProjectResponse, error)
	GetAll(ctx context.Context, in *proto1.Empty, opts ...grpc.CallOption) (*ProjectsResponse, error)
}

type projectsClient struct {
	cc *grpc.ClientConn
}

func NewProjectsClient(cc *grpc.ClientConn) ProjectsClient {
	return &projectsClient{cc}
}

func (c *projectsClient) Get(ctx context.Context, in *Shortcode, opts ...grpc.CallOption) (*ProjectResponse, error) {
	out := new(ProjectResponse)
	err := c.cc.Invoke(ctx, "/ticket.svc.project.Projects/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *projectsClient) GetAll(ctx context.Context, in *proto1.Empty, opts ...grpc.CallOption) (*ProjectsResponse, error) {
	out := new(ProjectsResponse)
	err := c.cc.Invoke(ctx, "/ticket.svc.project.Projects/GetAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ProjectsServer is the server API for Projects service.
type ProjectsServer interface {
	Get(context.Context, *Shortcode) (*ProjectResponse, error)
	GetAll(context.Context, *proto1.Empty) (*ProjectsResponse, error)
}

func RegisterProjectsServer(s *grpc.Server, srv ProjectsServer) {
	s.RegisterService(&_Projects_serviceDesc, srv)
}

func _Projects_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Shortcode)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectsServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.svc.project.Projects/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectsServer).Get(ctx, req.(*Shortcode))
	}
	return interceptor(ctx, in, info, handler)
}

func _Projects_GetAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(proto1.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ProjectsServer).GetAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ticket.svc.project.Projects/GetAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ProjectsServer).GetAll(ctx, req.(*proto1.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

var _Projects_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ticket.svc.project.Projects",
	HandlerType: (*ProjectsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Get",
			Handler:    _Projects_Get_Handler,
		},
		{
			MethodName: "GetAll",
			Handler:    _Projects_GetAll_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "src/app/services/project/proto/project.proto",
}
