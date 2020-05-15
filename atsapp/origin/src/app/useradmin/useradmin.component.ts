import { Component, OnInit } from '@angular/core';
import { User } from '../class_model/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-useradmin',
  templateUrl: './useradmin.component.html',
  styleUrls: ['./useradmin.component.css']
})
export class UseradminComponent implements OnInit {

  email_id:string;
  password:string;
  user_name:string;
  date_of_birth:string;
  role:string='Director';
  gender:string='female';
  mobile_no:string;
  address:string;
  userarr:User[]=[];
  
  constructor(public _route:Router,public _userdata:UserService) { }

  ngOnInit() {
    this._userdata.GetAllUser().subscribe(
      (data:User[])=>{
        console.log(data);
        this.userarr=data;
      }
    )
  }

  addForm(item){
    console.log(item);
  }


  onchange()
  {
    console.log(this.role);
  }
  onsign()
  {
    this._userdata.AddUser(new User(this.email_id,this.password,this.user_name,this.date_of_birth,this.role,this.mobile_no,this.gender,this.address)).subscribe(
      (data:any)=>
      {
        console.log(this.date_of_birth);
        console.log(data);
        this.userarr.push(new User(this.email_id,this.password,this.user_name,this.date_of_birth,this.role,this.gender,this.mobile_no,this.address));
        alert('User is added successfully');
        this._route.navigate(['']);


      }
    );

}
onback()
{
  this._route.navigate(['']);
}

}
