import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from '../menu.model';
import { MenuService } from '../menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
//import { relative } from 'path';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit,OnDestroy {

  
  menus: Menu[]=[];
subscription:Subscription;

  constructor(private menuService:MenuService,
  private router:Router,
private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.menuService.menuChanged
    .subscribe(
      (menus:Menu[])=>{
        this.menus=menus;
      }
    );
    
    this.menus=this.menuService.getMenu();
  }

  AddNewCombo(){
    this.router.navigate(['new'],{relativeTo:this.route});

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
   }
}
