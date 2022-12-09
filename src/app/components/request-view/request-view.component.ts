import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, TitleStrategy } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/info-client-model';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrls: ['./request-view.component.css']
})
export class RequestViewComponent implements OnInit {
user: {id: number}


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.activatedRoute.snapshot.params['id']
    };
    this.activatedRoute.params.subscribe((data: Params)=>{
      this.user = {
        id: data['id']
      }
    })
  }

}
