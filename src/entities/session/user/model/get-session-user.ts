'use server'

import { auth } from '@/auth'

export const getSessionUser = async () => {
  const session = await auth()

  if (session) {
    return session.user
  } else {
    return null
  }
}
