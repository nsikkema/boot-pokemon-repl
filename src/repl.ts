import { createInterface } from 'readline';


export function startREPL() {
    const rl = createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " });

    rl.prompt();

    rl.on('line', (line: string) => {
        let words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt()
            return;
        }

        const commandName = words[0]
        console.log(`Your command was: ${commandName}`);
        rl.prompt()
    })

}

export function cleanInput(input: string): string[] {
    return input.toLowerCase().trim().split(" ").filter(Boolean);
}


