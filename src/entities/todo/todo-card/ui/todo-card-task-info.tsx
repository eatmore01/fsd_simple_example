import { Box } from '@/shared/ui'
import { CardDescription, CardTitle } from '@/shared/ui/card'

interface Props {
  title: string
  description: string
}

export const UI = ({ title, description }: Props) => {
  return (
    <Box className="flex flex-col items-start justify-start">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Box>
  )
}
