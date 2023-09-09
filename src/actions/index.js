import { getPokemonsDetail } from "../api";
import { SET_POKEMONS, SET_POKEMONSELECT, SET_POKEMONSFAVORITES } from "./types";

export const setPokemonsAll = (payload) =>({
    type: SET_POKEMONS,
    payload,
});

export const setPokemonSeleted = (payload) => ({
    type: SET_POKEMONSELECT,
    payload,
});

export const setPokemonsFavorites = (payload) => ({
    type: SET_POKEMONSFAVORITES,
    payload,
});

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonsDetail(pokemon)));

    dispatch(setPokemonsAll(pokemonsDetailed));
}