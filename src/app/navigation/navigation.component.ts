import { Component, OnInit } from "@angular/core";
import { PretragaService } from "../services/pretraga.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  /*private trazim: string = (document.getElementById(
    "pretraga"
  ) as HTMLInputElement).value;
  private myObj = { text: "${this.trazim}" };*/
  myModel: string;
  text: string = "hehedsdijj";
  constructor(
    private pretragaService: PretragaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  dalje(): void {
    let navigationExtras = {
      text: this.text,
    };
    this.router.navigate(["/auctions"], { queryParams: { text: this.text } });
  }
}
