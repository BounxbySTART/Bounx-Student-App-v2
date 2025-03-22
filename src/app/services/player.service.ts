import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpService) {}

  playerProfileDetail(body: PlayerProfileRequest) {
    return this.http.post<PlayerProfileRequest>(
      environment.masterUrl.concat('profile/player'),
      body
    );
  }

  getPlayerProfiles(){
    return this.http.get(environment.masterUrl.concat('profile/all'))
  }

}
