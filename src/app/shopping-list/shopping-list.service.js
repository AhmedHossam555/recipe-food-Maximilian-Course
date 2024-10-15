"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListService = void 0;
const core_1 = require("@angular/core");
const shoppingModel_1 = require("./shared/shoppingModel");
const rxjs_1 = require("rxjs");
let ShoppingListService = class ShoppingListService {
    constructor() {
        this.ingredientsChanged = new rxjs_1.Subject();
        this.startedEditing = new rxjs_1.Subject();
        this.ingredients = [
            new shoppingModel_1.Ingredients('apple', 12),
            new shoppingModel_1.Ingredients('tomota', 50),
        ];
    }
    getIngredients() {
        return this.ingredients.slice();
    }
    getIngredient(index) {
        return this.ingredients[index];
    }
    onAdding(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onDeleting(index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients);
    }
    toshoppingList(ing) {
        // for(let ingredient of ing){
        //     this.onAdding(ingredient);
        // }
        this.ingredients.push(...ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    UpdateIngredient(index, newIngred) {
        this.ingredients[index] = newIngred;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
};
exports.ShoppingListService = ShoppingListService;
exports.ShoppingListService = ShoppingListService = __decorate([
    (0, core_1.Injectable)()
], ShoppingListService);
