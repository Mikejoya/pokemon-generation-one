import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckFavorite  from "../FavoriteCheck";


const PokemonCard = ({ name, image, id, checkFav, onPress }) => {

    return(
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.text}>{name}</Text>
            <Image source={{uri: image}} style={styles.image} />
            {checkFav? <CheckFavorite id={id} /> : null}
        </TouchableOpacity>  
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        minWidth: 160,
        height: 200,
        marginVertical: 16,
        borderRadius: 16,
        borderColor: '#353b41',
        borderWidth: 1,
        backgroundColor: '#f5f5f5',
    },
    text: {
        marginTop: 16,
        color: '#353b41',
    },  
    image: {
        width: 96,
        height: 96,
    }
})

export { PokemonCard };