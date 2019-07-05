import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../shared/api.service';
import {Tournament} from '../model/tournament';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {

  tournaments: Tournament[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllTournaments();
  }

  public getAllTournaments() {
    this.apiService.getAllTournaments().subscribe(
      res => {
        this.tournaments = res;
      },
      err => {
        alert('Błąd w trakcie pobierania turniejó');
      }
    );

  }

}
