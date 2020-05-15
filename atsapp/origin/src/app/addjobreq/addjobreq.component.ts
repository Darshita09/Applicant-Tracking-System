import { Component, OnInit } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router } from '@angular/router';

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
  jobreqarr:Job_Req[]=[];

  constructor(public _jobreqser:JobrequirementService,public _route:Router) { }

  ngOnInit() {
  }

  onaddjobreq()
  {
    this._jobreqser.AddJobReq(new Job_Req(this.fk_company_id,this.job_type,this.no_of_position,this.shift_time,this.experience,this.salary_package,this.education,this.last_used,this.technical_skill,this.special_skill,this.job_description)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.jobreqarr.push(new Job_Req(this.fk_company_id,this.job_type,this.no_of_position,this.shift_time,this.experience,this.salary_package,this.education,this.last_used,this.technical_skill,this.special_skill,this.job_description));
        alert('Job Requirement added successfully');
        this._route.navigate(['/jobrequirement']);


      }
    );

  }
  onback()
  {
    this._route.navigate(['']);
  }

}
