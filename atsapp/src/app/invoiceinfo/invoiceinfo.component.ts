import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Invoice } from '../class_model/invoice';
import { InvoiceJoin } from '../class_model/invoicejoin';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';
import { User } from '../class_model/user';
import { UserService } from '../services/user.service';
import { EmailverifyService } from '../services/emailverify.service';
import { EmailVerify } from '../class_model/emailverify';

@Component({
  selector: 'app-invoiceinfo',
  templateUrl: './invoiceinfo.component.html',
  styleUrls: ['./invoiceinfo.component.css']
})
export class InvoiceinfoComponent implements OnInit {

  displayedColumns: string[] = ['Action','company_name', 'job_type' ,'date','amount','operation'];
  dataSource =new MatTableDataSource();
  invoice_id:number;
  candidate_id:number;
  fk_company_id:number;
  company_name:string;
  amount:number;
  date:string;
  invoicearr:Invoice[]=[];
  joinarr:InvoiceJoin[]=[];
  i:number;
  role:string;
  id:number;
  email_id:string;
  user_name:string;
  userarr:User[]=[];
  conmarr:number[]=[];
  //i:number;
  x:number[]=[];
  y:number=0;
  z:string;
  filename:string="...";
  subject:string="SIYANA INFO SOLUTIONS...!!";
  coemail:string="darshitasoni155@gmail.com";
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _invoiceser:InvoiceService,public _route:Router,public _userser:UserService,
  public _emailser:EmailverifyService) { }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;

    // this._invoiceser.GetAllInvoice().subscribe
    // (
    //   (data:Invoice [])=>
    //   {
    //     console.log(data);
    //     this.invoicearr=data;
    //     this.dataSource.data=this.invoicearr;
    //   }
    // );
    this._invoiceser.GetCoNmById().subscribe(
      (data:InvoiceJoin[])=>{
        this.joinarr=data;
        this.dataSource.data=this.joinarr;
        console.log(this.joinarr);
      }
    );
    
for(this.i=1;this.i<=100;this.i++){
      this.conmarr.push(this.i);
    
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

 checkChange(item:Invoice)
  {

   if (this.invoicearr.find(x => x == item)) {
     this.invoicearr.splice(this.invoicearr.indexOf(item), 1)
     } else {
     this.invoicearr.push(item);
    }
    console.log(item);
  }

 OnDelete(item:Invoice)
 {
  this._invoiceser.DeleteInvoice(item).subscribe(
    (data:Invoice[])=>{
      console.log(data);
      this.invoicearr=data;
      this.invoicearr.splice(this.invoicearr.indexOf(item),1);
    }
  );
 }
 OnUpdate(item:Invoice)
 {
   console.log(item.invoice_id);
   this.id=item.invoice_id;
   this._route.navigate(['/updateinvoice',item.invoice_id]);
 }
 OnSendMail(item:InvoiceJoin)
 {
  this._invoiceser.GetCoInvoiceMail(item.fk_company_id).subscribe(
    (data:InvoiceJoin[])=>{
      this.joinarr=data;
      console.log(data);
      for(this.i=0;this.i<data.length;this.i++)
      {
        // this.x[this.i]=data[this.i].Resume;
        // console.log(this.x);
        // this.y[this.i]=data[this.i].candidate_name;
        // this.x=this.x.concat(this.y);
        // console.log(this.x);
        this.x[this.i]=data[this.i].amount;
        console.log("amount"+this.x);
        this.y+=this.x[this.i];
        console.log("total amt"+this.y);

      }
      this.z=this.y.toString();
      this._emailser.SendforgotpassMail(new EmailVerify(this.coemail,this.subject,"your Total Invoice is "+this.z)).subscribe(
        (data:EmailVerify[])=>{
        }
       );
      alert('Email send..!!');
    }
  );
}
 
 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
