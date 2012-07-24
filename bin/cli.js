#!/usr/bin/env node

var cli = require('cli'),
    path = require('path'),
    local = require('yui-local');

cli.enable('help');

cli.parse({
    version: ['v', 'Show app version'],
    build: ['b', 'Path to yui build dir', 'path', path.join(process.cwd(), 'build')],
    port: ['p', 'The port number to assign: default 3000', 'number', 3000]
});

var showVersion = function() {
    var path = require('path');
    var meta = require(path.join('../package.json'));
    var v = meta.version;
    console.log('v' + v);
    return v;
};

cli.main(function() {
    var opts = this.options;
    if (opts.version) {
        return showVersion();
    }
    local.start(opts);
});

