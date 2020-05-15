import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Invoice } from '../class_model/invoice';
import { InvoiceJoin } from '../class_model/invoicejoin';
import { InvoiceService } from '../services/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoiceinfo',
  templateUrl: './invoiceinfo.component.html',
  styleUrls: ['./invoiceinfo.component.css']
})
export class InvoiceinfoComponent implements OnInit {

  displayedColumns: string[] = ['Action','company_name','date','amount','operation'];
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
  conmarr:number[]=[];
  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(public _invoiceser:InvoiceService,public _route:Router) { }

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
 }

}
