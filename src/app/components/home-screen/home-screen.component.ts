import { Component, OnInit } from '@angular/core';
import {User} from  "../../shared/info-client-model"
import {ServiceVehiculeDataService} from "../../service-vehicule-data.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(public serviceVehicule:ServiceVehiculeDataService, private route: Router) { }

  tasks: User[]
  undoHandler = true;

  ngOnInit(): void {
    this.tasks = this.serviceVehicule.getUsers();

  }

  deleteService(tasks: User){
    if(confirm("Are you sure you want to delete?")){
      this.serviceVehicule.deleteTask(tasks)
    }
  }

  viewInfo(index: any){
     this.route.navigateByUrl(`view-client-info/${index}`)  }

  UndolastInfo(){
    this.serviceVehicule.undoTask()
  }


}
