import { curUser } from '@/api'
import { initialState } from '@/store'
import { AuthState } from '@/store/types'
import type { IncomingMessage, OutgoingMessage } from 'http'
import type { NextApiRequest, NextApiResponse } from 'next'

export const checkAuth = async (
  req: NextApiRequest | IncomingMessage,
  res?: NextApiResponse | OutgoingMessage,
) => {
  if (!initialState.auth) {
    let auth: AuthState = false
    try {
      const { data: user }: { data: AuthState } = await curUser(req)
      auth = user && user.id ? user : false
    } catch (error) {
      auth = false
    }
    initialState.auth = auth
  }
  return initialState.auth
}
