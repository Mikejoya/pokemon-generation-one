import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setPokemonsFavorites } from '../../actions';


export default function CheckFavorite ({ id }) {
    const [checked, setState] = useState(false);
    const dispatch = useDispatch();

    const searchPokeFavorite = { id: id }
    const toggleCheckbox = () => {
      dispatch(setPokemonsFavorites(searchPokeFavorite))
      setState(!checked)
    };

    return (
      <View style={styles.container} >
        <CheckBox
          checked={checked}
          checkedIcon="heart"
          uncheckedIcon="heart-o"
          checkedColor="red"
          onPress={toggleCheckbox}
          containerStyle={styles.checkBoxContainer}
          iconRight
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkBoxContainer: {
      backgroundColor: 'transparent',
    }
  });

