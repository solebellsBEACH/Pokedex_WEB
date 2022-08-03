import { combineReducers } from 'redux';

import home from './home'
import pokemon from './pokemons'
import pokemonScreen from './pokemonsScreen'

const rootReducer = combineReducers({
    pokemonScreen,
    pokemon,
    home
});

export default rootReducer;
