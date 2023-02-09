type ImageProps = {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  type: string
  thumbnails: {
    small: {
      url: string
      width: number
      height: number
    }
    large: {
      url: string
      width: number
      height: number
    }
    full: {
      url: string
      width: number
      height: number
    }
  }
}

export type Product = {
  id: string;
  name: string;
  categories: Array<string>;
  slug: number;
  description: string;
  brand: string;
  image: Array<ImageProps>;
  hasFreeShipping: boolean;
  rating: number;
  recordId: string;
  minimumQuantity: number;
  total_stock: number;
  kitManagerVariations: string;
  price: number;
}

export type ProductsResponse = {
	products: Product[]
	total: number
}
