export class EmailVerify
{
    constructor(
        public to:string,
        public subject:string,
        public message:string,
        public filename?:string
    ){}
}