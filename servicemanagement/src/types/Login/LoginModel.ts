export interface LoginPayload { 
    userName: string,
    password: string
}

export interface OTPPayload { 
    phoneNumber:string
}

export interface LoginResponse { 
    message: string,
    userId: number,
    phoneNumber: string,
    userName: string,
    email: string
}

