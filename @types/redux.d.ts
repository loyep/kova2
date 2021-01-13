import * as Redux from 'redux'
import { Task } from 'redux-saga'

declare module 'redux' {
  interface Store {
    sagaTask?: Task
  }
}
