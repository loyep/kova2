export interface ConfigState {
  name: string
  description: string
  year: string
  url: string
}

export type AuthState =
  | false
  | {
      avatar: string
      bio: string
      cover: string
      displayName: string
      email: string
      id: string
      image: string
      loggedAt: Date | null | string
      meta: any
      name: string
      status: 'inactivated'
      url: string
    }

export interface RootState {
  config: ConfigState
  auth: AuthState
}
