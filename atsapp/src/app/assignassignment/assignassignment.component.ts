import { Component, OnInit } from '@angular/core';
import { Assignment } from '../class_model/assignment';
import { User } from '../class_model/user';
import { Job_Req } from '../class_model/job_requirement';
import { JobReq_Join } from '../class_model/jobreq_join';
import { Assignment_Join } from '../class_model/assignment_join';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { Company } from '../class_model/company';
import { AssignmentService } from '../services/assignment.service';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignassignment',
  templateUrl: './assignassignment.component.html',
  styleUrls: ['./assignassignment.component.css']
})
export class AssignassignmentComponent implements OnInit {
  Assignment_id:number;
  fk_Recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  assign_date:string;
  issubmit:boolean;
  submission_date:Date;
  job_type:string;
  assarr:Assignment[]=[];
  assjoinarr:Assignment_Join[]=[];
  jobreqjoinarr:Assignment_JobReq[]=[];
  coarr:Company[]=[];
  userarr:User[]=[];
  reqarr:Job_Req[]=[];
  jobreqarr:JobReq_Join[]=[];
  company_id:number;
  email_id:string;
  role:string;
  positions:Job_Req[]=[];
  constructor(public _assser:AssignmentService,public _route:Router,public _coser:CompanyService,public _userser:UserService,public _jobreqser:JobrequirementService) { }

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
    //to get a job type
    this._assser.GetRecnmByID().subscribe(
      (data:Assignment_Join[])=>{
        console.log(data);
        this.assjoinarr=data;
              }
    );
    //to get a recruiter name
    this._userser.GetRecnmById().subscribe(
      (data:User[])=>{
        console.log(data);
        this.userarr=data;
              }
    );

    if(this.role='BDM')
    {
      this._coser.GetBDMClientCO(this.fk_BD_id).subscribe
      (
        (data:Company[])=>
        {
          console.log(data);
          this.coarr=data;
         // this.id=this.coarr[0].company_id
          //this.dataSource.data=this.companyarr;
        }
      );
    }

    if(this.role='Director')
    {
      this._coser.GetDirectorClientCompany().subscribe
      (
        (data:Company[])=>
        {
          console.log(data);
          this.coarr=data;
         // this.id=this.coarr[0].company_id
          //this.dataSource.data=this.companyarr;
        }
      );
    }
   }
  
  

  onaddAssi()
  {

  }
  /*getComapnyId(id:number){
    console.log(id);
  }*/
  // OnRequirement1(job_type:string){
  //   console.log(job_type);
  // }
  OnClickRec(id:string)
  {
    this.fk_Recruiter_id=id;
    console.log(this.fk_Recruiter_id);
  }
  OnClick(id:number)
  {
    this.company_id=id;
    console.log(this.company_id);
    //console.log(id);
    this._jobreqser.GetCoRequirements(id).subscribe(
      (data:JobReq_Join[])=>{
        console.log(data);
        this.jobreqarr=data;
              }
    )
   }
   OnGetId(cid:number)
   {
    this.fk_client_job_id=cid;
    console.log(this.fk_client_job_id);
   }
   OnRequirement(type:string)
   {
    this.job_type=type;
    //this.fk_client_job_id=id1;
    console.log(this.job_type);
   // console.log("call service");
    this._jobreqser.GetNoofPosition(this.company_id,this.job_type).subscribe(
      (data:Job_Req[])=>{
        console.log(data);
        this.positions=data;
      }
    )
   }
   
   onsubmit()
   {

     this.issubmit=false;
     this.submission_date=null;
     //this.fk_BD_id="darshitasoni155@gmail.com";
     console.log(this.fk_Recruiter_id);
     console.log(this.duration);
     console.log(this.fk_client_job_id);
     console.log(this.fk_BD_id);
     console.log(this.assign_date);
     console.log(this.issubmit);
     console.log(this.submission_date);
    this._assser.AddAssignment(new Assignment(this.fk_Recruiter_id,this.duration,this.fk_client_job_id,this.fk_BD_id,this.assign_date,this.issubmit,this.submission_date)).subscribe(
      (data:any)=>
      {
        console.log(this.assign_date);
        console.log(data);
        this.assarr.push(new Assignment(this.fk_Recruiter_id,this.duration,this.fk_client_job_id,this.fk_BD_id,this.assign_date,this.issubmit,this.submission_date));
        alert('Assignment is assigned successfully');
        this._route.navigate(['/assignment']);


      }
    );
   }
   onback()
   {
     this._route.navigate(['/assignment']);
   }

}
