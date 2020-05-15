var db=require('../dbconnection');
var jobReq={
    
    GetAllJobReq:function(callback)
    {
        return db.query('select client_job_id,fk_company_id,job_type,no_of_position,shift_time,experience,salary_package,education,last_used,technical_skill,special_skill,job_description from job_requirement_tbl',callback);
    },
    GetJobReqById:function(client_job_id,callback)
    {
        return db.query('select client_job_id,fk_company_id,job_type,no_of_position,shift_time,experience,salary_package,education,last_used,technical_skill,special_skill,job_description from job_requirement_tbl where client_job_id=?',[client_job_id],callback);
    },
    AddJobReq:function(jobreq,callback)
    {
        return db.query('insert into job_requirement_tbl values(?,?,?,?,?,?,?,?,?,?,?,?,?)',[jobreq.client_job_id,jobreq.fk_company_id,jobreq.job_type,jobreq.no_of_position,jobreq.shift_time,jobreq.experience,jobreq.salary_package,jobreq.education,jobreq.last_used,jobreq.technical_skill,jobreq.special_skill,jobreq.job_description,jobreq.fk_BD_id],callback);
    },
    DeleteJobReq:function(client_job_id,callback)
    {
        return db.query('delete from job_requirement_tbl where client_job_id=?',[client_job_id],callback);
    },
    UpdateJobReq:function(client_job_id,jobreq,callback)
    {
        return db.query('update job_requirement_tbl set fk_company_id=?,job_type=?,no_of_position=?,shift_time=?,experience=?,salary_package=?,education=?,last_used=?,technical_skill=?,special_skill=?,job_description=? where client_job_id=?',[jobreq.fk_company_id,jobreq.job_type,jobreq.no_of_position,jobreq.shift_time,jobreq.experience,jobreq.salary_package,jobreq.education,jobreq.last_used,jobreq.technical_skill,jobreq.special_skill,jobreq.job_description,client_job_id],callback);
    },
    GetConmByID:function(callback)
    {
        return db.query('select j.*,c.*,u.* from job_requirement_tbl j,company_tbl c,user_tbl as u where j.fk_company_id=c.company_id AND j.fk_BD_id=u.email_id',callback);
    },
    GetAllCoById:function(id,callback)
    {
        return db.query('select j.*,c.* from job_requirement_tbl j,company_tbl c where j.fk_company_id=c.company_id and j.client_job_id=?',[id],callback);
    },
    GetAllCo:function(id,callback)
    {
        return db.query('select j.*,c.* from job_requirement_tbl j,company_tbl c where j.fk_company_id=c.company_id and c.company_id=?',[id],callback);
    },
    // GetJobTypeByConm(callback)
    // {
    //     return db.query('SELECT j.*,c.* FROM job_requirement_tbl as j,company_tbl as c WHERE j.fk_company_id=c.company_id AND job_type=?',callback);
    // }
    GetNoofPosition:function(id,job_type,callback)
    {
        // return db.query('select j.*,c.* from job_requirement_tbl j,company_tbl c where j.fk_company_id=c.company_id and job_type=?',[job_type],callback);
        return db.query('select * from job_requirement_tbl where fk_company_id=? and job_type=?',[id,job_type],callback);
    },
    // GetALLConm:function(callback)
    // {
    //     return db.query('select c.co_name from company_tbl c,job_requirement_tbl j where c.company_id=j.fk_company_id',callback);
    // },
    GetBDReq:function(id,callback)
    {
        return db.query('SELECT j.*,c.* FROM job_requirement_tbl as j , company_tbl as c WHERE j.fk_company_id=c.company_id AND j.fk_BD_id=?',[id],callback);   
    },
    GetBDMREQ:function(callback)
    {
        return db.query('SELECT j.* , c.* , u.* FROM job_requirement_tbl as j , user_tbl as u , company_tbl as c WHERE j.fk_BD_id=u.email_id AND j.fk_company_id=c.company_id AND u.role!="Director"',callback);
    }
}

module.exports=jobReq;