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
  selector: 'app-submissionsheet',
  templateUrl: './submissionsheet.component.html',
  styleUrls: ['./submissionsheet.component.css']
})
export class SubmissionsheetComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','date','user_name','candidate_name','operation'];
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
  submissionsheetarr:submissionsheet[]=[];
  subsheetalljoinarr:submissionalljoin[]=[];
  subsheetemailarr:SubmissionSheetEmail[]=[];
  coarr:Company[]=[];
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  i:number;
  x:string[]=[];
  y:string[]=[];
  z:string[]=[];
  subject:string="SIYANA INFO SOLUTIONS...!!";
  // subsheetjoinarr:submissionalljoin[]=[];
  //subsheetjoin:submissionalljoin[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _submissionsheetser:SubmissionsheetService,public _route:Router,
    public _emailser:EmailverifyService,public _userser:UserService) { }

  ngOnInit() {
    // this.email_id=localStorage.getItem('email_id');
    this.email_id='darshitasoni155@gmail.com';
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.fk_user_id=localStorage.getItem('email_id');
    this.role=localStorage.getItem('role');

    if(this.role=='Director' || 'BDM')
    {
    this._submissionsheetser.GetAllName().subscribe
    (
      (data:submissionalljoin[])=>
      {
        this.Resume=data[0].Resume;
        //console.log(this.submission_date);
        this.subsheetalljoinarr=data;
        console.log(data);
        this.dataSource.data=this.subsheetalljoinarr;
       // this.id=this.coarr[0].company_id
        //this.dataSource.data=this.companyarr;
      }
    );
  }
  if(this.role=='Recruiter')
  {
    this.recflag=true;
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
  

  if(this.role=='BD')
  {
    this._submissionsheetser.GetBDSubmissionSheet(this.fk_user_id).subscribe
    (
      (data:submissionalljoin[])=>
      {
        //console.log(this.submission_date);
        this.subsheetalljoinarr=data;
        console.log(data);
        this.dataSource.data=this.subsheetalljoinarr;
       // this.id=this.coarr[0].company_id
        //this.dataSource.data=this.companyarr;
      }
    );
  }
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
  OnDelete(item:submissionsheet)
  {
    this._submissionsheetser.DeleteSubmissionsheet(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.submissionsheetarr=data;
        this.submissionsheetarr.splice(this.submissionsheetarr.indexOf(item),1);
        alert("delete");
      },()=>{},()=>{
        //add your code here
      }
    );
  }
  OnUpdate(item:submissionsheet)
  {
    console.log(item.submission_id);
    this._route.navigate(['/updatesubmissionsheet',item.submission_id]);
  }
  OnsendMail(item:SubmissionSheetEmail)
  {
    this._submissionsheetser.GetSubSheetForEmail(item.fk_company_id).subscribe(
      (data:SubmissionSheetEmail[])=>{
        this.subsheetemailarr=data;
        console.log(data);
        for(this.i=0;this.i<data.length;this.i++)
        {
          this.x[this.i]=data[this.i].Resume;
          console.log(this.x);
          this.y[this.i]=data[this.i].candidate_name;
          this.x=this.x.concat(this.y);
          console.log(this.x);
        }
        this._emailser.sendmail(new EmailVerify(this.email_id,this.subject,"your Submission sheet is "+this.x,this.Resume)).subscribe(
          (data:EmailVerify[])=>{
          }
        );
        alert('Email send..!!');
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
