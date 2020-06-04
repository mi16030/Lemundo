import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./routes/app-routing.module";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProductInfoComponent } from "./product-info/product-info.component";
import { CartComponent } from "./cart/cart.component";
import { SumPipe } from "./pipes/sum.pipe";
import { MainPageComponent } from "./main-page/main-page.component";
import { SlideshowComponent } from "./slideshow/slideshow.component";
import { NgImageSliderModule } from "ng-image-slider";
import { AuctionsComponent } from "./auctions/auctions.component";
import { CategoryComponent } from "./category/category.component";
import { AuctionResultComponent } from "./auction-result/auction-result.component";
import { AuctionComponent } from "./auction/auction.component";
import { CategorySidebarComponent } from "./category-sidebar/category-sidebar.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { SidebarModule } from "ng-sidebar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProdavacInfoComponent } from './prodavac-info/prodavac-info.component';
import { KarakteristikeComponent } from './karakteristike/karakteristike.component';
import { UspehPodaciComponent } from './uspeh-podaci/uspeh-podaci.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavigationComponent,
    ProductInfoComponent,
    CartComponent,
    SumPipe,
    MainPageComponent,
    SlideshowComponent,
    AuctionsComponent,
    CategoryComponent,
    AuctionResultComponent,
    AuctionComponent,
    CategorySidebarComponent,
    ProdavacInfoComponent,
    KarakteristikeComponent,
    UspehPodaciComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    SidebarModule,
    NgbModule,
  ],
  providers: [HttpClientModule, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
