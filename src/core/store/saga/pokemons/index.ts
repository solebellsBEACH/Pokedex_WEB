import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Creators as PokemonsActions, Types as PokemonTypes } from '../../ducks/pokemons';

function* getPokemons(params: { type: string, payload: { id: number } }) {
    const { id } = params.payload
    
      try {
        const response = yield call(api.get, `pokemon/${id}`);
        if (response.status === 200) {
          yield put(PokemonsActions.getPokemonsSuccess(response.data));
        } else {
          yield put(PokemonsActions.getPokemonsFail());
        }
      } catch (error) {
        yield put(PokemonsActions.getPokemonsFail());
      }
}


function* getPokemonsWatcher() {
    yield takeLatest(PokemonTypes.GET_POKEMONS_REQUEST, getPokemons);
}


export default function* rootSagas() {
    yield all([
        fork(getPokemonsWatcher),
    ]);
}
