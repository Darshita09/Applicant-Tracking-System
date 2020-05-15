export class submissionsheet
{
    constructor(
     //public submission_id:number,
     public submission_date:string,
     public fk_company_id:number,
     public fk_candidate_id:number,
     public fk_user_id:string,
     public submission_id?:number
    ){}
}