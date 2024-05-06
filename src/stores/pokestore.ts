import { writable } from "svelte/store";

export const pokemonList = writable([]);

const fetchPokemon = async (num: number = 151) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data: any, index: number) => {
        return {
            name: data.name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
            }.png`
        };
    });
    pokemonList.set(loadedPokemon);
};
fetchPokemon();