import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
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
    AssignassignmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
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
