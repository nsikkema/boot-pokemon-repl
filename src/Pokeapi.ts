export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        if

        const response = await fetch(pageURL);
        if (!response.ok) {
            throw new Error('Forsooth, a scourge upon our fetch quest: ' + response.statusText);
        }
        const jsonData: ShallowLocations = await response.json();
        return jsonData;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        // implement this
        return {}
    }
}

export type ShallowLocations = {
    count: number
    next: string
    previous: any
    results: {
       name: string
       url: string
    }[]
};

export type Location = {
    // add properties here
};