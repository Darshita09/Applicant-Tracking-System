import { Component, OnInit } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { JobReq_Join } from '../class_model/jobreq_join';

@Component({
  selector: 'app-updatejobreq',
  templateUrl: './updatejobreq.component.html',
  styleUrls: ['./updatejobreq.component.css']
})
export class UpdatejobreqComponent implements OnInit {

  updatejobreqarr:Job_Req[]=[];
  coarr:Company[]=[];
  coNMjoinarr:JobReq_Join[]=[]
  client_job_id:number;
  id:number;
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
  company_id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  isclient:boolean;

  constructor(public _jobreqser:JobrequirementService,public _coser:CompanyService,public _route:Router,public _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['client_job_id'];
    console.log(this.id);
    this._jobreqser.GetAllConmByID(this.id).subscribe(
     
      (data:JobReq_Join[])=>{
             
      this.coNMjoinarr=data;
      this.client_job_id=data[0].client_job_id;
      console.log("hello"+this.client_job_id);
      this.fk_company_id=data[0].fk_company_id;
      this.job_type=data[0].job_type;
      this.no_of_position=data[0].no_of_position;
      this.shift_time=data[0].shift_time;
      this.experience=data[0].experience;
      this.salary_package=data[0].salary_package;
      this.education=data[0].education;
      this.last_used=data[0].last_used;
      this.technical_skill=data[0].technical_skill;
      this.special_skill=data[0].special_skill;
      this.job_description=data[0].job_description;
      this.company_id=data[0].company_id;
      this.co_logo=data[0].co_logo;
      this.co_name=data[0].co_name;
      this.class_of_company=data[0].class_of_company;
      this.co_address=data[0].co_address;
      this.co_phone_no=data[0].co_phone_no;
      this.co_website=data[0].co_website;
      this.co_email_id=data[0].co_email_id;
      this.isclient=data[0].isclient;
      }
    );
   
     //to get all company name
     this._coser.GetAllCompany().subscribe
     (
       (data:Company[])=>
       {
         console.log(data);
         this.coarr=data;
       }
     );
  }
  onSave(){
    this._jobreqser.UpdateJobReq(new Job_Req(this.fk_company_id,this.job_type,this.no_of_position,this.shift_time,this.experience,this.salary_package,this.education,this.last_used,this.technical_skill,this.special_skill,this.job_description,this.fk_BD_id,this.client_job_id)).subscribe(
      (data:any)=>{
        alert("updated.");
        console.log(data);
        this._route.navigate(['/jobrequirement'])
      }
    );
  }
  onback()
  {
    this._route.navigate(['/jobrequirement'])
  }
  onupdatejobreq(){

  }
  }
