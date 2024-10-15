"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesDetailsComponent = void 0;
const core_1 = require("@angular/core");
let RecipesDetailsComponent = class RecipesDetailsComponent {
    constructor(recipesService, route, router) {
        this.recipesService = recipesService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params['id'];
            this.recipe = this.recipesService.getRecipe(this.id);
        });
    }
    toShopping() {
        this.recipesService.addIngredientToShoppingList(this.recipe.ingredients);
    }
    toEdit() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
    }
    onDeleteRecipe() {
        this.recipesService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
};
exports.RecipesDetailsComponent = RecipesDetailsComponent;
exports.RecipesDetailsComponent = RecipesDetailsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-recipes-details',
        templateUrl: './recipes-details.component.html',
        styleUrl: './recipes-details.component.css'
    })
], RecipesDetailsComponent);
