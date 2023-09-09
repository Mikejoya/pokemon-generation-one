import { color } from '@rneui/themed/dist/config';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const Details = () => {

    const pokemon = useSelector(state => state.pokemonSelect);

    const abilitys = pokemon.abilities.map(abili => abili.ability.name).join(', ');
    const types = pokemon.types.map(type => type.type.name).join(', ');

    console.log(types);

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{pokemon.name}</Text>
                <Image
                    style={styles.image} 
                    source={{uri: pokemon.sprites.other.home.front_default}}
                    />
                <Text style={styles.key}>Abilities: <Text style={styles.description}>{abilitys}</Text></Text>
                <Text style={styles.key}>Types: <Text style={styles.description}>{types}</Text></Text>
                <Text style={styles.key}>Height: <Text style={styles.description}>{pokemon.height}</Text></Text>
                <Text style={styles.key}>Weight: <Text style={styles.description}>{pokemon.weight}</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        margin: '0 auto',
        backgroundColor: '#353b41',
    },  
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        width: '50%',
        height: '50%',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    }, 
    key: {
        width: '60%',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 10,
        color: '#fff',
    },
    description: {
        fontSize: 16,
        fontWeight: 'normal',
    }

})

export { Details }