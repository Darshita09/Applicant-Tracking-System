import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Candidate } from '../class_model/candidate';
import { CandidateJoin } from '../class_model/candidate_join';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recruitercalllog',
  templateUrl: './recruitercalllog.component.html',
  styleUrls: ['./recruitercalllog.component.css']
})
export class RecruitercalllogComponent implements OnInit {

  displayedColumns: string[] = ['Action', 'user_name' ,'co_name','candidate_name', 'Email', 'Phone' ,'call_date', 'call_time','call_status','operation'];
  dataSource =new MatTableDataSource();
  candidate_id:number;
  candidate_name:string;
  Resume:string;
  call_date:string;
  call_time:string;
  call_status:string;
  fk_client_job_id:number;
  fk_Recruiter_id:string;
  interview_date:string;
  status:string;
  role:string;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  candidatearr:Candidate[]=[];
  candidatejoinarr:CandidateJoin[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _candidateser:CandidateService,public _route:Router,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    this.role=localStorage.getItem('role');
    console.log('Get Co - '+this.role);
    if(this.role=='Recruiter')
    {
    this._candidateser.GetRECCallog(this.fk_Recruiter_id).subscribe
    (
      (data:CandidateJoin[])=>
      {
        console.log(data);
        this.candidatejoinarr=data;
        this.dataSource.data=this.candidatejoinarr;
      }
    );
  }

    // this.role=localStorage.getItem('role');
    // console.log('Get Co - '+this.role);
    if(this.role=='Director')
    {
      //this.fk_BD_id=localStorage.getItem('email_id');
      this._candidateser.GetDirectorReccallLog().subscribe(
        (data:CandidateJoin[])=>{
          console.log(data);
          this.candidatejoinarr=data;
          this.dataSource.data=this.candidatejoinarr;
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

  checkChange(item:Candidate)
  {

   if (this.candidatearr.find(x => x == item)) {
     this.candidatearr.splice(this.candidatearr.indexOf(item), 1)
     } else {
     this.candidatearr.push(item);
    }
    console.log(item);
  }
OnDelete(item:Candidate)
{
  this._candidateser.DeleteCandidate(item).subscribe(
    (data:Candidate[])=>{
      console.log(data);
      this.candidatearr=data;
      this.candidatearr.splice(this.candidatearr.indexOf(item),1);
    }
  );
}
OnUpdate(item:Candidate)
{
  console.log(item.candidate_id);
  this._route.navigate(['/updaterecruitercalllog',item.candidate_id]);
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
OnSend(item:Candidate)
{
  console.log(item.candidate_id);
}
}
