import { Component, OnInit } from '@angular/core';
import {User} from  "../../shared/info-client-model"
import {ServiceVehiculeDataService} from "../../service-vehicule-data.service"

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(public serviceVehicule:ServiceVehiculeDataService ) { }

  ngOnInit(): void {}

  deleteService(task: User){
    if(confirm("Are you sure you want to delete?")){
      this.serviceVehicule.deleteTask(task)
    }
  }
}
