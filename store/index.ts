import { createStore, applyMiddleware, Middleware } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import { reducer, initialState } from './reducer'
import { RootState } from './types'
import { Reducer } from 'react'
import { AppContext } from 'next/app'
import { Actions } from './actions'
import { requestMiddleware } from '@/utils/fetch'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
export { initialState }

const isProduction = process.env.NODE_ENV === 'production'
const config = { debug: !isProduction }

const bindMiddleware = (middleware: Middleware<any, any, any>[] = []) => {
  if (!isProduction) {
    const logger = createLogger()
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeConfiguredStore = (reducer: Reducer<any, any>) => {
  return createStore(reducer, initialState, bindMiddleware([]))
}

export const makeStore: MakeStore<RootState> = (context: Context) => {
  const store = makeConfiguredStore(reducer)
  if (<AppContext>context) {
    const { req, res } = (<AppContext>context).ctx || {}
    if (req && res) requestMiddleware(req, res)
  }
  return store
}

export const wrapper = createWrapper<RootState, Actions>(makeStore, config)
