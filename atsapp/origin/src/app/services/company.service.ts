import { Injectable } from '@angular/core';
import { Company } from '../class_model/company';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company:string='http://localhost:3000/Lead_company/';
  constructor(public _http:HttpClient) { }

  GetAllCompany()
  {
    return this._http.get(this.company);
  }
  GetCompanyById(id:number)
  {
    return this._http.get(this.company+id);
  }
  AddCompany(item:Company)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.company,body,{headers:h});
  }
  DeleteCompany(item:Company)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.company+item.company_id,{headers:h});
  }
  UpdateCompany(item:Company)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.company+item.company_id,body,{headers:h});
  }
}
