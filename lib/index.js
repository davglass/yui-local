
var combo = require('combohandler'),
    express = require('express'),
    app = express.createServer(),
    seed = require('./seed'),    
    stamp = 'yui3-local',
    path = require('path'),
    fs = require('fs'),
    p = path.join(process.cwd(), 'build');

if (!path.existsSync(p)) {
    throw("Can't find " + p + " directory, are you in the root of the YUI git repo?");
}

var start = function(opts) {

    app.get('/yui', combo.combine({rootPath: p }), function (req, res) {
        res.body = seed.filter(res.body, stamp);
        res.send(res.body, 200);
    });

    app.get('/seed', seed.stamp({rootPath: p }), function (req, res) {
        res.body = seed.filter(res.body, stamp);
        res.send(res.body, 200);
    });

    app.get('/build/'+'*', function(req, res) {
        var file = path.join(process.cwd(), 'build', req.params[0]);
        fs.readFile(file, function(err, data) {
            res.contentType(file);
            if (path.extname(file) === '.js') {
                data = data.toString();
                data = data.replace(/@VERSION@/g, stamp);
            }
            res.send(data);
        });
    });

    app.get('/', function(req, res) {
        res.redirect('/seed');
    });

    app.listen(opts.port);

    console.log('Serving combo from: http://127.0.0.1:' + opts.port);
    console.log('Include this in your test page:');
    console.log('<script src="http://127.0.0.1:' + opts.port + '/seed"></script>');
    
    return app;
}


module.exports = {
    start: start
};
