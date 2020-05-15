import { Component, OnInit } from '@angular/core';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { EmailverifyService } from '../services/emailverify.service';
import { EmailVerify } from '../class_model/emailverify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email_id:string="";
  password:string="";
  role:string;
  user_name:string;
  msg:string="";
  message:string;
  subject:string="SIYANA INFO SOLUTIONS...!!";
  loginarr:User[]=[];
  constructor(public _loginser:UserService,public _route:Router,
    public _emailser:EmailverifyService) { }

  ngOnInit() {
  }
  onlogiuser()
  {

  }
  onLogin()
  {
    
    //console.log(this.email_id);
    //console.log(this.Password);
   // console.log("hello");
    this._loginser.GetUserByLogin(new User(this.email_id,this.password,this.role)).subscribe(
      (data:User[])=>{
        this.loginarr=data;
        console.log(this.email_id);
        console.log(this.password);
        //console.log(this.role);
        console.log(this.loginarr);
        console.log(data.length);
        if(data.length==1){
          //localStorage.setItem('email_id',this.email_id);
          this.role=data[0].role;
          console.log("Role - "+this.role);
        localStorage.setItem('role',this.role);
        
          if(this.role=="Director")
          {
            localStorage.setItem('email_id',this.email_id);
            this._route.navigate(['/welcomepage']);
          }
          if(this.role=="BD")
          {
            localStorage.setItem('email_id',this.email_id);
            this._route.navigate(['/welcomepage']);
          }
          if(this.role=="BDM")
          {
            localStorage.setItem('email_id',this.email_id);
            this._route.navigate(['/welcomepage']);
          }
          if(this.role=="Recruiter")
          {
            localStorage.setItem('email_id',this.email_id);
            this._route.navigate(['/welcomepage']);
          }
          //this._route.navigate(['/userinfo']);
          alert("Login Successfully");
        }
        else
        {
          alert("Invalid User name and Password");
        }
      }
    );
  }
  onGetUser(userrole:string)
  {
    // this.role=userrole;
    // if(this.role='Business Developer')
    // {
    //   console.log(this.role);
    // }
    // else
    // {
    //   console.log(this.role);
    // }
  }
  onClickforgot()
  {
    this._loginser.GetUserById(this.email_id).subscribe(
      (data:User[])=>{
        if(data.length>0)
        {
          this.password=data[0].password;
          this._emailser.sendmail(new EmailVerify(this.email_id,this.subject,"your password is "+this.password)).subscribe(
            (data:EmailVerify[])=>{
            }
          )
          alert('password will send on your Email account...');
        }
        else
        {
          alert('Email is not correct');
        }
      }
    )
  }
}
