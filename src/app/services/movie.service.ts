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
  public getMovieById(id: number) {
    this.movieList.forEach(movie => {
      if (movie.id === id) { return movie };
    })
  }
}
