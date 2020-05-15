import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Candidate_Resume_Data } from '../class_model/candi_resume_data';
import { CandidateresumedataService } from '../services/candidateresumedata.service';
import { Router } from '@angular/router';
import { CandidateResumeJOINData } from '../class_model/CandiResumeJoin';
import { CandidateService } from '../services/candidate.service';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-candidateresumedata',
  templateUrl: './candidateresumedata.component.html',
  styleUrls: ['./candidateresumedata.component.css']
})
export class CandidateresumedataComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','job_type','candidate_name','candidate_Email','candidate_Phone','candidate_hometown','candidate_experience','current_salary','expected_salary','candi_education','candi_last_used','candi_technical_skill','candi_special_skill','candi_job_desc','operation'];
  dataSource =new MatTableDataSource();
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
  role:string;
  email_id:string;
  user_name:string;
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
    console.log('get Rec resume'+this.role);
    this.fk_Recruiter_id=localStorage.getItem('email_id');

    this._candiresumeser.GetRECcandiResumeData(this.fk_Recruiter_id).subscribe(
      (data:CandidateResumeJOINData[])=>{
        this.candiresumeJOINarr=data;
        this.dataSource.data=this.candiresumeJOINarr;
        console.log(this.candiresumearr);
      }
    );

    if(this.role=='Director')
    {
      this._candiser.GetDirectorCandiResume().subscribe(
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
  OnApproved()
  {
    this._route.navigate(['/approvedcandidate']);
  }
  OnReject()
  {
    this._route.navigate(['/disapprovedcandidate']);
  }
  OnUpdate(item:Candidate_Resume_Data)
  {
    console.log(item.candidate_resume_id);
    this._route.navigate(['/updatecandidateresumedata',item.candidate_resume_id]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
