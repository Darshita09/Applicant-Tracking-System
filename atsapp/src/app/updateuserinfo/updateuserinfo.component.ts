import { Component, OnInit } from '@angular/core';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuserinfo',
  templateUrl: './updateuserinfo.component.html',
  styleUrls: ['./updateuserinfo.component.css']
})
export class UpdateuserinfoComponent implements OnInit {

  constructor(public _route:Router,public _userdata:UserService,public _acroute:ActivatedRoute) { }
  
  email_id:string;
  password:string;
  user_name:string;
  date_of_birth:string;
  role:string;
  gender:string;
  mobile_no:string;
  address:string;
  id:string;
  newusername:string="";
  updateuserarr:User[]=[];
  
  ngOnInit() {
    this.id=this._acroute.snapshot.params['email_id'];
    this._userdata.GetUserById(this.id).subscribe(
     
      (data:User[])=>{
             
     this.updateuserarr=data;
            
      this.email_id=data[0].email_id;
      this.password=data[0].password;
      this.user_name=data[0].user_name;
      this.date_of_birth=data[0].date_of_birth;
      this.role=data[0].role;
      this.gender=data[0].gender;
      this.mobile_no=data[0].mobile_no;
      this.address=data[0].address;
            }
         );
       }
      
      onSave()
      {
       this._userdata.UpdateUser(new User(this.email_id,this.password,this.user_name,this.date_of_birth,this.role,this.gender,this.mobile_no,this.address)).subscribe(
        (data:any)=>{
          console.log(this.user_name);
          console.log(this.password);
          console.log(this.gender);
          console.log(this.date_of_birth);
          console.log(this.role);
          console.log(this.mobile_no);
          console.log(this.address);
          console.log(data);
          this.updateuserarr=data;
          confirm('Updated Successfully');
        }
      );
      }
     
      onback()
      {
        this._route.navigate(['/userinfo']);
      }
       onupdateuser()
       {
        
       }
          
       }
  


