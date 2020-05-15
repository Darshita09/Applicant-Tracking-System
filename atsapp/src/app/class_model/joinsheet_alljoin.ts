import { Time } from "@angular/common";

export class joinsheetalljoin
{
    constructor(
     public joiningsheet_id:number,
     public joining_date:string,
     public fk_company_id:number,
     public fk_candidate_id:number,
     public fk_BD_id:string,
     public company_id:number,
     public co_logo:string,
     public co_name:string,
     public class_of_company:string,
     public co_address:string,
     public co_phone_no:string,
     public co_website:string,
     public co_email_id:string,
     public isclient:boolean,
     public candidate_id:number,
     public candidate_name:string,
     public Resume:string,
     public call_date:string,
     public call_time:string,
     public call_status:string,
     public fk_client_job_id:number,
     public interview_date:Date,
     public status:string
    ){}
}