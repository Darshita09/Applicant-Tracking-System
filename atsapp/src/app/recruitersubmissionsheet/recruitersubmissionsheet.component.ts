import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {  submissionsheet} from '../class_model/submissionsheet';
import {submissionalljoin  } from '../class_model/submission_alljoin';
import {SubmissionsheetService  } from '../services/submissionsheet.service';
import {  CompanyService} from '../services/company.service';
import {  Router} from '@angular/router';
import { Company } from '../class_model/company';
import { SubmissionSheetEmail } from '../class_model/subsheetemail';
import { EmailverifyService } from '../services/emailverify.service';
import { EmailVerify } from '../class_model/emailverify';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-recruitersubmissionsheet',
  templateUrl: './recruitersubmissionsheet.component.html',
  styleUrls: ['./recruitersubmissionsheet.component.css']
})
export class RecruitersubmissionsheetComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','date','candidate_name'];
  dataSource =new MatTableDataSource();
  submission_id:number;
  submission_date:string;
  fk_company_id:number;
  fk_candidate_id:number;
  candidate_name:string;
  fk_user_id:string;
  role:string;
  Resume:string;
  recflag:boolean=false;
  fk_Recruiter_id:string;
  submissionsheetarr:submissionsheet[]=[];
  subsheetalljoinarr:submissionalljoin[]=[];
  subsheetemailarr:SubmissionSheetEmail[]=[];
  coarr:Company[]=[];
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _submissionsheetser:SubmissionsheetService,public _route:Router,
    public _emailser:EmailverifyService,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    this._submissionsheetser.GetRecruiterSubmissionsheet(this.fk_Recruiter_id).subscribe(
      (data:submissionalljoin[])=>{
        this.subsheetalljoinarr=data;
        console.log(data);
        this.dataSource.data=this.subsheetalljoinarr;
      }
    );

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
  checkChange(item:submissionsheet)
  {
  
     if (this.submissionsheetarr.find(x => x == item)) {
       this.submissionsheetarr.splice(this.submissionsheetarr.indexOf(item), 1)
       } else {
       this.submissionsheetarr.push(item);
      }
      console.log(item);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
