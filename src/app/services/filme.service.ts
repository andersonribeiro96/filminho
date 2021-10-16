import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http:HttpClient) { }

  gerarFilme(genero:string, ano:string, nota:string, votos:string) : Observable<any> {
    let URL = `https://films-random.herokuapp.com/filmes/discovery/year/${genero}/${ano}/${nota}/${votos}`;
    return this.http.get<any>(URL);
  }
}
