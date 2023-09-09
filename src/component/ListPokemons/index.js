import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { PokemonCard } from "../PokemonCard";
import { Loading } from "../Loading";
import { setPokemonSeleted } from "../../actions";



const ListPokemons = ({ pokemons, hidden, checkFav }) => {
    const { navigate } = useNavigation();
    const seletedPokemos = useSelector(state => state.pokemonSelect);
    const favorite = useSelector(state => state.pokemonsFavorites);
    const dispatch = useDispatch();

    console.log(favorite, 'QUE SOYYY');
    
    const viewPage = () => {
        navigate('Favorites');
    }
    
    const handleDetails = (idPoke) => {
        const pokemonDetails = pokemons.find(pokemon => pokemon.id === idPoke);
        dispatch(setPokemonSeleted(pokemonDetails));
        navigate('Details');
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Card the pokemons</Text>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.row} >
                    {(pokemons.length === 0)? <Loading /> : pokemons.map((pokemon, index) => (
                        <View 
                            style={styles.column}
                            key={index}
                        >
                            <PokemonCard 
                                onPress={() => handleDetails(pokemon.id)}
                                name={pokemon.name}
                                image={pokemon.sprites.front_default}
                                id={pokemon.id}
                                checkFav={checkFav} 
                            />
                        </View>
                    )) }
                </View>
            </ScrollView>
            {hidden? <TouchableOpacity style={styles.button} onPress={() => viewPage()}>
                        <Text style={styles.buttonText}>List Favorites</Text>
            </TouchableOpacity> : null}
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#3bb0aa',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },  
    content: {
        flexGrow: 1,
    },
    row: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    column: {
        width: '50%',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        width: 160,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        borderRadius: 16,
        backgroundColor: '#f6cb60',
    },
    buttonText: {
        fontSize: 16,
    }
})

export { ListPokemons }