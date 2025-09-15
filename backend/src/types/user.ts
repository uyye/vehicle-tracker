export type UserAttributes = {
    id?: number;
    username:string;
    email:string;
    password:string;
    role?:string;
    createdAt?: Date;
    updatedAt?: Date
}