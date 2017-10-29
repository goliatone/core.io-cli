'use strict';
const BaseCommand = require('waterline-to-json-schema/commands/base');
const ChildProcess = require('waterline-to-json-schema/node_modules/child-process-promise');

class ReplCommand extends BaseCommand {

    execute(args){
        const opts = makeArgsFromOptions(args.options, {
            'host': '--host',
            'port': '--port'
        });

        return ChildProcess.spawn('poke-repl', opts, {
            stdio: 'inherit'
        });
    }

    static describe(prog, cmd){

        cmd.option('--port, -p <port>', 
            'Port to connect', 
            prog.INTEGER, 
            ReplCommand.DEFAULTS.options.port
        );

        cmd.option('--host, -H <host>', 
            'Host to connect', 
            prog.STRING, 
            ReplCommand.DEFAULTS.options.host
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

ReplCommand.DEFAULTS = {
    options: {
        port: 8989,
        host: 'localhost'
    }
};

ReplCommand.COMMAND_NAME = 'repl';
ReplCommand.DESCRIPTION = 'Open REPL window';

module.exports = ReplCommand;