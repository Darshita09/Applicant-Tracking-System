var mysql=require('mysql');
var connection=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'ats_database'
    }
);

module.exports=connection;