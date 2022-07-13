import { all, fork, put, call, takeLatest } from 'redux-saga/effects';
import { Creators as HomeActions, Types as HomeTypes } from '../../ducks/home';

function* getHomeBall() {
//   try {
//     const response = yield call(api.get, 'ballinballout?Include=Type,Status');
//     if (response.status === 200) {
//       yield put(HomeActions.homeBallSuccess(response.data.data));
//     } else {
//       yield put(HomeActions.homeBallFail());
//     }
//   } catch (error) {
//     yield put(HomeActions.homeBallFail());
//   }
}


function* getHomeBallWatcher() {
  yield takeLatest(HomeTypes.HOME_BALL_REQUEST, getHomeBall);
}


export default function* rootSagas() {
  yield all([
    fork(getHomeBallWatcher),
  ]);
}
