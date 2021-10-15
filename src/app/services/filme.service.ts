import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http:HttpClient) { }

  gerarFilme(genero:string, ano:string) : Observable<any> {
    let URL = "https://films-random.herokuapp.com/filmes/discovery/year/"
    return this.http.get<any>(URL.concat(genero)+"/".concat(ano))
  }
}
