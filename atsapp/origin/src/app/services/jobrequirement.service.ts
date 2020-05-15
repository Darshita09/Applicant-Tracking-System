import { Injectable } from '@angular/core';
import { Job_Req } from '../class_model/job_requirement';
import { JobReq_Join } from '../class_model/jobreq_join';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobrequirementService {

  jobreq:string='http://localhost:3000/JobReq/';
  joinurl:string='http://localhost:3000/joinjobreq/';
  constructor(public _http:HttpClient) { }

  GetAllJobReq()
  {
    return this._http.get(this.jobreq);
  }
  GetJobReqById(id:number)
  {
    return this._http.get(this.jobreq+id);
  }
  AddJobReq(item:Job_Req)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.jobreq,body,{headers:h});
  }
  DeleteJobReq(item:Job_Req)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.jobreq+item.client_job_id,{headers:h});
  }
  UpdateJobReq(item:Job_Req)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.jobreq+item.client_job_id,body,{headers:h});
  }
  GetCoNmById(){
    return this._http.get(this.joinurl);
  }
}
