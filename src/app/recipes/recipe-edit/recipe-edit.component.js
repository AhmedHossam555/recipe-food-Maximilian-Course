"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeEditComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let RecipeEditComponent = class RecipeEditComponent {
    constructor(route, router, recipesService, Shoppinglistservice) {
        this.route = route;
        this.router = router;
        this.recipesService = recipesService;
        this.Shoppinglistservice = Shoppinglistservice;
        this.editMode = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.editMode = params['id'] != null ? true : false;
            this.InitForm();
        });
    }
    onSubmit() {
        if (this.editMode) {
            this.recipesService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipesService.addRecipe(this.recipeForm.value);
        }
        this.onCancel();
        //this.Shoppinglistservice.onAdding(this.recipesService.getRecipe(this.id).ingredients[0]);
    }
    InitForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let recipeIngredient = new forms_1.FormArray([]);
        if (this.editMode) {
            const recipe = this.recipesService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            if (recipe['ingredients']) {
                for (let ingredient of recipe['ingredients']) {
                    recipeIngredient.push(new forms_1.FormGroup({
                        'name': new forms_1.FormControl(ingredient.name, forms_1.Validators.required),
                        'amount': new forms_1.FormControl(ingredient.amount, [forms_1.Validators.required, forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)])
                    }));
                }
            }
        }
        this.recipeForm = new forms_1.FormGroup({
            'name': new forms_1.FormControl(recipeName, forms_1.Validators.required),
            'imagePath': new forms_1.FormControl(recipeImagePath, forms_1.Validators.required),
            'description': new forms_1.FormControl(recipeDescription, forms_1.Validators.required),
            'ingredients': recipeIngredient
        });
    }
    getIngredientsControls() {
        return this.recipeForm.get('ingredients').controls;
    }
    onAddIngredients() {
        this.recipeForm.get('ingredients').push(new forms_1.FormGroup({
            'name': new forms_1.FormControl(null, forms_1.Validators.required),
            'amount': new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    }
    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }
    onDeleteIngredients(index) {
        this.recipeForm.get('ingredients').removeAt(index);
    }
};
exports.RecipeEditComponent = RecipeEditComponent;
exports.RecipeEditComponent = RecipeEditComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-recipe-edit',
        templateUrl: './recipe-edit.component.html',
        styleUrl: './recipe-edit.component.css'
    })
], RecipeEditComponent);
