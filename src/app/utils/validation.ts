import { AbstractControl } from "@angular/forms"
import {ServiceVehiculeDataService} from "../service-vehicule-data.service"
import { map } from 'rxjs/operators';



export class MyValidations {
  static validateForm(userService : ServiceVehiculeDataService){
    return (control: AbstractControl)=>{
      const value = control.value;
      return userService.checkForm(value)
      .pipe(
        map(response =>{
          return response.isFormAvailable ? null : {notAvailable : true}
        })
      )
    }
  }
}
