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

id: string;
tasks: User[]
vehicule:  any = ""



  constructor(private route: ActivatedRoute,  private serviceVehicule:ServiceVehiculeDataService  ) {

  }



  ngOnInit() {this.tasks = this.serviceVehicule.getUser()

  console.log(this.tasks);


  }


  }




