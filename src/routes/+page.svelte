<script>
    import { pokemonList } from "../stores/pokestore";
    console.log($pokemonList)
</script>
<svelte:head>
    <title>Pokedex - Home</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

{#each $pokemonList as pokemon}
    <h2>{pokemon.name}</h2>
    
{/each}