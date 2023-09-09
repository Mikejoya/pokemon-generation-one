import { useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import { PokemonCard } from "../../component/PokemonCard";
import {fetchApi} from '../../api/index';
import { getPokemonsWithDetails } from '../../actions/index';
import { ListPokemons } from "../../component/ListPokemons";


const Home = () => {
    const pokemons = useSelector(state => state.pokemons);
    const pokemonSelect = useSelector(state => state.pokemonSelect);
    const dispatch = useDispatch();

    useEffect(()=> {
        const pokemonFetch = async () => {
            const pokemonRes = await fetchApi();
            dispatch(getPokemonsWithDetails(pokemonRes));
        }

        
        pokemonFetch();
    }, [])


    return(
        <ListPokemons pokemons={pokemons} hidden={true} checkFav={true}/>
    )
}

// const mapStateToProps = (state) => ({
//     pokemons: state.pokemons,
// });
  
// const mapDispatchToProps = (dispatch) => ({
//     setPokemons: (value) => dispatch(setPokemonsAll(value))
// });
  


// PokemonList.DefaultProps = {
//     pokemons: Array(10).fill('Card the pokemons'),
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
export default Home;