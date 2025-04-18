export interface VerifyPlayerUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  deviceId?: string;
  pushToken?: string;
}

export interface PlayerUserRequest extends VerifyPlayerUserRequest {
  sid?: string;
  OTP?: string;
}
