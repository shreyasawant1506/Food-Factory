import { Menu } from "./menu.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { myorderService } from "../orderlist/myorder.service";
import { Subject } from "rxjs/Subject";


@Injectable()
export class MenuService{
menuSelected=new EventEmitter<Menu>();
menuChanged=new Subject<Menu[]>();

    menus: Menu[]=[
        new Menu('Burgers',
        'Tasty burgers',
        'http://www.recipe4living.com/assets/itemimages/400/400/3/default_0b9c41b387176503e8dfc939da3282c9_junemediajeffdaniels.jpg',
         [new Ingredient('Chicken',5)]
),
        new Menu('Fries',
        'Crunchy Fries',
        'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/french-fries.jpg?itok=FS-YwUYH',
    [new Ingredient('Cheese',5)]
),
        new Menu('Nachos',
        'Sweet and Spicy Nachos',
        'https://img.taste.com.au/mtWKdko8/w720-h480-cfill-q80/taste/2017/01/quick-and-easy-nachos-with-whipped-feta_1980x1320-120228-1.jpg',
        [new Ingredient('Barbeque',5)]
)
      ];

      getMenu(){
          return this.menus.slice();
      }

      getmenuItem(index:number){
          return this.menus[index];
      }
      constructor(private myorder:myorderService){}

      onaddtoIngredientsinOrderList(ingredients:Ingredient[]){
       this.myorder.addnewIngredients(ingredients);
      }

      addMenu(menu:Menu){
          this.menus.push(menu);
          this.menuChanged.next(this.menus.slice());
      }

      updateMenu(index:number,newMenu:Menu){
          this.menus[index]=newMenu;
        this.menuChanged.next(this.menus.slice());
      }

      deleteItem(index:number){
          this.menus.splice(index,1);
          this.menuChanged.next(this.menus.slice());
      }
      setMenu(menus:Menu[]){
          this.menus=menus;
          this.menuChanged.next(this.menus.slice());
      }
}