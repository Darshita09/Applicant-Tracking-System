import { Component, OnInit } from '@angular/core';
import { Invoice } from '../class_model/invoice';
import { InvoiceService } from '../services/invoice.service';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { Router } from '@angular/router';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Job_Req } from '../class_model/job_requirement';
import { CandidateService } from '../services/candidate.service';
import { InvoiceJoin } from '../class_model/invoicejoin';

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
  no_of_candidate:number;
  salary:number=0;
  company_id:number;
  fk_client_job_id:number;
  job_type:string;
  count:number;
  offsalary:number;
  positions:Job_Req[]=[];
  jobreqarr:JobReq_Join[]=[];
  invoicearr:Invoice[]=[];
  invoicejoinarr:InvoiceJoin[]=[];
  coarr:Company[]=[];

  constructor(public _invoiceser:InvoiceService,public _route:Router,public _coser:CompanyService,
  public _jobreqser:JobrequirementService,public _candiser:CandidateService) { }

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
  OnClick(id:number)
  {
    this.company_id=id;
    console.log(this.company_id);
    //console.log(id);
    this._jobreqser.GetCoRequirements(id).subscribe(
      (data:JobReq_Join[])=>{
        console.log(data);
        this.jobreqarr=data;
              }
    )
   }
   OnRequirement(type:string)
   {
    this.job_type=type;
    //this.fk_client_job_id=id1;
    console.log(this.job_type);
   // console.log("call service");
    this._candiser.GetNoOFCandidate(this.company_id,this.job_type).subscribe(
      (data:Job_Req[])=>{
        this.count=data[0].count;
        console.log("no of candi"+this.count);
        console.log(data);
        this.positions=data;
      }
    )
   }
   OnGetId(cid:number)
   {
    this.fk_client_job_id=cid;
    console.log(this.fk_client_job_id);
   }
   OnGetAmt(off:number)
   {
     this.offsalary=off;
     console.log("offsal"+off);
      this.total=this.salary*this.offsalary/100;
      console.log("final salary :: "+this.total);
   }
  onsendinvoice()
  {
    console.log(this.company_id);
    console.log(this.count);
    console.log("totamt "+this.total);

    this._invoiceser.AddInvoice(new Invoice(this.Invoice_id,this.company_id,this.fk_client_job_id,this.count,this.salary,this.total,this.date)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.invoicearr.push(new Invoice(this.Invoice_id,this.company_id,this.fk_client_job_id,this.count,this.salary,this.total,this.date));
        alert('Invoice send successfully');
        this._route.navigate(['/invoiceinfo']);
      }
    );
  }
  onback()
  {
    this._route.navigate(['/invoiceinfo']);
  }
}
