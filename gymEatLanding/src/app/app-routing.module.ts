import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogotipoAnimadoComponent } from './logotipo-animado/logotipo-animado.component';
import { QueEsGymEatComponent } from './que-es-gym-eat/que-es-gym-eat.component';

const routes: Routes = [
  {path: 'home', component: QueEsGymEatComponent},
  {path: 'logo', component: LogotipoAnimadoComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
