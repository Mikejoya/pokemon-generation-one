import { SET_POKEMONS, SET_POKEMONSELECT, SET_POKEMONSFAVORITES } from "../actions/types";

const initialState = {
    pokemons: [],
    pokemonSelect: {},
    pokemonsFavorites: [],
};

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {...state, pokemons: action.payload};
        case SET_POKEMONSFAVORITES:
            return {...state, pokemonsFavorites: [...state.pokemonsFavorites, action.payload]
            }
        case SET_POKEMONSELECT:
            return {...state, pokemonSelect: action.payload};
        default: 
            return state;    
    }
}
