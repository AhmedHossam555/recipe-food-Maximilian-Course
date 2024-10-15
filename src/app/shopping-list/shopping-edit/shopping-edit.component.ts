import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Ingredients } from '../shared/shoppingModel';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  // template driven approach // angular refer form object from dom
  // reactive approach // form object is created synchronized and programmatically with in Dom
  @ViewChild('f') slForm: NgForm;
  EditItem: number;
  subscription: Subscription;
  EditingMode: boolean = false;
  ingredientEdit: Ingredients;
  constructor(private shoppingListService: ShoppingListService){}
  ngOnInit(): void {
    this.subscription =  this.shoppingListService.startedEditing.subscribe((index)=>{
      this.EditItem = index;
      this.EditingMode = true;
      this.ingredientEdit = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        'name': this.ingredientEdit.name,
        'amount': this.ingredientEdit.amount
      })
    })
  }
   onSubmit(form: NgForm){
     const value = form.value
     const newIng = new Ingredients(value.name,value.amount);
    if(this.EditingMode){
      this.shoppingListService.UpdateIngredient(this.EditItem, newIng);
    }else{
      this.shoppingListService.onAdding(newIng);
    }
    this.EditingMode = false;
    form.reset();
   }
   onClear(){
    this.slForm.reset();
    this.EditingMode = false;
   }
   onDelete(){
    this.shoppingListService.onDeleting(this.EditItem)
    this.onClear();
   }
   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
