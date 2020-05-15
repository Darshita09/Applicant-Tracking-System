import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  joiningsheet} from '../class_model/joiningsheet';
import {  Company} from '../class_model/company';
import {  JoiningsheetService} from '../services/joiningsheet.service';
import {  CompanyService} from '../services/company.service';
import { Router } from '@angular/router';
import { CandidateService } from '../services/candidate.service';
import { candidateNM } from '../class_model/candidateNM';
import{Candidatestatus} from '../class_model/candidate_status';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { joinsheetalljoin } from '../class_model/joinsheet_alljoin';

@Component({
  selector: 'app-addjoiningsheet',
  templateUrl: './addjoiningsheet.component.html',
  styleUrls: ['./addjoiningsheet.component.css']
})
export class AddjoiningsheetComponent implements OnInit {

 joiningsheet_id:number;
 joining_date:string;
 fk_company_id:number;
 fk_candidate_id:number;
 fk_BD_id:string;
 company_id:number;
 coarr:Company[]=[];
 role:string;
 email_id:string;
 user_name:string;
 userarr:User[]=[];
 joinsheetarr:joiningsheet[]=[];
 joinsheetjoinarr:joinsheetalljoin[]=[];
 candidatestatusarr:Candidatestatus[]=[];

  constructor(public _joinsheetser:JoiningsheetService,public _route:Router,
    public _coser:CompanyService,public _candidateser:CandidateService,public _userser:UserService) { }

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

  OnClick(id:number)
  {
    this.fk_company_id=id;
    console.log(this.fk_company_id);
    this._candidateser.GetCandidateByStatus(id).subscribe(
      (data:Candidatestatus[])=>{
        console.log(data);
        this.candidatestatusarr=data;
      }
    )
  }
  OnCandidate(cid:number)
  {
    this.fk_candidate_id=cid;
    console.log(this.fk_candidate_id);
  }

  OnAddJoinSheet()
  {
      this.fk_BD_id=localStorage.getItem('email_id');
      console.log(this.fk_BD_id);
      //console.log(this.joiningsheet_id);
      console.log(this.joining_date);
      console.log(this.fk_company_id);
      console.log(this.fk_candidate_id);
      this._joinsheetser.AddJoiningSheet(new joiningsheet(this.joining_date,this.fk_company_id,this.fk_candidate_id,this.fk_BD_id)).subscribe(
        (data:any)=>{
          console.log(data);
          this.joinsheetarr.push(new joiningsheet(this.joining_date,this.fk_company_id,this.fk_candidate_id,this.fk_BD_id));
          alert("Add successfully");
          this._route.navigate(['/joiningsheet']);
        }
      ); 
  }
  onback()
  {
    this._route.navigate(['/joiningsheet']);
  }
}
