export class Assignment
{
    constructor(
        public fk_Recruiter_id:string,
        public duration:string,
        public fk_client_job_id:number,
        public fk_BD_id:string,
        public assign_date:string,
        public issubmit:boolean,
        public submission_date:Date,
        public Assignment_id?:number
        ){}
}