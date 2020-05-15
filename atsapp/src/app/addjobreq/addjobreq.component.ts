import { Component, OnInit } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addjobreq',
  templateUrl: './addjobreq.component.html',
  styleUrls: ['./addjobreq.component.css']
})
export class AddjobreqComponent implements OnInit {

  fk_company_id:number;
  job_type:string;
  no_of_position:number;
  shift_time:string;
  experience:string;
  salary_package:string;
  education:string;
  last_used:string;
  technical_skill:string;
  special_skill:string;
  job_description:string;
  fk_BD_id:string;
  role:string;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  jobreqarr:Job_Req[]=[];
  coarr:Company[]=[];

  constructor(public _jobreqser:JobrequirementService,public _route:Router,
  public _coser:CompanyService,public _userser:UserService) { }

  ngOnInit() {
    this.role=localStorage.getItem('role');
    this.fk_BD_id=localStorage.getItem('email_id');
    //to get all company name
    this._coser.GetBDClientCompany(this.fk_BD_id).subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.coarr=data;
      }
    );

    this.email_id=localStorage.getItem('email_id');
    this._userser.GetUserById(this.email_id).subscribe
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

    //get BDM Client company
    if(this.role='BDM')
    {
      this._coser.GetBDMClientCO(this.fk_BD_id).subscribe
      (
        (data:Company[])=>
        {
          console.log(data);
          this.coarr=data;
        }
      );
    }

    //get Director client company
    if(this.role='Director')
    {
      this._coser.GetDirectorClientCompany().subscribe
      (
        (data:Company[])=>
        {
          console.log(data);
          this.coarr=data;
        }
      );
    }
  }
  OnGetId(cid:number)
  {
   this.fk_company_id=cid;
   console.log(this.fk_company_id);
  }

  onaddjobreq()
  {
    this.fk_BD_id=localStorage.getItem('email_id');
    console.log(this.fk_company_id);
    this._jobreqser.AddJobReq(new Job_Req(this.fk_company_id,this.job_type,this.no_of_position,this.shift_time,this.experience,this.salary_package,this.education,this.last_used,this.technical_skill,this.special_skill,this.job_description,this.fk_BD_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.jobreqarr.push(new Job_Req(this.fk_company_id,this.job_type,this.no_of_position,this.shift_time,this.experience,this.salary_package,this.education,this.last_used,this.technical_skill,this.special_skill,this.job_description,this.fk_BD_id));
        alert('Job Requirement added successfully');
        this._route.navigate(['/jobrequirement']);


      }
    );

  }
  onback()
  {
    this._route.navigate(['/jobrequirement']);
  }

}
