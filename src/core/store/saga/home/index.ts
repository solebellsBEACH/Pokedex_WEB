import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { insertToken } from '../../../hooks';
import { api } from '../../../services/api';
import { Creators as HomeActions, Types as HomeTypes } from '../../ducks/home';

function* getHomePokemons(params: { type: string, payload: { offset: number, limit: number, pokemonType?: string } }): any {
  const { limit, offset } = params.payload

  try {
    const response = yield call(api.get, `pokemon?limit=20&page=1`);
    if (response.status === 200) {
      yield put(HomeActions.HomePokemonsSuccess(response.data));
    } else {
      yield put(HomeActions.HomePokemonsFail());
    }
  } catch (error) {
    yield put(HomeActions.HomePokemonsFail());
  }
}


function* getHomePokemonsForType(params: { type: string, payload: { page: number, limit: number, pokemonType: string } }): any {
  const { limit, page, pokemonType } = params.payload
  try {
    const response = yield call(api.get, `pokemon?type=${pokemonType.toLowerCase()}&limit=${limit}&page=${page}`);
    if (response.status === 200) {
      yield put(HomeActions.HomePokemonsForTypeSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.HomePokemonsForTypeFail());
    }
  } catch (error) {
    yield put(HomeActions.HomePokemonsForTypeFail());
  }
}

function* login(params: { type: string, payload: { email: string, password: string } }): any {
  const { email, password } = params.payload
  try {
    const response = yield call(api.post, `user/authenticate`, { email, password });
    if (response.status === 200) {
      yield put(HomeActions.loginSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.loginFail(response));
    }
  } catch (error) {
    yield put(HomeActions.loginFail({ success: false, message: '', }));
  }
}
function* createUser(params: { type: string, payload: { name: string, email: string, password: string } }): any {
  const { email, password , name} = params.payload
  try {
    const response = yield call(api.post, `user/create`, { name, email, password });
    if (response.status === 200) {
      yield put(HomeActions.createUserSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.createUserFail(response));
    }
  } catch (error) {
    yield put(HomeActions.createUserFail({ success: false, message: '', }));
  }
}

function* getUser(): any {
  try {
    const response = yield call(api.get, `user`);
    if (response.status === 200) {
      
      yield put(HomeActions.getUserSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getUserFail(response));
    }
  } catch (error) {
    yield put(HomeActions.getUserFail({ success: false, message: '', }));
  }
}

function* getUserCart(): any {
  try {
    const response = yield call(api.get, `user/cart`);
    console.log(response)
    if (response.status === 200) {
      yield put(HomeActions.getUserCartSuccess(
        response.data
      ));
    } else {
      yield put(HomeActions.getUserCartFail(response));
    }
  } catch (error) {
    yield put(HomeActions.getUserCartFail({ success: false, message: '', }));
  }
}

function* getUserCartWatcher() {
  yield takeLatest(HomeTypes.GET_USER_CART_REQUEST, getUserCart);
}
function* getHomePokemonsWatcher() {
  yield takeLatest(HomeTypes.HOME_POKEMONS_REQUEST, getHomePokemons);
}
function* getHomePokemonsForTypeWatcher() {
  yield takeLatest(HomeTypes.HOME_POKEMONS_FOR_TYPE_REQUEST, getHomePokemonsForType);
}
function* loginWatcher() {
  yield takeLatest(HomeTypes.LOGIN_REQUEST, login);
}
function* createUserWatcher() {
  yield takeLatest(HomeTypes.CREATE_USER_REQUEST, createUser);
}
function* getUserWatcher() {
  yield takeLatest(HomeTypes.GET_USER_REQUEST, getUser);
}

export default function* rootSagas() {
  yield all([
    fork(getUserCartWatcher),
    fork(getHomePokemonsWatcher),
    fork(loginWatcher),
    fork(getUserWatcher),
    fork(getHomePokemonsForTypeWatcher),
    fork(createUserWatcher),
  ]);
}
