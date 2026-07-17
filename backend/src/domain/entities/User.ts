export type Role = "student" | "teacher" | "admin" ;

export interface User {
    id?: string;
    name:string;
    email:string;
    password:string;
    role: Role;
    isVerified?:boolean;
    status?:"active"|"blocked";
}
