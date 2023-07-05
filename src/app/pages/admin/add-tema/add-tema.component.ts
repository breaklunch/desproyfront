import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TemaService } from 'src/app/services/tema.service';

import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-tema',
  templateUrl: './add-tema.component.html',
  styleUrls: ['./add-tema.component.css']
})
export class AddTemaComponent implements OnInit {


  cursoId:any;
  titulo:any;
  tema:any = {
    curso : {},
    nombre: '',
    modalidad: '',
    contenido : '',
    subtema1 : '',
    subtema2 : '',
    subtema3 : '',
    subtema4 : '',
  }

  constructor(
    public dialog: MatDialog,
    private route:ActivatedRoute,
    private temaService:TemaService ,
    ) { }


  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.tema.curso['cursoId'] = this.cursoId;

  }

  formSubmit(){
    if(this.tema.nombre.trim() == '' || this.tema.nombre == null){
      return;
    }
    if(this.tema.modalidad.trim() == '' || this.tema.modalidad == null){
      return;
    }
    if(this.tema.contenido.trim() == '' || this.tema.contenido == null){
      return;
    }
    if(this.tema.subtema1.trim() == '' || this.tema.subtema1 == null){
      return;
    }
    if(this.tema.subtema2.trim() == '' || this.tema.subtema2 == null){
      return;
    }
    if(this.tema.subtema3.trim() == '' || this.tema.subtema3 == null){
      return;
    }
    if(this.tema.subtema4.trim() == '' || this.tema.subtema4 == null){
      return;
    }


    this.temaService.guardarTema(this.tema).subscribe(
      (data) => {
        this.tema.nombre = '';
        this.tema.modalidad = '';
        this.tema.contenido = '';
        this.tema.subtema1 = '';
        this.tema.subtema2 = '';
        this.tema.subtema3 = '';
        this.tema.subtema4 = '';
        Swal.fire('Tema guardado','El tema ha sido agregado con éxito','success');
      },(error) => {
        Swal.fire('Error','Error al guardar el tema en la base de datos','error');
        console.log(error);
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

