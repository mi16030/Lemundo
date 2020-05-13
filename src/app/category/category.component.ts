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

  constructor(
    private auctionService: AuctionService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    /*console.log(this.route);
    let putanja = this.route.url;

    this.auctionService.getAuctions(this.rout).subscribe(
      (auctions) => (this.auctions = auctions),
      (error) => console.log(error)
    );
    */
    this.paramMapSub = this.route.paramMap.subscribe((params) => {
      //const pId: number = Number(params.get("id"));productI
      const kategorija = params.get("category");

      this.auctionService.getAuctions(kategorija).subscribe(
        (auctions) => (this.auctions = auctions),
        (error) => console.log(error)
      );
    });
  }
  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }
}
