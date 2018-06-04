import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';
import { Ingredient } from '../../shared/ingredient.module';
import { FoodeditComponent } from '../foodedit/foodedit.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {
  id: number;
 menu:Menu;
  constructor(private menuservice:MenuService,
  private route:ActivatedRoute,
private router:Router) { }

  ngOnInit() {
    //this.menu=this.menuservice.getMenu();
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.menu=this.menuservice.getmenuItem(this.id);
      }
    );
  }

  onAddToOrderList(){
    this.menuservice.onaddtoIngredientsinOrderList(this.menu.ingredients);
  }

  onFoodEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteItem(){
    this.menuservice.deleteItem(this.id);
  }
}
