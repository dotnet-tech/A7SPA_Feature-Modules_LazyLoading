
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from "./recipes.component";
import { RecipeHomeComponent } from "./recipe-home/recipe-home.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

const recipeRoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: RecipeHomeComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
}
)
export class RecipeRoutingModel {

}