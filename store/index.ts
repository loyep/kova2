import { createStore, applyMiddleware, Middleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import { reducer, initialState } from './reducer'
import { RootState } from './types'
// import rootSaga from './saga'
import { Reducer } from 'react'
import { AppContext } from 'next/app'
import { Actions } from './actions'
import { requestMiddleware, _serverFetch } from '@/utils/fetch'
import rootSaga from './saga'

export { initialState }

const sagaMiddleware = createSagaMiddleware()

const config = {
  debug: true,
}

const bindMiddleware = (middleware: Middleware<any, any, any>[] = []) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { composeWithDevTools } = require('redux-devtools-extension')
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createLogger } = require('redux-logger')
    const logger = createLogger()
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeConfiguredStore = (reducer: Reducer<any, any>) =>
  createStore(reducer, initialState, bindMiddleware([sagaMiddleware]))

export const makeStore: MakeStore<RootState> = (context: Context) => {
  const store = makeConfiguredStore(reducer)
  if (<AppContext>context) {
    const { req, res } = (<AppContext>context).ctx || {}
    if (req && res) requestMiddleware(req, res)
  }
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper<RootState, Actions>(makeStore, config)
