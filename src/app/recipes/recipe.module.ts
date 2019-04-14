import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RecipesComponent } from "./recipes.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeHomeComponent } from "./recipe-home/recipe-home.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeRoutingModel } from "./recipe.routing.model";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailsComponent,
        RecipeHomeComponent,
        RecipeEditComponent
    ],
    imports:[
        CommonModule,
        RecipeRoutingModel
    ]
})

export class RecipeModule
{

}