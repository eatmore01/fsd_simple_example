'use client'

import { Box, Button, Loader, Input } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { Textarea } from '@/shared/ui/textarea'
import { CompleteTodo } from '@features/todo/complete-todo'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select'
import { ArrowLeft, Flag, Pencil, Send } from 'lucide-react'
import { TodoPriority } from '@/shared/constant'
import { Separator } from '@/shared/ui/separator'
import { cn } from '@/shared/lib/utils'
import { useState } from 'react'
import { useEditTodoFormModel } from '../model/edit-todo-form-model'
import { SubmitHandler } from 'react-hook-form'
import { useUpdateTodo, useTodoById, updateTodo as Update } from '../api'

export interface EditForm {
  title: string
  description: string
}

export const Form = ({ todoId }: { todoId: string }) => {
  const { back } = useRouter()
  const { data, loading, error } = useTodoById(todoId)
  const [isEditable, setIsEditable] = useState(false)

  const { handleSubmit, isTodoViewAll, priority, register, reset, setIsTodoViewAll, setPriority, todo } =
    useEditTodoFormModel(data)

  const { UpdateError, UpdateLoading, updateTodo } = useUpdateTodo(todoId)

  const onSubmit: SubmitHandler<EditForm> = (data) => {
    Update(updateTodo, todoId, data, priority, isTodoViewAll)
    reset()
    setIsEditable(false)
  }

  if (loading || UpdateLoading) return <Loader />
  if (error || UpdateError) return <Box>error: {error?.message || UpdateError?.message}</Box>
  if (!todo) return <Loader />
  return (
    <form className="h-[600px] w-full flex flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
      <Box className="w-[400px] m-5">
        <Box className="flex items-center">
          <CompleteTodo isComplete={todo.isComplete} todoId={todoId} className={cn('', isEditable ? '' : 'hidden')} />
          <Box className="flex flex-col w-full ml-5">
            <Box className="flex items-center ">
              <h2 className=" flex w-full items-center mt-2 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
                Task:
                {isEditable ? (
                  <Input
                    placeholder={todo.title}
                    {...register('title', {
                      required: true,
                    })}
                    className="placeholder:text-foreground border-none"
                  />
                ) : (
                  <h2 className=" ml-2 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
                    {todo.title}
                  </h2>
                )}
              </h2>
            </Box>
            <Box className="flex items-center mb-2">
              <h2 className="flex w-full mt-2 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
                Description:
                {isEditable ? (
                  <Textarea
                    placeholder={todo.description}
                    {...register('description', {
                      required: true,
                    })}
                    className="placeholder:text-foreground border-none"
                  />
                ) : (
                  <h2 className=" ml-2 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
                    {todo.description}
                  </h2>
                )}
              </h2>
            </Box>
          </Box>
        </Box>
        <Box className={cn('flex flex-col  w-[400px] mx-5', isEditable ? 'hidden' : '')}>
          <h2 className="scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
            Priority: {priority}
          </h2>
          <h2 className="mt-3 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
            Visible: {isTodoViewAll === true ? 'Visible' : 'hidden'}
          </h2>
          <h2 className="mt-3 scroll-m-20 text-lg font-extralight tracking-tight transition-colors ">
            Completed: {todo.isComplete ? 'true' : 'false'}
          </h2>
        </Box>
        <Box className={cn('flex justify-end items-center', isEditable ? '' : 'hidden')}>
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
        </Box>
      </Box>
      <Box>
        {' '}
        <Separator className="mb-3" />
        <Box className="flex  justify-between">
          <Button onClick={() => back()} className="flex items-center">
            <ArrowLeft size={20} className="mr-2" /> <span>back</span>
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault()
              setIsEditable(!isEditable)
            }}
            className="flex-1 flex"
          >
            <Pencil size={20} className="mr-2" />
            <span>Edit</span>
          </Button>
          <Button onClick={() => {}} type="submit">
            <Send size={20} className="mr-2" />
            <span>Submit</span>
          </Button>
        </Box>
      </Box>
    </form>
  )
}
