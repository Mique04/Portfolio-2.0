import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component: InicioComponent},
  {path: "inicio", component: InicioComponent},
  {path: "sobre-mi", component: SobreMiComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "skills", component: SkillsComponent},
  {path: "contacto", component: ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
