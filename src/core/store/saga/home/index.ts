import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Creators as HomeActions, Types as HomeTypes } from '../../ducks/home';

function* getHomePokemons(params: { type: string, payload: { offset: number, limit: number } }): any {
  const { limit, offset } = params.payload

  try {
    const response = yield call(api.get, `pokemon/?offset=${offset}&limit=${limit}`);
    if (response.status === 200) {
      yield put(HomeActions.HomePokemonsSuccess(response.data));
    } else {
      yield put(HomeActions.HomePokemonsFail());
    }
  } catch (error) {
    yield put(HomeActions.HomePokemonsFail());
  }
}


function* getHomePokemonsWatcher() {
  yield takeLatest(HomeTypes.HOME_POKEMONS_REQUEST, getHomePokemons);
}


export default function* rootSagas() {
  yield all([
    fork(getHomePokemonsWatcher),

  ]);
}
