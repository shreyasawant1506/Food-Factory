import { Ingredient } from "../shared/ingredient.module";

export class Menu{
    public name:string;
    public imagePath:string;
    public description:string;
    public ingredients:Ingredient[];

    constructor(name:string,desc:string,image:string,ingredients:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imagePath=image;
        this.ingredients=ingredients;
    }
}