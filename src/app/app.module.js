"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const header_component_1 = require("./header/header.component");
const recipes_component_1 = require("./recipes/recipes.component");
const recipes_list_component_1 = require("./recipes/recipes-list/recipes-list.component");
const recipes_details_component_1 = require("./recipes/recipes-details/recipes-details.component");
const recipes_item_component_1 = require("./recipes/recipes-list/recipes-item/recipes-item.component");
const shopping_list_component_1 = require("./shopping-list/shopping-list.component");
const shopping_edit_component_1 = require("./shopping-list/shopping-edit/shopping-edit.component");
const dropdown_directive_1 = require("./shopping-list/shared/dropdown.directive");
const shopping_list_service_1 = require("./shopping-list/shopping-list.service");
const app_routing_module_1 = require("./app-routing.module");
const recipe_start_component_1 = require("./recipes/recipe-start/recipe-start.component");
const recipe_edit_component_1 = require("./recipes/recipe-edit/recipe-edit.component");
const recipes_service_1 = require("./recipes/recipes.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            recipes_component_1.RecipesComponent,
            recipes_list_component_1.RecipesListComponent,
            recipes_details_component_1.RecipesDetailsComponent,
            recipes_item_component_1.RecipesItemComponent,
            shopping_list_component_1.ShoppingListComponent,
            shopping_edit_component_1.ShoppingEditComponent,
            dropdown_directive_1.DropDownDirective,
            recipe_start_component_1.RecipeStartComponent,
            recipe_edit_component_1.RecipeEditComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule
        ],
        providers: [shopping_list_service_1.ShoppingListService, recipes_service_1.RecipesService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
