import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HomepageComponent implements OnInit {
  title = ' the Movies';
  movieList: Array<Movie>;
  constructor() {}

  ngOnInit(){ //use real movie titles so that you can call thumbnails and even call the trailers ---
    this.movieList = [
      {
      title: 'Blade Runner 2049 ',
      released_on: '2017',
      thumbnail: '../assets/images/blade.jpg',
      trailer: 'https://youtu.be/nZ5tqzw841s',
      },
      {
      title: 'Transformers',
      released_on: '2017',
      thumbnail: '../assets/images/transformers.jpg',
      trailer: 'https://youtu.be/6Vtf0MszgP8',
      },
      {
      title: 'Boss Baby',
      released_on: '2017',
      thumbnail: '../assets/images/baby.jpg',
      trailer: 'https://youtu.be/Ud8j5GaqH3c',
      },
      {
      title: 'Wonder Woman',
      released_on: '2017',
      thumbnail: '../assets/images/wonderwoman.jpg',
      trailer: 'https://youtu.be/VSB4wGIdDwo',
      },
    ]
  }
}


export class Movie {
  title: string;
  released_on: string;
  trailer: string;
  thumbnail: string;
}
