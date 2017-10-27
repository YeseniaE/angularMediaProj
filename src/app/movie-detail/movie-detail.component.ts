import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  public movie: Movie;
  public safeURL;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private _sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(res => {
        this.movie = this.movieService.getMovieById(res.id);
      });
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer);
  }
}
