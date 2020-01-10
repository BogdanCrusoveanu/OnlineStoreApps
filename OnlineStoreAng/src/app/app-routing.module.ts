import { ItemComponent } from "./item/item.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { Role } from "./models/role";
import { AuthGuard } from "./guards/auth.guard";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: "", component: AppComponent, canActivate: [AuthGuard] },

  {
    path: "admin",
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  {
    path: "login",
    component: LoginComponent
  },

  { path: "register", component: RegisterComponent },

  {
    path: "category/:productName",
    component: ProductComponent,
    outlet : 'first',
    children: [{ path: ":productId", component: ItemComponent, outlet: 'first' }]
  },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
