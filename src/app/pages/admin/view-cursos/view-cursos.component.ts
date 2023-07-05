
import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-view-cursos',
  templateUrl: './view-cursos.component.html',
  styleUrls: ['./view-cursos.component.css']
})
export class ViewCursosComponent implements OnInit {

  cursos : any = [

  ]

  constructor(private cursoService:CursoService) { }

  ngOnInit(): void {
    this.cursoService.listarCursos().subscribe(
      (dato:any) => {
        this.cursos = dato;
        console.log(this.cursos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los cursos','error');
      }
    )
  }

  eliminarCurso(cursoId:any){
    Swal.fire({
      title:'Eliminar curso',
      text:'¿Estás seguro de eliminar el curso?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        this.cursoService.eliminarCurso(cursoId).subscribe(
          (data) => {
            this.cursos = this.cursos.filter((curso:any) => curso.cursoId != cursoId);
            Swal.fire('Curso eliminado','El curso ha sido eliminado de la base de datos','success');
          },
          (error) => {
            Swal.fire('Error','Error al eliminar el curso','error');
          }
        )
      }
    })
  }
}

