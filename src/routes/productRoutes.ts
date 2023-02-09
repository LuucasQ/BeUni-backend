import { FastifyInstance } from 'fastify'
import ListProductsController from '../controllers/ListProductsController'

export const productRoutes = (app: FastifyInstance) => {
  const ProductsController = new ListProductsController()
  
  app.get('/api/products', ProductsController.listAll)
  app.get(`/api/products/:name`, ProductsController.listByName)
}