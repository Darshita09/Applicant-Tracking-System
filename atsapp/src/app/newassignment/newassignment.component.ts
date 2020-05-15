import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { AssignmentService } from '../services/assignment.service';
import { Router } from '@angular/router';
import { SubmitAssignment } from '../class_model/submitassignment';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-newassignment',
  templateUrl: './newassignment.component.html',
  styleUrls: ['./newassignment.component.css']
})
export class NewassignmentComponent implements OnInit {

  displayedColumns: string[] = ['Action','company_name','job_type','no_of_position','duration','submit'];
  dataSource =new MatTableDataSource();
  Assignment_id:number;
  fk_Recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  assign_date:string;
  issubmit:boolean;
  submission_date:string;
  i:number=0;
  id:number;
  BDnm:string[];
  role:string;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  assarr:Assignment[]=[];
  joinarr:Assignment_Join[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _assser:AssignmentService,public _route:Router,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.fk_Recruiter_id=localStorage.getItem('email_id');
    this._assser.GetAssiTORecruiter(this.fk_Recruiter_id).subscribe(
      (data:Assignment_Join[])=>{
        this.joinarr=data;
        console.log(data);
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
      }
    );
    // this._assser.GetBDnmById().subscribe(
    //   (data:any)=>{
    //     console.log(data);
    //     this.BDnm=data;
    //     for(let i=0;i<this.BDnm.length;i++)
    //     {
    //       this.joinarr[i].fk_BD_id=this.BDnm[i];
    //     }
    //     this.dataSource.data=this.joinarr;
    //   }
    // );
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
  checkChange(item:Assignment)
  {
  
     if (this.assarr.find(x => x == item)) {
       this.assarr.splice(this.assarr.indexOf(item), 1)
       } else {
       this.assarr.push(item);
      }
      console.log(item);
  }
  OnSend(item:Assignment)
  {
    
     console.log("clicked"+item.Assignment_id);
    // this.issubmit=true;
    // console.log(this.issubmit+ " For assignment id " ,item.Assignment_id);
    // this._assser.UpdateAssignment(new Assignment(this.fk_Recruiter_id,this.duration,this.fk_client_job_id,this.fk_BD_id,this.assign_date,this.issubmit,this.submission_date,this.Assignment_id)).subscribe(
    //   (data:any)=>{
    //     alert("submit.");
    //     console.log(data);
    //     console.log(this.submission_date);
    //   }
    // )


    this._assser.UpdateSubmittedAssign(item.Assignment_id).subscribe(
        (data:SubmitAssignment[])=>{
          alert("submit.");
          console.log(this.Assignment_id);
          console.log(this.issubmit);
          console.log(this.submission_date);
          console.log(data);
          
        }
      );
  }
}
