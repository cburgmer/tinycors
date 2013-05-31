Tiny CORS proxy to allow JS in the browser to access a remote service.

You might also like 
    
  - [Make-CORS-y](https://github.com/jRiest/Make-CORS-y), or
  - [CORS-Proxy](https://github.com/gr2m/CORS-Proxy/).

Example
-------

    $ tinycors --port 8899 en.wikipedia.org:80

Now (using jQuery) try a

    $.get('http://localhost:8899/w/api.php?action=query&prop=categories&format=json&titles=London', function (result) {
        console.log(result);
    });

Install
-------
First install npm

    $ curl https://npmjs.org/install.sh | sh

Then tinycors

    $ npm install -g tinycors
