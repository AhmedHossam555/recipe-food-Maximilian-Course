import { Ingredients } from './../shopping-list/shared/shoppingModel';
import { EventEmitter, Injectable } from "@angular/core";
import { Recipes } from "./recipes.model";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
    recipeChanges = new Subject<Recipes[]>();

    // private recipes: Recipes[] = [
    //     new Recipes('Meet and French Fries','this is recipe delicious','../assets/meet.jpg',[new Ingredients('meet', 12), new Ingredients('fresher',30)]),
    //     new Recipes('Pizza with chicken','this is recipe amazing','../assets/pizza.jpg',[new Ingredients('pizza',10), new Ingredients('chicken', 5)]),
    //   ];
    private recipes: Recipes[] = [];
    constructor(private shoppingListSrv: ShoppingListService){
        
    }
    setRecipe(recipe:Recipes[]){
        this.recipes = recipe;
        this.recipeChanges.next(this.recipes.slice())
    }
    getRecipe(index: number){
        return this.recipes[index];
    }
    getRecipes(){
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ing: Ingredients[]){
        this.shoppingListSrv.toshoppingList(ing);
    }
    addRecipe(recipe: Recipes){
        this.recipes.push(recipe);
        this.recipeChanges.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipes){
        this.recipes[index] = newRecipe;
        this.recipeChanges.next(this.recipes.slice());
    }
    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.recipes.slice());
    }
}