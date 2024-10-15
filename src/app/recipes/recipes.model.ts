import { Ingredients } from "../shopping-list/shared/shoppingModel";

export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredients[];
    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}