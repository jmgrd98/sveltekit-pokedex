export async function load({ fetch, params }: any) {
    const id = params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch Pokemon with ID ${id}`);
        }
        
        const pokemon = await res.json();
        return {
            status: 200,
            props: { pokemon }
        };
    } catch (error) {
        return {
            status: 404,
            error: { message: `Pokemon with ID ${id} not found` }
        };
    }
}
