import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Home from './src/view/Home';
import { pokemonsReducer } from './src/reducers/pokemons';
import { logger } from './src/middlewares';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Favorites } from './src/view/Favorites';
import { Details } from './src/view/Details';


//para usar reduxdevtools usar este comando de la parte inferior en la variable del composedEnhandcers separando el applyMiddleware por una (,). este composedEnhancers debe ser llamado en la store.
//alvertencias las siguientes dos lineas son de uso exclusivo para browser.

//const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const composedEnhancers = compose(applyMiddleware(thunk));

const store = createStore(pokemonsReducer, composedEnhancers);
const stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='Favorites' component={Favorites} />
          <stack.Screen name='Details' component={Details} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3bb0aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

