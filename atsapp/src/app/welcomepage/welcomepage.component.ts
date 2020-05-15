import { Component, OnInit } from '@angular/core';
import { User } from 'origin/src/app/class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  email_id:string;
  role:string;
  user_name:string;
  userarr:User[]=[]
  constructor(public _data:UserService) { }

  ngOnInit() {
   
    this.email_id=localStorage.getItem('email_id');
    this._data.GetUserById(this.email_id).subscribe
    (
      (data:User[])=>
      {
        console.log(data);
        this.userarr=data;
        //this.dataSource.data=this.userarr;
      }
    );
    this.role=localStorage.getItem('role');
    console.log('role'+this.role);
    this.user_name=localStorage.getItem('email_id');
    console.log('user name'+this.user_name);
  }

}
