export interface LoginUserRequest{
phone:string,
password:string
userType:"STUDENT"
}

export interface ResetPasswordUserRequest{
    sid: string;
    passwordResetToken: string;
    newPassword: string;
}