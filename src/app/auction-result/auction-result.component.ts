import { Component, OnInit, Input } from "@angular/core";
import { Aukcija } from "../models/aukcija.model";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-auction-result",
  templateUrl: "./auction-result.component.html",
  styleUrls: ["./auction-result.component.css"],
})
export class AuctionResultComponent implements OnInit {
  @Input() public auction: Aukcija;
  constructor(private cartService: CartService) {}

  ngOnInit() {}

  dodajUListuZelja(): void {
    this.cartService.addToCart(this.auction);
  }
}
