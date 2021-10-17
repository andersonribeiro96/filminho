import { Component, OnInit } from '@angular/core';
import {DarkModeService} from "angular-dark-mode";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.css']
})
export class DarkModeToggleComponent implements OnInit {

  darkMode$ : Observable<boolean> = this.darkMode.darkMode$;

  constructor(private darkMode: DarkModeService) { }

  ngOnInit(): void {
  }

  onToggle(){
    this.darkMode.toggle();
  }

}
