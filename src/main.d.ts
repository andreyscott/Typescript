interface User {
    name: string;
    age: number;
    value: boolean;
    getMessage?(): string | null;
}
declare const newUser: User;
