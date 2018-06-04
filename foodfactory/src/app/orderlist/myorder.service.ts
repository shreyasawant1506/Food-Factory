
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredient.module";

export class myorderService{

  startedEditing= new Subject<number>();
  ingredientsChanged=new EventEmitter<Ingredient[]>();
  ingredients:Ingredient[]=[
    new Ingredient('Chicken',5),
    new Ingredient('Meat',8)
  ];
  
  getIngredients(){
    return this.ingredients.slice();
    
    
  }
  getIngredient(index:number){
return this.ingredients[index];
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addnewIngredients(ingredients:Ingredient[]){
//if(this.ingredients.indexOf(ingredients.findIndex)!=-1){}
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
  delete(index:number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  update(index:number,newIngredient:Ingredient){
    this.ingredients[index]=newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}