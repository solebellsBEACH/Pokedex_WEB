import { all, AllEffect } from 'redux-saga/effects';

import homeSagas from './home';
import pokemonsSagas from './pokemons';

export default function* rootSaga(): Generator<AllEffect<any>, any, unknown> {
  return yield all([
    pokemonsSagas(),
    homeSagas(),
  ]);
}
