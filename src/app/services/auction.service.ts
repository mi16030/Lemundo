import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Aukcija } from "../models/aukcija.model";
import { map } from "rxjs/operators";
import { first, take, filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export abstract class AuctionService {
  aukcije: Observable<Aukcija[]>;
  constructor(private http: HttpClient) {}

  getAuctions(): Observable<Aukcija[]> {
    this.aukcije = this.http.get<Aukcija[]>("assets/jsons/aukcije.json");
    return this.aukcije;
  }

  getAuctionsByCategory(category: string): Observable<Aukcija[]> {
    return this.http
      .get<Aukcija[]>("assets/jsons/aukcije.json")
      .pipe(
        map((aukcije) =>
          aukcije.filter((a) =>
            a.kategorija.toLowerCase().includes(category.toLowerCase())
          )
        )
      );
  }

  getAuctionsByCategoryAndId(
    category: string,
    id: number
  ): Observable<Aukcija> {
    return this.getAuctionsByCategory(category).pipe(
      map((aukcije) =>
        aukcije.find(
          (a) =>
            a.kategorija.toLowerCase().includes(category.toLowerCase()) &&
            a.id === id
        )
      )
    );
  }
  /*
  getAuctionsByCategoryAndId(
    category: string,
    id: number
  ): Observable<Aukcija[]> {
    return this.http
      .get<Aukcija[]>("assets/jsons/aukcije.json")
      .pipe(
        map((aukcije) =>
          aukcije.filter(
            (a) =>
              a.kategorija.toLowerCase().includes(category.toLowerCase()) &&
              a.id === id
          )
        )
      );
  }*/
  /*getAuctions(category: string): Observable<Aukcija[]> {
    switch (category) {
      case "obuca": {
        this.aukcije = this.http.get<Aukcija[]>("assets/jsons/obuca.json");
        return this.http.get<Aukcija[]>("assets/jsons/obuca.json");
        break;
      }
      case "tehnika":
        return this.http.get<Aukcija[]>("assets/jsons/tehnika.json");
        break;
    }
  }*/
  /*
  getAuction(category: string, Aid: number): Observable<Aukcija> {
    this.aukcije = this.getAuctions(category);

    switch (category) {
      case "obuca":
        return this.aukcije.map((aukcije) =>
          aukcije.filter((a) => a.id === Aid)
        );
        return this.http
          .get<Aukcija[]>("assets/jsons/obuca.json")
          .pipe(
            map((auctions) => auctions.filter((auction) => auction.id !== Aid))
          )[0];
        break;
        this.getAuctions(category).forEach((p) => {
          console.log(p);
          if (p[0].id === Aid) {
            return p;
          }
        });
        
        break;
      case "tehnika":
        return this.aukcije.pipe(first((aukcija: any) => aukcija.id === Aid));
        this.http
          .get<Aukcija[]>("assets/jsons/tehnika.json")
          .pipe(first((aukcija: any) => aukcija.id === Aid));
        break;
    }
  }
*/
}
