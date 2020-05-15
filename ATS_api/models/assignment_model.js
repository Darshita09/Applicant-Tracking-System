var db=require('../dbconnection');
var Assignment={
    
    GetAllAssignment:function(callback)
    {
        return db.query('select Assignment_id,fk_Recruiter_id,duration,fk_client_job_id,fk_BD_id,assign_date,issubmit,submission_date from Assignment_tbl',callback);
    },
    GetAssignmentById:function(Assignment_id,callback)
    {
        return db.query('select Assignment_id,fk_Recruiter_id,duration,fk_client_job_id,fk_BD_id,assign_date,issubmit,submission_date from assignment_tbl where Assignment_id=?',[Assignment_id],callback);
    },
    AddAssignment:function(item,callback)
    {
        return db.query('insert into assignment_tbl(fk_Recruiter_id,duration,fk_client_job_id,fk_BD_id,assign_date,issubmit,submission_date) values(?,?,?,?,?,?,?)',[item.fk_Recruiter_id,item.duration,item.fk_client_job_id,item.fk_BD_id,item.assign_date,item.issubmit,item.submission_date],callback);
    },
    DeleteAssignment:function(Assignment_id,callback)
    {
        return db.query('delete from assignment_tbl where Assignment_id=?',Assignment_id,callback);
    },
    UpdateAssignment:function(Assignment_id,item,callback)
    {
        return db.query('update assignment_tbl set fk_Recruiter_id=?,duration=?,fk_client_job_id=?,fk_BD_id=? where Assignment_id=?',[item.fk_Recruiter_id,item.duration,item.fk_client_job_id,item.fk_BD_id,Assignment_id],callback);
    },
    GetRecNmByID:function(callback)
    {
        return db.query('select a.*,j.*,c.*,u.* from assignment_tbl as a,job_requirement_tbl as j,company_tbl as c,user_tbl as u where a.fk_client_job_id=j.client_job_id and j.fk_company_id=c.company_id and a.fk_Recruiter_id=u.email_id',callback);
    },
    GetBDnmByID:function(callback)
    {
        return db.query('select u.user_name from user_tbl u,assignment_tbl a where u.email_id=a.fk_BD_id',callback);
    },
    GetJobReqById:function(callback)
    {
        return db.query('SELECT a.*,j.*,c.* FROM assignment_tbl as a,job_requirement_tbl as j,company_tbl as c where a.fk_client_job_id=j.client_job_id and j.fk_company_id=c.company_id',callback)
    },
    GetAllJoinReq:function(Assignment_id,callback)
    {
        return db.query('SELECT a.*,j.*,c.*,u.* FROM assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id AND a.fk_Recruiter_id=u.email_id AND Assignment_id=?',[Assignment_id],callback);
    },
    GetRecAssignment:function(id,callback)
    {
        return db.query('SELECT a.* , j.* , c.* , u.* FROM assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id AND a.fk_Recruiter_id=u.email_id AND a.fk_Recruiter_id=?',[id],callback);
    },
    GetAssignAssignment:function(id,callback) //assi which assign to recruiter query
    {
        return db.query('SELECT a.* , j.* , c.* , u.* from assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND a.fk_Recruiter_id=u.email_id AND j.fk_company_id=c.company_id AND fk_Recruiter_id=? and issubmit=0 ORDER BY assign_date DESC  LIMIT 2',[id],callback);
    },
    GetBDAssignment:function(id,callback)
    {
        return db.query('SELECT a.*,j.*,c.*,u.* FROM assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id AND a.fk_Recruiter_id=u.email_id AND a.fk_BD_id=?',[id],callback);
    },
    GetBDMAssignment:function(callback)
    {
        return db.query('SELECT a.*, j.*, c.* , u.* FROM assignment_tbl as a ,job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE  a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id AND a.fk_BD_id=u.email_id AND u.role!="Director"',callback);
    },
    GetSubmittedAssignment:function(id,callback) //assi which submitted by recruiter query
    {
        return db.query('SELECT a.* , j.* , c.* , u.* from assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND a.fk_Recruiter_id=u.email_id AND j.fk_company_id=c.company_id AND a.fk_BD_id=? and issubmit=1 ORDER BY assign_date DESC  LIMIT 4',[id],callback);
    },
    submitAssignment:function(id,callback){
        var date=new Date();
        console.log(date);
        issubmit=1;
        return db.query('update assignment_tbl set issubmit=?,submission_date=? where Assignment_id=?',[issubmit,date,id],callback);
        
    },
    GetBDMSubmittedAssign:function(callback)
    {
        return db.query('SELECT a.* , j.* , c.* , u.* from assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND  a.fk_BD_id=u.email_id AND j.fk_company_id=c.company_id AND  issubmit=1  AND u.role!="Director" ORDER BY submission_date DESC  LIMIT 4',callback);
    },
    GetDirectorSubmittedAssign:function(callback)
    {
        return db.query('SELECT a.* , j.* , c.* , u.* FROM assignment_tbl as a , job_requirement_tbl as j , company_tbl as c , user_tbl as u WHERE a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id  AND a.fk_Recruiter_id=u.email_id AND a.issubmit=1 ORDER BY submission_date DESC',callback);
    },
    GetRecAssignID:function(id,callback)
    {
        return db.query('select Assignment_id,fk_Recruiter_id,duration,fk_client_job_id,fk_BD_id,assign_date,issubmit,submission_date from assignment_tbl where fk_Recruiter_id=?',[id],callback);
    },
    GetCONMbyAssignID:function(id,callback)
    {
        return db.query('SELECT a.* , c.* , j.* FROM assignment_tbl as a , company_tbl as c , job_requirement_tbl as j WHERE a.fk_client_job_id=j.client_job_id AND j.fk_company_id=c.company_id AND a.Assignment_id=?',[id],callback);
    },
    GetRecNMinDirector:function(callback)
    {
        return db.query('SELECT a.* , u.* FROM assignment_tbl as a , user_tbl as u WHERE a.fk_Recruiter_id=u.email_id AND u.role="Recruiter"',callback);
    }
    //SELECT Assignment_id FROM assignment_tbl WHERE fk_Recruiter_id="renukasolanki99@gmail.com"
    //SELECT j.*,c.*,count(*) as count from job_requirement_tbl j,candidate_tbl c where c.status='yes' and c.fk_client_job_id=j.client_job_id and j.fk_company_id=101
    //SELECT * from assignment_tbl WHERE fk_Recruiter_id='renukasolanki99@gmail.com' and issubmit=0 ORDER BY assign_date DESC  LIMIT 2
    //SELECT a.*,j.*,c.* FROM assignment_tbl as a,job_requirement_tbl as j,company_tbl as c where a.fk_client_job_id=j.client_job_id and j.fk_company_id=c.company_id
    //SELECT a.*,j.*,c.*,u.* FROM assignment_tbl as a,job_requirement_tbl as j,company_tbl as c,user_tbl as u where a.fk_client_job_id=j.client_job_id and j.fk_company_id=c.company_id and a.fk_Recruiter_id=u.email_id
    //SELECT u.user_name FROM user_tbl u,assignment_tbl a WHERE u.email_id=a.fk_BD_id
}

module.exports=Assignment;