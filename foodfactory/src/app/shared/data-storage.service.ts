import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MenuService } from "../menuregistry/menu.service";
import {Response} from '@angular/http'
import { Menu } from "../menuregistry/menu.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
constructor(private http:Http,
    private menuService:MenuService,private authService:AuthService){}

    storeMenu(){
        const token=this.authService.getToken();
      return this.http.put('https://food-factory-161af.firebaseio.com/menus.json?auth='+token,
        this.menuService.getMenu());
    }

    getMenu(){
const token=this.authService.getToken();

        this.http.get('https://food-factory-161af.firebaseio.com/menus.json?auth='+ token)
        .map(
            (response:Response)=>{
                const menus:Menu[]=response.json();
                for(let menu of menus){
                    if(!menus['ingredients']){
                        menus['ingredients']=[];
                    }
                }
                return menus;
            }
        )
        
        .subscribe(
            (menus:Menu[])=>{
                this.menuService.setMenu(menus);
            }
        );
    }
}


