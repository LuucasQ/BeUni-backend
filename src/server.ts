import Fastify from 'fastify'
import cors from '@fastify/cors'
import { productRoutes } from './routes/productRoutes'

// Instância do fastify
const server = Fastify({ logger: true })

//Configuração do cors
server.register(cors, { origin: true })

//Rotas de produto
productRoutes(server)

// Definindo orta para conexão com a API
server.listen({ port: 3333 }, async () => {
    return console.log('Server is running!')
})