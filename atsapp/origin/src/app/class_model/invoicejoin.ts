export class InvoiceJoin
{
    constructor(
       public company_id:number,
       public co_logo:string,
       public co_name:string,
       public class_of_company:string,
       public co_address:string,
       public co_phone_no:string,
       public co_website:string,
       public co_email_id:string,
       public isclient:boolean,
       public invoice_id:number,
       public candidate_id:number,
       public fk_company_id:number,
       public amount:number,
       public date:string
    ){}
}