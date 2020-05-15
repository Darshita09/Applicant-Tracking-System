var db=require('../dbconnection');
var joiningsheet={
    
    GetAllJoinSheet:function(callback)
    {
        return db.query('select joiningsheet_id,joining_date,fk_company_id,fk_candidate_id from joiningsheet_tbl',callback);
    },
    GetJoinSheetById:function(joiningsheet_id,callback)
    {
        return db.query('select joiningsheet_id,joining_date,fk_company_id,fk_candidate_id from joiningsheet_tbl where joiningsheet_id=?',[joiningsheet_id],callback);
    },
    AddJoinSheet:function(item,callback)
    {
        return db.query('insert into joiningsheet_tbl values(?,?,?,?,?)',[item.joiningsheet_id,item.joining_date,item.fk_company_id,item.fk_candidate_id,item.fk_BD_id],callback);
    },
    DeleteJoinSheet:function(joiningsheet_id,callback)
    {
        return db.query('delete from joiningsheet_tbl where joiningsheet_id=?',joiningsheet_id,callback);
    },
    UpdateJoinSheet:function(joiningsheet_id,item,callback)
    {
        return db.query('update joiningsheet_tbl set joining_date=?,fk_company_id=?,fk_candidate_id=? where joiningsheet_id=?',[item.joining_date,item.fk_company_id,item.fk_candidate_id,joiningsheet_id],callback);
    },
     GetAllName:function(callback)
    {
        return db.query('SELECT j . * , co . * , c . *  FROM joiningsheet_tbl j, company_tbl co, candidate_tbl c WHERE j.fk_company_id = co.company_id AND j.fk_candidate_id = c.candidate_id',callback);
    },
    GetAllNameById:function(joiningsheet_id,callback)
    {
        return db.query('SELECT j . * , co . * , c . *  FROM joiningsheet_tbl j, company_tbl co, candidate_tbl c WHERE j.fk_company_id = co.company_id AND j.fk_candidate_id = c.candidate_id AND joiningsheet_id=?',[joiningsheet_id],callback);
    },
    GetBDJoiningSheet:function(id,callback)
    {
        return db.query('SELECT j.* , co.* , c.* , u.* FROM joiningsheet_tbl as j , company_tbl as co , candidate_tbl as c , user_tbl as u WHERE j.fk_company_id=co.company_id AND j.fk_candidate_id=c.candidate_id AND j.fk_BD_id=u.email_id  AND u.email_id=?',[id],callback);
    },
    GetBDMJoiningSheet:function(callback)
    {
        return db.query('SELECT j.* , co.* , c.* , u.* FROM joiningsheet_tbl as j , company_tbl as co , candidate_tbl as c , user_tbl as u WHERE j.fk_company_id=co.company_id AND j.fk_candidate_id=c.candidate_id AND j.fk_BD_id=u.email_id AND u.role!="Director" ',callback);
    },
    GetRecruiterJoiningsheet:function(id,callback)
    {
        return db.query('SELECT c.* , co.* , j.* , jo.* , u.* FROM candidate_tbl as c , company_tbl as co , job_requirement_tbl as j , joiningsheet_tbl as jo , user_tbl as u WHERE c.fk_client_job_id=j.client_job_id AND j.fk_company_id=co.company_id AND jo.fk_candidate_id=c.candidate_id AND c.fk_Recruiter_id=u.email_id AND c.status="yes" AND u.role="Recruiter" AND c.fk_Recruiter_id=?',[id],callback);
    }
    // GetCandiNMByStatus:function(status,callback)
    // {
    //     return db.query('select j.*,c.* from joiningsheet_tbl as j,candidate_tbl as c where j.fk_candidate_id=c.candidate_id AND c.status="no"',[status],callback);
    // }
}

module.exports=joiningsheet;