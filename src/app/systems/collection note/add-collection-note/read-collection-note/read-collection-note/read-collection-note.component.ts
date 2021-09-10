
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddCollectionNoteComponent } from '../../add-collection-note/add-collection-note.component';
import { ViewCollectionNoteComponent } from '../../view-collection-note/view-collection-note/view-collection-note.component';

export interface PeriodicElement {
  collectionnoteid: number;
  clientname: string
  date: string;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {collectionnoteid: 9, clientname: 'Audrey Sir', date: '29 May 2021'}
];

@Component({
  selector: 'app-read-collection-note',
  templateUrl: './read-collection-note.component.html',
  styleUrls: ['./read-collection-note.component.scss']
})
export class ReadCollectionNoteComponent implements OnInit {

  displayedColumns: string[] = ['collectionnoteid', 'clientname', 'date', 'view'];
  dataSource = ELEMENT_DATA;
  constructor(
   public dialog: MatDialog
  ){}

  ngOnInit(): void {  
  }

  routerAddCollectionNote(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      AddCollectionNoteComponent,
      dialogConfig
    );
  }
  
    routerViewCollectionNote() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      ViewCollectionNoteComponent, 
      dialogConfig
    );
  }

}
