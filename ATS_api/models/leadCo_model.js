var db=require('../dbconnection');
var leadCo={
    
    GetAllLeadCo:function(callback)
    {
        return db.query('select company_id,co_logo,co_name,class_of_company,co_address,co_phone_no,co_website,co_email_id,isclient from company_tbl',callback);
    },
    GetLeadCoById:function(company_id,callback)
    {
        return db.query('select company_id,co_logo,co_name,class_of_company,co_address,co_phone_no,co_website,co_email_id,isclient from company_tbl where company_id=?',[company_id],callback);
    },
    AddLeadCo:function(leadco,filename,callback)
    {
        return db.query('insert into company_tbl values(?,?,?,?,?,?,?,?,?,?,?)',[leadco.company_id,filename,leadco.co_name,leadco.class_of_company,leadco.co_address,leadco.co_phone_no,leadco.co_website,leadco.co_email_id,leadco.isclient,leadco.fk_BD_id,leadco.convert_to_client_date],callback);
    },
    DeleteLeadCo:function(company_id,callback)
    {
        return db.query('delete from company_tbl where company_id=?',[company_id],callback);
    },
    UpdateLeadCo:function(company_id,leadco,callback)
    {
        return db.query('update company_tbl set co_name=?,class_of_company=?,co_address=?,co_phone_no=?,co_website=?,co_email_id=?,isclient=? where company_id=?',[leadco.co_name,leadco.class_of_company,leadco.co_address,leadco.co_phone_no,leadco.co_website,leadco.co_email_id,leadco.isclient,company_id],callback);
    },
    UpdateLeadcoImage:function(leadco,filename,callback)
    {
        return db.query('update company_tbl set co_logo=?,co_name=?,class_of_company=?,co_address=?,co_phone_no=?,co_website=?,co_email_id=?,isclient=? where company_id=? ',[filename,leadco.co_name,leadco.class_of_company,leadco.co_address,leadco.co_phone_no,leadco.co_website,leadco.co_email_id,leadco.isclient,leadco.company_id],callback);
    },
    GetBDConm:function(id,callback)
    {
        return db.query('select company_id,co_logo,co_name,class_of_company,co_address,co_phone_no,co_website,co_email_id,isclient from company_tbl where fk_BD_id=?',[id],callback);
    },
    GetBDMConm:function(id,callback)
    {
        return db.query('SELECT c.* , u.* FROM company_tbl as c , user_tbl as u WHERE c.fk_BD_id=u.email_id AND u.role="BD" OR u.role="BDM" AND c.fk_BD_id=?',[id],callback);
    },
    ConvertLeadTOClient:function(id,callback)
    {
        var date=new Date();
        console.log(date);
        isclient='yes';
        return db.query('update company_tbl set isclient=? , convert_to_client_date=? where company_id=?',[isclient,date,id],callback);
    },
    GetBDConvertedClientCompany:function(id,callback)
    {
        return db.query('SELECT * FROM `company_tbl` WHERE isclient="yes" AND fk_BD_id=? ORDER BY convert_to_client_date DESC',[id],callback);
    },
    RemoveClient:function(id,callback)
    {
        isclient='no';
        return db.query('update company_tbl set isclient=? where company_id=?',[isclient,id],callback);
    },
    GetBDClientCompany:function(id,callback)   // for dropdown 
    {
        return db.query('select company_id,co_logo,co_name,class_of_company,co_address,co_phone_no,co_website,co_email_id,isclient from company_tbl where fk_BD_id=? AND isclient="yes"',[id],callback);
    },
    GetBDMClientCO:function(id,callback)     // for dropdown
    {
        return db.query('SELECT c.* , u.* FROM company_tbl as c , user_tbl as u WHERE c.fk_BD_id=u.email_id AND u.role="BDM" AND c.fk_BD_id=?',[id],callback);
    },
    GetDirectorClientCompany:function(callback)    //for dropdown
    {
        return db.query('select company_id,co_logo,co_name,class_of_company,co_address,co_phone_no,co_website,co_email_id,isclient,fk_BD_id from company_tbl where isclient="yes"',callback);
    },
    GetDirectorClientCOINDESC:function(callback)
    {
        return db.query('select c.* , u.* from company_tbl as c , user_tbl as u  where c.fk_BD_id=u.email_id AND isclient="yes"  ORDER BY convert_to_client_date DESC',callback);
    },
    GetBDMClientCOINDESC:function(id,callback)
    {
        return db.query('SELECT c.* , u.* FROM company_tbl as c , user_tbl as u WHERE c.isclient="yes" AND c.fk_BD_id=u.email_id  AND u.role="BD" OR u.role="BDM" AND  c.fk_BD_id="k@gmail.com" ORDER BY convert_to_client_date DESC',[id],callback);
    },
    GetDirectorLeadCO:function(callback)
    {
        return db.query('SELECT c.* , u.* FROM company_tbl as c , user_tbl as u WHERE c.fk_BD_id=u.email_id',callback);
    }
}

module.exports=leadCo;