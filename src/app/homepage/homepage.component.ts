import { Component, OnInit } from '@angular/core';

import { Movie } from '../models/movie';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = ' the Movies';
  movieList: Array<Movie>;
  constructor() {}

  ngOnInit(){
  }
}
