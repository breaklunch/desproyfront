import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http:HttpClient) { }

  public listarTemasDelCurso(cursoId:any){
    return this.http.get(`${baserUrl}/tema/curso/todos/${cursoId}`);
  }

  public guardarTema(tema:any){
    return this.http.post(`${baserUrl}/tema/`,tema);
  }

  public eliminarTema(temaId:any){
    return this.http.delete(`${baserUrl}/tema/${temaId}`);
  }

  public actualizarTema(tema:any){
    return this.http.put(`${baserUrl}/tema/`,tema);
  }

  public obtenerTema(temaId:any){
    return this.http.get(`${baserUrl}/tema/${temaId}`);
  }

  public listarTemasDelCursoParaLaLectura(cursoId:any){
    return this.http.get(`${baserUrl}/tema/curso/todos/${cursoId}`);
  }

}
