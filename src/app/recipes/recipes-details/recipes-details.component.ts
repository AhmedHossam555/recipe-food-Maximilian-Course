import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component,Input, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Ingredients } from '../../shopping-list/shared/shoppingModel';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrl: './recipes-details.component.css'
})
export class RecipesDetailsComponent implements OnInit{
   recipe: Recipes;
   id: number;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.recipe = this.recipesService.getRecipe(this.id);
    })
  }
  toShopping(){
   this.recipesService.addIngredientToShoppingList(this.recipe.ingredients)
  }
  toEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
  }
  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
