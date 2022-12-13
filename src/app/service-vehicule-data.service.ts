import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from './shared/info-client-model'
import { delay } from 'rxjs';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceVehiculeDataService {

  userInfo: User[]

  deleteUser : User[]

  constructor() {
    this.userInfo = []
   }

  //  LOCALSTORAGE ADD
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

  // GET THE USERS THAT ARE IN THE LOCALSTORAGE
  getUsers(){
    if(localStorage.getItem === null){
      return this.userInfo
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('Users')!)
      return this.userInfo
    }
  }
  // GET USER
  getUser(user: any){
    console.log([JSON.parse(localStorage.getItem('Users')!)[user]]);
      this.userInfo = [JSON.parse(localStorage.getItem('Users')!)[user]]
      return this.userInfo
  }

  // DELETE BNT HOME SCREEN

  deleteTask(task: User){
    for(let i = 0; i< this.userInfo.length; i++ ){
      if(task == this.userInfo[i]){
    let temp = this.userInfo.filter(item => item != task)
    localStorage.setItem("Users", JSON.stringify(temp))
    this.userInfo.splice(i,1)
  }
}}
// URL PARAM
getrouteData(index: any){
  return (`view-client-info/${index}`)
}

// UNDO LOGIC
  undoTask(){
    this.userInfo.pop()
  }

  // DUPLICATES IN THE USERINFO

checkForm(form : any){
  return of ({isFormAvailable: form !== "123"})
  .pipe(
    delay(500)
  )
}

}

