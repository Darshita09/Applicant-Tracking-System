import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leadcompany',
  templateUrl: './leadcompany.component.html',
  styleUrls: ['./leadcompany.component.css']
})
export class LeadcompanyComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_logo','co_name','class_of_company','co_address','co_phone_no','co_website','co_email_id','operation'];
  dataSource =new MatTableDataSource();
  company_id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  companyarr:Company[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(private _data:CompanyService,public _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this._data.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.companyarr=data;
        this.dataSource.data=this.companyarr;
      }
    );
  }

  checkChange(item:Company)
  {
      if (this.companyarr.find(x => x == item)) {
          this.companyarr.splice(this.companyarr.indexOf(item), 1)
      } 
      else {
          this.companyarr.push(item);
      }
      console.log(item);
  }
  OnDelete(item:Company)
  {
    this._data.DeleteCompany(item).subscribe(
      (data:Company[])=>{
        console.log(data);
        this.companyarr=data;
        this.companyarr.splice(this.companyarr.indexOf(item),1);
      }
    );
  }
  OnUpdate(item:Company)
  {
    console.log(item.company_id);
   this._route.navigate(['/updateleadco',item.company_id]);
  }
}




