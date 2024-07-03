import { redirect } from 'next/navigation'

export async function HomePage() {
  redirect('/home/today')
  return <></>
}
