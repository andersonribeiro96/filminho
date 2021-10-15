import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoiteService {

  constructor(private http:HttpClient) { }

  gerarNoite(genero:string, ano:string) : Observable<any> {
    let URL = "https://films-random.herokuapp.com/noite/discovery/"
    return this.http.get<any>(URL.concat(genero)+"/".concat(ano))
  }



}
