'use strict';

const fsu = require('base-cli-commands').FsUtils;

module.exports = function(options) {
    options.logger.info('run...');
    options.logger.info(options.paths.homedir('.core.io'));
    return fsu.mkdirp(options.paths.homedir('.core.io'));
};