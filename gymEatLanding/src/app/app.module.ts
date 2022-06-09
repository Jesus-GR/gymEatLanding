import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { QueEsGymEatComponent } from './que-es-gym-eat/que-es-gym-eat.component';
import { JsProvidersService } from './services/js-providers.service';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { DescargaComponent } from './descarga/descarga.component';
import { FooterComponent } from './footer/footer.component';
import { CanvasComponent } from './canvas/canvas.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    QueEsGymEatComponent,
    MotivacionComponent,
    DescargaComponent,
    FooterComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [JsProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
