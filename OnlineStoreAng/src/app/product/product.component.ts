import { Phones } from "./../Models/phones";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../Services/products.service";
import { Laptop } from '../Models/laptop';
import { Tablet } from '../Models/tablet';
import { Tv } from '../Models/tv';
import { Pc } from '../Models/pc';
import { Monitor } from '../Models/monitor';
import { Accesory } from '../Models/accesory';
import { Router } from '@angular/router';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  private phones: Phones[];
  private laptops: Laptop[];
  private tablets: Tablet[];
  private tvs: Tv[];
  private pcs: Pc[];
  private monitors: Monitor[];
  private accesories: Accesory[];

  constructor(
    private productsService: ProductService,
    private router: Router
  ) {}

  public link : number = 0; 

  ngOnInit() {
    this.getPhones();
    this.getLaptops();
    this.getTablets();
    this.getTvs();
    this.getPcs();
    this.getMonitors();
    this.getAccesories();
    this.link = this.router.url.lastIndexOf('/') + 1;
  }

  getPhones() {
    this.productsService.getPhones().subscribe(res => {
      this.phones = res;
      console.log(this.phones);
    });
  }

  getLaptops() {
    this.productsService.getLaptops().subscribe(res => {
      this.laptops = res;
      console.log(this.laptops);
    });
  }

  getTablets() {
    this.productsService.getTablets().subscribe(res => {
      this.tablets = res;
      console.log(this.tablets);
    });
  }

  getTvs() {
    this.productsService.getTvs().subscribe(res => {
      this.tvs = res;
      console.log(this.tvs);
    });
  }

  getPcs() {
    this.productsService.getPcs().subscribe(res => {
      this.pcs = res;
      console.log(this.pcs);
    });
  }

  getMonitors() {
    this.productsService.getMonitors().subscribe(res => {
      this.monitors = res;
      console.log(this.monitors);
    });
  }

  getAccesories() {
    this.productsService.getAccesories().subscribe(res => {
      this.accesories = res;
      console.log(this.accesories);
    });
  }
}
