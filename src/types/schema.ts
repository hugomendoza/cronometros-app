import { z } from 'zod'

export const formSchema = z.object({
  title: z.string().min(1, { message: 'Ingresa el titulo' }),
  description: z.string().min(1, { message: 'Ingresa la descripción' }),
  colorSchema: z.string()
})

export type FormValues = z.infer<typeof formSchema>
