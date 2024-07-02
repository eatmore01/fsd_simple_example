'use client'

import { Box, Button, Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/ui'
import { UserP } from './user'

export const UserPage = () => {
  const handleLogout = () => {
    console.log('Logout')
  }

  return (
    <Dialog open={true}>
      <DialogContent className="h-[700px] w-screen">
        <DialogHeader>
          <DialogTitle>
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
              Profile
            </h1>
          </DialogTitle>
        </DialogHeader>
        <Box className="flex flex-col h-full">
          <UserP />
        </Box>
      </DialogContent>
    </Dialog>
  )
}
