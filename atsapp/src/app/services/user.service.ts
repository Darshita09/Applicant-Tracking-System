import { Injectable } from '@angular/core';
import { User } from '../class_model/user';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
    user:string='http://localhost:3000/ATS_User/';
    userlogin:string='http://localhost:3000/userlogin/';
    Recnm:string='http://localhost:3000/RecnmByid/';
  constructor(public _http:HttpClient) { }

  GetAllUser()
  {
    return this._http.get(this.user);
  }
  GetUserById(id:string)
  {
    return this._http.get(this.user+id)
  }
  GetUserByLogin(item:User)
  {
    console.log("service"+item);
    console.log("service"+this.userlogin);
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.userlogin,body,{headers:h});
  }
  AddUser(item:User)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.user,body,{headers:h});
  }
  DeleteUser(item:User)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');  
    return this._http.delete(this.user+item.email_id,{headers:h});  
  }
  UpdateUser(item:User)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.user+item.email_id,body,{headers:h});
  }
  GetRecnmById()
  {
    return this._http.get(this.Recnm); 
  }
}
