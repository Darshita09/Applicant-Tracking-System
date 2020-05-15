import { Component, OnInit , ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Candidate } from '../class_model/candidate';
import { CandidateJoin } from '../class_model/candidate_join';
import { CandidateService } from '../services/candidate.service';
import { Router } from '@angular/router';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-approvedcandidate',
  templateUrl: './approvedcandidate.component.html',
  styleUrls: ['./approvedcandidate.component.css']
})
export class ApprovedcandidateComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','candidate_name', 'Email', 'Phone' ,'operation'];
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
    this.role=localStorage.getItem('role');
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    this._candidateser.GetApprovedCandidate(this.fk_Recruiter_id).subscribe(
      (data:CandidateJoin[])=>
      {
        console.log(data);
        this.candidatejoinarr=data;
        this.dataSource.data=this.candidatejoinarr;
      }
    );
    if(this.role=='Director')
    {
      this._candidateser.GetDirApprovedCandi().subscribe(
        (data:CandidateJoin[])=>
        {
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
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
