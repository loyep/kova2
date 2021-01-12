import { AnyAction, Reducer } from 'redux'
import type { AuthState, ConfigState, RootState } from './types'
import { ActionTypes } from './actions'
import { HYDRATE } from 'next-redux-wrapper'
import { isBrowser } from '@/utils'

export const getAuthState = (): AuthState => {
  const isServer = typeof window === 'undefined'
  if (!isServer) {
    const tryParse = (localUser: string | Object | null | undefined) => {
      try {
        if (<string>localUser) {
          return (JSON.parse(<string>localUser) || {}) as AuthState
        } else if (<Object>localUser) {
          return localUser as AuthState
        }
      } catch (error) {}
      return {} as AuthState
    }
    const localUser = localStorage.getItem('local_user') || ''
    console.log(tryParse(localUser))
    return tryParse(localUser)
  }
  return {} as AuthState
}

export const initialState: RootState = {
  config: {} as ConfigState,
  auth: false,
}

const isClient = isBrowser()

// create your reducer
export const reducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload }
    case ActionTypes.INIT_CONFIG:
      return { ...state, config: { ...action.payload } }
    case ActionTypes.INIT_AUTH:
      if (isClient) {
        localStorage.setItem('local_user', JSON.stringify(action.payload))
      }
      return { ...state, auth: { ...action.payload } }
    default:
      return state
  }
}
