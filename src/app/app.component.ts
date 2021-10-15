import {Component, OnInit} from '@angular/core';
import {NoiteService} from "./services/noite.service";

@Component({
  selector: 'app-root',
  templateUrl:'teste.html',
  styles: []
})


export class AppComponent implements OnInit{

  constructor(private noiteServices:NoiteService) {
  }

  ngOnInit(): void {
    this.gerarNoite();
  }

  gerarNoite(){
    this.noiteServices.gerarNoite("28","2019").subscribe(value => console.log(value))
  }


}
