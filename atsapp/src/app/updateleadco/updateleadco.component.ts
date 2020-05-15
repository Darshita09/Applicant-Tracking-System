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
  isclient:string;
  flag:boolean=false;
  selectedFile:File=null;
  updateleadcoarr:Company[]=[];

  ngOnInit() {
    this.id=this._acroute.snapshot.params['company_id'];
    this._codata.GetCompanyById(this.id).subscribe(
     
      (data:Company[])=>{
             
     this.updateleadcoarr=data;
      
      this.company_id=data[0].company_id;
      console.log("hello"+this.company_id);    
      this.co_logo=data[0].co_logo;
      this.co_name=data[0].co_name;
      this.class_of_company=data[0].class_of_company;
      this.co_address=data[0].co_address;
      this.co_phone_no=data[0].co_phone_no;
      this.co_website=data[0].co_website;
      this.co_email_id=data[0].co_email_id;
      this.isclient=data[0].isclient;
      }
      );
  }
  onChange(value)
  {
    this.flag=true;
    this.selectedFile=<File>value.target.files[0];
  }
  onupdate()
  {
    if(this.flag)
    {
      const fd=new FormData();

      console.log("Update Image"+this.company_id);
      fd.append('company_id',this.company_id.toString());
      fd.append('image',this.selectedFile,this.selectedFile.name);
      fd.append('co_name',this.co_name);
      fd.append('class_of_company',this.class_of_company);
      fd.append('co_address',this.co_address);
      fd.append('co_phone_no',this.co_phone_no);
      fd.append('co_website',this.co_website);  
      fd.append('co_email_id',this.co_email_id);
      fd.append('isclient',this.isclient);
     
   
      this._codata.UpdateCompanyImage(fd).subscribe(
        (data:any)=>
        {
          console.log("Update Data"+this.company_id);
          console.log(data);
    
          alert('Company Details update successfully');
          this._route.navigate(['/leadcompany']);
  
  
        }
      );
    }
    else
    {
      this._codata.UpdateCompany(new Company(this.company_id,this.co_logo,this.co_name,this.class_of_company,this.co_address,this.co_phone_no,this.co_website,this.co_email_id,this.isclient)).subscribe(
        (data:any)=>{
          console.log(data);
          this.updateleadcoarr=data;
          alert('Company Details update successfully');
          this._route.navigate(['/leadcompany']);
        }
      );
    }
   
  }

  onback()
  {
    this._route.navigate(['/leadcompany']);
  }
}
