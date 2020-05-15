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

  company_id:number;
  co_logo:string;
  co_name:string;
  class_of_company:string;
  co_address:string;
  co_phone_no:string;
  co_website:string;
  co_email_id:string;
  isclient:string='no';
  fk_BD_id:string;
  convert_to_client_date:string=null;
  selectedFile:File=null;
  leadcoarr:Company[]=[];

  constructor(public _route:Router,public _leadcodata:CompanyService) { }

  ngOnInit() {
  }

  onaddleadco()
  {
    // this.isclient=false;
    this.fk_BD_id=localStorage.getItem('email_id');
    const fd=new FormData();
    //fd.append('ISBN_no',this.ISBN_no.toString());
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('co_name',this.co_name.toString());
    fd.append('class_of_company',this.class_of_company);
    fd.append('co_address',this.co_address);
    fd.append('co_phone_no',this.co_phone_no);
    fd.append('co_website',this.co_website);  
    fd.append('co_email_id',this.co_email_id);
    fd.append('isclient',this.isclient.toString());
    fd.append('fk_BD_id',this.fk_BD_id);
    fd.append('convert_to_client_date',this.convert_to_client_date);

    this._leadcodata.AddCompany(fd).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.leadcoarr.push(new Company(this.company_id,this.co_logo,this.co_name,this.class_of_company,this.co_address,this.co_phone_no,this.co_website,this.co_email_id,this.isclient,this.fk_BD_id,this.convert_to_client_date));
        alert('Lead company added successfully');
        this._route.navigate(['/leadcompany']);


      }
    );
    }
onChange(value)
{
  this.selectedFile=<File>value.target.files[0];
}
onback()
{
  this._route.navigate(['/leadcompany']);
}

}
