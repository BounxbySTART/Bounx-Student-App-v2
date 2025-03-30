export interface LoginUserRequest{
phone:string,
password:string
userType:"PLAYER"
}

export interface ResetPasswordUserRequest{
    sId: string;
    passwordResetToken: string;
    newPassword: string;
}