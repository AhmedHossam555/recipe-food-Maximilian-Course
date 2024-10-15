
import { Injectable } from "@angular/core";
import { Ingredients } from "./shared/shoppingModel";
import { Subject } from "rxjs";
import { RecipesService } from "../recipes/recipes.service";
@Injectable()
export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredients[] = [
        new Ingredients('apple', 12),
        new Ingredients('tomota',50),
     ]
    getIngredients(){

        return this.ingredients.slice();
    }
    getIngredient(index: number){
        return this.ingredients[index];
    }
    onAdding(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onDeleting(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients);
    }
    toshoppingList(ing: Ingredients[]){   
        // for(let ingredient of ing){
        //     this.onAdding(ingredient);
        // }
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    UpdateIngredient(index: number, newIngred: Ingredients){
        this.ingredients[index] = newIngred;
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}