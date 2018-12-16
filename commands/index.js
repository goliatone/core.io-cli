'use strict';

const Shuttle = require('core.io-cli-local-env/commands');
const Generator = require('simple-project-generator/commands');
const Schema = require('waterline-to-json-schema/commands');
const Scaffold = require('core.io-view-generator/commands');

const Run = require('./run');
const Repl = require('./repl');
const Install = require('./install');

/**
 * Attach commands to given application context,
 * if a `namespace` is given then commands will
 * be added as sub-commands.
 */
module.exports.attach = function $attach(app, namespace = false) {
    const context = {
        namespace,
        prog: app.prog
    };

    Install.attach(context);

    Run.attach(context);

    Repl.attach(context);

    /**
     * We should pull this list dynamically
     * from our metadata file.
     */
    Shuttle.attach(app, 'shuttle');
    Generator.attach(app, 'generator');
    Schema.attach(app, 'schema');
    Scaffold.attach(app, 'scaffold');


};