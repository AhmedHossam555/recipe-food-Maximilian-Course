import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredients } from '../../shopping-list/shared/shoppingModel';
import { Recipes } from '../recipes.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  editMode: boolean = false;
  id: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, private recipesService:RecipesService, private Shoppinglistservice: ShoppingListService){}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] != null ? true: false;
      this.InitForm();
    })
  }
  onSubmit(){
    if(this.editMode){
      this.recipesService.updateRecipe(this.id, this.recipeForm.value );
    }else{
      this.recipesService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
    //this.Shoppinglistservice.onAdding(this.recipesService.getRecipe(this.id).ingredients[0]);
  }
  private InitForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredient = new FormArray([]);
    if(this.editMode){
      const recipe = this.recipesService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe['ingredients']){
          recipeIngredient.push(new FormGroup({
            'name': new FormControl(ingredient.name,Validators.required),
            'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath,Validators.required),
      'description': new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredient
    })
  }
  getIngredientsControls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls
  }
  onAddIngredients(){
   (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
    'name': new FormControl(null,Validators.required),
    'amount': new FormControl(null,[
      Validators.required,
       Validators.pattern(/^[1-9]+[0-9]*$/)
    ])
   }))
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
  onDeleteIngredients(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
