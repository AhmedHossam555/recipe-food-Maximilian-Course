import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipes } from "../recipes/recipes.model";
import { DatastorageService } from "./datastorage.recipe.service";
import { RecipesService } from "../recipes/recipes.service";

@Injectable({
    providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipes[]> {
    private readonly _DatastorageService  = inject(DatastorageService);
    private readonly _RecipeService = inject(RecipesService)
    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        const recipes = this._RecipeService.getRecipes()
           if(recipes.length === 0){
            return this._DatastorageService.FetchRecipe();
        }else{
            return recipes;
        }
    }
}