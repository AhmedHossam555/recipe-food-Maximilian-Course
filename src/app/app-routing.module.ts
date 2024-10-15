import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./shared/recipe-resolver.service";
const appRouting: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: "full"},
    {path: 'recipes', component: RecipesComponent,children:[
        {path: '', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id',component: RecipesDetailsComponent,resolve:[RecipesResolverService]},
        {path: ':id/edit',component: RecipeEditComponent,resolve:[RecipesResolverService]}
    ]},
    {path: 'shopping-list', component: ShoppingListComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(appRouting)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}