import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductInfoComponent } from "../product-info/product-info.component";
import { CartComponent } from "../cart/cart.component";
import { MainPageComponent } from "../main-page/main-page.component";
import { CategoryComponent } from "../category/category.component";
import { AuctionComponent } from "../auction/auction.component";

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "products", component: ProductListComponent },
  { path: "checkout", component: CartComponent },
  { path: "products/:productId", component: ProductInfoComponent },
  { path: "auctions/:category", component: CategoryComponent },
  { path: "auctions/:category/:id", component: AuctionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
