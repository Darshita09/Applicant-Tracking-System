export class Invoice
{
    constructor(
     public invoice_id:number,
     public fk_company_id:number,
     public fk_client_job_id:number,
     public no_of_candidate: number,
     public salary:number,
     public amount:number,
     public date:string,
     
    ){}
}