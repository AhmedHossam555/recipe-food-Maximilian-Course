import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit, OnDestroy{
  recipes: Recipes[];
  subsciption: Subscription;
  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute){};
  ngOnInit(): void {
    this.subsciption = this.recipesService.recipeChanges.subscribe((recipe: Recipes[])=>{
      this.recipes = recipe;
    })
    this.recipes = this.recipesService.getRecipes();
  }
  toNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
  
}
