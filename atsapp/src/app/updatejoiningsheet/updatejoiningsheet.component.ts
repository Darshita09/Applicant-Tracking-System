import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { joiningsheet } from '../class_model/joiningsheet';
import { JoiningsheetService } from '../services/joiningsheet.service';
import {CompanyService  } from '../services/company.service';
import {  CandidateService} from '../services/candidate.service';
import { Company } from '../class_model/company';
import { Candidate } from '../class_model/candidate';
import { candidateNM } from '../class_model/candidateNM';
import { Candidatestatus } from '../class_model/candidate_status';
import {CandidateJoin} from '../class_model/candidate_join';
import{joinsheetalljoin} from '../class_model/joinsheet_alljoin'; 

@Component({
  selector: 'app-updatejoiningsheet',
  templateUrl: './updatejoiningsheet.component.html',
  styleUrls: ['./updatejoiningsheet.component.css']
})
export class UpdatejoiningsheetComponent implements OnInit {

  joiningsheet_id:number;
  joining_date:string;
  fk_company_id:number;
  fk_candidate_id:number;
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
 candidate_id:number;
 candidate_name:string;
 Resume:string;
 call_date:string;
 call_time:string;
 call_status:string;
 fk_client_job_id:number;
 interview_date:Date;
 status:string;
 id:number;
coarr:joiningsheet[]=[];
joinsheetjoinarr:joinsheetalljoin[]=[];
companyarr:Company[]=[];
candidatearr:Candidate[]=[];
candidatejoinarr:CandidateJoin[]=[];
candidatestatus:Candidatestatus[]=[];
candiarr:candidateNM[]=[];

  constructor(public _joinsheetser:JoiningsheetService,public _route:Router,public _acroute:ActivatedRoute,
    public _coser:CompanyService,public _candiser:CandidateService) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['joiningsheet_id'];
    console.log(this.id);
    console.log("renuka"+this.id);
    this._joinsheetser.GetAllUpdateNMById(this.id).subscribe
    // this._candiser.GetCandidateByStatus(this.id).subscribe
    (
      (data:joinsheetalljoin[])=>
      // (data:CandidateJoin[])=>
      {
        console.log(data);
        this.joinsheetjoinarr=data;

        this.joiningsheet_id=data[0].joiningsheet_id;
        console.log("hiiii"+this.joiningsheet_id);

        this.joining_date=data[0].joining_date;
        this.fk_company_id=data[0].fk_company_id;
        this.fk_candidate_id=data[0].fk_candidate_id;
        this.company_id=data[0].company_id;
       this.co_logo=data[0].co_logo;
       this.co_name=data[0].co_name;
       this.class_of_company=data[0].class_of_company;
       this.co_address=data[0].co_address;
       this.co_phone_no=data[0].co_phone_no;
       this.co_website=data[0].co_website;
       this.co_email_id=data[0].co_email_id;
       this.isclient=data[0].isclient;
       this.candidate_id=data[0].candidate_id;
       this.candidate_name=data[0].candidate_name;
       this.Resume=data[0].Resume;
       this.call_date=data[0].call_date;
       this.call_time=data[0].call_time;
       //this.call_time=data[0].call_time;
       this.call_status=data[0].call_status;
       this.fk_client_job_id=data[0].fk_client_job_id;
       this.interview_date=data[0].interview_date;
       this.status=data[0].status;


       
      }
    );
    this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>{
        console.log(data);
        this.companyarr=data;
      }
    )
    this._candiser.GetAllCandidate().subscribe(
      (data:Candidate[])=>
      {
        console.log(data);
        this.candidatearr=data;
        
      }
    )
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
  OnCandidate(cid:number)
  {
    this.fk_candidate_id=cid;
    console.log(this.fk_candidate_id);
  }
  OnSave()
  {
    // this.fk_user_id="renukasolanki99@gmail.com";
    console.log(this.joining_date);
    console.log(this.fk_company_id);
    console.log(this.fk_candidate_id);
    // console.log(this.fk_user_id);
    this._joinsheetser.UpdateJoiningSheet(new joiningsheet(this.joining_date,this.fk_company_id,this.fk_candidate_id,this.fk_BD_id,this.joiningsheet_id)).subscribe(
      (data:any)=>{
        console.log(this.joining_date);
        console.log(data);
        //this.coarr.push(new submissionsheet(this.submission_date,this.fk_company_id,this.fk_candidate_id,this.fk_user_id));
        alert("joiningsheet update successfully");
        this._route.navigate(['/joiningsheet']);
      }
    );
}
onback()
  {
    this._route.navigate(['/joiningsheet']);
  }
}
