import { Component, OnInit, ViewChild} from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {  joiningsheet} from '../class_model/joiningsheet';
import {joinsheetalljoin} from '../class_model/joinsheet_alljoin';
import { JoiningsheetService } from '../services/joiningsheet.service';
import {  Router} from '@angular/router';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-joiningsheet',
  templateUrl: './joiningsheet.component.html',
  styleUrls: ['./joiningsheet.component.css']
})
export class JoiningsheetComponent implements OnInit {

  displayedColumns: string[] = ['Action','co_name','joining_date','candidate_name','operation'];
  dataSource =new MatTableDataSource();
  joiningsheet_id:number;
  joining_date:string;
  fk_company_id:number;
  fk_candidate_id:number;
  fk_BD_id:string;
  role:string;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  joiningsheetarr:joiningsheet[]=[];
  joinsheetjoinarr:joinsheetalljoin[]=[];

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _joiningsheetser:JoiningsheetService,public _route:Router,
  public _userser:UserService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    this.fk_BD_id=localStorage.getItem('email_id');
    this.role=localStorage.getItem('role');
    this._joiningsheetser.GetAllName().subscribe
    (
      (data:joinsheetalljoin[])=>
      {
        console.log(this.joining_date);
        this.joinsheetjoinarr=data;
        this.dataSource.data=this.joinsheetjoinarr;
        console.log(this.joinsheetjoinarr);
        }
    );

    if(this.role=='BD')
    {
      this._joiningsheetser.GetBDJoiningSheet(this.fk_BD_id).subscribe(
        (data:joinsheetalljoin[])=>{
          console.log(data);
          this.joinsheetjoinarr=data;
          this.dataSource.data=this.joinsheetjoinarr;
        }
      );
    }

    if(this.role=='BDM')
    {
      this._joiningsheetser.GetBDMJoiningsheet().subscribe(
        (data:joinsheetalljoin[])=>{
          console.log(data);
          this.joinsheetjoinarr=data;
          this.dataSource.data=this.joinsheetjoinarr;
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

  checkChange(item:joiningsheet)
  {
  
     if (this.joiningsheetarr.find(x => x == item)) {
       this.joiningsheetarr.splice(this.joiningsheetarr.indexOf(item), 1)
       } else {
       this.joiningsheetarr.push(item);
      }
      console.log(item);
  }

  OnDelete(item:joiningsheet)
  {
    this._joiningsheetser.DeleteJoiningSheet(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.joiningsheetarr=data;
        this.joiningsheetarr.splice(this.joiningsheetarr.indexOf(item),1);
        alert("delete");
      }
    );
  }
  OnUpdate(item:joiningsheet)
  {
    console.log(this.joiningsheet_id);
    this._route.navigate(['/updatejoiningsheet',item.joiningsheet_id]);
    
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
