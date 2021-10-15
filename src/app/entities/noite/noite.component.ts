import { Component, OnInit } from '@angular/core';
import {NoiteService} from "../../services/noite.service";

@Component({
  selector: 'app-noite',
  templateUrl: './noite.component.html',
  styleUrls: ['./noite.component.css']
})
export class NoiteComponent implements OnInit {

  constructor(private noiteServices: NoiteService) { }

  ngOnInit(): void {
  }

}
