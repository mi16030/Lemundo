import { Injectable } from "@angular/core";
import { Aukcija } from "../models/aukcija.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private items: Aukcija[] = [];

  constructor() {}

  public addToCart(aukcija: Aukcija): void {
    if (this.proveri(aukcija.id)) this.items.push(aukcija);
  }

  public getItems(): Aukcija[] {
    return this.items;
  }

  public clearCart(): Aukcija[] {
    this.items = [];
    return this.items;
  }
  public proveri(id: number): boolean {
    if (this.items.find((i) => i.id === id) === undefined) return true;

    return false;
  }
}
