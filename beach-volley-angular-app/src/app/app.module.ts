import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { RankingComponent } from './ranking/ranking.component';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { NotFoundComponent } from './not-found/not-found.component';

import {Router, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'tournaments',
    component: TournamentsComponent
  },
  {
    path: 'addTournament',
    component: AddTournamentComponent
  },
  {
    path: '',
    component: TournamentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'addTeam',
    component: AddTeamComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TournamentsComponent,
    RankingComponent,
    AddTournamentComponent,
    AddTeamComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
