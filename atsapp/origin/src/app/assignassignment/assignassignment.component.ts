import { Component, OnInit } from '@angular/core';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { Company } from '../class_model/company';
import { AssignmentService } from '../services/assignment.service';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignassignment',
  templateUrl: './assignassignment.component.html',
  styleUrls: ['./assignassignment.component.css']
})
export class AssignassignmentComponent implements OnInit {
  Assignment_id:number;
  fk_recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  assarr:Assignment[]=[];
  assjoinarr:Assignment_Join[]=[];
  jobreqjoinarr:Assignment_JobReq[]=[];
  coarr:Company[]=[];

  constructor(public _assser:AssignmentService,public _route:Router,public _coser:CompanyService) { }

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
    this._assser.GetRecnmByID().subscribe(
      (data:Assignment_Join[])=>{
        console.log(data);
        this.assjoinarr=data;
              }
    )
   }
  
  

  onaddAssi()
  {

  }
  OnClick(conm:string)
  {
    this._assser.GetJobReqById().subscribe(
      (data:Assignment_JobReq[])=>{
        console.log(data);
        this.jobreqjoinarr=data;
              }
    )
   }

}
