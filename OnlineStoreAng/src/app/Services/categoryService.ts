import { Category } from './../Models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class CategoryService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Category[]>(`https://localhost:44377/category`);
    }
}