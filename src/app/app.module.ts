import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HeroesComponent } from "./heroes/heroes.component";

@NgModule({
  imports: [BrowserModule, FormsModule, MatSliderModule, MatToolbarModule],
  declarations: [AppComponent, HelloComponent, HeroesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
