import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-view-curso-temas',
  templateUrl: './view-curso-temas.component.html',
  styleUrls: ['./view-curso-temas.component.css']
})
export class ViewCursoTemasComponent implements OnInit {

  tema:any;
  curso:any;
  cursoId:any;
  titulo:any;
  temas:any = [];

  constructor(private route:ActivatedRoute,private temaService:TemaService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.temaService.listarTemasDelCurso(this.cursoId).subscribe(
      (data:any) => {
        console.log(data);
        this.temas = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  eliminarTema(temaId:any){
    Swal.fire({
      title:'Eliminar tema',
      text:'¿Estás seguro , quieres eliminar este tema?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.temaService.eliminarTema(temaId).subscribe(
          (data) => {
            this.snack.open('Tema eliminado','',{
              duration:3000
            })
            this.temas = this.temas.filter((tema:any) => tema.temaId != temaId);
          },
          (error) => {
            this.snack.open('Error al eliminar el tema','',{
              duration:3000
            })
            console.log(error);
          }
        )
      }
    })
  }
}
