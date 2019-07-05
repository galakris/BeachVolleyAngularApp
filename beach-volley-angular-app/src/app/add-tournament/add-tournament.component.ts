import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {

  model: TournamentViewModel = {
    name: '',
    date: new Date(),
    time: '',
    category: '',
    sitesNumber: 0,
    fee: 0,
    email: '',
    location: {
      city: '',
      street: '',
      number: 0
    }
  };

constructor() { }

  ngOnInit() {
  }

  addTournament(): void {
    alert(this.model.date);
  }

}

export interface TournamentViewModel {
  name: string;
  date: Date;
  time: string;
  category: string;
  sitesNumber: number;
  fee: number;
  email: string;
  location: LocationViewModel;
}

export interface LocationViewModel {
  city: string;
  street: string;
  number: number;
}
