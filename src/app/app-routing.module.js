"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const recipes_component_1 = require("./recipes/recipes.component");
const shopping_list_component_1 = require("./shopping-list/shopping-list.component");
const recipe_start_component_1 = require("./recipes/recipe-start/recipe-start.component");
const recipes_details_component_1 = require("./recipes/recipes-details/recipes-details.component");
const recipe_edit_component_1 = require("./recipes/recipe-edit/recipe-edit.component");
const appRouting = [
    { path: '', redirectTo: '/recipes', pathMatch: "full" },
    { path: 'recipes', component: recipes_component_1.RecipesComponent, children: [
            { path: '', component: recipe_start_component_1.RecipeStartComponent },
            { path: 'new', component: recipe_edit_component_1.RecipeEditComponent },
            { path: ':id', component: recipes_details_component_1.RecipesDetailsComponent },
            { path: ':id/edit', component: recipe_edit_component_1.RecipeEditComponent }
        ] },
    { path: 'shopping-list', component: shopping_list_component_1.ShoppingListComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
exports.AppRoutingModule = AppRoutingModule;
exports.AppRoutingModule = AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(appRouting)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
