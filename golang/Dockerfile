FROM golang:1.18.3 AS builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY hello.go /usr/src/app/

RUN go build /usr/src/app/hello.go


FROM scratch

COPY --from=builder /usr/src/app/hello /hello

CMD ["/hello"]