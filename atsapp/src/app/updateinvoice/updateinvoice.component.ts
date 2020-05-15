import { Component, OnInit } from '@angular/core';
import { Invoice } from '../class_model/invoice';
import { InvoiceService } from '../services/invoice.service';
import { CompanyService } from '../services/company.service';
import { Company } from '../class_model/company';
import { Router, ActivatedRoute } from '@angular/router';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';
import { Job_Req } from '../class_model/job_requirement';
import { CandidateService } from '../services/candidate.service';
import { InvoiceJoin } from '../class_model/invoicejoin';

@Component({
  selector: 'app-updateinvoice',
  templateUrl: './updateinvoice.component.html',
  styleUrls: ['./updateinvoice.component.css']
})
export class UpdateinvoiceComponent implements OnInit {

  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  isclient:string;
  invoice_id:number;
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
  id1:number;
  client_job_id:number;
  no_of_position:number;
  shift_time:string;
  experience:string;
  salary_package:string;
  education:string;
  last_used:string;
  technical_skill:string;
  special_skill:string;
  job_description:string;
  positions:Job_Req[]=[];
  jobreqarr:JobReq_Join[]=[];
  invoicearr:Invoice[]=[];
  invoicejoinarr:InvoiceJoin[]=[]
  coarr:Company[]=[];

  constructor(public _invoiceser:InvoiceService,public _route:Router,public _coser:CompanyService,
    public _jobreqser:JobrequirementService,public _candiser:CandidateService,public _acroute:ActivatedRoute) { }

  ngOnInit() { 
    console.log("Hellooo"+this.invoice_id);
    this.id1=this._acroute.snapshot.params['invoice_id'];
    console.log("Resume ID"+ this.id1);

    this._invoiceser.GetInvoiceJOINByID(this.id1).subscribe(
      (data:InvoiceJoin[])=>{
      
      this.invoicejoinarr=data;
      console.log(data);
      this.invoice_id=data[0].invoice_id;
      this.fk_company_id=data[0].fk_company_id;
      this.fk_client_job_id=data[0].fk_client_job_id;
      this.no_of_candidate=data[0].no_of_candidate;
      this.salary=data[0].salary;
      this.amount=data[0].amount;
      this.date=data[0].date;
      this.company_id=data[0].company_id;
      this.co_logo=data[0].co_logo;
      this.co_name=data[0].co_name;
      this.class_of_company=data[0].class_of_company;
      this.co_address=data[0].co_address;
      this.co_phone_no=data[0].co_phone_no;
      this.co_website=data[0].co_website;
      this.co_email_id=data[0].co_email_id;
      //this.isclient=data[0].isclient;
     
      this.client_job_id=data[0].client_job_id;
      //this.fk_company_id=data[0].fk_company_id;
      this.job_type=data[0].job_type;
      this.no_of_position=data[0].no_of_position;
      this.shift_time=data[0].shift_time;
      this.experience=data[0].experience;
      this.salary_package=data[0].salary_package;
      this.education=data[0].education;
      this.last_used=data[0].last_used;
      this.technical_skill=data[0].technical_skill;
      this.special_skill=data[0].special_skill;
      this.job_description=data[0].job_description;
      }
    );

     //to get all company name
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

}
