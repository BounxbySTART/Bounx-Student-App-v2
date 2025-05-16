export interface PlayerProfileRequest {
  id: number;
  firstName: string;

  lastName: string;

  dob: Date;

  gender: string;

  isEmergencyContactPrimaryAccount: boolean;

  emergencyName: string;

  emergencyRelationship: string;

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
}
