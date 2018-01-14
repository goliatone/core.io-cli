'use strict';

const BaseCommand = require('base-cli-commands').BaseCommand;

class InstallCommand extends BaseCommand {
    execute(args) {
        console.log('args', args);
        const { plugin, options } = args;

        /**
         * We install self...
         */
        if (plugin === InstallCommand.DEFAULTS.plugin) {
            this.logger.info('=>Installing self...', typeof this.paths);
            return require('./install.core.io')({
                paths: this.paths,
                logger: this.logger
            });
        }

        return Promise.resolve();
    }

    static describe(prog, cmd) {
        cmd.argument(
            '[plugin]',
            'Plugin to install',
            /.*/,
            InstallCommand.DEFAULTS.plugin
        );
    }
}

InstallCommand.DEFAULTS = {
    plugin: 'core.io',
    options: {
        command: 'npm start',
    }
};

InstallCommand.COMMAND_NAME = 'install';
InstallCommand.DESCRIPTION = 'Install a core.io CLI plugin';

module.exports = InstallCommand;
