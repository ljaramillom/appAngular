import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL = environment.apiURL + 'users/';
  constructor(public http: HttpClient) { }

  getUser(userId: string): Observable<User> {
    const url = this.baseURL + userId;
    return this.http.get<User>(url);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL);
  }
}
