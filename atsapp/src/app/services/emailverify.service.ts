import { Injectable } from '@angular/core';
import { EmailVerify } from '../class_model/emailverify';
import { HttpHeaders,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailverifyService {

  emailurl:string='http://localhost:3000/email/';
  forgotpassemailverify:string='http://localhost:3000/forgotpassemailverify/';

  constructor(public _http:HttpClient) { }

  sendmail(item:EmailVerify)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.emailurl,body,{headers:h});
  }
  SendforgotpassMail(item:EmailVerify)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.forgotpassemailverify,body,{headers:h});
  }
}
