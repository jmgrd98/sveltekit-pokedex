<script lang="ts">
    export let data: any;
    const { pokemon } = data.props;
    const type = pokemon.types[0].type.name;
</script>

{#if pokemon}
    <div class="flex flex-col items-center">
        <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
        <p>Type: <strong class="capitalize">{type}</strong> | Height: <strong>{pokemon.height} | Weight: <strong>{pokemon.weight}</strong></p>
        <img class="h-80 w-80" src={pokemon.sprites['front_default']} alt={pokemon.name} />
    </div>
{:else}
    <p>Loading...</p>
{/if}
