var db=require('../dbconnection');
var invoice={
    
    GetAllInvoice:function(callback)
    {
        return db.query('select invoice_id,fk_company_id,fk_client_job_id,no_of_candidate,salary,amount,date from invoice_tbl',callback);
    },
    GetInvoiceById:function(invoice_id,callback)
    {
        return db.query('select invoice_id,fk_company_id,fk_client_job_id,no_of_candidate,salary,amount,date from invoice_tbl where invoice_id=?',[invoice_id],callback);
    },
    AddInvoice:function(item,callback)
    {
        return db.query('insert into invoice_tbl values(?,?,?,?,?,?,?)',[item.invoice_id,item.fk_company_id,item.fk_client_job_id,item.no_of_candidate,item.salary,item.amount,item.date],callback);
    },
    DeleteInvoice:function(invoice_id,callback)
    {
        return db.query('delete from invoice_tbl where invoice_id=?',invoice_id,callback);
    },
    UpdateInvoice:function(invoice_id,item,callback)
    {
        return db.query('update invoice_tbl set fk_company_id=?,fk_client_job_id=?,no_of_candidate=?,salary=?,amount=?,date=? where invoice_id=?',[item.fk_company_id,item.fk_client_job_id,item.no_of_candidate,item.salary,item.amount,item.date,invoice_id],callback);
    },
    GetCoNmByID:function(callback)
    {
        return db.query('select c.*,i.*,j.* from company_tbl c,invoice_tbl i, job_requirement_tbl j where i.fk_company_id=c.company_id AND i.fk_client_job_id=j.client_job_id',callback);
    },
    GetInvoiceJOINByID:function(id,callback)
    {
        return db.query('select c.*,i.*,j.* from company_tbl c,invoice_tbl i, job_requirement_tbl j where i.fk_company_id=c.company_id AND i.fk_client_job_id=j.client_job_id AND i.invoice_id=?',[id],callback);
    },
    GetCOInvoiceForMAIL:function(id,callback)
    {
        return db.query('SELECT i.* , co.* , j.* FROM invoice_tbl as i , company_tbl as co , job_requirement_tbl as j WHERE i.fk_company_id=co.company_id AND i.fk_client_job_id=j.client_job_id AND i.fk_company_id=?',[id],callback);
    }
}

module.exports=invoice;