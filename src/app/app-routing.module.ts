import { NormalGuard } from './services/normal.guard';
import { AdminGuard } from './services/admin.guard';

import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActualizarCursoComponent } from './pages/admin/actualizar-curso/actualizar-curso.component';
import { ActualizarTemaComponent } from './pages/admin/actualizar-tema/actualizar-tema.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddCursoComponent } from './pages/admin/add-curso/add-curso.component';
import { AddTemaComponent } from './pages/admin/add-tema/add-tema.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { ViewCursoTemasComponent } from './pages/admin/view-curso-temas/view-curso-temas.component';
import { ViewCursosComponent } from './pages/admin/view-cursos/view-cursos.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DescriptorComponent } from './pages/admin/descriptor/descriptor.component';
import { AddMaterialesComponent } from './pages/admin/add-materiales/add-materiales.component';
import { ViewCursoMaterialesComponent } from './pages/admin/view-curso-materiales/view-curso-materiales.component';
import { ActualizarMaterialesComponent } from './pages/admin/actualizar-materiales/actualizar-materiales.component';
const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'signup',
    component : SignupComponent,
    pathMatch : 'full'
  },
  {
    path : 'login',
    component : LoginComponent,
    pathMatch : 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path : '',
        component : WelcomeComponent
      },
      {
        path:'categorias',
        component:ViewCategoriasComponent
      },
      {
        path:'add-categoria',
        component:AddCategoriaComponent
      },
      {
        path:'cursos',
        component:ViewCursosComponent
      },
      {
        path:'add-curso',
        component:AddCursoComponent
      },
      {
        path:'descriptor/:cursoId/:titulo',
        component:DescriptorComponent
      },
      {
        path:'curso/:cursoId',
        component:ActualizarCursoComponent
      },
      {
        path:'ver-temas/:cursoId/:titulo',
        component:ViewCursoTemasComponent
      },
      {
        path:'add-tema/:cursoId/:titulo',
        component : AddTemaComponent
      },
      {
      path:'add-materiales/:cursoId/:titulo',
        component : AddMaterialesComponent
      },
      {
        path:'material/:materialId',
        component:ActualizarMaterialesComponent
      },
      {
        path:'ver-materiales/:cursoId/:titulo',
        component:ViewCursoMaterialesComponent
      },
      {
        path:'tema/:temaId',
        component:ActualizarTemaComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
