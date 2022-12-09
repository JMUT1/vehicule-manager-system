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

  tasks: User[]
  ngOnInit(): void {
    this.tasks = this.serviceVehicule.getUser();
    console.log(this.tasks);


  }





  deleteService(task: User){
    if(confirm("Are you sure you want to delete?")){
      this.serviceVehicule.deleteTask(task)
    }
  }
}
