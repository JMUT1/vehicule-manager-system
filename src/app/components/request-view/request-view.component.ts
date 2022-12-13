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

  constructor(private route: ActivatedRoute,  private serviceVehicule:ServiceVehiculeDataService  ) {}

  id: number
  detailClient : any

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params['id']
    })

    this.tasks = this.serviceVehicule.getUser(this.id)
  }
}
