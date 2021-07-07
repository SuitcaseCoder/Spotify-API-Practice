  /* Load the HTTP library */
  var http = require("http");

  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);

  // to see if it runs: 
  // cd into the right directory
  // run `node server.js`
  // then open up this url: localhost:8888
  // you shoud see 'Hello World' printed on the document
  //  ctrl-c to quit server

  // Note: In the endpoint reference pages, see cURL syntax for the example requests. You do not need cURL to complete this tutorial, but you will probably find it a helpful tool when developing your application; it will help you formulate requests to Spotify web services and see the responses they return. Install the version with SSL support if you need it.

  