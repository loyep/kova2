
import * as Redux from 'redux'

declare module 'redux' {
  interface Store {
    sagaTask?: any;
  }
}
