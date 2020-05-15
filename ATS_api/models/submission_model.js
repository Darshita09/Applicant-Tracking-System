var db=require('../dbconnection');
var submissionsheet={
    
    GetAllSubSheet:function(callback)
    {
        return db.query('select submission_id,submission_date,fk_company_id,fk_candidate_id,fk_user_id from submissionsheet_tbl',callback);
    },
    GetSubSheetById:function(submission_id,callback)
    {
        return db.query('select submission_id,submission_date,fk_company_id,fk_candidate_id,fk_user_id from submissionsheet_tbl where submission_id=?',[submission_id],callback);
    },
    AddSubSheet:function(item,callback)
    {
        return db.query('insert into submissionsheet_tbl values(?,?,?,?,?)',[item.submission_id,item.submission_date,item.fk_company_id,item.fk_candidate_id,item.fk_user_id],callback);
    },
    DeleteSubSheet:function(submission_id,callback)
    {
        return db.query('delete from submissionsheet_tbl where submission_id=?',submission_id,callback);
    },
    UpdateSubSheet:function(submission_id,item,callback)
    {
        return db.query('update submissionsheet_tbl set submission_date=?,fk_company_id=?,fk_candidate_id=?,fk_user_id=? where submission_id=?',[item.submission_date,item.fk_company_id,item.fk_candidate_id,item.fk_user_id,submission_id],callback);
    },
    GetAllJoin:function(callback)
    {
        return db.query('SELECT s . * , c . * , co . * , u . * FROM submissionsheet_tbl s, candidate_tbl c, company_tbl co, user_tbl u WHERE fk_candidate_id = candidate_id  AND fk_company_id = company_id AND fk_user_id = email_id',callback);
    },
    GetConmByID:function(id,callback)
    {
        return db.query('SELECT s . * , c . * , co . * , u . * FROM submissionsheet_tbl s, candidate_tbl c, company_tbl co, user_tbl u WHERE fk_candidate_id = candidate_id  AND fk_company_id = company_id AND fk_user_id = email_id AND submission_id=?',[id],callback);
    },
    GetBDSubmissionsheet:function(id,callback)
    {
        return db.query('SELECT s . * , c . * , co . * , u . * FROM submissionsheet_tbl s, candidate_tbl c, company_tbl co, user_tbl u WHERE fk_candidate_id = candidate_id  AND fk_company_id = company_id AND fk_user_id = email_id AND fk_user_id=?',[id],callback);
    },
    GetRecruiterSubmissionsheet:function(id,callback)
    {
        return db.query('SELECT s.* , c.* , co.* , j.* , u.* FROM submissionsheet_tbl as s , candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , user_tbl as u WHERE s.fk_candidate_id=c.candidate_id AND c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id AND u.role="Recruiter" AND c.final_status="approved" AND c.fk_Recruiter_id=?',[id],callback);
    },
    GetCoSubSheetForEmail:function(id,callback)
    {
        return db.query('SELECT s.*,c.*,co.*,j.* FROM submissionsheet_tbl as s , candidate_tbl as c , company_tbl as co , job_requirement_tbl as j WHERE s.fk_company_id=co.company_id AND s.fk_candidate_id=c.candidate_id AND c.fk_client_job_id=j.client_job_id AND s.fk_company_id=? AND c.final_status="approved"',[id],callback)
    }
   /* GetConmByID:function(id,callback)
    {
        return db.query('select s. * , c. * , co. *  FROM submissionsheet_tbl AS s, candidate_tbl AS c, company_tbl AS co WHERE s.fk_company_id = co.company_id AND s.fk_candidate_id = c.candidate_id AND fk_company_id =? AND c.call_status =  "approved"',[id],callback);
    },*/
}

module.exports=submissionsheet;