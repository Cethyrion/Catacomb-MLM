import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';

import { NavComponent } from './components/nav/nav.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SingleMapComponent } from './components/single-map/single-map.component';
import { TestCanvasComponent } from './components/test-canvas/test-canvas.component';
import { TestDbUiComponent } from './components/test-db-ui/test-db-ui.component';

import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AppComponent, NavComponent, GalleryComponent, SingleMapComponent, TestCanvasComponent, TestDbUiComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, AngularMaterialModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}