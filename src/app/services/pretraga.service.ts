import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PretragaService {
  private trazeno: String;
  constructor() {}

  public getPretraga(): String {
    return this.trazeno;
  }
  public setPretraga(trazim: String): void {
    this.trazeno = trazim;
  }
}
