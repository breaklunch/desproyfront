import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MaterialesService {

  constructor(private http:HttpClient) { }

  public listarMaterialesDelCurso(cursoId:any){
    return this.http.get(`${baserUrl}/material/curso/todos/${cursoId}`);
  }

  public guardarMaterial(material:any){
    return this.http.post(`${baserUrl}/material/`,material);
  }

  public eliminarMateriales(materialId:any){
    return this.http.delete(`${baserUrl}/material/${materialId}`);
  }

  public actualizarMaterial(material:any){
    return this.http.put(`${baserUrl}/material/`,material);
  }

  public obtenerMaterial(materialId:any){
    return this.http.get(`${baserUrl}/material/${materialId}`);
  }

  public listarMaterialesDelCursoParaLaLectura(cursoId:any){
    return this.http.get(`${baserUrl}/material/curso/todos/${cursoId}`);
  }
}
