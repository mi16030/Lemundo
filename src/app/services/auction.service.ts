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
}
