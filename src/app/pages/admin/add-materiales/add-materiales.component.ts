import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

import { MaterialesService } from 'src/app/services/materiales.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-add-materiales',
  templateUrl: './add-materiales.component.html',
  styleUrls: ['./add-materiales.component.css']
})
export class AddMaterialesComponent implements OnInit {


  cursoId:any;
  titulo:any;
  material:any = {
    curso : {},
    equipos1: '',
    equipos2: '',
    equipos3: '',
    equipos4: '',
    equipos5: '',
    equipos6: '',
    equipos7: '',
    equipos8: '',
    materiales1: '',
    materiales2: '',
    materiales3: '',
    materiales4: '',
    materiales5: '',
    materiales6: '',
    materiales7: '',
    materiales8: '',
    servicio1: '',
    servicio2: '',
    infraestructura1:'',
    infraestructura2:'',
    infraestructura3:'',
    infraestructura4:'',
  }

  constructor(
    public dialog: MatDialog,
    private route:ActivatedRoute,
    private materialesService:MaterialesService ,

    ) { }


  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.material.curso['cursoId'] = this.cursoId;
    
  }

  formSubmit(){
    if(this.material.equipos1.trim() == '' || this.material.equipos1 == null){
      return;
    }
    if(this.material.equipos2.trim() == '' || this.material.equipos2 == null){
      return;
    }
    if(this.material.equipos3.trim() == '' || this.material.equipos3 == null){
      return;
    }
    if(this.material.equipos4.trim() == '' || this.material.equipos4 == null){
      return;
    }
    if(this.material.equipos5.trim() == '' || this.material.equipos5 == null){
      return;
    }
    if(this.material.equipos6.trim() == '' || this.material.equipos6 == null){
      return;
    }
    if(this.material.equipos7.trim() == '' || this.material.equipos7 == null){
      return;
    }
    if(this.material.equipos8.trim() == '' || this.material.equipos8 == null){
      return;
    }
    if(this.material.materiales1.trim() == '' || this.material.materiales1 == null){
      return;
    }
    if(this.material.materiales2.trim() == '' || this.material.materiales2 == null){
      return;
    }
    if(this.material.materiales3.trim() == '' || this.material.materiales3 == null){
      return;
    }
    if(this.material.materiales4.trim() == '' || this.material.materiales4 == null){
      return;
    }
    if(this.material.materiales5.trim() == '' || this.material.materiales5 == null){
      return;
    }
    if(this.material.materiales6.trim() == '' || this.material.materiales6 == null){
      return;
    }
    if(this.material.materiales7.trim() == '' || this.material.materiales7 == null){
      return;
    }
    if(this.material.materiales8.trim() == '' || this.material.materiales8 == null){
      return;
    }
    if(this.material.servicio1.trim() == '' || this.material.servicio1 == null){
      return;
    }
    if(this.material.servicio2.trim() == '' || this.material.servicio2 == null){
      return;
    }
    if(this.material.infraestructura1.trim() == '' || this.material.infraestructura1 == null){
      return;
    }
    if(this.material.infraestructura2.trim() == '' || this.material.infraestructura2 == null){
      return;
    }
    if(this.material.infraestructura3.trim() == '' || this.material.infraestructura3 == null){
      return;
    }
    if(this.material.infraestructura4.trim() == '' || this.material.infraestructura4 == null){
      return;
    }


    this.materialesService.guardarMaterial(this.material).subscribe(
      (data) => {
        this.material.equipos1 = '';
        this.material.equipos2 = '';
        this.material.equipos3 = '';
        this.material.equipos4 = '';
        this.material.equipos5 = '';
        this.material.equipos6 = '';
        this.material.equipos7 = '';
        this.material.equipos8 = '';
        this.material.materiales1 = '';
        this.material.materiales2 = '';
        this.material.materiales3 = '';
        this.material.materiales4 = '';
        this.material.materiales5 = '';
        this.material.materiales6 = '';
        this.material.materiales7 = '';
        this.material.materiales8 = '';
        this.material.servicio1 = '';
        this.material.servicio2 = '';
        this.material.infraestructura1 = '';
        this.material.infraestructura2 = '';
        this.material.infraestructura3 = '';
        this.material.infraestructura4 = '';
        Swal.fire('Materiales registrados','Los materiales han sido agregados con éxito','success');
      },(error) => {
        Swal.fire('Error','Error al guardar los materiales en la base de datos','error');
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

