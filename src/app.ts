import fastify from 'fastify'

import { appRoutes } from '@/http/routes'

export const app = fastify()

// Debug
app.get('/hello', () => {
  return 'Hello world!'
})

app.register(appRoutes)
