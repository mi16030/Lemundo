import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel(101, 'Phone XL', 799, 'A large phone with one of the best screens'),
      new ProductModel(102, 'Phone Standard', 699, 'A great phone with one of the best cameras'),
      new ProductModel(103, 'Phone Mini', 299, ''),
    ];
  }

  public getProducts(): ProductModel[] {
    return this.products;
  }
}
