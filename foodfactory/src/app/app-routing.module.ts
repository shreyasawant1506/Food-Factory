import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuregistryComponent } from "./menuregistry/menuregistry.component";
import { MyfoodComponent } from "./myfood/myfood.component";
import { OrderlistComponent } from "./orderlist/orderlist.component";
import { MenuStartComponent } from "./menuregistry/menu-start/menu-start.component";
import { FooddetailComponent } from "./menuregistry/fooddetail/fooddetail.component";
import { FoodeditComponent } from "./menuregistry/foodedit/foodedit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { MenuService } from "./menuregistry/menu.service";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";


const appRoutes:Routes=[
    {path:'', redirectTo:'/signin',pathMatch:'full'},
    {path:'menuregistry',component:MenuregistryComponent,
     children:[
        {path:'',component:MenuStartComponent},
        {path:'new',component:FoodeditComponent,canActivate:[AuthGuard]},
        {path:':id',component:FooddetailComponent},
        {path:':id/edit',component:FoodeditComponent,canActivate:[AuthGuard]},
    ]},
    {path:'orderlist', component:OrderlistComponent},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent}
];
@NgModule({
    providers:[MenuService],
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}