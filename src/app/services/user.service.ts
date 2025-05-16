import { Injectable } from '@angular/core';

export interface User {
  accessToken: string;
  firstName: string;
  lastName: string;
  phoneCode: string;
  phone: string;
}

export interface StudentFavLocation {
  id: number;
  student_profiles_id: string;
  academy_location_id: string;
}
export interface CurrentProfile {
  id: number;
  user: User;
  firstName: string;
  lastname: string;
  dob: string;
  gender: string;
  isEmergencyContactPrimaryAccount: boolean;
  emergencyName: string;
  emergencyRelationship: string;
  emergencyPhoneCode: string;
  emergencyPhone: string;
  profilePicture: string;
  allergies: string;
  medicalConditions: string;
  addStreet: string;
  addCity: string;
  addPostCode: string;
  addState: string;
  addCountry: string;
  school: string;
  favLocations: StudentFavLocation[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user!: User;
  currentProfile!: CurrentProfile;
  profiles: any[] = [];
  constructor() {
    const userVal = localStorage.getItem('user');
    if (userVal) {
      this.user = JSON.parse(userVal);
    }

    const currentProfileVal = localStorage.getItem('currentProfile');
    if (currentProfileVal) {
      this.currentProfile = JSON.parse(currentProfileVal);
    }
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  setCurrentProfile(currentProfile: CurrentProfile) {
    this.currentProfile = currentProfile;
    localStorage.setItem('currentProfile', JSON.stringify(currentProfile));
  }
}
