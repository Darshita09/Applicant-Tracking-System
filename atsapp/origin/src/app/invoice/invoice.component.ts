import { Component, OnInit } from '@angular/core';
import { Invoice } from '../class_model/invoice';
import { InvoiceService } from '../services/invoice.service';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  Invoice_id:number;
  candidate_id:number;
  fk_company_id:number;
  amount:number;
  date:string;
  total:number;
  invoicearr:Invoice[]=[];
  coarr:Company[]=[];

  constructor(public _invoiceser:InvoiceService,public _route:Router,public _coser:CompanyService) { }

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
  }

  onsendinvoice()
  {
    this._invoiceser.AddInvoice(new Invoice(this.candidate_id,this.fk_company_id,this.amount,this.date)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.invoicearr.push(new Invoice(this.candidate_id,this.fk_company_id,this.amount,this.date));
        alert('Invoice send successfully');
        this._route.navigate(['/invoiceinfo']);


      }
    );
  }
  onback()
  {
    this._route.navigate(['']);
  }
}
