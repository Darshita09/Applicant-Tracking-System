import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

// export interface DialogData {
//   email_id:string;
//   password:string;
  // animal: string;
  // name: string;
//

@Component({
  selector: 'app-atsstart',
  templateUrl: './atsstart.component.html',
  styleUrls: ['./atsstart.component.css']
})
export class AtsstartComponent implements OnInit {

  constructor(public dialog: MatDialog, public _route: Router) { }

  ngOnInit() {
  }
  openLoginPage()
   {
    this._route.navigate(['/login']);
    // const dialogRef = this.dialog.open(LoginComponent, {
    //   width: '250px',
    //   data: {}
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   //this.animal = result;
    // });
  }



  // @Component({
  // selector: 'app-login',
  //   templateUrl: './login.component.html',
  // })
  // export class LoginComponent {

  //   constructor(
  //     public dialogRef: MatDialogRef<LoginComponent>,
  //     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  //   onNoClick(): void {
  //     this.dialogRef.close();
  //   }
  //    }

