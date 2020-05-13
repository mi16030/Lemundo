import { Component, OnInit, ViewChild } from "@angular/core";
import { NgImageSliderComponent } from "ng-image-slider";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  @ViewChild("nav", { static: false }) slider: NgImageSliderComponent;
  imageObject: Array<object> = null;

  constructor() {
    this.imageObject = [
      { image: "assets/images/1.jpg", thumbImage: "assets/images/1.jpg" },
      { image: "assets/images/2.jpg", thumbImage: "assets/images/2.jpg" },
      { image: "assets/images/3.jpg", thumbImage: "assets/images/3.jpg" },
      { image: "assets/images/4.jpg", thumbImage: "assets/images/4.jpg" },
      { image: "assets/images/5.jpg", thumbImage: "assets/images/5.jpg" },
      { image: "assets/images/6.jpg", thumbImage: "assets/images/6.jpg" },
    ];
  }
  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }

  ngOnInit() {}
}
