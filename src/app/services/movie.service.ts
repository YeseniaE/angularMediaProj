import { Injectable } from '@angular/core';

import { Movies } from '../models/movies';
import { Movie } from '../models/movie';


@Injectable()
export class MovieService {
  public movieList: Movie[]; //or Array<Movie>
  public movie: Movie;

  constructor() {
    this.movieList = Movies;
  }
  public getMovies(): Array<Movie> {
    console.log('my movie List', this.movieList);
    return this.movieList;
  }
  // public getMovieById(id: number) {
  //   this.movieList.forEach(movie => {
  //     if (movie.id === id) { return movie };
  //   })
  // }
  // this.movie = this.movieService.getMovieById(2);

  public getMovieById(id: number): Movie {
    this.movieList.forEach(movie => {
    if (movie.id == id) { this.movie = movie; }
  });
  return this.movie;
  }
}
