import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UseradminComponent } from './useradmin/useradmin.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UpdateuserinfoComponent } from './updateuserinfo/updateuserinfo.component';
import { LeadcompanyComponent } from './leadcompany/leadcompany.component';
import { ClientcompanyComponent } from './clientcompany/clientcompany.component';
import { AddleadcompanyComponent } from './addleadcompany/addleadcompany.component';
import { UpdateleadcoComponent } from './updateleadco/updateleadco.component';
import { JobrequirementComponent } from './jobrequirement/jobrequirement.component';
import { AddjobreqComponent } from './addjobreq/addjobreq.component';
import { UpdatejobreqComponent } from './updatejobreq/updatejobreq.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceinfoComponent } from './invoiceinfo/invoiceinfo.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignassignmentComponent } from './assignassignment/assignassignment.component';
import { AtsstartComponent } from './atsstart/atsstart.component';
import { UpdateassignmentComponent } from './updateassignment/updateassignment.component';
import { RecruitercalllogComponent } from './recruitercalllog/recruitercalllog.component';
import { SetcallComponent } from './setcall/setcall.component';
import { submissionsheet } from './class_model/submissionsheet';
import { UpdaterecruitercalllogComponent } from './updaterecruitercalllog/updaterecruitercalllog.component';
import { RecruiterassignmentsComponent } from './recruiterassignments/recruiterassignments.component';
import { SubmissionsheetComponent } from './submissionsheet/submissionsheet.component';
import { SendsubsheetComponent } from './sendsubsheet/sendsubsheet.component';
import { UpdatesubmissionsheetComponent } from './updatesubmissionsheet/updatesubmissionsheet.component';
import { NewassignmentComponent } from './newassignment/newassignment.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { JoiningsheetComponent } from './joiningsheet/joiningsheet.component';
import { AddjoiningsheetComponent } from './addjoiningsheet/addjoiningsheet.component';
import { UpdatejoiningsheetComponent } from './updatejoiningsheet/updatejoiningsheet.component';
import { SubmittedassignmentComponent } from './submittedassignment/submittedassignment.component';
import { CandidateresumedataComponent } from './candidateresumedata/candidateresumedata.component';
import { UpdateinvoiceComponent } from './updateinvoice/updateinvoice.component';
import { AddcandidateresumedataComponent } from './addcandidateresumedata/addcandidateresumedata.component';
import { ResumecheckingComponent } from './resumechecking/resumechecking.component';
import { ApprovedcandidateComponent } from './approvedcandidate/approvedcandidate.component';
import { DisapprovedcandidateComponent } from './disapprovedcandidate/disapprovedcandidate.component';
import { RecruiterjoiningsheetComponent } from './recruiterjoiningsheet/recruiterjoiningsheet.component';
import { RecruitersubmissionsheetComponent } from './recruitersubmissionsheet/recruitersubmissionsheet.component';
import { UpdatecandidateresumedataComponent } from './updatecandidateresumedata/updatecandidateresumedata.component';


const arr: Routes = [
    {path: '', component: AtsstartComponent},
    {path: 'login', component: LoginComponent},
    // {path:'menu',component:MenuComponent},
    {path: 'userinfo', component: UserinfoComponent},
    {path: 'useradmin', component: UseradminComponent},
    {path: 'updateuserinfo/:email_id', component: UpdateuserinfoComponent},
    {path: 'leadcompany', component: LeadcompanyComponent},
    {path: 'clientcompany', component: ClientcompanyComponent},
    {path: 'addleadcompany', component: AddleadcompanyComponent},
    {path: 'updateleadco/:company_id', component: UpdateleadcoComponent},
    {path: 'jobrequirement', component: JobrequirementComponent},
    {path: 'addjobreq', component: AddjobreqComponent},
    {path: 'updatejobreq/:client_job_id', component: UpdatejobreqComponent},
    {path: 'assignment', component: AssignmentComponent},
    {path: 'assignassignment', component: AssignassignmentComponent},
    {path: 'updateassignment/:Assignment_id', component: UpdateassignmentComponent},
    {path: 'recruitercalllog', component: RecruitercalllogComponent},
    {path: 'updaterecruitercalllog/:candidate_id', component: UpdaterecruitercalllogComponent},
    {path: 'recruiterassignments', component: RecruiterassignmentsComponent},
    {path: 'setcall', component: SetcallComponent},
    {path: 'candidateresumedata', component: CandidateresumedataComponent},
    {path: 'addcandidateresumedata', component: AddcandidateresumedataComponent},
    {path: 'updatecandidateresumedata/:candidate_resume_id', component: UpdatecandidateresumedataComponent},
    {path: 'resumechecking', component: ResumecheckingComponent},
    {path: 'approvedcandidate', component: ApprovedcandidateComponent},
    {path: 'disapprovedcandidate', component: DisapprovedcandidateComponent},
    {path: 'newassignment', component: NewassignmentComponent},
    {path: 'submissionsheet', component: SubmissionsheetComponent},
    {path: 'sendsubsheet', component: SendsubsheetComponent},
    {path: 'updatesubmissionsheet/:submission_id', component: UpdatesubmissionsheetComponent},
    {path: 'recruitersubmissionsheet', component: RecruitersubmissionsheetComponent},
    {path: 'submittedassignment', component: SubmittedassignmentComponent},
    {path: 'joiningsheet', component: JoiningsheetComponent},
    {path: 'addjoiningsheet', component: AddjoiningsheetComponent},
    {path: 'updatejoiningsheet/:joiningsheet_id', component: UpdatejoiningsheetComponent},
    {path: 'recruiterjoiningsheet', component: RecruiterjoiningsheetComponent},
    {path: 'welcomepage', component: WelcomepageComponent},
    {path: 'invoice', component: InvoiceComponent},
    {path: 'invoiceinfo', component: InvoiceinfoComponent},
    {path: 'updateinvoice/:invoive_id', component: UpdateinvoiceComponent}
];

export const routing = RouterModule.forRoot(arr);
