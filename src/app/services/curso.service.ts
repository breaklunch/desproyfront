
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper'

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) { }

  public listarCursos(){
    return this.http.get(`${baserUrl}/curso/`);
  }

  public agregarCurso(curso:any){
    return this.http.post(`${baserUrl}/curso/`,curso);
  }

  public eliminarCurso(cursoId:any){
    return this.http.delete(`${baserUrl}/curso/${cursoId}`);
  }

  public obtenerCurso(cursoId:any){
    return this.http.get(`${baserUrl}/curso/${cursoId}`);
  }

  public actualizarCurso(curso:any){
    return this.http.put(`${baserUrl}/curso/`,curso);
  }

  public listarCursoDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/curso/categoria/${categoriaId}`);
  }

  public obtenerCursosActivos(){
    return this.http.get(`${baserUrl}/curso/activo`);
  }

  public obtenerCursosActivosDeUnaCategoria(categoriaId:any){
    return this.http.get(`${baserUrl}/curso/categoria/activo/${categoriaId}`);
  }
}
