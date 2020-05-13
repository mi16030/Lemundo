import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductModel[] = [];

  constructor() { }

  public addToCart(product: ProductModel): void {
    this.items.push(product);
  }

  public getItems(): ProductModel[] {
    return this.items;
  }

  public clearCart(): ProductModel[] {
    this.items = [];
    return this.items;
  }
}
