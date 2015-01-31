var Hapi = require('hapi');
var path = require('path');

var server = new Hapi.Server();
server.connection({ port: '3004' });

server.views({
  engines: {
    jade: require('jade')
  },
  path: path.join(__dirname, 'templates'),
  compileOptions: {
    pretty: true
  }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index', {
      message: 'Tap to choose:'
    });
  }
});


// POST endpoint to create our order
// server.route({
  // method: 'POST',
  // path: '/order',
  // handler: function(request, reply) {
    // request.payload is how you access your request body in Hapi
  //   var jsonData = request.payload;


  // We would have an "order" model in our database:
  //   Order.save(token, jsonData, function(err) {
  //     if (err) {
  //       reply(err);
  //     } else {
  //       reply(200);
  //     }
  //   });
  // }
// });


server.start();