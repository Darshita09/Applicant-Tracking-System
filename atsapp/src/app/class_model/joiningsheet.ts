export class joiningsheet
{
    constructor(
    
     public joining_date:string,
     public fk_company_id:number,
     public fk_candidate_id:number,
     public fk_BD_id:string,
     public joiningsheet_id?:number
     
    ){}
}