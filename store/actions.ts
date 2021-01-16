import { AuthState } from './types'
import { AnyAction } from 'redux'

interface Action_INIT_AUTH {
  type: ActionTypes.INIT_AUTH
  payload: AuthState | null | {}
}

export type Actions = Action_INIT_AUTH | AnyAction

export enum ActionTypes {
  INIT_CONFIG = 'INIT_CONFIG',
  CHECK_USER_STATUS = 'CHECK_USER_STATUS',
  INIT_AUTH = 'INIT_AUTH',
}

export function updateAuth(user: AuthState | null) {
  return {
    type: ActionTypes.INIT_AUTH,
    payload: user,
  }
}
