var db=require('../dbconnection');
var candidate_Resume_data={
    
    GetAllResumeData:function(callback)
    {
        return db.query('select candidate_resume_id,fk_company_id,fk_client_job_id,candidate_Email,candidate_Phone,candidate_Address,candidate_hometown,candidate_experience,current_salary,expected_salary,candi_education,candi_last_used,candi_technical_skill,candi_special_skill,candi_job_desc,fk_Recruiter_id,sending_date,fk_Assignment_id,fk_candidate_id from candidate_resume_data_tbl',callback);
    },
    GetResumeDataById:function(candidate_resume_id,callback)
    {
        return db.query('select candidate_resume_id,fk_company_id,fk_client_job_id,candidate_Email,candidate_Phone,candidate_Address,candidate_hometown,candidate_experience,current_salary,expected_salary,candi_education,candi_last_used,candi_technical_skill,candi_special_skill,candi_job_desc,fk_Recruiter_id,sending_date,fk_Assignment_id,fk_candidate_id from candidate_resume_data_tbl where candidate_resume_id=?',[candidate_resume_id],callback);
    },
    AddResumeData:function(item,callback)
    {
        var date=new Date();
        console.log(date);
        return db.query('insert into candidate_resume_data_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[item.candidate_resume_id,item.fk_company_id,item.fk_client_job_id,item.candidate_Email,item.candidate_Phone,item.candidate_Address,item.candidate_hometown,item.candidate_experience,item.current_salary,item.expected_salary,item.candi_education,item.candi_last_used,item.candi_technical_skill,item.candi_special_skill,item.candi_job_desc,item.fk_Recruiter_id,date,item.fk_Assignment_id,item.fk_candidate_id],callback);
    },
    DeleteResumeData:function(candidate_resume_id,callback)
    {
        return db.query('delete from candidate_resume_data_tbl where candidate_resume_id=?',candidate_resume_id,callback);
    },
    UpdateResumeData:function(candidate_resume_id,item,callback)
    {
        return db.query('update candidate_resume_data_tbl set fk_company_id=?,fk_client_job_id=?,candidate_Email=?,candidate_Phone=?,candidate_Address=?,candidate_hometown=?,candidate_experience=?,current_salary=?,expected_salary=?,candi_education=?,candi_last_used=?,candi_technical_skill=?,candi_special_skill=?,candi_job_desc=?,fk_Recruiter_id=?,sending_date=?,fk_Assignment_id=?,fk_candidate_id=? where candidate_resume_id=?',[item.fk_company_id,item.fk_client_job_id,item.candidate_Email,item.candidate_Phone,item.candidate_Address,item.candidate_hometown,item.candidate_experience,item.current_salary,item.expected_salary,item.candi_education,item.candi_last_used,item.candi_technical_skill,item.candi_special_skill,item.candi_job_desc,item.fk_Recruiter_id,item.sending_date,item.fk_Assignment_id,item.fk_candidate_id,candidate_resume_id],callback);
    },
    GetBDCandiResumeData:function(id,callback)
    {
        return db.query('SELECT cr.* , a.* , c.* , j.* , ca.* FROM candidate_resume_data_tbl as cr , assignment_tbl as a , company_tbl as c , job_requirement_tbl as j , candidate_tbl as ca  WHERE cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_candidate_id=ca.candidate_id AND cr.fk_Assignment_id=a.Assignment_id AND cr.fk_Recruiter_id=a.fk_Recruiter_id AND a.fk_BD_id=? ORDER BY sending_date DESC',[id],callback);
    },
    GetBDMCandiResumeData:function(callback)
    {
        return db.query('SELECT cr.* , a.* , c.* , j.* , ca.* , u.* FROM candidate_resume_data_tbl as cr , assignment_tbl as a , company_tbl as c , job_requirement_tbl as j , candidate_tbl as ca , user_tbl as u WHERE cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_candidate_id=ca.candidate_id AND cr.fk_Assignment_id=a.Assignment_id AND a.fk_BD_id=u.email_id AND u.role!="Director" AND cr.fk_Recruiter_id=a.fk_Recruiter_id  ORDER BY sending_date DESC',callback);
    },
    GetRecruiterCandiResume:function(id,callback)
    {
        return db.query('SELECT cr.* , c.* , j.* , u.* , ca.* FROM candidate_resume_data_tbl as cr , company_tbl as c , job_requirement_tbl as j , user_tbl as u ,candidate_tbl as ca WHERE  cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_candidate_id=ca.candidate_id AND cr.fk_Recruiter_id=u.email_id AND cr.fk_Recruiter_id=? AND  u.role="Recruiter"',[id],callback);
    },
    GetDirectorCandiResume:function(callback)
    {
        return db.query('SELECT cr.* , c.* , j.* , u.* , ca.* FROM candidate_resume_data_tbl as cr , company_tbl as c , job_requirement_tbl as j , user_tbl as u ,candidate_tbl as ca WHERE  cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_candidate_id=ca.candidate_id AND cr.fk_Recruiter_id=u.email_id',callback);
    },
    GetDirSendCandiResumeData:function(callback)
    {
        return db.query('SELECT cr.* , a.* , c.* , j.* , ca.* , u.* FROM candidate_resume_data_tbl as cr , assignment_tbl as a , company_tbl as c , job_requirement_tbl as j , candidate_tbl as ca , user_tbl as u WHERE cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_candidate_id=ca.candidate_id AND cr.fk_Assignment_id=a.Assignment_id AND cr.fk_Recruiter_id=a.fk_Recruiter_id AND cr.fk_Recruiter_id=u.email_id  ORDER BY sending_date DESC',callback);
    },
    GetCandiResumeDataForUpdate:function(id,callback)
    {
        return db.query('SELECT cr.* , co.* , j.* , a.* , c.* , u.* FROM candidate_resume_data_tbl as cr , company_tbl as co , job_requirement_tbl as j , assignment_tbl as a , candidate_tbl as c ,user_tbl as u WHERE cr.fk_company_id=co.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_Assignment_id=a.Assignment_id AND cr.fk_candidate_id=c.candidate_id AND cr.fk_Recruiter_id=u.email_id AND cr.candidate_resume_id=?',[id],callback);
    }
    //SELECT cr.* , c.* , j.* , u.* FROM candidate_resume_data_tbl as cr , company_tbl as c , job_requirement_tbl as j , user_tbl as u WHERE  cr.fk_company_id=c.company_id AND cr.fk_client_job_id=j.client_job_id AND cr.fk_Recruiter_id=u.email_id AND cr.fk_Recruiter_id="renukasolanki99@gmail.com" AND  u.role="Recruiter"
}

module.exports=candidate_Resume_data;