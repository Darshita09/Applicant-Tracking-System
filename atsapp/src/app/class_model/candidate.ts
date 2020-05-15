//import { Time } from "@angular/common";

export class Candidate
{
    constructor(
        public candidate_name:string,
        public Email:string,
        public Phone:string,
        public Address:string,
        public hometown:string,
        public Resume:string,
        public call_date:string,
        public call_time:string,
        public call_status:String,
        public call_status_date:string,
        public final_status:string,
        public fk_client_job_id:number,
        public fk_Recruiter_id:String,
        public interview_date?:string,
        public status?:string,
        public candidate_id?:number
      ){}
}