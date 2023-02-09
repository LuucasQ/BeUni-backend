import { FastifyRequest, FastifyReply } from 'fastify'
import { ListProductService } from '../services/ListProductService'

export default class ListProductsController {
  async listAll(request: FastifyRequest, response: FastifyReply){
    const products = new ListProductService().getAll()

    return products
  }

  async listByName(request: FastifyRequest, response: FastifyReply){
    const { name } = request.params as { name: string }
    
    const products = new ListProductService().findByName(name)

    return products
  }
}