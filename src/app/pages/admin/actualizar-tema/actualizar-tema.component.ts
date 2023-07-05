import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TemaService } from 'src/app/services/tema.service';

@Component({
  selector: 'app-actualizar-tema',
  templateUrl: './actualizar-tema.component.html',
  styleUrls: ['./actualizar-tema.component.css']
})
export class ActualizarTemaComponent implements OnInit {

  temaId:any = 0;
  tema:any;
  curso:any;

  constructor(
    private route:ActivatedRoute,
    private temaService:TemaService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.temaId = this.route.snapshot.params['temaId'];
    this.temaService.obtenerTema(this.temaId).subscribe(
      (data:any) => {
        this.tema = data;
        console.log(this.tema);
      },
      (error) => {
        console.log(error);
      }
    )
  }


  public actualizarDatosDelTema(){
    this.temaService.actualizarTema(this.tema).subscribe(
      (data) => {
        Swal.fire('Tema actualizado','El tema ha sido actualizada con éxito','success').then((e) => {
          this.router.navigate(['/admin/ver-tema/'+this.tema.curso.cursoId+'/'+this.tema.curso.titulo]);
        })
      }
    )
  }
}
