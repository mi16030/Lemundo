import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnDestroy {

  public product: ProductModel;

  // Nije neophodno ukidati pretplatu nad paramMap,
  // posto ce Angular to automatski uraditi po unistenju komponente
  private paramMapSub: Subscription = null;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) {
    this.paramMapSub = this.route.paramMap.subscribe(params => {
      const pId: number = Number(params.get('productId'));

      this.productService.getProducts().forEach(p => {
        if (p.productId === pId) {
          this.product = p;
        }
      });
    });
  }

  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }

  public addToCart() {
    this.cartService.addToCart(this.product);
    window.alert('Your product has been added to the cart!');
  }

}
