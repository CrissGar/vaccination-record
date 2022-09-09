import { Injectable } from '@angular/core';
import {User} from "./user.module";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUser: User[];
  constructor() {
    this.arrUser = [];
  }

}
