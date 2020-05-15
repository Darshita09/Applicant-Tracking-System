import { Time } from "@angular/common";

export class Candidatestatus
{
    constructor(
        public candidate_id:number,
        public candidate_name:string,
        public Email:string,
        public Phone:string,
        public Address:string,
        public hometown:string,
        public Resume:string,
        public call_date:string,
        public call_time:string,
        public call_status:String,
        public fk_client_job_id:number,
        public fk_Recruiter_id:string,
        public interview_date:Date,
        public status:string,
        public client_job_id:number,
        public fk_company_id:number,
        public job_type:string,
        public no_of_position:number,
        public shift_time:string,
        public experience:string,
        public salary_package:number,
        public education:string,
        public last_used:string,
        public technical_skill:string,
        public special_skill:string,
        public job_description:string,
        public company_id:number,
        public co_logo:string,
        public co_name:string,
        public class_of_company:string,
        public co_address:string,
        public co_phone_no:string,
        public co_website:string,
        public co_email_id:string,
        public isclient:string

        
      ){}
}