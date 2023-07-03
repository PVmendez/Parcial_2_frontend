import { Injectable } from '@angular/core';
import Api from '../helpers/api';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  public async login(obj: any) {
    const response = await Api('/login', 'POST', '', obj)
    this.localStorage.set('token', response.token);
    this.router.navigateByUrl('/');
    return response;
  }

  public logout() {
    this.localStorage.clear();
    window.location.reload();
  }
}
