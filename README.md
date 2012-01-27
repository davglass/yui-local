YUI Local Combo Handler
=======================

Simple dev time local YUI combo handler to test against.



Installation
------------

    npm install yui-local

Usage
-----

    cd yui3
    yui-local

Now include this in your page:

    <script src="http://127.0.0.1:5000/seed"></script>

That will load the YUI seed file and setup a config to use a local
combo handler served from the local `./build/` directory.

The seed also supports filters:

    <script src="http://127.0.0.1:5000/seed?filter=raw"></script>
    <script src="http://127.0.0.1:5000/seed?filter=debug"></script>

This will also set the default combo filter to the same thing.
