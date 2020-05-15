import { Component, OnInit , ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Candidate_Resume_Data } from '../class_model/candi_resume_data';
import { CandidateresumedataService } from '../services/candidateresumedata.service';
import { Router } from '@angular/router';
import { CandidateResumeJOINData } from '../class_model/CandiResumeJoin';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../class_model/candidate';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-resumechecking',
  templateUrl: './resumechecking.component.html',
  styleUrls: ['./resumechecking.component.css']
})
export class ResumecheckingComponent implements OnInit {

  displayedColumns: string[] = [/*'Action'*/ 'user_name' ,'co_name','job_type','candidate_name','candidate_Email','candidate_Phone','candidate_hometown','candidate_experience','current_salary','expected_salary','candi_education','candi_last_used','candi_technical_skill','candi_special_skill','candi_job_desc','operation'];
  dataSource =new MatTableDataSource();
  candidate_resume_id:number;
  fk_company_id:number;
  fk_client_job_id:number;
  //candi_Name:string;
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
  cnadidate_name:string;
  role:string;
  BD_id:string;
  candidate_id:number;
  email_id:string;
  user_name:string;
  candiarr:Candidate[]=[];
  userarr:User[]=[];
  candiresumearr:Candidate_Resume_Data[]=[]
  candiresumeJOINarr:CandidateResumeJOINData[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _candiresumeser:CandidateresumedataService,public _route:Router,
  public _candiser:CandidateService,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this.role=localStorage.getItem('role');
    console.log('get BD Resume check'+this.role);
    this.BD_id=localStorage.getItem('email_id');
    if(this.role=='BD')
    {
    this._candiresumeser.GetBDCandiResumeData(this.BD_id).subscribe(
      (data:CandidateResumeJOINData[])=>{
        this.candiresumeJOINarr=data;
        this.dataSource.data=this.candiresumeJOINarr;
        console.log(this.candiresumearr);
      }
    );
  }
  if(this.role=='BDM')
  {
  this._candiresumeser.GetBDMCandiResumeData().subscribe(
    (data:CandidateResumeJOINData[])=>{
      this.candiresumeJOINarr=data;
      this.dataSource.data=this.candiresumeJOINarr;
      console.log(this.candiresumearr);
    }
  );
}
    if(this.role=='Director')
    {
      this._candiresumeser.GetDirSendCandiResume().subscribe(
        (data:CandidateResumeJOINData[])=>{
          this.candiresumeJOINarr=data;
          this.dataSource.data=this.candiresumeJOINarr;
          console.log(this.candiresumearr);
        }
      );
    }

    this.email_id=localStorage.getItem('email_id');
    this._userser.GetUserById(this.email_id).subscribe
    (
      (data:User[])=>
      {
        console.log(data);
        this.userarr=data;
        //this.dataSource.data=this.userarr;
      }
    );
    this.role=localStorage.getItem('role');
    console.log('role'+this.role);
    this.user_name=localStorage.getItem('email_id');
    console.log('user name'+this.user_name);
  }
  OnApproved(item:CandidateResumeJOINData)
  {
    //this._candiser.GetCandidateByStatus()
    console.log("Get ID "+item.candidate_id);
    // this._route.navigate(['/clientcompany',item.company_id]);
    this._candiser.UpdateCandifinalStatus(item.candidate_id).subscribe(
      (data:CandidateResumeJOINData[])=>{
        alert("approved.");
        console.log(data);
        
      }
    );
  }
  Ondisapproved(item:CandidateResumeJOINData)
  {
    //this._candiser.GetCandidateByStatus()
    console.log("Get ID "+item.candidate_id);
    // this._route.navigate(['/clientcompany',item.company_id]);
    this._candiser.UpdateCandiREJECTStatus(item.candidate_id).subscribe(
      (data:CandidateResumeJOINData[])=>{
        alert("Rejected.");
        console.log(data);
        
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
