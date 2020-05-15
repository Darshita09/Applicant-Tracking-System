import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../class_model/user';
import { BDMCompany } from '../class_model/BDMcompany';
import { CompanyJOIN } from '../class_model/company_join';

@Component({
  selector: 'app-leadcompany',
  templateUrl: './leadcompany.component.html',
  styleUrls: ['./leadcompany.component.css']
})
export class LeadcompanyComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_logo','co_name','class_of_company','co_address','co_phone_no','co_website','co_email_id','user_name','operation'];
  dataSource =new MatTableDataSource();
  company_id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  fk_BD_id:string;
  role:string;
  email_id:string;
  user_name:string;
  companyarr:Company[]=[];
  cojoinarr:CompanyJOIN[]=[]
  userarr:User[]=[]
  bdmcoarr:BDMCompany[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(private _data:CompanyService,public _route:Router,public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this.role=localStorage.getItem('role');
    console.log('Get Co - '+this.role);
    if(this.role=='Director')
    {
      this._data.GetDirectorLeadCO().subscribe
      (
        (data:CompanyJOIN[])=>
        {
          console.log(data);
          this.cojoinarr=data;
          this.dataSource.data=this.cojoinarr;
        }
      );
    } 
    if(this.role=='BD')
    {
      this.fk_BD_id=localStorage.getItem('email_id');
      this._data.GetBDconm(this.fk_BD_id).subscribe(
        (data:Company[])=>{
          console.log(data);
          this.companyarr=data;
          this.dataSource.data=this.companyarr;
        }
      );
    }

    if(this.role=='BDM')
    {
      this.fk_BD_id=localStorage.getItem('email_id');
      this._data.GetBDMCO(this.fk_BD_id).subscribe(
        (data:BDMCompany[])=>{
          console.log(data);
          this.bdmcoarr=data;
          this.dataSource.data=this.bdmcoarr;
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
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  OnCovert(item:Company)
  {
    console.log("Get ID "+item.company_id);
    // this._route.navigate(['/clientcompany',item.company_id]);
    this._data.ConvertTOClient(item.company_id).subscribe(
      (data:Company[])=>{
        alert("convert successfully.");
        console.log(data);
        
      }
    );
  }
}




