#!/usr/bin/env node

var cli = require('cli'),
    local = require('yui-local');

cli.enable('status', 'help');

cli.parse({
    port: ['p', 'The port number to assign: default 3000', 'number', 3000]
});

cli.main(function() {
    var opts = this.options;
    local.start(opts);
});

