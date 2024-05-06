<script lang="ts">
    import { pokemonList } from "../stores/pokestore";
    import PokemonCard from "../components/pokemonCard.svelte";

    let searchTerm = "";
    let filteredPokemon: any[] = [];

    $: {
        if (searchTerm) {
            filteredPokemon = $pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = [...$pokemonList];
        }
    }
</script>
<svelte:head>
    <title>Pokedex - Home</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase font-semibold">SvelteKit Pokedex</h1>

<input 
    class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
    bind:value={searchTerm}
    type="text"
    placeholder="Search for a Pokemon"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as pokemon}
        <PokemonCard pokemon={pokemon}/>
    {/each}
</div>