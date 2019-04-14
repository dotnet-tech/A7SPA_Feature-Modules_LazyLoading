import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModel } from './app-routing.model';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping.list.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
        HeaderComponent,
        HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModel,
    ShoppingListModule,
    SharedModule
    
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
