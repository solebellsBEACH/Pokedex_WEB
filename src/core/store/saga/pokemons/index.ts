import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { api } from '../../../services/api';
import { Creators as PokemonsActions, Types as PokemonTypes } from '../../ducks/pokemons';

function* getPokemons(params: { type: string, payload: { id: number} }): any {
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

function* getPokemonTypes(): any {
  try {
    const response = yield call(api.get, `pokemon/types`);
    if (response.status === 200) {
      yield put(PokemonsActions.getPokemonTypesSuccess(response.data));
    } else {
      yield put(PokemonsActions.getPokemonTypesFail());
    }
  } catch (error) {
    yield put(PokemonsActions.getPokemonTypesFail());
  }
}

function* addPokemonInCart(): any {
  try {
    const response = yield call(api.get, `user/cart`);
    if (response.status === 200) {
      yield put(PokemonsActions.addPokemonInCartSuccess());
    } else {
      yield put(PokemonsActions.addPokemonInCartFail());
    }
  } catch (error) {
    yield put(PokemonsActions.addPokemonInCartFail());
  }
}


function* getPokemonsWatcher() {
  yield takeLatest(PokemonTypes.GET_POKEMONS_REQUEST, getPokemons);
}
function* getPokemonTypesWatcher() {
  yield takeLatest(PokemonTypes.GET_POKEMON_TYPES_REQUEST, getPokemonTypes);
}
function* addPokemonInCartWatcher() {
  yield takeLatest(PokemonTypes.ADD_POKEMON_IN_CART_REQUEST, addPokemonInCart);
}


export default function* rootSagas() {
  yield all([
    fork(getPokemonsWatcher),
    fork(getPokemonTypesWatcher),
    fork(addPokemonInCartWatcher),
  ]);
}
