'use strict';
const BaseCommand = require('base-cli-commands').BaseCommand;
const ChildProcess = require('base-cli-commands').ChildProcess;

class RunCommand extends BaseCommand {

    execute(args){
        const opts = makeArgsFromOptions(args.options, {
            'host': '--host',
            'port': '--port'
        });

console.log(args.options.command)
        return ChildProcess.spawn(args.options.command, [], {
            stdio: 'inherit'
        });
    }

    static describe(prog, cmd){

        cmd.argument('[application]', 
            'Application to run', 
            /.*/, 
            RunCommand.DEFAULTS.application
        );

        cmd.argument('[environment]', 
            'Environment to run the application', 
            /.*/, 
            RunCommand.DEFAULTS.environment
        );

        cmd.option('--command, -c <command>', 
            'Command to run', 
            prog.STRING, 
            RunCommand.DEFAULTS.options.command
        );
    }
}

function makeArgsFromOptions(options, keywords){
    let flag, val;
    let out = [];
    Object.keys(keywords).forEach((key)=>{
        if(!options[key]) return;
        val = options[key];
        flag = keywords[key];
        out.push(flag);
        out.push(val);
    });

    return out;
}

RunCommand.DEFAULTS = {
    environment: 'development',
    application: '.',
    options: {
        command: 'npm start'
    }
};

RunCommand.COMMAND_NAME = 'run';
RunCommand.DESCRIPTION = 'Run a core.io application';

module.exports = RunCommand;