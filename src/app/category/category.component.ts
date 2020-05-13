import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuctionService } from "../services/auction.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Aukcija } from "../models/aukcija.model";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit, OnDestroy {
  auctions = [];
  kategorija: string;
  private paramMapSub: Subscription = null;
  private _opened: boolean = true;
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(
    private auctionService: AuctionService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.paramMapSub = this.route.paramMap.subscribe((params) => {
      //const pId: number = Number(params.get("id"));productI
      const kategorija = params.get("category");

      this.auctionService.getAuctionsByCategory(kategorija).subscribe(
        (auctions) => (this.auctions = auctions),
        (error) => console.log(error)
      );
    });
  }

  dodajUListuZelja(id: number): void {
    let a: Aukcija = this.auctions.find((x) => x.id === id);
    this.cartService.addToCart(a);
  }
  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }
}
