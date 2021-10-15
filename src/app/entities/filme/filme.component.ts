import { Component, OnInit } from '@angular/core';
import {Filme} from "../../model/filme";
import {NoiteService} from "../../services/noite.service";
import {FilmeService} from "../../services/filme.service";

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  genre : any;
  ano: any;
  filme:Filme
  genero: any[]

  constructor(private noiteServices:NoiteService, private filmeServices: FilmeService) {
    this.ano = "2016"
    this.filme = new Filme();
    this.genero = [
      {genre: "Action", id: "28"},
      {genre: "Adventure", id: "12"},
      {genre: "Animation", id: "16"},
      {genre: "Comedy", id: "35"},
      {genre: "Crime", id: "80"},
      {genre: "Documentary", id: "99"},
      {genre: "Drama", id: "18"},
      {genre: "Family", id: "10751"},
      {genre: "Fantasy", id: "14"},
      {genre: "History", id: "36"},
      {genre: "Horror", id: "27"},
      {genre: "Music", id: "10402"},
      {genre: "Mystery", id: "9648"},
      {genre: "Romance", id: "10749"},
      {genre: "ScienceFiction", id: "878"},
      {genre: "TVMovie", id: "10770"},
      {genre: "Thriller", id: "53"},
      {genre: "War", id: "10752"},
      {genre: "Western", id: "37"}
    ];

    this.genre = this.genero[0];
    console.log(this.genre)
  }

  ngOnInit(): void {
  }

  gerarFilme(){
    this.filmeServices.gerarFilme(this.genre.toString(), this.ano.toString()).subscribe(value => {
      this.filme = value;
    });
  }

  gerarNovoFilme(){
    this.filme = new Filme();
  }

}
