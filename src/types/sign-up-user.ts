export interface SignUpUser{
    firstName: string;
    lastName: string;
    phoneCode:string;
    phone: string;
    email:string;
    deviceId?:string;
    pushTaken?:string;
    password:string;
    isTermsAgreed:boolean;
    sId?:string;
    OTP?:string;
    isPasswordReset:boolean;
    passwordResetToken?:string;
}
