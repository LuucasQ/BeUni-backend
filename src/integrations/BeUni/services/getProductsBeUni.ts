import { AxiosResponse } from "axios"
import { ProductsResponse } from "../responses/ProductsResponse"
import { apiBeUni } from "./apiBeUni"

export const GetProductsBeUni = async () => {
  // Poderia passar a filtragem como parametro na url após o "q=""
  // Mas para acrescentar a lógica de filtragem, referi dar continuidade na filtragem pelo Service.
  const { data }: AxiosResponse<ProductsResponse> = await apiBeUni.get('products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50')

  return {
    products: data.products,
    total: data.total 
  }
}