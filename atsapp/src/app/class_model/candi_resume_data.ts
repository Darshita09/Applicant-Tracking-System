export class Candidate_Resume_Data
{
    constructor(
        public candidate_resume_id:number,
        public fk_company_id:number,
        public fk_client_job_id:number,
        public candidate_Email:string,
        public candidate_Phone:string,
        public candidate_Address:string,
        public candidate_hometown:string,
        public candidate_experience:string,
        public current_salary:string,
        public expected_salary:string,
        public candi_education:string,
        public candi_last_used:string,
        public candi_technical_skill:string,
        public candi_special_skill:string,
        public candi_job_desc:string,
        public fk_Recruiter_id:string,
        public sending_date:string,
        public fk_Assignment_id:number,
        public fk_candidate_id:number
      ){}
}