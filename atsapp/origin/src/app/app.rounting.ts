import { Routes,RouterModule } from '@angular/router';

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

const arr:Routes=[
    {path:'',component:UserinfoComponent},
    {path:'useradmin',component:UseradminComponent},
    {path:'updateuserinfo/:email_id',component:UpdateuserinfoComponent},
    {path:'leadcompany',component:LeadcompanyComponent},
    {path:'clientcompany',component:ClientcompanyComponent},
    {path:'addleadcompany',component:AddleadcompanyComponent},
    {path:'updateleadco/:company_id',component:UpdateleadcoComponent},
    {path:'jobrequirement',component:JobrequirementComponent},
    {path:'addjobreq',component:AddjobreqComponent},
    {path:'updatejobreq/:client_job_id',component:UpdatejobreqComponent},
    {path:'assignment',component:AssignmentComponent},
    {path:'assignassignment',component:AssignassignmentComponent},
    {path:'invoice',component:InvoiceComponent},
    {path:'invoiceinfo',component:InvoiceinfoComponent}
];

export const routing=RouterModule.forRoot(arr);