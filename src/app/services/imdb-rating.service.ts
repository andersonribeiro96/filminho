import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImdbRatingService {

  constructor(private http:HttpClient) { }


  obterRating(id: string | undefined) : Observable<any>{
    return this.http.get<any>(`https://imdb-api.com/en/API/Ratings/k_emuw6kl5/${id}`);
  }

}
