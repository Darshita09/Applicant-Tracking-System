import { Component, OnInit } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatejobreq',
  templateUrl: './updatejobreq.component.html',
  styleUrls: ['./updatejobreq.component.css']
})
export class UpdatejobreqComponent implements OnInit {

  constructor(public _jobreqser:JobrequirementService,public _route:Router,public _acroute:ActivatedRoute) { }

  client_job_id:number;
  id:number;
  fk_company_id:number;
  job_type:String;
  no_of_position:number;
  shift_time:String;
  experience:String;
  salary_package:String;
  education:String;
  last_used:String;
  technical_skill:String;
  special_skill:String;
  job_description:String;
  updatejobreqarr:Job_Req[]=[];

  ngOnInit() {
    this.id=this._acroute.snapshot.params['client_job_id'];
    this._jobreqser.GetJobReqById(this.id).subscribe(
     
      (data:Job_Req[])=>{
             
     this.updatejobreqarr=data;
            
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
      }
      );
  }

}
