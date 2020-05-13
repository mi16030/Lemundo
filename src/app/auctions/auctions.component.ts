import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { AuctionService } from "../services/auction.service";
import { Aukcija } from "../models/aukcija.model";

@Component({
  selector: "app-auctions",
  templateUrl: "./auctions.component.html",
  styleUrls: ["./auctions.component.css"],
})
export class AuctionsComponent implements OnInit {
  auctions = [];
  constructor(
    private auctionService: AuctionService,
    private cartService: CartService
  ) {
    this.auctionService.getAuctions().subscribe(
      (auctions) => (this.auctions = auctions),
      (error) => console.log(error)
    );
  }

  ngOnInit() {}
}
