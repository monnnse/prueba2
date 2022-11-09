export interface Producto {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: String[];
}

export interface ProductoI extends Producto {
  id: number;
}

export interface ProductoParcial extends Partial<Producto>{

}

