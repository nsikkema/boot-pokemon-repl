import {State} from "./state.js";


export function startREPL(state: State) {
    state.readline.prompt();

    state.readline.on('line', (line: string) => {
        let words = cleanInput(line);
        if (words.length === 0) {
            state.readline.prompt()
            return;
        }

        const commandName = words[0]

        const cmd = state.commands[commandName];
        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`,
            );
            state.readline.prompt();
            return;
        }

        try {
            cmd.callback(state);
        } catch (e) {
            console.log(e);
        }

        state.readline.prompt()
    })

}

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(Boolean);
}


