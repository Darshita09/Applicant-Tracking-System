import { Time } from "@angular/common";

export class submissionalljoin
{
    constructor(
     public submission_id:number,
     public submission_date:string,
     public fk_company_id:number,
     public fk_candidate_id:number,
     public fk_user_id:string,
     public candidate_id:number,
     public candidate_name:string,
     public Resume:string,
     public call_date:string,
     public call_time:string,
     public call_status:string,
     public fk_client_job_id:number,
     public interview_date:string,
     public status:string,
     public company_id:number,
     public co_logo:string,
     public co_name:string,
     public class_of_company:string,
     public co_address:string,
     public co_phone_no:string,
     public co_website:string,
     public co_email_id:string,
     public isclient:string,
     public email_id:string,
     public password:string,
     public user_name:string,
     public date_of_birth:string,
     public role:string,
     public gender:string,
     public mobile_no:string,
     public address:string   
        

    ){}
}