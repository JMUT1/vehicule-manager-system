import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServiceVehiculeDataService} from "../../service-vehicule-data.service"

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {



  constructor(private route: ActivatedRoute,  private serviceVehicule:ServiceVehiculeDataService  ) {
  }

  ngOnInit() {

  }


}
