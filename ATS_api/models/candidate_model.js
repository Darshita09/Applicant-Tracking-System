var db=require('../dbconnection');
var candidate={
    
    GetAllCandidate:function(callback)
    {
        return db.query('select candidate_id,candidate_name,Email,Phone,Address,hometown,Resume,call_date,call_time,call_status,fk_client_job_id,interview_date,status from candidate_tbl',callback);
    },
    GetCandidateById:function(candidate_id,callback)
    {
        return db.query('select candidate_id,candidate_name,Email,Phone,Address,hometown,Resume,call_date,call_time,call_status,fk_client_job_id,interview_date,status from candidate_tbl where candidate_id=?',[candidate_id],callback);
    },
    AddCandidate:function(item,filename,callback)
    {
        return db.query('insert into candidate_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[item.candidate_id,item.candidate_name,item.Email,item.Phone,item.Address,item.hometown,filename,item.call_date,item.call_time,item.call_status,item.final_status_date,item.final_status,item.fk_client_job_id,item.fk_Recruiter_id,item.interview_date,item.status],callback);
    },
    DeleteCandidate:function(candidate_id,callback)
    {
        return db.query('delete from candidate_tbl where candidate_id=?',candidate_id,callback);
    },
    UpdateCandidate:function(candidate_id,item,callback)
    {
        return db.query('update candidate_tbl set candidate_name=?,Email=?,Phone=?,Address=?,hometown=?,Resume=?,call_date=?,call_time=?,call_status=?,fk_client_job_id=?,interview_date=?,status=? where candidate_id=?',[item.candidate_name,item.Email,item.Phone,item.Address,item.hometown,item.Resume,item.call_date,item.call_time,item.call_status,item.fk_client_job_id,item.interview_date,item.status,candidate_id],callback);
    },
    UpdateCandidateResume:function(item,filename,callback)
    {
        return db.query('update candidate_tbl set candidate_name=?,Email=?,Phone=?,Address=?,hometown=?,Resume=?,call_date=?,call_time=?,call_status=?,fk_client_job_id=?,interview_date=?,status=? where candidate_id=?',[item.candidate_name,item.Email,item.Phone,item.Address,item.hometown,item.Resume,item.call_date,item.call_time,item.call_status,item.fk_client_job_id,item.interview_date,item.status,item.candidate_id],callback);
    },
    GetAllConm:function(callback)
    {
        return db.query('SELECT c.*,j.*,co.*,u.* FROM candidate_tbl as c , job_requirement_tbl as j , company_tbl as co , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id',callback);
    },
    GetAllConmByID:function(candidate_id,callback)
    {
        return db.query('SELECT c.*,j.*,co.*,u.* FROM candidate_tbl as c , job_requirement_tbl as j , company_tbl as co , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id AND candidate_id=?',[candidate_id],callback);
    },
    GetRECCalllog:function(id,callback)
    {
        return db.query('SELECT c.*,j.*,co.* FROM candidate_tbl as c , job_requirement_tbl as j , company_tbl as co  WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id  AND c.fk_Recruiter_id=?',[id],callback);
    },
    GetCandidateNM:function(id,callback)
    {
        return db.query('select c.*,j.*,co.* from candidate_tbl as c , job_requirement_tbl as j , company_tbl as co where c.fk_client_job_id=j.client_job_id and j.fk_company_id=co.company_id and co.company_id=? and c.call_status="approved"',[id],callback);
    },
    GetcandidateBystatus:function(id,callback)
    {
        return db.query('select c.*,j.*,co.* from candidate_tbl as c , job_requirement_tbl as j , company_tbl as co where c.fk_client_job_id=j.client_job_id and j.fk_company_id=co.company_id and co.company_id=? and c.status="yes"',[id],callback);
    },
    SendCandiFinalStatus:function(id,callback)  //for updating final status and date
    {
        var date=new Date();
        console.log(date);
        final_status='approved';
        return db.query('update candidate_tbl set final_status=? , final_status_date=?  where candidate_id=?',[final_status,date,id],callback);
    },
    SendCandiRejectFinalStatus:function(id,callback)  //for updating final status and date
    {
        var date=new Date();
        console.log(date);
        final_status='reject';
        return db.query('update candidate_tbl set final_status=? , final_status_date=?  where candidate_id=?',[final_status,date,id],callback);
    },
    GetApprovedCandidate:function(id,callback)
    {
        return db.query('SELECT c.* , co.* , j.* , u.* FROM candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id AND c.fk_Recruiter_id=? AND c.final_status="approved" ORDER BY final_status_date DESC',[id],callback);
    },
    GetDirectorApprovedCandi:function(callback)
    {
        return db.query('SELECT c.* , co.* , j.* , u.* FROM candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id  AND c.final_status="approved" ORDER BY final_status_date DESC',callback);
    },
    GetRejectedCandidate:function(id,callback)
    {
        return db.query('SELECT c.* , co.* , j.* , u.* FROM candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id AND c.fk_Recruiter_id=? AND c.final_status="reject" ORDER BY final_status_date DESC',[id],callback);
    },
    GetDirectorRejectCandi:function(callback)
    {
        return db.query('SELECT c.* , co.* , j.* , u.* FROM candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id  AND c.final_status="reject" ORDER BY final_status_date DESC',callback);
    },
    NoOFCandidate:function(id,type,callback)
    {
        return db.query('SELECT j.*,c.*,count(*) as count from job_requirement_tbl j,candidate_tbl c  where c.status="yes" and c.fk_client_job_id=j.client_job_id and j.fk_company_id=? AND j.job_type=?',[id,type],callback);
    },
    GetDirectorRecruiterCallLog:function(callback)
    {
        return db.query('SELECT c.* , j.* , co.* , u.* FROM candidate_tbl as c , job_requirement_tbl as j , company_tbl as co , user_tbl as u WHERE  c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND c.fk_Recruiter_id=u.email_id',callback);
    },
    GetRecCandidateNM:function(id,callback)
    {
        return db.query('SELECT candidate_id,candidate_name,Email,Phone,Address,hometown,Resume,call_date,call_time,call_status,fk_client_job_id,interview_date,status from candidate_tbl where fk_Recruiter_id=? AND call_status="approved"',[id],callback);
    },
    GetDirectorCandidateNM:function(callback)
    {
        return db.query('SELECT candidate_id,candidate_name,Email,Phone,Address,hometown,Resume,call_date,call_time,call_status,fk_client_job_id,interview_date,status from candidate_tbl where  call_status="approved"',callback);
    }
    //SELECT * FROM `candidate_tbl` WHERE call_status='approved' AND final_status=''
    //update candidate_tbl set call_status='approved'  where candidate_id=3
}

module.exports=candidate;