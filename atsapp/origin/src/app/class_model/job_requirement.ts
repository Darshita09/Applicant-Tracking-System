export class Job_Req
{
    constructor(
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
        public client_job_id?:number
    ){}
}