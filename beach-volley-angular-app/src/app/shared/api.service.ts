import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tournament} from '../model/tournament';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private BASE_URL = 'http://localhost:8080/api';
  private GET_TOURNAMENTS_URL = `${this.BASE_URL}/tournaments/all`;

  constructor(private http: HttpClient) { }

  getAllTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.GET_TOURNAMENTS_URL);
  }
}
