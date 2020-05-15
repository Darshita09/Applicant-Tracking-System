import { Injectable } from '@angular/core';
import { Invoice } from '../class_model/invoice';
import { InvoiceJoin } from '../class_model/invoicejoin';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoiceurl:string='http://localhost:3000/Invoice/';
  invoicejoinurl:string='http://localhost:3000/joininvoice/';
  invoiceJOINbyid:string='http://localhost:3000/invoiceJOINbyid/';
  CoInvoiceMail:string='http://localhost:3000/CoInvoiceMail/';

  constructor(public _http:HttpClient) { }

  GetAllInvoice()
  {
    return this._http.get(this.invoiceurl);
  }
  GetInvoiceById(id:number)
  {
    return this._http.get(this.invoiceurl+id)
  }
  GetInvoiceJOINByID(id:number)
  {
    console.log("service called"+id);
    return this._http.get(this.invoiceJOINbyid+id)
  }
  GetCoInvoiceMail(id:number)
  {
    return this._http.get(this.CoInvoiceMail+id)
  }
  AddInvoice(item:Invoice)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.invoiceurl,body,{headers:h});
  }
  DeleteInvoice(item:Invoice)
  {
    let h=new HttpHeaders().set('Content-Type','application/json');  
    return this._http.delete(this.invoiceurl+item.invoice_id,{headers:h});  
  }
  UpdateUser(item:Invoice)
  {
    let body=JSON.stringify(item);
    let h=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.invoiceurl+item.invoice_id,body,{headers:h});
  }
  GetCoNmById(){
    return this._http.get(this.invoicejoinurl);
  }
}
