package api

type Response struct {
	Status   int
	Body     string
	Error    string
	RawError error
}

func makeResponse() Response {
	return Response{
		200,
		"",
		"",
		nil,
	}
}
