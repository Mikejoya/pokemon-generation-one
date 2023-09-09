import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { ListPokemons } from "../../component/ListPokemons";


const Favorites = () => {
    const pokemons = useSelector(state => state.pokemons);
    const favorites = useSelector(state => state.pokemonsFavorites);
    const listFavorites = favorites.map(p => p.id);

    const pokemonsFavorites = pokemons.filter(favorite => listFavorites.includes(favorite.id))

    return(
        <View style={styles.container}>
            <ListPokemons pokemons={pokemonsFavorites} hidden={false} checkFav={false} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    }
})

export { Favorites };