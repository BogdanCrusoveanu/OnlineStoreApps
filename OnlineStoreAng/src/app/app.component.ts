import { MediaMatcher } from '@angular/cdk/layout';
import { CategoryService } from "./Services/categoryService";
import { Category } from "./Models/category";
import { Component, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "./Models/User";
import { AuthenticationService } from "./Services/authentication.service";
import { Role } from "./Models/role";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  currentUser: User;
  mobileQuery: MediaQueryList;
  private categories: Category[];
  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  ngOnInit() {
    this.getCategories();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.userRole === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }

  isLoggedIn() {
    const loggedInUser = this.authenticationService.currentUserValue;
    if (loggedInUser == null) {
      return false;
    } else return true;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getCategories() {
    this.categoryService.getAll().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }
}
