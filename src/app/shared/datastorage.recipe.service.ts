import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { Recipes } from "../recipes/recipes.model";
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn:'root',
})
export class DatastorageService {
    constructor(private _http:HttpClient, private _RecipesService:RecipesService){
    }

    storedRecipe(){
        const recipeData = this._RecipesService.getRecipes()
        this._http.put('https://ng-recipes-dbfb1-default-rtdb.firebaseio.com/recipes.json',recipeData).subscribe({
            next: (res)=>{
                console.log(res)
            }
        })
    }
    FetchRecipe(){
        return this._http.get<Recipes[]>('https://ng-recipes-dbfb1-default-rtdb.firebaseio.com/recipes.json').pipe(
            map((recipe)=>{
                return recipe.map((rec)=>{
                    return {
                        ...rec,
                        ingredients: rec.ingredients ? rec.ingredients  : []
                    }
                })
            })
            ,tap((recipe)=>{
                this._RecipesService.setRecipe(recipe)
            })
        )
    }
}