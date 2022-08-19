import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Creators as PokemonsScreenActions, Types as PokemonTypes } from '../../ducks/pokemonsScreen';

function* getPokemonsScreen(params: { type: string, payload: { id: number } }): any {
console.log(params.payload)
  const { id } = params.payload

  try {
    const response = yield call(api.get, `pokemon?_id=${id}`);

    if (response.status === 200) {
      yield put(PokemonsScreenActions.getPokemonsScreenSuccess(response.data));
    } else {
      yield put(PokemonsScreenActions.getPokemonsScreenFail());
    }
  } catch (error) {
    yield put(PokemonsScreenActions.getPokemonsScreenFail());
  }

}

function* getPokemonsScreenWatcher() {
  yield takeLatest(PokemonTypes.GET_POKEMONS_SCREEN_REQUEST, getPokemonsScreen);
}
export default function* rootSagas() {
  yield all([
    fork(getPokemonsScreenWatcher)
  ]);
}
