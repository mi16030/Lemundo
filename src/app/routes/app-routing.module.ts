import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CartComponent } from "../cart/cart.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { CategoryComponent } from "../category/category.component";
import { AuctionComponent } from "../auction/auction.component";
import { AuctionsComponent } from "../auctions/auctions.component";
import { UspehPodaciComponent } from "../uspeh-podaci/uspeh-podaci.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "wishlist", component: CartComponent },
  { path: "auctions", component: AuctionsComponent },
  { path: "auctions/:category", component: CategoryComponent },
  { path: "auctions/:category/:id", component: AuctionComponent },
  { path: "auctions/:category/:id/uspeh", component: UspehPodaciComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
