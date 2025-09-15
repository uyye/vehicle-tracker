export type UserAttributes = {
    id?: number;
    username:string;
    email:string;
    password:string;
    role:string;
    createdAt?: Date;
    updatedAt?: Date
}

export type userState = {
    user:Omit<UserAttributes, 'password'>
    error:null | string;
    loading:boolean
}