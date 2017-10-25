import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public movieId: number;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.movieId = this.activatedRoute.snapshot.params.id;
    // this.movie = this.movieService.getMovieById(2);

  }

}
