import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para manejar la lógica del formulario los errores y demás en el HTML
import { FormsModule } from '@angular/forms';

// Para manejar la lógica del formulario los errores y demás en el Component
import { ReactiveFormsModule } from '@angular/forms';

// Routers
import { APP_ROUTING } from './app.routers';

// Component
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { JsonFullPipe } from './pipes/json-full.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DataComponent,
    HomeComponent,
    NavbarComponent,
    JsonFullPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
