import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuctionService } from "../services/auction.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Aukcija } from "../models/aukcija.model";
import { Subscription } from "rxjs";
import { CartService } from "../services/cart.service";
import { map, first, take } from "rxjs/operators";

@Component({
  selector: "app-auction",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"],
})
export class AuctionComponent implements OnInit, OnDestroy {
  public aukcija: Aukcija;
  private paramMapSub: Subscription = null;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private cartService: CartService
  ) {
    this.paramMapSub = this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get("id"));
      const kategorija = String(params.get("category"));
      console.log(kategorija);
      console.log(id);

      this.auctionService.getAuctionsByCategoryAndId(kategorija, id).subscribe(
        (auction) => {
          this.aukcija = auction;
        },
        (error) => console.log(error)
      );
      console.log(this.aukcija);
    });
  }

  dodajUListuZelja(): void {
    this.cartService.addToCart(this.aukcija);
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }
}
