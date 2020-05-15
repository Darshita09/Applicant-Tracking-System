import { Component, OnInit } from '@angular/core';
import { Candidate_Resume_Data } from '../class_model/candi_resume_data';
import { CandidateResumeJOINData } from '../class_model/CandiResumeJoin';
import { CandidateresumedataService } from '../services/candidateresumedata.service';
import { Router } from '@angular/router';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { CandidateJoin } from '../class_model/candidate_join';
import { CandidateService } from '../services/candidate.service';
import { Assignment } from '../class_model/assignment';
import { AssignmentService } from '../services/assignment.service';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { Candidate } from '../class_model/candidate';

@Component({
  selector: 'app-addcandidateresumedata',
  templateUrl: './addcandidateresumedata.component.html',
  styleUrls: ['./addcandidateresumedata.component.css']
})
export class AddcandidateresumedataComponent implements OnInit {

  candidate_resume_id:number;
  fk_company_id:number;
  fk_client_job_id:number;
  candidate_Email:string;
  candidate_Phone:string;
  candidate_Address:string;
  candidate_hometown:string;
  candidate_experience:string;
  current_salary:string;
  expected_salary:string;
  candi_education:string;
  candi_last_used:string;
  candi_technical_skill:string;
  candi_special_skill:string;
  candi_job_desc:string;
  fk_Recruiter_id:string;
  sending_date:string;
  fk_Assignment_id:number;
  fk_candidate_id:number;
  role:string
  jobreqarr:JobReq_Join[]=[];
  coarr:Company[]=[];
  assignidarr:Assignment[]=[];
  candiarr:Candidate[]=[];
  cobyassignIDarr:Assignment_JobReq[]=[];
  candiresumearr:Candidate_Resume_Data[]=[];
  candiresumeJOINarr:CandidateResumeJOINData[]=[];

  constructor(public _candiresumeser:CandidateresumedataService,public _route:Router,
  public _jobreqser:JobrequirementService,public _coser:CompanyService,
  public _assiser:AssignmentService,public _candiser:CandidateService) { }

  ngOnInit() {
    this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.coarr=data;
       // this.id=this.coarr[0].company_id
        //this.dataSource.data=this.companyarr;
      }
    );

    //for dispalying assignment number
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    this._assiser.GetRecAssignID(this.fk_Recruiter_id).subscribe
    (
      (data:Assignment[])=>
      {
        console.log(data);
        this.assignidarr=data;
      }
    );

    this._candiser.GetRecCandidateNM(this.fk_Recruiter_id).subscribe(
      (data:Candidate[])=>{
        console.log(data);
        this.candiarr=data;
      }
    );
    this.role=localStorage.getItem('role');
    console.log('role'+this.role);
    if(this.role=="Director")
    {
      this._assiser.GetAllAssignment().subscribe(
        (data:Assignment[])=>{
          console.log(data);
          this.assignidarr=data;
        }
      );
      this._coser.GetAllCompany().subscribe(
        (data:Company[])=>{
          console.log(data);
          this.coarr=data;
        }
      );
      this._candiser.GetDirApprovedCONM().subscribe(
        (data:Candidate[])=>{
          console.log(data);
          this.candiarr=data;
        }
      )
    }
  }
  OnClick(id:number)
  {
    this.fk_company_id=id;
    console.log(this.fk_company_id);
    //console.log(id);
    this._jobreqser.GetCoRequirements(id).subscribe(
      (data:JobReq_Join[])=>{
        console.log(data);
        this.jobreqarr=data;
      }
    );
  }
  OnGetCompany(id:number)
  {
    this._assiser.GetConmByAssignID(id).subscribe(
      (data:any)=>{
        console.log(data);
        this.cobyassignIDarr=data;
      }
    )
  }
  OnGetId(cid:number)
   {
    this.fk_client_job_id=cid;
    console.log(this.fk_client_job_id);
   }
   OnAssignID(aid:number)
   {
     this.fk_Assignment_id=aid;
     console.log(this.fk_Assignment_id);
   }
   OnGetCandiID(id:number)
   {
     this.fk_candidate_id=id;
     console.log(this.fk_candidate_id);
   }
   OnAddCandiResume()
   {
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    console.log(this.fk_company_id);
    this._candiresumeser.AddCandidateResume(new Candidate_Resume_Data(this.candidate_resume_id,this.fk_company_id,this.fk_client_job_id,this.candidate_Email,this.candidate_Phone,this.candidate_Address,this.candidate_hometown,this.candidate_experience,this.current_salary,this.expected_salary,this.candi_education,this.candi_last_used,this.candi_technical_skill,this.candi_special_skill,this.candi_job_desc,this.fk_Recruiter_id,this.sending_date,this.fk_Assignment_id,this.fk_candidate_id)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.candiresumearr.push(new Candidate_Resume_Data(this.candidate_resume_id,this.fk_company_id,this.fk_client_job_id,this.candidate_Email,this.candidate_Phone,this.candidate_Address,this.candidate_hometown,this.candidate_experience,this.current_salary,this.expected_salary,this.candi_education,this.candi_last_used,this.candi_technical_skill,this.candi_special_skill,this.candi_job_desc,this.fk_Recruiter_id,this.sending_date,this.fk_Assignment_id,this.fk_candidate_id));
        alert('Candidate Resume added successfully');
        this._route.navigate(['/candidateresumedata']);


      }
    );
   }
   onback()
   {
     this._route.navigate(['/candidateresumedata']);
   }
}
