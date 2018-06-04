import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

import { Subscription } from 'rxjs/Subscription';
import { myorderService } from './myorder.service';

//import { Ingredient } from '../menuregistry/shared/ingredient.module';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  ingredients:Ingredient[];
  private subscription:Subscription;

  constructor(private MyOrderService:myorderService) { }

  ngOnInit() {
    this.ingredients=this.MyOrderService.getIngredients();
    this.MyOrderService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index:number){
    this.MyOrderService.startedEditing.next(index);
      }

    // ngOnDestroy(){
    //   this.subscription.unsubscribe();
    // }

  }
 

