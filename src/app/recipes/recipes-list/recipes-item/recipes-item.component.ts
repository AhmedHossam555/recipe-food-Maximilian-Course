import { Component,EventEmitter,Input, Output, ViewEncapsulation } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],

})
export class RecipesItemComponent {
  @Input() recipe:Recipes;
  @Input() index: number;
  constructor(private recipesService: RecipesService){}

}
