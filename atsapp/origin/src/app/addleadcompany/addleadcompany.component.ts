import { Component, OnInit } from '@angular/core';
import { Company } from '../class_model/company';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-addleadcompany',
  templateUrl: './addleadcompany.component.html',
  styleUrls: ['./addleadcompany.component.css']
})
export class AddleadcompanyComponent implements OnInit {

  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  isclient:boolean;
  leadcoarr:Company[]=[];

  constructor(public _route:Router,public _leadcodata:CompanyService) { }

  ngOnInit() {
  }

  onaddleadco()
  {
    this._leadcodata.AddCompany(new Company(this.co_logo,this.co_name,this.class_of_company,this.co_address,this.co_phone_no,this.co_website,this.co_email_id,this.isclient)).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.leadcoarr.push(new Company(this.co_logo,this.co_name,this.class_of_company,this.co_address,this.co_phone_no,this.co_website,this.co_email_id,this.isclient));
        alert('Lead company added successfully');
        this._route.navigate(['/leadcompany']);


      }
    );

}
onback()
{
  this._route.navigate(['']);
}

}
