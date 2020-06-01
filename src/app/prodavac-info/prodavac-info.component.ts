import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-prodavac-info",
  templateUrl: "./prodavac-info.component.html",
  styleUrls: ["./prodavac-info.component.css"],
})
export class ProdavacInfoComponent implements OnInit {
  @Input() prodavac: String;
  constructor() {}

  ngOnInit() {}
}
