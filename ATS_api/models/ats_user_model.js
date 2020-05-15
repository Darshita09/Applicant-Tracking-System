var db=require('../dbconnection');
var ats_user={
    
    GetAllUser:function(callback)
    {
        return db.query('select email_id,password,user_name,date_of_birth,role,gender,mobile_no,address from user_tbl',callback);
    },
    GetUserById:function(email_id,callback)
    {
        return db.query('select email_id,password,user_name,date_of_birth,role,gender,mobile_no,address from user_tbl where email_id=?',[email_id],callback);
    },
    GetUserByLogin:function(item,callback)
    {
        return db.query('select email_id,password,role from user_tbl where email_id=? and password=? ',[item.email_id,item.password],callback);
    },
    AddUser:function(user,callback)
    {
        return db.query('insert into user_tbl values(?,?,?,?,?,?,?,?)',[user.email_id,user.password,user.user_name,user.date_of_birth,user.role,user.gender,user.mobile_no,user.address],callback);
    },
    DeleteUser:function(email_id,callback)
    {
        return db.query('delete from user_tbl where email_id=?',email_id,callback);
    },
    UpdateUser:function(email_id,user,callback)
    {
        return db.query('update user_tbl set password=?,user_name=?,date_of_birth=?,role=?,gender=?,mobile_no=?,address=? where email_id=?',[user.password,user.user_name,user.date_of_birth,user.role,user.gender,user.mobile_no,user.address,email_id],callback);
    },
    GetRecnmById:function(callback)
    {
        return db.query('select * from user_tbl where role="Recruiter"',callback);
    }
}

module.exports=ats_user;