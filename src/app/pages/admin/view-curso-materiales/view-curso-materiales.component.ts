import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MaterialesService } from 'src/app/services/materiales.service';

@Component({
  selector: 'app-view-curso-materiales',
  templateUrl: './view-curso-materiales.component.html',
  styleUrls: ['./view-curso-materiales.component.css']
})
export class ViewCursoMaterialesComponent implements OnInit {


  material:any;
  curso:any;
  cursoId:any;
  titulo:any;
  materiales:any = [];

  constructor(private route:ActivatedRoute,private materialesService:MaterialesService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.materialesService.listarMaterialesDelCurso(this.cursoId).subscribe(
      (data:any) => {
        console.log(data);
        this.materiales = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  eliminarMateriales(materialId:any){
    Swal.fire({
      title:'Eliminar Materiales',
      text:'¿Estás seguro de querer eliminar estos materiales?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.materialesService.eliminarMateriales(materialId).subscribe(
          (data) => {
            this.snack.open('Material eliminado','',{
              duration:3000
            })
            this.materiales = this.materiales.filter((materiales:any) => materiales.materialId != materialId);
          },
          (error) => {
            this.snack.open('Error al eliminar el material','',{
              duration:3000
            })
            console.log(error);
          }
        )
      }
    })
  }
}

