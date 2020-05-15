import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from '../class_model/candidate';
import { CandidateJoin } from '../class_model/candidate_join';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { JobReq_Join } from '../class_model/jobreq_join';
import { Job_Req } from '../class_model/job_requirement';
import { JobrequirementService } from '../services/jobrequirement.service';
import { CandidateService } from '../services/candidate.service';

@Component({
  selector: 'app-updaterecruitercalllog',
  templateUrl: './updaterecruitercalllog.component.html',
  styleUrls: ['./updaterecruitercalllog.component.css']
})
export class UpdaterecruitercalllogComponent implements OnInit {

  id:number;
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
  call_status:string;
  call_status_date:string;
  final_status:string='';
  fk_client_job_id:number;
  fk_Recruiter_id:string;
  interview_date:string='';
  status:string='';
  job_type:string;
  client_job_id:number;
  fk_company_id:number;
  no_of_position:number;
  shift_time:string;
  experience:string;
  salary_package:string;
  education:string;
  last_used:string;
  technical_skill:string;
  special_skill:string;
  job_description:string;
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
  jobreqarr:JobReq_Join[]=[];
  reqarr:Job_Req[]=[];
  candidatearr:Candidate[]=[];
  candidatejoinarr:CandidateJoin[]=[];
  coarr:Company[]=[];
  positions:Job_Req[]=[];
  flag:boolean=false;
  selectedFile:File=null;
  constructor(public _acroute:ActivatedRoute,public _coser:CompanyService,
  public _jobreqser:JobrequirementService,public _candidateser:CandidateService,public _route:Router) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['candidate_id'];
    console.log(this.id);

    this._candidateser.GetCoNMBYID(this.id).subscribe(
     
      (data:CandidateJoin[])=>{
         
      this.candidatejoinarr=data;
      this.candidate_id=data[0].candidate_id;
      this.candidate_name=data[0].candidate_name;
      this.Email=data[0].Email;
      this.Phone=data[0].Phone;
      this.Address=data[0].Address;
      this.hometown=data[0].hometown;
      this.Resume=data[0].Resume;
      this.call_date=data[0].call_date.substr(4,11);
      console.log(this.call_date);   
      this.call_time=data[0].call_time;
      this.call_status=data[0].call_status;
      this.fk_client_job_id=data[0].fk_client_job_id;
      this.interview_date=data[0].interview_date;
      this.status=data[0].status;
      this.client_job_id=data[0].client_job_id;
      //console.log("hello"+this.client_job_id);
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
    this.flag=true;
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
  onupdate()
  {

  }
  onSave()
  {
    if(this.flag)
    {
      const fd=new FormData();

      //console.log("Update Image"+this.company_id);
      fd.append('candidate_id',this.candidate_id.toString());
      fd.append('candidate_name',this.candidate_name);
      fd.append('resume',this.selectedFile,this.selectedFile.name);
      fd.append('call_date',this.call_date);
      fd.append('call_time',this.call_time);
      fd.append('call_status',this.call_status);
      fd.append('fk_client_job_id',this.fk_client_job_id.toString());  
      fd.append('fk_recruiter_id',this.fk_Recruiter_id);
      fd.append('interview_date',this.interview_date);
      fd.append('status',this.status);
   
      this._candidateser.UpdateCandidateResume(fd).subscribe(
        (data:any)=>
        {
          console.log("Update Data"+this.company_id);
          console.log(data);
          //this.updateleadcoarr.push(new Company(this.co_logo,this.co_name,this.class_of_company,this.co_address,this.co_phone_no,this.co_website,this.co_email_id,this.isclient));
          alert('Call update successfully');
          this._route.navigate(['/recruitercalllog']);
  
  
        }
      );
    }
    else
    {
      this._candidateser.UpdateCandidate(new Candidate(this.candidate_name,this.Email,this.Phone,this.Address,this.hometown,this.Resume,this.call_date,this.call_time,this.call_status,this.call_status_date,this.final_status,this.fk_client_job_id,this.fk_Recruiter_id,this.interview_date,this.status,this.candidate_id)).subscribe(
        (data:any)=>{
          console.log(data);
          this.candidatearr=data;
          alert('Call update successfully');
          this._route.navigate(['/recruitercalllog']);
        }
      );
    }
  }
  onback()
  {
    this._route.navigate(['/recruitercalllog']);
  }
}
