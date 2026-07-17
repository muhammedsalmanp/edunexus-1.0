export interface RegisterUserInputDTO {
    name: string;
    email: string;
    password: string;
    role?: "student" | "teacher";
}