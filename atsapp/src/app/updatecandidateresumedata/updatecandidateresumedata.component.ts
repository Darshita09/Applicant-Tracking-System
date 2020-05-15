import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate_Resume_Data } from '../class_model/candi_resume_data';
import { CandidateresumedataService } from '../services/candidateresumedata.service';
import { Router } from '@angular/router';
import { CandidateResumeJOINData } from '../class_model/CandiResumeJoin';
import { CandidateService } from '../services/candidate.service';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { AssignmentService } from '../services/assignment.service';
import { Assignment } from '../class_model/assignment';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { Candidate } from '../class_model/candidate';

@Component({
  selector: 'app-updatecandidateresumedata',
  templateUrl: './updatecandidateresumedata.component.html',
  styleUrls: ['./updatecandidateresumedata.component.css']
})
export class UpdatecandidateresumedataComponent implements OnInit {

  candidate_resume_id:number;
  fk_company_id:number;
  fk_client_job_id:number;
  candi_Name:string;
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
  company_id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  client_job_id:number;
  job_type:string;
  no_of_position:number;
  Assignment_id:number;
  candidate_id:number;
  candidate_name:string;
  role:string;
  email_id:string;
  user_name:string;
  id:number;
  userarr:User[]=[];
  coarr:Company[]=[];
  assignidarr:Assignment[]=[];
  jobreqarr:JobReq_Join[]=[];
  candidatearr:Candidate[]=[];
  cobyassignIDarr:Assignment_JobReq[]=[];
  candiresumearr:Candidate_Resume_Data[]=[];
  candiresumeJOINarr:CandidateResumeJOINData[]=[];

  constructor(public _acroute:ActivatedRoute,public _candiresumeser:CandidateresumedataService,public _route:Router,
    public _candiser:CandidateService,public _userser:UserService,public _coser:CompanyService,public _assiser:AssignmentService,
  public _jobreqser:JobrequirementService) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['candidate_resume_id'];
    console.log("Resume ID"+ this.id);

    //console.log("candiate arr"+this.candidate_name);  
    this._candiresumeser.GetResumeDataForUpdate(this.id).subscribe(
      (data:CandidateResumeJOINData[])=>{
        this.candiresumeJOINarr=data;
        console.log(data);

        this.candidate_resume_id=data[0].candidate_resume_id;
        console.log("ngoninit"+this.candidate_resume_id);
        this.fk_company_id=data[0].fk_company_id;
        this.fk_client_job_id=data[0].fk_client_job_id;
        this.candidate_Email=data[0].candidate_Email;
        this.candidate_Phone=data[0].candidate_Phone;
        this.candidate_Address=data[0].candidate_Address;
        this.candidate_hometown=data[0].candidate_hometown;
        this.candidate_experience=data[0].candidate_experience;
        this.current_salary=data[0].current_salary;
        this.expected_salary=data[0].expected_salary;
        this.candi_education=data[0].candi_education;
        this.candi_last_used=data[0].candi_last_used;
        this.candi_technical_skill=data[0].candi_technical_skill;
        this.candi_special_skill=data[0].candi_special_skill;
        this.candi_job_desc=data[0].candi_job_desc;
        this.fk_Recruiter_id=data[0].fk_Recruiter_id;
        this.sending_date=data[0].sending_date;
        this.fk_Assignment_id=data[0].fk_Assignment_id;
        this.fk_candidate_id=data[0].fk_candidate_id;
        this.company_id=data[0].company_id;
        this.co_logo=data[0].co_logo;
        this.co_name=data[0].co_name;
        this.class_of_company=data[0].class_of_company;
        this.client_job_id=data[0].client_job_id;
        this.job_type=data[0].job_type;
        this.no_of_position=data[0].no_of_position;
        this.Assignment_id=data[0].Assignment_id;
        this.candidate_id=data[0].candidate_id;
        this.candidate_name=data[0].candidate_name;
        this.email_id=data[0].email_id;
        this.user_name=data[0].user_name;
        this.role=data[0].role;        
      }
    );

    this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.coarr=data;
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
     //for display the candidate name
    this._candiser.GetRecCandidateNM(this.fk_Recruiter_id).subscribe(
      (data:Candidate[])=>{
        console.log(data);
        this.candidatearr=data;
      }
    );
    this.role=localStorage.getItem('role');
    if(this.role=='Director')
    {
      this._assiser.GetAllAssignment().subscribe(
        (data:Assignment[])=>{
          console.log(data);
         this.assignidarr=data;
        }
      );

      this._candiser.GetAllCandidate().subscribe(
        (data:Candidate[])=>{
          console.log(data);
          this.candidatearr=data;
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
  OngetName(name:string)
  {
    this.co_name=name;
    console.log(this.co_name);
  }
  OnGetJobtype(type:string)
  {
    this.job_type=type;
    console.log(this.job_type);
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
   onSave()
   {
    this._candiresumeser.UpdateCandidateResume(new Candidate_Resume_Data(this.candidate_resume_id,this.fk_company_id,this.fk_client_job_id,this.candidate_Email,this.candidate_Phone,this.candidate_Address,this.candidate_hometown,this.candidate_experience,this.current_salary,this.expected_salary,this.candi_education,this.candi_last_used,this.candi_technical_skill,this.candi_special_skill,this.candi_job_desc,this.fk_Recruiter_id,this.sending_date,this.fk_Assignment_id,this.fk_candidate_id)).subscribe(
      (data:any)=>{
        alert("updated.");
        console.log(data);
        this._route.navigate(['/candidateresumedata']);
      }
    );
   }
   onback()
   {
     this._route.navigate(['/candidateresumedata']);
   }
}

