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
export class AuctionComponent implements OnDestroy {
  public auction: Aukcija;

  // Nije neophodno ukidati pretplatu nad paramMap,
  // posto ce Angular to automatski uraditi po unistenju komponente
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

      this.auctionService.getAuction(kategorija, id).subscribe(
        (auction) => {
          this.auction = auction;
        },
        (error) => console.log(error)
      );
      /*
      this.auctionService.getAuctions(kategorija).subscribe(
        (auctions) => {
          this.auction = auctions[0];
        },
        (error) => console.log(error)
      );*/

      /*this.auctionService.getAuction(kategorija, id).subscribe(
        (auction) => (this.auction = auction),
        (error) => console.log(error)
      );
      */
      //this.auctionService.getAuctions(kategorija).forEach(a =>
      // )
      console.log(this.auction);

      //this.auction = this.auctionService.getAuction(kategorija, id)
    });
  }

  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }
}
