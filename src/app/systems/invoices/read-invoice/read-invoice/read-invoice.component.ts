import { CreateInvoiceComponent } from './../../create-invoice/create-invoice/create-invoice.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

export interface InvoicesTable {
  serviceId: number;
  clientname: string
  date: string;
} 

const ELEMENT_DATA: InvoicesTable[] = [
  {serviceId: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-invoice',
  templateUrl: './read-invoice.component.html',
  styleUrls: ['./read-invoice.component.scss']
})
export class ReadInvoiceComponent implements OnInit {

  displayedColumns: string[] = ['serviceId', 'clientname', 'date', 'generate', 'send invoice'];
  dataSource = new MatTableDataSource (ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    public router: Router,
    public dialog: MatDialog
  ) { }
  

  ngOnInit(): void {
  }
  routerGenerateInvoice() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreateInvoiceComponent, 
      dialogConfig
    );

}
}
