import { Component,OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
role:string="";
bdflag:boolean=false;
bdmflag:boolean=false
recflag:boolean=false;
directorflag:boolean=false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,public _route:Router) {}
  ngOnInit(){
    this.role=localStorage.getItem('role');
    console.log('menu role'+this.role);
    if(this.role=='BD'){
      this.bdflag=true;
    }
    else if(this.role=='Recruiter')
    {
      this.recflag=true;
    }
    else if(this.role=='BDM')
    {
      this.bdmflag=true;
    }
    else if(this.role=='Director')
    {
      this.directorflag=true;
    }
  }
  OnLogout()
  {
    alert('You have LOGOUT successfully...!!!');
    this._route.navigate(['/login']);
  }
  }
