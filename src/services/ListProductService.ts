import { ProductsResponse } from "../integrations/BeUni/responses/ProductsResponse";
import { GetProductsBeUni } from "../integrations/BeUni/services/getProductsBeUni";

// Classe responsável pelos métodos
export class ListProductService {
  constructor(){}
  
  // - Método de listagem completa dos produtos
  async getAll(): Promise<ProductsResponse> {
    const response = await GetProductsBeUni()
    
    if(!response){
      throw new Error("Estoque vazio.")
    }
    
    return response
  }
  
  // - Método de listagem dos produtos com parâmetro "name"
  async findByName(name: string): Promise<ProductsResponse | undefined> {
    const response = await GetProductsBeUni()
    const productsFiltered = response.products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    
    if(!productsFiltered){
      throw new Error("Estoque vazio.")
    }

    return { products: productsFiltered, total: productsFiltered.length }
  }
}