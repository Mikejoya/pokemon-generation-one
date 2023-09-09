import { View, Text, StyleSheet } from "react-native"

const Loading =() => {
    return(
        <View>
            <Text style={styles.container}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 60
    }
});

export { Loading };