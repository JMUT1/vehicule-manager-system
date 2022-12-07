import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{User} from "../../shared/info-client.model"

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  form: FormGroup
  userInfo: User

  constructor(private formBuiler: FormBuilder) {
    this.buildForm()
   }

  ngOnInit(): void {}

   private buildForm(){
    this.form = this.formBuiler.group({

    })
   }

}
