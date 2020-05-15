import { Injectable } from '@angular/core';
import { Candidate } from '../class_model/candidate';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { candidateNM } from '../class_model/candidateNM';
import { CandidateJoin } from '../class_model/candidate_join';
import { CandidateResumeJOINData } from '../class_model/CandiResumeJoin';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  candidateurl:string='http://localhost:3000/candidate/';
  candidatejoinurl:string='http://localhost:3000/corecnmcandidatejoin/';
  candidateNM:string='http://localhost:3000/candidateNM/';
  candidatestatus:string='http://localhost:3000/candidatestatus/';
  conmByID:string='http://localhost:3000/conmbyid/';
  updateresume:string='http://localhost:3000/updateresume/';
  RECcalllog:string='http://localhost:3000/getreccalllog/';
  NoOFCandidate:string='http://localhost:3000/noofcandidate/';
  DirectorReccalllog:string='http://localhost:3000/directorreccalllog/';
  RecCandidateNM:string='http://localhost:3000/RECcandidateNM/';
  CandiFinalStatus:string='http://localhost:3000/candifinalstatus/';
  CandiRejectstatus:string='http://localhost:3000/candirejectstatus/';
  ApprovedCandidate:string='http://localhost:3000/Approvedcandidate/';
  RejectedCandidate:string='http://localhost:3000/Rejectedcandidate/';
  DirectorapprovedCONM:string='http://localhost:3000/directorapprovedCONM/';
  DirectorCandiResume:string='http://localhost:3000/DirectorCandiResume/';
  DirApprovedCandi:string='http://localhost:3000/DirapprovedCandi/';
  DirRejectedCandi:string='http://localhost:3000/DirRejectCandi/';

  constructor(public _http:HttpClient) { }

  GetAllCandidate()
  {
    return this._http.get(this.candidateurl);
  }
  GetCandidateById(id:number)
  {
    return this._http.get(this.candidateurl+id)
  }
  GetRECCallog(id:string)
  {
    return this._http.get(this.RECcalllog+id)
  }
  GetNoOFCandidate(id:number,job_type:string)
  {
    console.log("Serive"+id);
    console.log("Serive"+job_type);

    return this._http.get(this.NoOFCandidate+id+"/"+job_type);
  }
  GetDirectorReccallLog()
  {
    return this._http.get(this.DirectorReccalllog);
  }
  GetRecCandidateNM(id:string) //specific rec candi nm is get
  {
    return this._http.get(this.RecCandidateNM+id);
  }
  UpdateCandifinalStatus(id:number)
  {
    console.log('service'+id);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.CandiFinalStatus+id,{headers:h});
  }
  UpdateCandiREJECTStatus(id1:number)
  {
    console.log('service'+id1);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.CandiRejectstatus+id1,{headers:h});
  }
  GetApprovedCandidate(id:string)
  {
    return this._http.get(this.ApprovedCandidate+id);
  }
  GetRejectedCandidate(id:string)
  {
    return this._http.get(this.RejectedCandidate+id);
  }
  GetDirApprovedCONM()
  {
    return this._http.get(this.DirectorapprovedCONM);
  }
  GetDirectorCandiResume()
  {
    return this._http.get(this.DirectorCandiResume);
  }
  GetDirApprovedCandi()
  {
    return this._http.get(this.DirApprovedCandi);
  }
  GetDirRejectedCandi()
  {
    return this._http.get(this.DirRejectedCandi);
  }
  AddCandidate(item:FormData)
  {
    //let body=JSON.stringify(item);
    //let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.candidateurl,item);
  }
  DeleteCandidate(item:Candidate)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');  
    return this._http.delete(this.candidateurl+item.candidate_id,{headers:h});  
  }
  UpdateCandidate(item:Candidate)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.candidateurl+item.candidate_id,body,{headers:h});
  }
  UpdateCandidateResume(item:FormData)
  {
    console.log("Helloooo");
    return this._http.put(this.updateresume,item);
  }
  GetCoNmById(){
    return this._http.get(this.candidatejoinurl);
  }
  GetCandiNM(id:number)
  {
    return this._http.get(this.candidateNM+id);
  }
  GetCandidateByStatus(id:number)
  {
    return this._http.get(this.candidatestatus+id);
  }
  GetCoNMBYID(id:number)
  {
    return this._http.get(this.conmByID+id);
  }
}
