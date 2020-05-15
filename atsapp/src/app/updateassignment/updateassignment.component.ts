import { Component, OnInit } from '@angular/core';
import { Assignment } from '../class_model/assignment';
import { Assignment_Join } from '../class_model/assignment_join';
import { AssignmentService } from '../services/assignment.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Company } from 'origin/src/app/class_model/company';
import { User } from 'origin/src/app/class_model/user';
import { CompanyService } from '../services/company.service';
import { UserService } from '../services/user.service';
import { Job_Req } from '../class_model/job_requirement';
import { JobReq_Join } from '../class_model/jobreq_join';
import { JobrequirementService } from '../services/jobrequirement.service';

@Component({
  selector: 'app-updateassignment',
  templateUrl: './updateassignment.component.html',
  styleUrls: ['./updateassignment.component.css']
})
export class UpdateassignmentComponent implements OnInit {

  positions:Job_Req[]=[];
  jobreqarr:JobReq_Join[]=[];
  assjoinarr:Assignment_Join[]=[];
  coarr:Company[]=[];
  userarr:User[]=[];
  Assignment_id:number;
  fk_Recruiter_id:string;
  duration:string;
  fk_client_job_id:number;
  fk_BD_id:string;
  assign_date:string;
  issubmit:boolean;
  submission_date:Date;
        client_job_id:number;
         fk_company_id:number;
         job_type:string;
         no_of_position:number;
         shift_time:string;
        experience:string;
         salary_package:string;
         education:string;
         last_used:string;
         technical_skill:string;
         special_skill:string;
         job_description:string;
         company_id:number;
         co_logo:string;
         co_name:string;
         class_of_company:string;
         co_address:string;
         co_phone_no:string;
         co_website:string;
         co_email_id:string;
         isclient:boolean;
         email_id:string;
         password:string;
         user_name:string;
         date_of_birth:string;
         role:string;
         gender:string;
         mobile_no:string;
         address:string;
         id:number;
       // role1:string="BD";
        // name:string="shreeja";
  assignmentarr:Assignment[]=[];
  assijoinarr:Assignment_Join[]=[];

  constructor(public _assser:AssignmentService,public _acroute:ActivatedRoute,public _route:Router,
  public _coser:CompanyService,public _userser:UserService,public _jobreqser:JobrequirementService) { }

  ngOnInit() {
    this.id=this._acroute.snapshot.params['Assignment_id'];
    console.log(this.id);
    this._assser.GetAllReqByID(this.id).subscribe(
     
      (data:Assignment_Join[])=>{
             
      this.assijoinarr=data;
      this.Assignment_id=data[0].Assignment_id;
      console.log("Hello"+this.Assignment_id);
      this.fk_Recruiter_id=data[0].fk_Recruiter_id.toString();
      this.duration=data[0].duration;
      this.fk_client_job_id=data[0].fk_client_job_id;
      this.fk_BD_id=data[0].fk_BD_id;
      this.assign_date=data[0].assign_date;
      this.issubmit=data[0].issubmit;
      this.submission_date=data[0].submission_date;
      this.client_job_id=data[0].client_job_id;
      this.fk_company_id=data[0].fk_company_id;
      this.job_type=data[0].job_type;
      this.job_type=this.job_type.trim();
      this.no_of_position=data[0].no_of_position;
      this.shift_time=data[0].shift_time;
      this.experience=data[0].experience;
      this.salary_package=data[0].salary_package;
      this.education=data[0].education;
      this.last_used=data[0].last_used;
      this.technical_skill=data[0].technical_skill;
      this.special_skill=data[0].special_skill;
      this.job_description=data[0].job_description;
      this.company_id=data[0].company_id;
      this.co_logo=data[0].co_logo;
      this.co_name=data[0].co_name;
      this.class_of_company=data[0].class_of_company;
      this.co_address=data[0].co_address;
      this.co_phone_no=data[0].co_phone_no;
      this.co_website=data[0].co_website;
      this.co_email_id=data[0].co_email_id;
      this.isclient=data[0].isclient;
      this.email_id=data[0].email_id;
      this.password=data[0].password;
      this.user_name=data[0].user_name;
      console.log(this.user_name);
      console.log(this.job_type);
      
      console.log(this.no_of_position);
      this.user_name=this.user_name.trim();

      this.date_of_birth=data[0].date_of_birth;
      this.role=data[0].role;
      this.gender=data[0].gender;
      this.mobile_no=data[0].mobile_no;
      this.address=data[0].address; 
      
      //this.fk_BD_id=data[0].fk_BD_id;      
      // this.assign_date=data[0].assign_date;
      // this.user_name=data[0].user_name;

      // this.duration=data[0].duration;
      // this.class_of_company=data[0].class_of_company;
      // this.co_address=data[0].co_address;
      // this.co_phone_no=data[0].co_phone_no;
      // this.co_website=data[0].co_website;
      // this.co_email_id=data[0].co_email_id;
      }
      );
      
      this._coser.GetAllCompany().subscribe
    (
      (data:Company[])=>
      {
        console.log(data);
        this.coarr=data;
       // this.id=this.coarr[0].company_id
        //this.dataSource.data=this.companyarr;
      }
    );
    this._assser.GetRecnmByID().subscribe(
      (data:Assignment_Join[])=>{
        console.log(data);
        this.assjoinarr=data;
              }
    );
    this._userser.GetRecnmById().subscribe(
      (data:User[])=>{
        console.log(data);
        this.userarr=data;
              }
    );
  }

  OnClickRec(id:string)
  {
    this.fk_Recruiter_id=id;
    console.log(this.fk_Recruiter_id);
  }
  OnClick(id:number)
  {
    console.log("hello");
    this.company_id=id;
    console.log(this.company_id);
    //console.log(id);
    this._jobreqser.GetCoRequirements(id).subscribe(
      (data:JobReq_Join[])=>{
        
        console.log(data);
        this.jobreqarr=data;
              }
    );
   }
   OnGetId(cid:number)
   {
    this.fk_client_job_id=cid;
    console.log(this.fk_client_job_id);
   }
   OnRequirement(type:string)
   {
    this.job_type=type;
    //this.fk_client_job_id=id1;
    console.log(this.job_type);
   // console.log("call service");
    this._jobreqser.GetNoofPosition(this.company_id,this.job_type).subscribe(
      (data:Job_Req[])=>{
        console.log(data);
        this.positions=data;
      }
    )
   }

   onsave()
   {
     
     console.log(this.fk_Recruiter_id);
     console.log(this.duration); 
     console.log(this.fk_client_job_id);
     console.log(this.assign_date);
     console.log(this.company_id);
     console.log(this.job_type);
     console.log(this.no_of_position);
     console.log(this.issubmit);
     console.log(this.submission_date);
     this._assser.UpdateAssignment(new Assignment(this.fk_Recruiter_id,this.duration,this.fk_client_job_id,this.fk_BD_id,this.assign_date,this.issubmit,this.submission_date,this.Assignment_id)).subscribe(
      (data:any)=>{
        alert("updated.");
        console.log(data);
        this._route.navigate(['/assignment']);
      }
    );
   }
   onback()
   {
     this._route.navigate(['/assignment']);
   }
   onupdateAssi()
   {

   }
}
