'use server'

import { signIn, signOut } from '@src/auth'

export async function DoLogin() {
  await signIn('github', { redirectTo: '/home/all' })
}

export async function DoLogout() {
  await signOut({ redirectTo: '/' })
}
