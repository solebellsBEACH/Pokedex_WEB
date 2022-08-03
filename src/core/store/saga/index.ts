import { all, AllEffect } from 'redux-saga/effects';

import homeSagas from './home';
import pokemonsSagas from './pokemons';
import pokemonsScreenSagas from './pokemonsScreen';

export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([
    pokemonsScreenSagas(),
    pokemonsSagas(),
    homeSagas(),
  ]);
}
