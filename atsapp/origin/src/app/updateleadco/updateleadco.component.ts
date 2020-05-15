import { Component, OnInit } from '@angular/core';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateleadco',
  templateUrl: './updateleadco.component.html',
  styleUrls: ['./updateleadco.component.css']
})
export class UpdateleadcoComponent implements OnInit {

  constructor(public _route:Router,public _acroute:ActivatedRoute,public _codata:CompanyService) { }

  company_id:number;
  id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  updateleadcoarr:Company[]=[];

  ngOnInit() {
    this.id=this._acroute.snapshot.params['company_id'];
    this._codata.GetCompanyById(this.id).subscribe(
     
      (data:Company[])=>{
             
     this.updateleadcoarr=data;
            
      this.co_logo=data[0].co_logo;
      this.co_name=data[0].co_name;
      this.class_of_company=data[0].class_of_company;
      this.co_address=data[0].co_address;
      this.co_phone_no=data[0].co_phone_no;
      this.co_website=data[0].co_website;
      this.co_email_id=data[0].co_email_id;
      }
      );
  }

}
