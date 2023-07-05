//rendiser jamas el codigo no siente piedad jamas
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ActualizarCursoComponent } from './pages/admin/actualizar-curso/actualizar-curso.component';
import { ActualizarTemaComponent } from './pages/admin/actualizar-tema/actualizar-tema.component';
import { AddCategoriaComponent } from './pages/admin/add-categoria/add-categoria.component';
import { AddCursoComponent } from './pages/admin/add-curso/add-curso.component';
import { AddTemaComponent } from './pages/admin/add-tema/add-tema.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { ViewCategoriasComponent } from './pages/admin/view-categorias/view-categorias.component';
import { ViewCursoTemasComponent } from './pages/admin/view-curso-temas/view-curso-temas.component';
import { ViewCursosComponent } from './pages/admin/view-cursos/view-cursos.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";

import { DescriptorComponent } from './pages/admin/descriptor/descriptor.component';
import { ExporterService } from './services/exporter.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AddMaterialesComponent } from './pages/admin/add-materiales/add-materiales.component';
import { ViewCursoMaterialesComponent } from './pages/admin/view-curso-materiales/view-curso-materiales.component';
import { ActualizarMaterialesComponent } from './pages/admin/actualizar-materiales/actualizar-materiales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    ActualizarCursoComponent,
    ActualizarTemaComponent,
    AddCategoriaComponent,
    AddCursoComponent,
    AddTemaComponent,
    SidebarComponent,
    ViewCategoriasComponent,
    ViewCursoTemasComponent,
    ViewCursosComponent,
    WelcomeComponent,
    DescriptorComponent,
    AddMaterialesComponent,
    ViewCursoMaterialesComponent,
    ActualizarMaterialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true
    })
  ],
  providers: [authInterceptorProviders,ExporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
