export class User
{
    constructor(
        public email_id:string,
        public password:string,
        public user_name?:string,
        public date_of_birth?:string,
        public role?:string,
        public gender?:string,
        public mobile_no?:string,
        public address?:string,
        public action?:string
    ){}
}