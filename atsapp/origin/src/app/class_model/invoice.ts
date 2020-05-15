export class Invoice
{
    constructor(
     public candidate_id:number,
     public fk_company_id:number,
     public amount:number,
     public date:string,
     public invoice_id?:number
    ){}
}