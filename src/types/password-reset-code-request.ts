export interface PasswordResetCode {
  phone: string;
  phoneCode: string;
  userType: 'PLAYER';
}

export interface VerifyPasswordResetCode extends PasswordResetCode {
  sId?: string;
  OTP?: string;
}
