import {Component, OnInit} from '@angular/core';
import {NoiteService} from "./services/noite.service";
import {FilmeService} from "./services/filme.service";
import {Filme} from "./model/filme";

@Component({
  selector: 'app-root',
  templateUrl:'inicial.html',
  styles: []
})


export class AppComponent implements OnInit{

  teste : any;
  ano: any;
  filme:Filme

  constructor(private noiteServices:NoiteService, private filmeServices: FilmeService) {
    this.filme = new Filme();
  }

  ngOnInit(): void {
  }


  gerarFilme(){
    this.filmeServices.gerarFilme(this.teste.toString(), this.ano.toString()).subscribe(value => {
      this.filme = value;
      console.log(this.filme.nome);
    });
  }

  gerarNovoFilme(){
    this.filme = new Filme();
  }



}
