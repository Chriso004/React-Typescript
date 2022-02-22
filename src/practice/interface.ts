export interface Address {
    location: string;
    number: number;
}

export interface User {
    name: string;
    age: number;
    country: string;
    address: Address;
    admin: boolean;
}
