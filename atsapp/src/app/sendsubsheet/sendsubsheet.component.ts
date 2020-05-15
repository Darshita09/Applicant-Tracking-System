import { Component, OnInit } from '@angular/core';
import {  Company} from '../class_model/company';
import {submissionsheet } from '../class_model/submissionsheet';
import {Candidate  } from '../class_model/candidate';
import { CompanyService } from '../services/company.service';
import { SubmissionsheetService } from '../services/submissionsheet.service';

import { Router } from '@angular/router';
import { candidateNM } from '../class_model/candidateNM';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-sendsubsheet',
  templateUrl: './sendsubsheet.component.html',
  styleUrls: ['./sendsubsheet.component.css']
})
export class SendsubsheetComponent implements OnInit {

  submission_id:number;
  submission_date:string;
  fk_company_id:number;
  fk_candidate_id:number;
  fk_user_id:string;
  company_id:number;
  candidate_name:string;
  candidate_id:number;
  coarr:Company[]=[];
  candidatearr:Candidate[]=[];
  candidateNMarr:candidateNM[]=[];
  subsheetarr:submissionsheet[]=[];

  constructor(public _candidateser:CandidateService,public _subsheetser:SubmissionsheetService,
    public _route:Router,public _coser:CompanyService) { }

  ngOnInit() {
    this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.coarr=data;
       
      }
    );
  }

  OnClick(id:number)
  {
  this.fk_company_id=id;
  console.log(this.fk_company_id);
  this._candidateser.GetCandiNM(id).subscribe(
    (data:candidateNM[])=>{
    console.log(data);
    this.candidateNMarr=data;
    }
  );
  }
  OnCandidate(cid:number)
  {
    this.fk_candidate_id=cid;
    console.log(this.fk_candidate_id);
  }

  OnSendsubsheet()
  {
    //this.submission_date=null;
    this.fk_user_id="renukasolanki99@gmail.com";
//this.submission_date=Date;
    console.log(this.submission_date);
    console.log(this.fk_company_id);
    console.log(this.candidate_name);
    console.log(this.fk_candidate_id);
    console.log(this.fk_user_id);
   this._subsheetser.AddSubmissionsheet(new submissionsheet(this.submission_date,this.fk_company_id,this.fk_candidate_id,this.fk_user_id)).subscribe(
      (data:any)=>
      {
        console.log(this.submission_date);
        console.log(data);
        this.subsheetarr.push(new submissionsheet(this.submission_date,this.fk_company_id,this.fk_candidate_id,this.fk_user_id));
        alert('submissionsheet send succesfully');
        this._route.navigate(['/submissionsheet']);
      }
   );
    
  }
  onback()
  {
    this._route.navigate(['/submissionsheet']);
  }
}
