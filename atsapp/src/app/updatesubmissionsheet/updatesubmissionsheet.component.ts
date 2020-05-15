import { Component, OnInit } from '@angular/core';
import { SubmissionsheetService } from '../services/submissionsheet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { submissionsheet } from '../class_model/submissionsheet';
import {submissionalljoin  } from '../class_model/submission_alljoin';
import { CompanyService } from '../services/company.service';
import {CandidateService  } from '../services/candidate.service';
import { Company } from '../class_model/company';
import { candidateNM } from '../class_model/candidateNM';
import { Candidate } from '../class_model/candidate';


@Component({
  selector: 'app-updatesubmissionsheet',
  templateUrl: './updatesubmissionsheet.component.html',
  styleUrls: ['./updatesubmissionsheet.component.css']
})
export class UpdatesubmissionsheetComponent implements OnInit {

  submission_id:number;
  submission_date:string;
  fk_company_id:number;
  fk_candidate_id:number;
  fk_user_id:string;
   candidate_id:number;
   candidate_name:string;
   Resume:string;
   call_date:string;
   call_time:string;
   call_status:string;
   fk_client_job_id:number;
   interview_date:string;
   status:string;
   company_id:number;
   co_logo:string;
   co_name:string;
   class_of_company:string;
   co_address:string;
   co_phone_no:string;
   co_website:string;
   co_email_id:string;
   isclient:string;
   email_id:string;
   password:string;
   user_name:string;
   date_of_birth:string;
   role:string;
   gender:string;
   mobile_no:string;
   address:string;
  id:number;
  coarr:submissionsheet[]=[];
  subsheetjoin:submissionalljoin[]=[];
  companyarr:Company[]=[];
  candidatearr:Candidate[]=[];
  candiarr:candidateNM[]=[];

  constructor(public _subsheetser:SubmissionsheetService,public _route:Router,public _acroute:ActivatedRoute,
    public _coser:CompanyService,public _candiser:CandidateService) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['submission_id'];
    this._subsheetser.GetConmById(this.id).subscribe
    (
      (data:submissionalljoin[])=>
      {
        console.log(data);
        this.subsheetjoin=data;
       // this.coarr=data;
        this.submission_id=data[0].submission_id;
        this.submission_date=data[0].submission_date;
        this.fk_company_id=data[0].fk_company_id;
        this.fk_candidate_id=data[0].fk_candidate_id;
        this.fk_user_id=data[0].fk_user_id;
       // this.candidate_name[0].candidate_name;
       this.candidate_id=data[0].candidate_id;
       this.candidate_name=data[0].candidate_name;
       this.Resume=data[0].Resume;
       this.call_date=data[0].call_date;
       this.call_time=data[0].call_time;
       this.call_status=data[0].call_status;
       this.fk_client_job_id=data[0].fk_client_job_id;
       this.interview_date=data[0].interview_date;
       this.status=data[0].status;
       this.company_id=data[0].company_id;
       this.co_logo=data[0].co_logo;
       this.co_name=data[0].co_name;
       this.class_of_company=data[0].class_of_company;
       this.co_address=data[0].co_address;
       this.co_phone_no=data[0].co_phone_no;
       this.co_website=data[0].co_website;
       this.email_id=data[0].email_id;
       this.password=data[0].password;
       this.user_name=data[0].user_name;
       this.password=data[0].password;
       this.user_name=data[0].user_name;
       this.date_of_birth=data[0].date_of_birth;
       this.role=data[0].role;
       this.gender=data[0].gender;
       this.mobile_no=data[0].mobile_no;
       this.address=data[0].address;
       

       
      }
    );
    this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.companyarr=data;
       // this.id=this.coarr[0].company_id
        //this.dataSource.data=this.companyarr;
      }
    );
    this._candiser.GetAllCandidate().subscribe(
      (data:Candidate[])=>
      {
        console.log(data);
        this.candidatearr=data;
        
      }
    );
    
  }

  OnClick(id:number)
  {
    this.fk_company_id=id;
    console.log(this.fk_company_id);
    this._candiser.GetCandiNM(id).subscribe(
      (data:Candidate[])=>{
        console.log(data);
        this.candidatearr=data;
      }
    )
  }
  OnCandidate(id:number)
  {
    this.fk_candidate_id=id;
    console.log(this.fk_candidate_id);
    // this._candiser.GetCandiNM(id).subscribe(
    //   (data:Candidate[])=>{
    //     console.log(data);
    //     this.candidatearr=data;
    //   }

    
  }
  // OnClick1(id:number)
  // {
  //   this.fk_candidate_id=this.id;
  //   console.log(this.fk_candidate_id);
  //   this._candiser.GetCandiNM(id).subscribe(
  //    (data:Candidate[])=>{
  //      console.log(data);
  //      this.candidatearr=data;
  //    } 

  //   )
  // }
  OnSave()
  {
    this.fk_user_id="renukasolanki99@gmail.com";
    console.log(this.submission_date);
    console.log(this.fk_company_id);
    console.log(this.fk_candidate_id);
    console.log(this.fk_user_id);
    this._subsheetser.UpdateSubmissionsheet(new submissionsheet(this.submission_date,this.fk_company_id,this.fk_candidate_id,this.fk_user_id,this.submission_id)).subscribe(
      (data:any)=>{
        console.log(this.submission_date);
        console.log(data);
        //this.coarr.push(new submissionsheet(this.submission_date,this.fk_company_id,this.fk_candidate_id,this.fk_user_id));
        alert("submissionsheet update successfully");
        this._route.navigate(['/submissionsheet']);
      }
    );
  }
  onback()
  {
    this._route.navigate(['/submissionsheet']);
  }
}
