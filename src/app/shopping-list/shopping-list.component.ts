import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredients } from './shared/shoppingModel';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredients[];
  ingrSubChang: Subscription;
  constructor(private shoppingListServices: ShoppingListService){}
  ngOnInit(): void {
    this.ingredients = this.shoppingListServices.getIngredients();
    this.ingrSubChang = this.shoppingListServices.ingredientsChanged.subscribe((ing)=>{
      this.ingredients = ing;
    })
  }
  ngOnDestroy(): void {
    this.ingrSubChang.unsubscribe();
  }
  onEditItem(id: number){
     this.shoppingListServices.startedEditing.next(id);
    
  }

}
