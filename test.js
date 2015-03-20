var AMQPClient  = require('node-amqp-1-0');

var server = 'amqp://guest:guest@localhost';
if (process.argv.length > 2) {
  server = process.argv[2];
}

var client = new AMQPClient();
client.connect(server, function(error) {
  if (!!error) {
    console.log(error);
    return;
  }

  console.log('connected');
});

