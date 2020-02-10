import { Department } from './department';

export interface Product {
    _id?: string;
    name: String;
    departments: Department[];
    stoke: number;
    price: number;
}
