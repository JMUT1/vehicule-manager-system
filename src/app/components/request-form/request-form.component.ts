import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{User} from "../../shared/info-client-model"
import {ServiceVehiculeDataService} from '../../service-vehicule-data.service'
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  form: FormGroup
  userInfo: User

  constructor(private formBuiler: FormBuilder, private vehiculeInfoService: ServiceVehiculeDataService, private router: Router ) {
    this.buildForm()
   }

  ngOnInit(): void {}

   private buildForm(){
    this.form = this.formBuiler.group({
    name: ["", [Validators.required]],
    lastName: ["", [Validators.required]],
    registration: ["", [Validators.required]],
    mobile: ["", [Validators.required]],
    address: ["", [Validators.required]],
    pickupDate: ["", [Validators.required]],
    returnDate: ["", [Validators.required]],
    })
   }


SaveSubmit(event: Event){
  event.preventDefault()
  if(this.form.valid){
    console.log(this.form.value);
    this.vehiculeInfoService.addUser(this.form.value);
    this.form.reset()
    this.router.navigateByUrl("/home-screen")
}}

  }

