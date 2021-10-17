import {Component, OnInit} from '@angular/core';
import {Filme} from "../../model/filme";
import {NoiteService} from "../../services/noite.service";
import {FilmeService} from "../../services/filme.service";
import {Imdb} from "../../model/imdb";
import {ImdbRatingService} from "../../services/imdb-rating.service";

@Component({
    selector: 'app-filme',
    templateUrl: './filme.component.html',
    styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

    genre: string;
    nota: string;
    filme: Filme
    imdb: Imdb
    genero: any[]

    constructor(private filmeServices: FilmeService, private imdbRating: ImdbRatingService) {
        this.genre = "28"
        this.nota = "1";
        this.imdb = new Imdb();
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

    gerarFilme() {
        this.filmeServices.gerarFilme(this.genre, this.nota).subscribe(value => {
            this.filme = value;
            this.rating();
        });
    }

    rating(){
        this.imdbRating.obterRating(this.filme.movieDetails?.imdb_id).subscribe( rating => {
            this.imdb = rating;
        })
    }



    gerarNovoFilme() {
        this.filme = new Filme();
    }

    temFilmeSelecionado() {
        return this.filme.link != null;
    }

    overviewMovie(){
        return this.filme.movieDetails?.overview;
    }

    titleMovie(){
        return this.filme.movieDetails?.title;
    }

    voteCountMovie(){
        return this.filme.movieDetails?.vote_count;
    }

    voteAverageMovie(){
        return this.filme.movieDetails?.vote_average;
    }

    movieImagem(){
        return `https://image.tmdb.org/t/p/original/${this.filme.movieDetails?.poster_path}`
    }


}
