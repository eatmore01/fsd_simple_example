'use client'

import { Box } from '@shared/ui'
import { firstToUp } from '../lib'

interface Props {
  todosPageTitle: string
}

export const TodosPagePreview = ({ todosPageTitle }: Props) => {
  const pageTitle = firstToUp(todosPageTitle)

  return (
    <Box>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mb-8">{pageTitle}</h1>
    </Box>
  )
}
