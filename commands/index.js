'use strict';

const Shuttle = require('core.io-cli-local-env/commands');
const Generator = require('simple-project-generator/commands');
const Schema = require('waterline-to-json-schema/commands');

module.exports.attach = function(prog) {
    Shuttle.attach(prog, 'shuttle');
    Generator.attach(prog, 'generator');
    Schema.attach(prog, 'schema');
};
