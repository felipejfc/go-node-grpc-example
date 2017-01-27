go-node-grpc-example
====================

Example of a GRPC server written in go communicating with a nodejs client.

## Dependencies
* [Go > 1.5](https://github.com/golang/go)
* [dep](https://github.com/golang/dep)
* [NodeJs > 0.12](https://github.com/nodejs/node)

## Running

##### Install go dependencies
```
dep ensure -update
```

##### Run the server
```
go run main.go
```

##### Install nodejs dependencies

```
npm install
```

##### Run the client

```
node index.js
