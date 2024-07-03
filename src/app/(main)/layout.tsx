'use client'

import { ReactNode, useEffect } from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@shared/ui'

import { getSessionUser } from '@entities/session/user'
import { User } from '@entities/user'
import { Header } from '@widgets/header'
import { SideBar } from '@widgets/sidebar'
import { ApolloProvider } from '../_providers'
import { useUserStore } from '@shared/modal'

interface Props {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  const { user, addUser } = useUserStore()

  useEffect(() => {
    const fetchUser = async () => {
      const sessionUser = await getSessionUser()
      addUser(sessionUser as User)
    }

    fetchUser()
  }, [addUser])

  return (
    <ApolloProvider>
      <ResizablePanelGroup direction="horizontal" className="min-h-screen rounded-lg border w-full">
        <ResizablePanel defaultSize={15}>{user ? <SideBar user={user} /> : null}</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={7} className="flex justify-end">
              <Header className="pt-3 px-10" />
            </ResizablePanel>
            <ResizablePanel defaultSize={93}>{children}</ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </ApolloProvider>
  )
}

export default MainLayout
