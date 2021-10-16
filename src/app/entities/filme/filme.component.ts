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

  genre : string;
  ano: string;
  nota: string;
  votos: string;
  filme:Filme
  genero: any[]

  constructor(private noiteServices:NoiteService, private filmeServices: FilmeService) {
    this.ano = "2016";
    this.genre = "28"
    this.nota = "1";
    this.votos = "1";
    this.filme = new Filme();
    this.genero = [
      {genre: "Ação", id: "28"},
      {genre: "Aventura", id: "12"},
      {genre: "Animação", id: "16"},
      {genre: "Comédia", id: "35"},
      {genre: "Crime", id: "80"},
      {genre: "Documentário", id: "99"},
      {genre: "Drama", id: "18"},
      {genre: "Família", id: "10751"},
      {genre: "Fantasia", id: "14"},
      {genre: "História", id: "36"},
      {genre: "Horror", id: "27"},
      {genre: "Musical", id: "10402"},
      {genre: "Mistério ", id: "9648"},
      {genre: "Romance", id: "10749"},
      {genre: "Ficção Científica", id: "878"},
      {genre: "TV Movie", id: "10770"},
      {genre: "Terror", id: "53"},
      {genre: "Guerra", id: "10752"},
      {genre: "Velho Oeste", id: "37"}
    ];
  }

  ngOnInit(): void {
  }

  gerarFilme(){
    this.filmeServices.gerarFilme(this.genre, this.ano, this.nota, this.votos).subscribe(value => {
      this.filme = value;
    });
  }

  gerarNovoFilme(){
    this.filme = new Filme();
  }

  temFilmeSelecionado(){
    return this.filme.link != null;
  }

}
