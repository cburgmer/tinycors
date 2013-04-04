#!/usr/bin/env node

var httpProxy = require('http-proxy'),
    argv = require('optimist').argv,
    port = argv.port || 80;

var help = [
    "usage: tinycors [options] target_host[:port]",
    "       route requests through to a target host adding CORS response headers",
    "",
    "Options:",
    "  --port   PORT        Port that the proxy server should run on",
    "  -h, --help           This"
].join('\n');

if (argv.h || argv.help || argv._.length !== 1) {
  return console.log(help);
}

function splitHostPort(hostPort) {
    var location = hostPort.split(':'),
        port = location.length === 1 ? 80 : parseInt(location[1], 10);

    return {
        host: location[0],
        port: port
    }
}

var target = splitHostPort(argv._[0]);

httpProxy.createServer({changeOrigin: true}, function (request, response, proxy) {
    proxy.proxyRequest(request, response, {
        host: target.host,
        port: target.port
    });
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
}).listen(port);

console.log("Listening on http://localhost:" + port);
