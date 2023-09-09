async function fetchApi() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

        const data = await response.json();

        return Promise.resolve(data.results);
    }
    catch (err) {
        return Promise.reject(err);
    }
}

export async function getPokemonsDetail(pokemon) {
    try{
        const resultsUrl = await fetch(pokemon.url);
        if (!resultsUrl.ok) {
            throw new Error('Failed to fetch Pokémon details');
          }
          const data = resultsUrl.json();
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export { fetchApi };