import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Job_Req } from '../class_model/job_requirement';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobrequirement',
  templateUrl: './jobrequirement.component.html',
  styleUrls: ['./jobrequirement.component.css']
})
export class JobrequirementComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','job_type','no_of_position','shift_time','experience','salary_package','education','last_used','technical_skill','special_skill','job_description','operation'];
  dataSource =new MatTableDataSource();
  client_job_id:number;
  fk_company_id:number;
  job_type:String;
  no_of_position:String;
  shift_time:String;
  experience:String;
  salary_package:String;
  education:String;
  last_used:String;
  technical_skill:String;
  special_skill:String;
  job_description:String;
  i:number;
  conmarr:number[]=[];
  jobreqarr:Job_Req[]=[];
  joinjobreqarr:JobReq_Join[]=[];

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _jobreqser:JobrequirementService,public _route:Router,public _acroute:ActivatedRoute) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    // this._jobreqser.GetAllJobReq().subscribe
    // (
    //   (data:Job_Req[])=>
    //   {
    //     console.log(data);
    //     this.jobreqarr=data;
    //     this.dataSource.data=this.jobreqarr;
    //   }
    // );
    this._jobreqser.GetCoNmById().subscribe(
      (data:JobReq_Join[])=>{
        this.joinjobreqarr=data;
        this.dataSource.data=this.joinjobreqarr;
        console.log(this.joinjobreqarr);
      }
    );
    
for(this.i=1;this.i<=100;this.i++){
      this.conmarr.push(this.i);
    }
  }

  checkChange(item:Job_Req)
  {
      if (this.jobreqarr.find(x => x == item)) {
          this.jobreqarr.splice(this.jobreqarr.indexOf(item), 1)
      } 
      else {
          this.jobreqarr.push(item);
      }
      console.log(item);
  }

  OnDelete(item:Job_Req)
  {
    this._jobreqser.DeleteJobReq(item).subscribe(
      (data:Job_Req[])=>{
        console.log(data);
        this.jobreqarr=data;
        this.jobreqarr.splice(this.jobreqarr.indexOf(item),1);
      }
    );
  }

  OnUpdate(item:Job_Req)
  {
    console.log(item.client_job_id);
   this._route.navigate(['/updatejobreq',item.client_job_id]);
  }
}
