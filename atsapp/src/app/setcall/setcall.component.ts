import { Component, OnInit } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../class_model/candidate';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setcall',
  templateUrl: './setcall.component.html',
  styleUrls: ['./setcall.component.css']
})
export class SetcallComponent implements OnInit {
  cid:number;
  company_id:number;
  candidate_id:number;
  candidate_name:string;
  Email:string;
  Phone:string;
  Address:string;
  hometown:string;
  Resume:string;
  call_date:string;
  call_time:string;
  call_status:string='';
  call_status_date:string='';
  final_status:string='';
  fk_client_job_id:number;
  fk_Recruiter_id:string;
  interview_date:string=null;
  status:string="no";
  job_type:string;
  jobreqarr:JobReq_Join[]=[];
  reqarr:Job_Req[]=[];
  coarr:Company[]=[];
  candidatearr:Candidate[]=[];
  positions:Job_Req[]=[];
  selectedFile:File=null;

  constructor(public _jobreqser:JobrequirementService,public _coser:CompanyService,
  public _candidateser:CandidateService,public _route:Router) { }

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
  }
  
  onChange(value)
  {
    this.selectedFile=<File>value.target.files[0];
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
    );
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

  onsetcall()
  {
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    // console.log(this.candidate_id);
    console.log(this.candidate_name);
    console.log(this.Email);
    console.log(this.Phone);
    console.log(this.Address);
    console.log(this.hometown);
    console.log(this.Resume);
    console.log(this.call_date);
    console.log(this.call_time);
    console.log(this.call_status);
    console.log(this.final_status);
    console.log(this.fk_client_job_id);
    console.log(this.fk_Recruiter_id);
    console.log(this.interview_date);
    console.log(this.status);

    const fd=new FormData();
  
    //fd.append('candidate_id',this.candidate_id.toString());
  
    fd.append('candidate_name',this.candidate_name);
    fd.append('Email',this.Email);
    fd.append('Phone',this.Phone);
    fd.append('Address',this.Address);
    fd.append('hometown',this.hometown);
    fd.append('resume',this.selectedFile,this.selectedFile.name);
    fd.append('call_date',this.call_date);
    fd.append('call_time',this.call_time);
    fd.append('call_status',this.call_status);
    fd.append('call_status_date',this.call_status_date);
    fd.append('final_status',this.final_status);
    fd.append('fk_client_job_id',this.fk_client_job_id.toString());
    fd.append('fk_Recruiter_id',this.fk_Recruiter_id);
    fd.append('interview_date',this.interview_date);
    fd.append('status',this.status);
    //fd.append('image',this.selectedFile,this.selectedFile.name);
   
 this._candidateser.AddCandidate(fd).subscribe(
    
  (data:any)=>{
     
   console.log(data);
      
  this.candidatearr.push(new Candidate(this.candidate_name,this.Email,this.Phone,this.Address,this.hometown,this.Resume,this.call_date,this.call_time,this.call_status,this.call_status_date,this.final_status,this.fk_client_job_id,this.fk_Recruiter_id,this.interview_date,this.status));
  alert('Call set Successfully');
  this._route.navigate(['/recruitercalllog']); 
  }
    );
 
  }
  onset()
  {
    
  }
  onback()
  {
    this._route.navigate(['/recruitercalllog']);
  }
}
