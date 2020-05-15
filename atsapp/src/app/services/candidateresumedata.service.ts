import { Injectable } from '@angular/core';
import { Candidate_Resume_Data } from '../class_model/candi_resume_data';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateresumedataService {

  candidateresumedata:string='http://localhost:3000/candidateresumedata/';
  BDCandiResumeData:string='http://localhost:3000/BDcandiResumedata/';
  RecCandiResumeData:string='http://localhost:3000/ReccandiResumedata/';
  DirSendCandiResumeData:string='http://localhost:3000/DirsendCandiResume/';
  BDMCandiResumeData:string='http://localhost:3000/BDMCandiResume/';
  ResumeDataforUpdate:string='http://localhost:3000/ResumeDataforupdate/';

  constructor(public _http:HttpClient) { }

  GetAllCandidateResume()
  {
    return this._http.get(this.candidateresumedata);
  }
  GetCandidateResumeById(id:number)
  {
    return this._http.get(this.candidateresumedata+id);
  }
  GetBDCandiResumeData(id:string)
  {
    return this._http.get(this.BDCandiResumeData+id);
  }
  GetBDMCandiResumeData()
  {
    return this._http.get(this.BDMCandiResumeData);
  }
  GetRECcandiResumeData(id:string)
  {
    return this._http.get(this.RecCandiResumeData+id);
  }
  GetDirSendCandiResume()
  {
    return this._http.get(this.DirSendCandiResumeData);
  }
  GetResumeDataForUpdate(id:number)
  {
    return this._http.get(this.ResumeDataforUpdate+id);
  }
  AddCandidateResume(item:Candidate_Resume_Data)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.candidateresumedata,item);
  }
  DeleteCandidateResume(item:Candidate_Resume_Data)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');  
    return this._http.delete(this.candidateresumedata+item.candidate_resume_id,{headers:h});  
  }
  UpdateCandidateResume(item:Candidate_Resume_Data)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.candidateresumedata+item.candidate_resume_id,body,{headers:h});
  }
}
