// import { profile } from '@/api'
import { all, call } from 'redux-saga/effects'
// import { ActionTypes, updateAuth } from './actions'
// import { AuthState } from './types'

function* rootSaga() {
  yield all([call(checkAuth)])
}

function* checkAuth() {
  try {
  } catch (error) {}
}

export default rootSaga
