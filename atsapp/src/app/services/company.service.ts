import { Injectable } from '@angular/core';
import { Company } from '../class_model/company';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company:string='http://localhost:3000/Lead_company/';
  updateimg:string='http://localhost:3000/updateimage/';
  GetBDco:string='http://localhost:3000/bdco/';
  ConverttoClient:string='http://localhost:3000/converttoclient/';
  ClientCompany:string='http://localhost:3000/getclientcompany/';
  RemovefromClient:string='http://localhost:3000/removefromclient/';
  BDMConm:string='http://localhost:3000/bdmconm/';
  BDClientCompany:string='http://localhost:3000/bdclientcompany/';
  BDMclientCO:string='http://localhost:3000/bdmclientco/';
  DirectorClientcompany:string='http://localhost:3000/directorclientcompany/';
  DirclientCOINDESC:string='http://localhost:3000/dirclientCOINDESC/';
  BDMclientCOINDESC:string='http://localhost:3000/bdmclientCOINDESC/';
  DirectorLeadCO:string='http://localhost:3000/Directorleadco/';

  constructor(public _http:HttpClient) { }

  GetAllCompany()
  {
    return this._http.get(this.company);
  }
  GetCompanyById(id:number)
  {
    return this._http.get(this.company+id);
  }
  GetBDconm(id:string)
  {
    return this._http.get(this.GetBDco+id);
  }
  GetBDMCO(id:string)
  {
    return this._http.get(this.BDMConm+id);
  }
  GetClientCompany(id:string)
  {
    return this._http.get(this.ClientCompany+id);
  }
  GetBDClientCompany(id:string)
  {
    return this._http.get(this.BDClientCompany+id);
  }
  GetBDMClientCO(id:string)
  {
    return this._http.get(this.BDMclientCO+id);
  }
  GetBDMClientCOINDES(id:string)
  {
    return this._http.get(this.BDMclientCOINDESC+id);
  }
  GetDirectorClientCompany()
  {
    return this._http.get(this.DirectorClientcompany);
  }
  GetDirectorClientCOINDESC()
  {
    return this._http.get(this.DirclientCOINDESC);
  }
  GetDirectorLeadCO()
  {
    return this._http.get(this.DirectorLeadCO);
  }
  AddCompany(item:FormData)
  {
    // let body=JSON.stringify(item);
    // let h=new HttpHeaders().set('Content-Type','application/json');
    // return this._http.post(this.company,body,{headers:h});
    return this._http.post(this.company,item);
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
  UpdateCompanyImage(item:FormData)
  {
    return this._http.put(this.updateimg,item);
  }
  ConvertTOClient(id:number)
  {
    console.log('service'+id);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.ConverttoClient+id,{headers:h});
  }
  RemoveClient(id:number)
  {
    console.log('service'+id);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.RemovefromClient+id,{headers:h});
  }
}
