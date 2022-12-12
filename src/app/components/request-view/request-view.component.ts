import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ServiceVehiculeDataService} from "../../service-vehicule-data.service"
import {User} from  "../../shared/info-client-model"


@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {

tasks: User[]

clientId: any;


  constructor(private route: ActivatedRoute,  private serviceVehicule:ServiceVehiculeDataService  ) {
    this.route.queryParams.subscribe(data =>{
      console.log(data);

    })
  }



  ngOnInit() {

    this.tasks = this.serviceVehicule.getUser()
    console.log(this.tasks);

  }



  }




