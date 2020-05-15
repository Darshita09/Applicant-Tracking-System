import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { CompanyJOIN } from '../class_model/company_join';

@Component({
  selector: 'app-clientcompany',
  templateUrl: './clientcompany.component.html',
  styleUrls: ['./clientcompany.component.css']
})
export class ClientcompanyComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_logo','co_name','class_of_company','co_address','co_phone_no','co_website','co_email_id', 'user_name' ,'operation'];
  dataSource =new MatTableDataSource();
  company_id:number;
  id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  isclient:string;
  flag:boolean=false;
  role:string;
  fk_BD_id:string;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  coarr:Company[]=[];
  cojoinarr:CompanyJOIN[]=[]
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _route:Router,public _acroute:ActivatedRoute,public _codata:CompanyService,
  public _userser:UserService) { }

  ngOnInit() {

      this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this.role=localStorage.getItem('role');
    console.log('Get Co - '+this.role);
    if(this.role=='Director')
    {
      this._codata.GetDirectorClientCOINDESC().subscribe
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
      this._codata.GetClientCompany(this.fk_BD_id).subscribe(
        (data:Company[])=>{
          console.log(data);
          this.coarr=data;
          this.dataSource.data=this.coarr;
        }
      );
    }

    if(this.role=='BDM')
    {
      this.fk_BD_id=localStorage.getItem('email_id');
      this._codata.GetBDMClientCOINDES(this.fk_BD_id).subscribe(
        (data:Company[])=>{
          console.log(data);
          this.coarr=data;
          this.dataSource.data=this.coarr;
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

  OnDelete(item:Company)
  {
    console.log('remove'+this.company_id);
    this._codata.RemoveClient(item.company_id).subscribe(
      (data:Company[])=>{
        console.log(data);
        alert("Remove from Client successfully.");
       // this.coarr=data;
        //this.coarr.splice(this.coarr.indexOf(id),1);
      }
    );
  }
}
