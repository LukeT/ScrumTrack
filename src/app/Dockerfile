FROM golang:latest

RUN go get github.com/githubnemo/CompileDaemon
RUN go get github.com/golang/dep/cmd/dep

WORKDIR /go/src/app
COPY . .

RUN dep ensure

RUN ls /go/src/app
