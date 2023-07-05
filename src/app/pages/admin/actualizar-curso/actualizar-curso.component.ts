import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-actualizar-curso',
  templateUrl: './actualizar-curso.component.html',
  styleUrls: ['./actualizar-curso.component.css']
})
export class ActualizarCursoComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private cursoService:CursoService,
    private categoriaService:CategoriaService,
    private router:Router) { }

  cursoId = 0;
  curso:any;
  categorias:any;

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.params['cursoId'];
    this.cursoService.obtenerCurso(this.cursoId).subscribe(
      (data) => {
        this.curso = data;
        console.log(this.curso);
      },
      (error) => {
        console.log(error);
      }
    )

    this.categoriaService.listarCategorias().subscribe(
      (data:any) => {
        this.categorias = data;
      },
      (error) => {
        alert('Error al cargar las categorías');
      }
    )
  }

  public actualizarDatos(){
    this.cursoService.actualizarCurso(this.curso).subscribe(
      (data) => {
        Swal.fire('Curso actualizado','El curso ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/cursos']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el curso','error');
        console.log(error);
      }
    )
  }
}
