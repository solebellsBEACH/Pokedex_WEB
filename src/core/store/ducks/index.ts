import { combineReducers } from 'redux';

import home from './home'
import pokemon from './pokemons'

const rootReducer = combineReducers({
    pokemon,
    home
});

export default rootReducer;
