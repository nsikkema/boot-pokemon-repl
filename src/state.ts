import { createInterface, type Interface } from "readline";
import {getCommands} from "./commands.js";
import {PokeAPI} from "./Pokeapi";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    api: PokeAPI;
}

export function initState(): State {
    return {
        readline:  createInterface({ input: process.stdin, output: process.stdout, prompt: "Pokedex > " }),
        commands: getCommands(),
        api: new PokeAPI,
    }
}
