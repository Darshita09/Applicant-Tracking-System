import { Injectable } from '@angular/core';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assiurl:string='http://localhost:3000/assignment/';
  joinurl:string='http://localhost:3000/joinassignment/';
  BDjoinurl:string='http://localhost:3000/bdjoinassignment/';
  jobreqjoin:string='http://localhost:3000/joinJR/';
  constructor(public _http:HttpClient) { }

  GetAllAssignment()
  {
    return this._http.get(this.assiurl);
  }
  GetAssignmentById(id:string)
  {
    return this._http.get(this.assiurl+id)
  }
  AddAssignment(item:Assignment)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.assiurl,body,{headers:h});
  }
  DeleteAssignment(item:Assignment)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');  
    return this._http.delete(this.assiurl+item.Assignment_id,{headers:h});  
  }
  UpdateAssignment(item:Assignment)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.assiurl+item.Assignment_id,body,{headers:h});
  }
  GetRecnmByID()
  {
    return this._http.get(this.joinurl);
  }
  GetBDnmById()
  {
    return this._http.get(this.BDjoinurl);
  }
  GetJobReqById()
  {
    return this._http.get(this.jobreqjoin);
  }
  
}
