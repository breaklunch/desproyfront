
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  categorias:any = [];

  cursoData = {
    titulo:'',
    descripcion:'',
    area:'',
    dirigido:'',
    nivel:'',
    modo:'',
    objetivos:'',
    year:'',
    especializacion:'',
    condicion1:'',
    condicion2:'',
    condicion3:'',
    condicion4:'',
    duracion:'',
    prerequisitos:'',
    metodologia:'',
    participantes:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(
    public dialog: MatDialog,
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private cursoService:CursoService,
    private router:Router) { }

  ngOnInit(): void {
    this.categoriaService.listarCategorias().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )
  }

  guardarCurso(){
    console.log(this.cursoData);
    if(this.cursoData.titulo.trim() == '' || this.cursoData.titulo == null){
      this.snack.open('El título es requerido','',{
        duration:3000
      });
      return;
    }

    this.cursoService.agregarCurso(this.cursoData).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Curso guardado','El curso ha sido guardado con éxito','success');
        this.cursoData = {
          titulo:'',
          descripcion:'',
          area:'',
          dirigido:'',
          nivel:'',
          modo:'',
          objetivos:'',
          year:'',
          especializacion:'',
          condicion1:'',
          condicion2:'',
          condicion3:'',
          condicion4:'',
          duracion:'',
          prerequisitos:'',
          metodologia:'',
          participantes:'',
          activo:true,
          categoria:{
            categoriaId:''
          }
        }
        this.router.navigate(['/admin/cursos']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el curso','error');
      }
    )
  }
  openDialog() {
    this.dialog.open(DialogElementsExampleDialog);
  }

}

@Component({
  selector: 'instrucciones-dialog',
  templateUrl: 'instrucciones-dialog.html',
})
export class DialogElementsExampleDialog {}
