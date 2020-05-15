import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.rounting';
import { AppComponent } from './app.component';
import { UseradminComponent } from './useradmin/useradmin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { UserinfoComponent } from './userinfo/userinfo.component';

import { MatInputModule,MatSelectModule,MatRadioModule,MatNativeDateModule,MatPaginatorModule,MatCheckboxModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UpdateuserinfoComponent } from './updateuserinfo/updateuserinfo.component';
import { LeadcompanyComponent } from './leadcompany/leadcompany.component';
import { ClientcompanyComponent } from './clientcompany/clientcompany.component';
import { AddleadcompanyComponent } from './addleadcompany/addleadcompany.component';
import { JobrequirementComponent } from './jobrequirement/jobrequirement.component';
import { UpdateleadcoComponent } from './updateleadco/updateleadco.component';
import { AddjobreqComponent } from './addjobreq/addjobreq.component';
import { UpdatejobreqComponent } from './updatejobreq/updatejobreq.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceinfoComponent } from './invoiceinfo/invoiceinfo.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignassignmentComponent } from './assignassignment/assignassignment.component';
import { RecruitercalllogComponent } from './recruitercalllog/recruitercalllog.component';
import { LoginComponent } from './login/login.component';
import { AtsstartComponent } from './atsstart/atsstart.component';
import { UpdateassignmentComponent } from './updateassignment/updateassignment.component';
import { SetcallComponent } from './setcall/setcall.component';
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

@NgModule({
  declarations: [
    AppComponent,
    UseradminComponent,
    MenuComponent,
    UserinfoComponent,
    UpdateuserinfoComponent,
    LeadcompanyComponent,
    ClientcompanyComponent,
    AddleadcompanyComponent,
    JobrequirementComponent,
    UpdateleadcoComponent,
    AddjobreqComponent,
    UpdatejobreqComponent,
    InvoiceComponent,
    InvoiceinfoComponent,
    AssignmentComponent,
    AssignassignmentComponent,
    RecruitercalllogComponent,
    LoginComponent,
    AtsstartComponent,
    UpdateassignmentComponent,
    SetcallComponent,
    UpdaterecruitercalllogComponent,
    RecruiterassignmentsComponent,
    SubmissionsheetComponent,
    SendsubsheetComponent,
    UpdatesubmissionsheetComponent,
    NewassignmentComponent,
    WelcomepageComponent,
    JoiningsheetComponent,
    AddjoiningsheetComponent,
    UpdatejoiningsheetComponent,
    SubmittedassignmentComponent,
    CandidateresumedataComponent,
    UpdateinvoiceComponent,
    AddcandidateresumedataComponent,
    ResumecheckingComponent,
    ApprovedcandidateComponent,
    DisapprovedcandidateComponent,
    RecruiterjoiningsheetComponent,
    RecruitersubmissionsheetComponent,
    UpdatecandidateresumedataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // PdfViewerModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
