import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { AssignmentService } from '../services/assignment.service';
import { Router } from '@angular/router';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-submittedassignment',
  templateUrl: './submittedassignment.component.html',
  styleUrls: ['./submittedassignment.component.css']
})
export class SubmittedassignmentComponent implements OnInit {

  displayedColumns: string[] = ['Action','assign_date','Recruiter_name','job_type','duration', 'company_name', 'BD_name','submission_date','operation'];
  dataSource =new MatTableDataSource();
  Assignment_id:number;
  fk_Recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  assign_date:Date;
  issubmit:boolean;
  submission_date:Date;
  i:number=0;
  id:number;
  BDnm:string[];
  role:string;
  email_id:string;
  user_name:string;
  assarr:Assignment[]=[];
  userarr:User[]=[];
  joinarr:Assignment_Join[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _assser:AssignmentService,public _route:Router,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

  this.fk_BD_id=localStorage.getItem('email_id');
  this.role=localStorage.getItem('role');

  if(this.role=='Director')
  {
    this._assser.GetDirectorSubmittedAssign().subscribe(
      (data:Assignment_Join[])=>{
        this.joinarr=data;
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
        console.log();
      }
    );
    
    this._assser.GetBDnmById().subscribe(
      (data:any)=>{
        console.log(data);
        this.BDnm=data;
        for(let i=0;i<this.BDnm.length;i++)
        {
          this.joinarr[i].fk_BD_id=this.BDnm[i];
        }
        this.dataSource.data=this.joinarr;
      }
    );
  }
  if(this.role=='BD')
  {
    this._assser.GetSubmittedassign(this.fk_BD_id).subscribe(
      (data:Assignment_Join[])=>{
        this.joinarr=data;
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
        console.log();
      }
    );
  }

  if(this.role=='BDM')
  {
    this._assser.GetBDMSubmittedAssign().subscribe(
      (data:Assignment_Join[])=>{
        this.joinarr=data;
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
        console.log();
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
}