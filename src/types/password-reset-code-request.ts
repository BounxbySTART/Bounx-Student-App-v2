export interface PasswordResetCode {
  phone: string;
  phoneCode: string;
  userType: 'STUDENT';
}

export interface VerifyPasswordResetCode extends PasswordResetCode {
  sid?: string;
  OTP?: string;
}
