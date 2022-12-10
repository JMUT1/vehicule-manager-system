import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './shared/info-client-model'

@Injectable({
  providedIn: 'root'
})
export class ServiceVehiculeDataService {

  userInfo: User[]

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
  getUser(){
    if(localStorage.getItem === null){
      return this.userInfo
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('Users')!)
      return this.userInfo
    }
  }


  // DELETE BNT HOME SCREEN

  deleteTask(task: User){
for(let i = 0; i< this.userInfo.length; i++ ){
  if(task == this.userInfo[i]){
    this.userInfo.splice(i,1)
    // AQUI PODEMOS BORRAR DEL LOCALSTORAGE EL DOCUMENTO COMPLETO
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

}

