import { Category } from './../Models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phones } from '../Models/phones';
import { Laptop } from '../Models/laptop';
import { Tablet } from '../Models/tablet';
import { Tv } from '../Models/tv';
import { Pc } from '../Models/pc';
import { Monitor } from '../Models/monitor';
import { Accesory } from '../Models/accesory';


@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient) { }

    getPhones() {
        return this.http.get<Phones[]>(`https://localhost:44377/products/phones`);
    }

    getLaptops() {
        return this.http.get<Laptop[]>(`https://localhost:44377/products/laptops`);
    }

    getTablets() {
        return this.http.get<Tablet[]>(`https://localhost:44377/products/tablets`);
    }

    getTvs() {
        return this.http.get<Tv[]>(`https://localhost:44377/products/tvs`);
    }

    getPcs() {
        return this.http.get<Pc[]>(`https://localhost:44377/products/pcs`);
    }

    getMonitors() {
        return this.http.get<Monitor[]>(`https://localhost:44377/products/monitors`);
    }

    getAccesories() {
        return this.http.get<Accesory[]>(`https://localhost:44377/products/accesories`);
    }
}