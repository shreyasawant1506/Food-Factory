import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-foodedit',
  templateUrl: './foodedit.component.html',
  styleUrls: ['./foodedit.component.css']
})
export class FoodeditComponent implements OnInit {

  id:number;
  editMode=false;
  menuForm:FormGroup;
  constructor(private router: Router,private route:ActivatedRoute,private menuService:MenuService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }
    onCancel(){
      this.router.navigate(['../'],{relativeTo:this.route});
        }
    
     private initForm(){
          let menuName='';
          let menuImage='';
          let menuDescription='';
        let menuIngredients=new FormArray([]);
      
      
          if(this.editMode){
            const menu=this.menuService.getmenuItem(this.id);
            if(menu['ingredients']){
              for(let ingredients of menu.ingredients){
                menuIngredients.push(
                  new FormGroup({
                    'name':new FormControl(ingredients.name,Validators.required),
                    'amount':new FormControl(ingredients.amount,[Validators.required,
                      Validators.pattern(/^[1-9]+[0-9]*$/)]),
                  })
                );
              }
      
      }
            menuName=menu.name;
            menuImage=menu.imagePath;
            menuDescription=menu.description;
          }
      
          this.menuForm=new FormGroup({
            'name':new FormControl(menuName,Validators.required),
            'image':new FormControl(menuImage),
            'description':new FormControl(menuDescription,Validators.required),
            'ingredients':menuIngredients
      
           });
         }
        
      
        onDeleteIngredient(index:number){
          (<FormArray>this.menuForm.get('ingredients')).removeAt(index);
          this.router.navigate(['/menuregistry'],{relativeTo:this.route});
        }

        onSubmit(){
          
          if(this.editMode){
            this.menuService.updateMenu(this.id,
              this.menuForm.value);
          }else{
            this.menuService.addMenu(this.menuForm.value);
          }
          this.onCancel();
        }


        addnewIngredient(){
          (<FormArray>this.menuForm.get('ingredients')).push(
            new FormGroup({
              'name':new FormControl(null,Validators.required),
              'amount':new FormControl(null,
                [Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          );
 }

}
