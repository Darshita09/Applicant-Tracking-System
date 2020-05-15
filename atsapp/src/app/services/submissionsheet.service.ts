import { Injectable } from '@angular/core';
import {  submissionsheet} from '../class_model/submissionsheet';
import {submissionalljoin  } from '../class_model/submission_alljoin';
import {  HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsheetService {

  submissionsheet:string='http://localhost:3000/submission/';
  submissionsheetalljoin:string='http://localhost:3000/subsheetconmjoin/';
  subsheetconmbyid:string='http://localhost:3000/subsheetconmbyid/';
  BDsubmissionsheet:string='http://localhost:3000/bdsubmissionsheet/';
  SubSheetForEmail:string='http://localhost:3000/subsheetforemail/';
  Recruitersubmissionsheet:string='http://localhost:3000/Recruitersubmssionsheet/';

  constructor(public _http:HttpClient) { }

  GetAllSubmissionsheet()
  {
    return this._http.get(this.submissionsheet);
  }
  GetBDSubmissionSheet(id:string)
  {
    return this._http.get(this.BDsubmissionsheet+id);
  }
  GetRecruiterSubmissionsheet(id:string)
  {
    return this._http.get(this.Recruitersubmissionsheet+id);
  }
  GetSubSheetForEmail(id:number)
  {
    console.log("serivce call" +id);
    return this._http.get(this.SubSheetForEmail+id);
  }
  AddSubmissionsheet(item:submissionsheet)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.submissionsheet,body,{headers:h});
  }
  DeleteSubmissionsheet(item:submissionsheet)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.submissionsheet+item.submission_id,{headers:h});
  }
  UpdateSubmissionsheet(item:submissionsheet)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.submissionsheet+item.submission_id,body,{headers:h});
  }
  GetAllName(){
    console.log("hello");
    return this._http.get(this.submissionsheetalljoin);
  }
  GetConmById(id:number){
    console.log("company update");
      return this._http.get(this.subsheetconmbyid+id);
  }

}
