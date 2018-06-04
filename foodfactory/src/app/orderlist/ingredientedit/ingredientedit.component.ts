import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.module';
import { NgForm } from '@angular/forms';
import { myorderService } from '../myorder.service';

@Component({
  selector: 'app-ingredientedit',
  templateUrl: './ingredientedit.component.html',
  styleUrls: ['./ingredientedit.component.css']
})
export class IngredienteditComponent implements OnInit,OnDestroy {
  @ViewChild('f') orderForm:NgForm;
  editMode=false;
  editedIndex:number;
  subscription:Subscription;
  editedItem:Ingredient;
 
  
 // @ViewChild('nameInput') NameInputRef:ElementRef;
  //@ViewChild('amountInput') AmountInputRef:ElementRef;

  constructor(private MyOrderService:myorderService) {} 

  

  ngOnInit() {
    this.subscription= this.MyOrderService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editedIndex=index;
        this.editMode=true;
        this.editedItem=this.MyOrderService.getIngredient(index);
       // console.log(getIngredient(index));
     this.orderForm.setValue(
       {
       name:this.editedItem.name,
       amount:this.editedItem.amount
     }
    );
  }
);
  }

  onAddIngredient(orderForm:NgForm){
  //  const nameInput=this.NameInputRef.nativeElement.value;
   // const amountInput=this.AmountInputRef.nativeElement.value;
   // const newIngredient=new Ingredient(nameInput,amountInput);

   const value=orderForm.value;
   const newIngredient=new Ingredient(value.name,value.amount);

   if(this.editMode){
    this.MyOrderService.update(this.editedIndex,newIngredient);
    this.editMode=true;
  }else{
    this.editMode=false;
    this.MyOrderService.addIngredient(newIngredient);
  }
    
    orderForm.reset();
      
  }
  onClear(){
    this.orderForm.reset();
    this.editMode=false;
  }
  
  onDelete(){
    this.MyOrderService.delete(this.editedIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
} 

