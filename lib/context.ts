import { IncomingMessage } from 'http'

type IContext = {
  req?: IncomingMessage | undefined
}

export const context: IContext = {
  req: undefined,
}

export default context
