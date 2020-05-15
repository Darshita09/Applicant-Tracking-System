import { Injectable } from '@angular/core';
import {  joiningsheet} from '../class_model/joiningsheet';
import {  joinsheetalljoin} from '../class_model/joinsheet_alljoin';
import {  HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoiningsheetService {

  joiningsheet:string='http://localhost:3000/joiningsheet/';
  joinsheetconmjoin:string='http://localhost:3000/joinsheetconmjoin/';
  //joinsheetcandistatus:string='http://localhost:3000/joinsheetcandiNMstatus/';
  joinsheetcandidatestatus:string='http://localhost:3000/candidatestatus/';
  joinsheetupdatecandiNM:string='http://localhost:3000/joinsheetallnmbyid/';
  BDJoiningsheet:string='http://localhost:3000/bdjoiningsheet/';
  BDMJoiningSheet:string='http://localhost:3000/BDMjoiningsheet/';
  Recruiterjoiningsheet:string='http://localhost:3000/Recruiterjoiningsheet/';

  constructor(public _http:HttpClient) { }
  
  GetAllJoiningSheet()
  {
    return this._http.get(this.joiningsheet);
  }
  GetBDJoiningSheet(id:string)
  {
    return this._http.get(this.BDJoiningsheet+id);
  }
  GetBDMJoiningsheet()
  {
    return this._http.get(this.BDMJoiningSheet);
  }
  GetRecruiterJoiningsheet(id:string)
  {
    return this._http.get(this.Recruiterjoiningsheet+id);
  }
  AddJoiningSheet(item:joiningsheet)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.joiningsheet,body,{headers:h});
  }
  DeleteJoiningSheet(item:joiningsheet)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.joiningsheet+item.joiningsheet_id,{headers:h});
  }
  UpdateJoiningSheet(item:joiningsheet)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.joiningsheet+item.joiningsheet_id,body,{headers:h});
  }
  GetAllName(){
    return this._http.get(this.joinsheetconmjoin);
  }
  GetConmById(id:number){
    console.log("joinsheet service call");
      return this._http.get(this.joinsheetcandidatestatus+id);
  }
  GetAllUpdateNMById(id:number){
    console.log("joinsheet");
    return this._http.get(this.joinsheetupdatecandiNM+id);
  }
}
