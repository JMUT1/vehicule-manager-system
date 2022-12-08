import { Injectable } from '@angular/core';
import {User} from './shared/info-client-model'

@Injectable({
  providedIn: 'root'
})
export class ServiceVehiculeDataService {

  userInfo: User[]

  constructor() {
    this.userInfo = []
   }

   addUser(info: User){
    this.userInfo = [];
    if(localStorage.getItem('Users') === null){
      this.userInfo.push(info);
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }else{
      this.userInfo.push(info)
      this.userInfo = JSON.parse(localStorage.getItem('Users')!)
      this.userInfo.push(info)
      localStorage.setItem('Users', JSON.stringify(this.userInfo))
    }
  }
}

