'use strict';

const Shuttle = require('core.io-cli-local-env/commands');
const Generator = require('simple-project-generator/commands');
const Schema = require('waterline-to-json-schema/commands');
const Scaffold = require('core.io-view-generator/commands');

const Repl = require('./repl');
const Run = require('./run');

/**
 * Attach commands to given application context,
 * if a `namespace` is given then commands will 
 * be added as sub-commands.
 */
module.exports.attach = function $attach(app, namespace=false) {
    
    const context = {
        namespace,
        prog: app.prog
    };
    
    Shuttle.attach(app, 'shuttle');
    Generator.attach(app, 'generator');
    Schema.attach(app, 'schema');
    Scaffold.attach(app, 'scaffold');

    Run.attach(context);
    Repl.attach(context);
};
