"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingListComponent = void 0;
const core_1 = require("@angular/core");
let ShoppingListComponent = class ShoppingListComponent {
    constructor(shoppingListServices) {
        this.shoppingListServices = shoppingListServices;
    }
    ngOnInit() {
        this.ingredients = this.shoppingListServices.getIngredients();
        this.ingrSubChang = this.shoppingListServices.ingredientsChanged.subscribe((ing) => {
            this.ingredients = ing;
        });
    }
    ngOnDestroy() {
        this.ingrSubChang.unsubscribe();
    }
    onEditItem(id) {
        this.shoppingListServices.startedEditing.next(id);
    }
};
exports.ShoppingListComponent = ShoppingListComponent;
exports.ShoppingListComponent = ShoppingListComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-shopping-list',
        templateUrl: './shopping-list.component.html',
        styleUrl: './shopping-list.component.css',
    })
], ShoppingListComponent);
