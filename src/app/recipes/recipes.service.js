"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const shoppingModel_1 = require("./../shopping-list/shared/shoppingModel");
const core_1 = require("@angular/core");
const recipes_model_1 = require("./recipes.model");
const rxjs_1 = require("rxjs");
let RecipesService = class RecipesService {
    constructor(shoppingListSrv) {
        this.shoppingListSrv = shoppingListSrv;
        this.recipeChanges = new rxjs_1.Subject();
        this.recipes = [
            new recipes_model_1.Recipes('Meet and French Fries', 'this is recipe delicious', '../assets/meet.jpg', [new shoppingModel_1.Ingredients('meet', 12), new shoppingModel_1.Ingredients('fresher', 30)]),
            new recipes_model_1.Recipes('Pizza with chicken', 'this is recipe amazing', '../assets/pizza.jpg', [new shoppingModel_1.Ingredients('pizza', 10), new shoppingModel_1.Ingredients('chicken', 5)]),
        ];
    }
    getRecipe(index) {
        return this.recipes[index];
    }
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientToShoppingList(ing) {
        this.shoppingListSrv.toshoppingList(ing);
    }
    addRecipe(recipe) {
        this.recipes.push(recipe);
        this.recipeChanges.next(this.recipes.slice());
    }
    updateRecipe(index, newRecipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanges.next(this.recipes.slice());
    }
    deleteRecipe(index) {
        this.recipes.splice(index, 1);
        this.recipeChanges.next(this.recipes.slice());
    }
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, core_1.Injectable)()
], RecipesService);
