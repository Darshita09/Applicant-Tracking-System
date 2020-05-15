import { Injectable } from '@angular/core';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { Assignment_JobReq } from '../class_model/assignment_jobreq';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SubmitAssignment } from '../class_model/submitassignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assiurl:string='http://localhost:3000/assignment/';
  joinurl:string='http://localhost:3000/joinassignment/';
  BDjoinurl:string='http://localhost:3000/bdjoinassignment/';
  jobreqjoin:string='http://localhost:3000/joinJR/';
  alljoinByID:string='http://localhost:3000/alljoinbyid/';
  GetRecAssi:string='http://localhost:3000/getrecassi/';
  AssiTORecruiter:string='http://localhost:3000/assitorecruiter/';
  GetBDAssign:string='http://localhost:3000/bdassignment/';
  SubmittedAssigntoBD:string='http://localhost:3000/submittedassigntobd/';
  submitassign:string='http://localhost:3000/submitassign/';
  BDMassignment:string='http://localhost:3000/bdmassign/';
  RecAssignID:string='http://localhost:3000/RecassignID/';
  ConmByAssignID:string='http://localhost:3000/conmbyassignID/';
  SubmitAssignToBDM:string='http://localhost:3000/submitassignBDM/';
  RecNMinDirector:string='http://localhost:3000/RECNMinDirector/';
  SubmitedAssignTODirector:string='http://localhost:3000/DirectorSubmittedAssign';

  constructor(public _http:HttpClient) { }

  GetAllAssignment()
  {
    return this._http.get(this.assiurl);
  }
  GetAssignmentById(id:number)
  {
    return this._http.get(this.assiurl+id);
  }
  GetRecAssiById(id:string)
  {
    return this._http.get(this.GetRecAssi+id);
  }
  GetAssiTORecruiter(id:string)
  {
    return this._http.get(this.AssiTORecruiter+id);
  }
  GetBDAssignById(id:string)
  {
    return this._http.get(this.GetBDAssign+id);
  }
  GetBDMAssignment()
  {
    return this._http.get(this.BDMassignment);
  }
  GetSubmittedassign(id:string)   //show to BD submitted assignment
  {
    return this._http.get(this.SubmittedAssigntoBD+id);
  }
  GetBDMSubmittedAssign()  //show to BDM submitted assignment
  {
    return this._http.get(this.SubmitAssignToBDM);  
  }
  GetDirectorSubmittedAssign()
  {
    return this._http.get(this.SubmitedAssignTODirector);  
  }
  GetRecAssignID(id:string)
  {
    return this._http.get(this.RecAssignID+id);
  }
  GetConmByAssignID(id:number)
  {
    return this._http.get(this.ConmByAssignID+id);
  }
  GetRECNMindirector()
  {
    return this._http.get(this.ConmByAssignID);
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
     // console.log(item);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.assiurl+item.Assignment_id,body,{headers:h});
  }
  UpdateSubmittedAssign(id:number)   //update issubmit and submission date only 
  {
     console.log('service'+id);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.submitassign+id,{headers:h});
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
  GetAllReqByID(id:number)
  {
    // console.log("call get service"+id);
    return this._http.get(this.alljoinByID+id);
  }
  
}
