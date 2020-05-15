import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Company } from '../class_model/company';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientcompany',
  templateUrl: './clientcompany.component.html',
  styleUrls: ['./clientcompany.component.css']
})
export class ClientcompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    }
}
