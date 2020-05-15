import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { AssignmentService } from '../services/assignment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  displayedColumns: string[] = ['Action','Recruiter_name','job_type','duration', 'company_name', 'BD_name','operation'];
  dataSource =new MatTableDataSource();
  Assignment_id:number;
  fk_Recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  i:number=0;
  BDnm:string[];
  assarr:Assignment[]=[];
  joinarr:Assignment_Join[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _assser:AssignmentService,public _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    // this._assser.GetAllAssignment().subscribe
    // (
    //   (data:Assignment[])=>
    //   {
    //     console.log(data);
    //     this.assarr=data;
    //     this.dataSource.data=this.assarr;
    //   }
    // );

    this._assser.GetRecnmByID().subscribe(
      (data:Assignment_Join[])=>{
        this.joinarr=data;
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
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
    )
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
}
