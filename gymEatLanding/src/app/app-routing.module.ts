import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescargaComponent } from './descarga/descarga.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { QueEsGymEatComponent } from './que-es-gym-eat/que-es-gym-eat.component';

const routes: Routes = [
  {path: 'home', component: QueEsGymEatComponent},
  {path: 'motivacion', component: MotivacionComponent},
  {path: 'descarga', component: DescargaComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
