import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { musica } from './musicas';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {
  private apiUrl = 'http://localhost:3000/musicas';

  constructor(private http: HttpClient) {}

  getMusicas(): Observable<musica[]> {
    return this.http.get<musica[]>(this.apiUrl);
  }
  
  delete(musicas:musica): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/musicas/' + musicas.id)
  }
}