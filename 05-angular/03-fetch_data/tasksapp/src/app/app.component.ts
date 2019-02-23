import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


// Implement OnInit.
export class AppComponent {
  title = 'app';
  name = "Landon";
  constructor(private _httpService: HttpService){}
}

