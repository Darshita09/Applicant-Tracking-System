export class Assignment
{
    constructor(
        public fk_Recruiter_id:number,
        public duration:string,
        public fk_client_job_id:number,
        public fk_BD_id:string,
        public Assignment_id?:number
        ){}
}