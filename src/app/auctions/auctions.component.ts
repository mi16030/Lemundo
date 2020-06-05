import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { AuctionService } from "../services/auction.service";
import { Aukcija } from "../models/aukcija.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-auctions",
  templateUrl: "./auctions.component.html",
  styleUrls: ["./auctions.component.css"],
})
export class AuctionsComponent implements OnInit {
  auctions: Aukcija[] = [];
  pretraga: string;
  ind: boolean;
  constructor(
    private auctionService: AuctionService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      this.pretraga = params.text;
      if (this.pretraga === undefined || this.pretraga === "") this.ind = true;
      else this.ind = false;
      console.log(this.pretraga);
    });
    this.auctionService.getAuctions().subscribe(
      (auctions) => (this.auctions = auctions),
      (error) => console.log(error)
    );
  }

  ngOnInit() {}
  dodajUListuZelja(id: number): void {
    let a: Aukcija = this.auctions.find((x) => x.id === id);
    this.cartService.addToCart(a);
  }
}
