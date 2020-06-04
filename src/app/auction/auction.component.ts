import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuctionService } from "../services/auction.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Aukcija } from "../models/aukcija.model";
import { Subscription, Observable, from, interval } from "rxjs";
import { CartService } from "../services/cart.service";
import { map, first, take } from "rxjs/operators";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-auction",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"],
  providers: [NgbCarouselConfig],
})
export class AuctionComponent implements OnInit, OnDestroy {
  public aukcija: Aukcija;
  private paramMapSub: Subscription = null;
  private countdown = 29;
  private aktuelna;
  private najveca;
  private nasa = false;
  private pobedio = false;
  private brojPonuda;

  constructor(
    private route: ActivatedRoute,
    private auctionService: AuctionService,
    private cartService: CartService,
    config: NgbCarouselConfig
  ) {
    this.paramMapSub = this.route.paramMap.subscribe((params) => {
      const id: number = Number(params.get("id"));
      const kategorija = String(params.get("category"));
      console.log(kategorija);
      console.log(id);

      config.interval = 10000; // images change in 2sec //

      config.wrap = true; // automatically redirect to first image //

      config.keyboard = false;

      config.pauseOnHover = false;

      this.auctionService.getAuctionsByCategoryAndId(kategorija, id).subscribe(
        (auction) => {
          this.aukcija = auction;
          this.aktuelna = auction.aktuelnaPonuda;
          this.najveca = auction.aktuelnaPonuda;
          this.brojPonuda = auction.brojPonuda;
          console.log(this.aukcija);
        },
        (error) => console.log(error)
      );
    });
  }

  dodajUListuZelja(): void {
    this.cartService.addToCart(this.aukcija);
  }

  ngOnInit() {
    this.newObservable4();
  }

  ngOnDestroy() {
    if (this.paramMapSub !== null) {
      this.paramMapSub.unsubscribe();
    }
  }

  ponudjeno(): void {
    let ponuda = parseInt(
      (<HTMLInputElement>document.getElementById("nasaPonuda")).value,
      10
    );
    if (ponuda > this.najveca) {
      console.log("moja", ponuda);
      if (!this.nasa) this.aktuelna = this.najveca + 10;
      this.najveca = ponuda;
      this.nasa = true;
      this.brojPonuda++;
    }
  }
  newObservable4() {
    /*const interval$ = interval(1000);

    interval$.subscribe(
      (value) => (this.interval = new Date()),
      (error) => console.error(error),
      () => console.log("complete")
    );*/

    const countdown$ = interval(1000);

    const countdownSubscription = countdown$.subscribe(
      (value) => {
        this.countdown--;
        //let prob = Math.min((60 - this.countdown) / 120, 0.3);
        let prob = 0.1;
        let gen = Math.random();
        if (gen < prob) {
          let nova = Math.floor(
            Math.random() * (this.aktuelna + 1000 - this.aktuelna + 1) +
              this.aktuelna
          );
          console.log("njihova", nova);
          if (nova > this.najveca) {
            this.aktuelna = this.najveca + 10;
            this.najveca = nova;
            this.nasa = false;
            this.brojPonuda++;
          }
        }
        if (this.countdown === 0) {
          document.getElementById("vreme").innerText = this.nasa
            ? "Pobedili ste"
            : "Izgubili ste";
          if (this.nasa) {
            this.pobedio = true;
          }

          countdownSubscription.unsubscribe();
        }
      },
      (error) => console.error(error),
      () => console.log("complete")
    );
    // setTimeout(() => countdownSubscription.unsubscribe(), this.countdown * 1000);
  }
}
