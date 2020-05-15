import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { User } from '../class_model/user';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})


export class UserinfoComponent implements OnInit {
  displayedColumns: string[] = ['Action','email_id', 'password', 'user_name', 'date_of_birth','role','operation'];
  dataSource =new MatTableDataSource();
  email_id:string;
  password:string;
  user_name:string;
  date_of_birth:string;
  role:string;
  //action:string;
  // gender:string;
  // mobile_no:string;
  // address:string;
  i:number=0;
  userinfoarr:User[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(private _data:UserService,public _route:Router) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    this._data.GetAllUser().subscribe
    (
      (data:User[])=>
      {
        console.log(data);
        this.userinfoarr=data;
        this.dataSource.data=this.userinfoarr;
      }
    );
  }

  checkChange(item:User)
{

   if (this.userinfoarr.find(x => x == item)) {
     this.userinfoarr.splice(this.userinfoarr.indexOf(item), 1)
     } else {
     this.userinfoarr.push(item);
    }
    console.log(item);
}

  OnDelete(item:User)
  {
    this._data.DeleteUser(item).subscribe(
      (data:any)=>{
        console.log(data);
        this.userinfoarr=data;
        this.userinfoarr.splice(this.userinfoarr.indexOf(item),1);
      }
    );
  }
  OnUpdate(item:User)
  {
  //   this._route.navigate(['/updateuserinfo']);
  //   this._data.GetUserById(this.userinfoarr[this.email_id]).subscribe(
  //     (data:any)=>{
  //       console.log(data);
  //       this.userinfoarr=data;
  //     }

  // )
  console.log(item.email_id);
   this._route.navigate(['/updateuserinfo',item.email_id]);
    
  }
  onclickdeleteAll(item:User)
  {
    this._data.DeleteUser(this.userinfoarr[this.email_id]).subscribe(
 
      (data:any)=>{
      for(this.i=0;this.i<this.userinfoarr.length;this.i++)
      {
      if(this.userinfoarr.find(x=>x==this.userinfoarr[this.i]))
      {
      this.userinfoarr.splice(this.userinfoarr.indexOf(this.userinfoarr[this.i]),1);
      }
      }
       
      },
      function(err){console.log(err);},
      function(){
      this.userinfoarr=[];
      console.log("Complete");
      }
       
      );
  }
}
