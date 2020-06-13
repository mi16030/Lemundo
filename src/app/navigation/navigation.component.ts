import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  myModel: string;
  text: string;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  dalje(): void {
    let navigationExtras = {
      text: this.text,
    };
    this.router.navigate(["/auctions"], { queryParams: { text: this.text } });
  }
}
