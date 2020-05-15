export class Company
{
    constructor(
        
        public company_id:number,
        public co_logo:string,
        public co_name:string,
        public class_of_company:string,
        public co_address:string,
        public co_phone_no:string,
        public co_website:string,
        public co_email_id:string,
        public isclient?:string,
        public fk_BD_id?:string,
        public convert_to_client_date?:string
        //public company_id?:number
    ){}
}