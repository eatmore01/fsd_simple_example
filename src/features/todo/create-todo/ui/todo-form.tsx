'use client'

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Loader,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Input,
  Textarea,
} from '@shared/ui'

import { TodoPriority } from '@shared/constant'
import { SubmitHandler } from 'react-hook-form'
import { Flag } from 'lucide-react'

import { useModalStore, useUserStore } from '@shared/modal'

import { createTodoHandler, useCreateTodo } from '../api'
import { useTodoFormModel } from '../model'

export interface TaskForm {
  title: string
  description: string
}

export const CreateTodoForm = ({ todosSection }: { todosSection: string }) => {
  const user = useUserStore((state) => state.user)

  const { addTodo, loading, error } = useCreateTodo(user?.email || '')
  const { setPriority, priority, isTodoViewAll, setIsTodoViewAll, handleSubmit, register, reset } = useTodoFormModel()
  const { isOpen, onClose, type } = useModalStore()

  const modalIsOpen = isOpen && type == 'createTodo'

  const onSubmit: SubmitHandler<TaskForm> = (data) => {
    if (user?.email) {
      createTodoHandler(addTodo, data, user.email, priority, isTodoViewAll, todosSection)
      reset()
      onClose()
    }
  }

  if (loading) return <Loader />
  if (error) return <div>{error.message}</div>
  return (
    <Box className="w-1/2 flex justify-center">
      <Dialog open={modalIsOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">Create Post</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full ">
              <Box className="mb-3">
                <Input placeholder="task title" {...register('title')} />
              </Box>

              <Box className="mb-3">
                <Textarea placeholder="task description" {...register('description')} />
              </Box>

              <Box className="flex justify-between items-center">
                <Select onValueChange={(v) => setPriority(v)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Priority</SelectLabel>
                      {[...Object.values(TodoPriority)].map((pr: any, index) => (
                        <SelectItem key={index} value={pr}>
                          <Box className="flex justify-between p-1 bg-transparent">
                            <Flag size={20} className="mr-2" />
                            <span>{pr}</span>
                          </Box>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Box>
                  <Select
                    onValueChange={(v) => {
                      if (v === 'visible') {
                        setIsTodoViewAll(true)
                      } else {
                        setIsTodoViewAll(false)
                      }
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Post have in all?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Visible mode</SelectLabel>
                        <SelectItem value="visible">
                          <span>Visible</span>
                        </SelectItem>
                        <SelectItem value="hidden">
                          <span>Hidden</span>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Box>
                <Box>
                  <Button type="submit" variant="ghost">
                    Create Todo
                  </Button>
                </Box>
              </Box>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Box>
  )
}
