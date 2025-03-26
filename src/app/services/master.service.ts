import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment';
import { PlayerUserRequest, VerifyPlayerUserRequest } from 'src/types/player-user-request';
import { LoginUserRequest } from 'src/types/login-user-request';
import { PlayerProfileRequest } from 'src/types/player-profile-request';

@Injectable({
  providedIn: 'root',
})
export class MasterService {

  constructor(private http: HttpService) { }
  getAllCountries(searchText?: string) {
    return this.http.get(
      environment.masterUrl.concat(`master/countries/${searchText ?? ''}`)
    ); //returning Observable
  }

  createPlayerUser(body: PlayerUserRequest) {
    if(!body.sId||!body.OTP) throw new Error("sId and OTP is required");
    return this.http.post(environment.masterUrl.concat('auth/player'), body);
  }

  verifyPlayerUser(body: VerifyPlayerUserRequest){
    return this.http.post(environment.masterUrl.concat('auth/verify-player-user'), body);
  }

  login(body: LoginUserRequest){
      return this.http.post(environment.masterUrl.concat('auth/login'), body)
  }




}
