import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuregistryComponent } from './menuregistry/menuregistry.component';
import { MyfoodComponent } from './myfood/myfood.component';
import { FoodlistComponent } from './menuregistry/foodlist/foodlist.component';
import { FooddetailComponent } from './menuregistry/fooddetail/fooddetail.component';
import { FooditemComponent } from './menuregistry/foodlist/fooditem/fooditem.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { IngredienteditComponent } from './orderlist/ingredientedit/ingredientedit.component';

import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { FoodeditComponent } from './menuregistry/foodedit/foodedit.component';
import { MenuStartComponent } from './menuregistry/menu-start/menu-start.component';
import { MenuService } from './menuregistry/menu.service';
import { myorderService } from './orderlist/myorder.service';
import {HttpModule} from '@angular/http'
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuregistryComponent,
    MyfoodComponent,
    FoodlistComponent,
    FooddetailComponent,
    FooditemComponent,
    OrderlistComponent,
    IngredienteditComponent,
    DropdownDirective,
    FoodeditComponent,
    MenuStartComponent,
    SignupComponent,
    SigninComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [myorderService,MenuService,DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
