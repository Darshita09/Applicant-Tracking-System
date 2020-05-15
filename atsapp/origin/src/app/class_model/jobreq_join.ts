export class JobReq_Join
{
    constructor(
        public client_job_id:number,
        public fk_company_id:number,
        public job_type:string,
        public no_of_position:number,
        public shift_time:string,
        public experience:string,
        public salary_package:string,
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
        public isclient:boolean
    ){}
}