import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { PlayerProfileRequest } from 'src/types/player-profile-request';
import { environment } from 'src/environments/environment';
import { CurrentProfile } from './user.service';
import { StudentFavLocation } from 'src/types/student-fav-location-request';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  constructor(private http: HttpService) {}

  playerProfileDetail(body: PlayerProfileRequest) {
    return this.http.post<CurrentProfile>(
      environment.masterUrl.concat('profile/player'),
      body
    );
  }

  studentFavLocationDetail(body: StudentFavLocation) {
    return this.http.post<StudentFavLocation>(
      environment.masterUrl.concat('student/fav-location'),
      body
    );
  }

  studentProfilePictureUpload(profileId: number, file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.put(
      environment.masterUrl.concat('student/' + profileId),
      formData
    );
  }

  getPlayerProfiles() {
    return this.http.get(environment.masterUrl.concat('profile/all'));
  }

  playerProfileRemove(id: number) {
    return this.http.delete(environment.masterUrl.concat('profile/' + id));
  }

  setupIntent(body: any) {
    return this.http.post(
      environment.masterUrl.concat('user-payments/initiate-setup'),
      body
    );
  }

  completeIntent(body: { customerId: string; intentClientSecret: string }) {
    return this.http.post(
      environment.masterUrl.concat('user-payments/complete-setup'),
      body
    );
  }
}
