import { Component, OnInit, Input } from "@angular/core";
import { Aukcija } from "../models/aukcija.model";

@Component({
  selector: "app-karakteristike",
  templateUrl: "./karakteristike.component.html",
  styleUrls: ["./karakteristike.component.css"],
})
export class KarakteristikeComponent implements OnInit {
  @Input() aukcija: Aukcija;
  constructor() {}

  ngOnInit() {}
}
