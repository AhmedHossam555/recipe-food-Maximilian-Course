"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingEditComponent = void 0;
const core_1 = require("@angular/core");
const shoppingModel_1 = require("../shared/shoppingModel");
let ShoppingEditComponent = class ShoppingEditComponent {
    constructor(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.EditingMode = false;
    }
    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing.subscribe((index) => {
            this.EditItem = index;
            this.EditingMode = true;
            this.ingredientEdit = this.shoppingListService.getIngredient(index);
            this.slForm.setValue({
                'name': this.ingredientEdit.name,
                'amount': this.ingredientEdit.amount
            });
        });
    }
    onSubmit(form) {
        const value = form.value;
        const newIng = new shoppingModel_1.Ingredients(value.name, value.amount);
        if (this.EditingMode) {
            this.shoppingListService.UpdateIngredient(this.EditItem, newIng);
        }
        else {
            this.shoppingListService.onAdding(newIng);
        }
        this.EditingMode = false;
        form.reset();
    }
    onClear() {
        this.slForm.reset();
        this.EditingMode = false;
    }
    onDelete() {
        this.shoppingListService.onDeleting(this.EditItem);
        this.onClear();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
exports.ShoppingEditComponent = ShoppingEditComponent;
__decorate([
    (0, core_1.ViewChild)('f')
], ShoppingEditComponent.prototype, "slForm", void 0);
exports.ShoppingEditComponent = ShoppingEditComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-shopping-edit',
        templateUrl: './shopping-edit.component.html',
        styleUrl: './shopping-edit.component.css'
    })
], ShoppingEditComponent);
