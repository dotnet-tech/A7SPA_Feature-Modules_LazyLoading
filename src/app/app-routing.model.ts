import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeHomeComponent } from "./recipes/recipe-home/recipe-home.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { HomeComponent } from "./home/home.component";


const appRoutes: Routes = [
    { path: '', component:HomeComponent },
    {path:'recipe',loadChildren:'./recipes/recipe.module#RecipeModule'},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
}
)
export class AppRoutingModel {

}