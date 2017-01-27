const repl = require('repl');
const grpc = require('grpc')

const PROTO_PATH = __dirname + '/../go/protos/example.proto'
const hello_proto = grpc.load(PROTO_PATH).example

function call(user) {
  const client = new hello_proto.Greeter('localhost:50555', grpc.credentials.createInsecure())
  client.sayHello({name: user.replace('\n','')}, function(err, res){
    console.log(res)
  })
}

function eval(name, ctx, filename, callback) {
  callback(null, call(name));
}

repl.start({prompt: 'name> ', eval: eval});
