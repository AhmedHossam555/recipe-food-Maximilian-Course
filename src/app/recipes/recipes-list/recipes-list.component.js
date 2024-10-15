"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesListComponent = void 0;
const core_1 = require("@angular/core");
let RecipesListComponent = class RecipesListComponent {
    constructor(recipesService, router, route) {
        this.recipesService = recipesService;
        this.router = router;
        this.route = route;
    }
    ;
    ngOnInit() {
        this.subsciption = this.recipesService.recipeChanges.subscribe((recipe) => {
            this.recipes = recipe;
        });
        this.recipes = this.recipesService.getRecipes();
    }
    toNew() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
    ngOnDestroy() {
        this.subsciption.unsubscribe();
    }
};
exports.RecipesListComponent = RecipesListComponent;
exports.RecipesListComponent = RecipesListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-recipes-list',
        templateUrl: './recipes-list.component.html',
        styleUrl: './recipes-list.component.css'
    })
], RecipesListComponent);
