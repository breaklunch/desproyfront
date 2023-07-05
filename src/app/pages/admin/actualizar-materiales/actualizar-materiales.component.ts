import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MaterialesService } from 'src/app/services/materiales.service';

@Component({
  selector: 'app-actualizar-materiales',
  templateUrl: './actualizar-materiales.component.html',
  styleUrls: ['./actualizar-materiales.component.css']
})
export class ActualizarMaterialesComponent implements OnInit {

  materialId:any = 0;
  material:any;
  curso:any;

  constructor(
    private route:ActivatedRoute,
    private materialService:MaterialesService,
    private router:Router) { }

  ngOnInit(): void {
    this.materialId = this.route.snapshot.params['materialId'];
    this.materialService.obtenerMaterial(this.materialId).subscribe(
      (data:any) => {
        this.material = data;
        console.log(this.material);
      },
      (error) => {
        console.log(error);
      }
    )
  }


  public actualizarDatosDelMaterial(){
    this.materialService.actualizarMaterial(this.material).subscribe(
      (data) => {
        Swal.fire('Materiales actualizados','Los materiales han sido actualizados con éxito','success').then((e) => {
          this.router.navigate(['/admin/ver-material/'+this.material.curso.cursoId+'/'+this.material.curso.titulo]);
        })
      }
    )
  }
}
