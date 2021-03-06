import { CreatePackageRateComponent } from './../../create-package-price/create-package-rate/create-package-rate.component';

import { PackageRate } from './../../../../models/packageRate';
import { EditPackageRateComponent } from './../../edit-package-rate/edit-package-rate/edit-package-rate.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { PackageRateService } from 'src/app/shared/services/package-rate.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

export interface PackageRateTable {
  rateprice: number;
  dateofprice: string;
} 

const ELEMENT_DATA: PackageRateTable[] = [
  {rateprice: 650, dateofprice: '09/11/2021'},
  
];


@Component({
  selector: 'app-read-package-rates',
  templateUrl: './read-package-rates.component.html',
  styleUrls: ['./read-package-rates.component.scss']
})
export class ReadPackageRatesComponent implements OnInit {

  // packageRateList: PackageRate[];
  // packageRate: PackageRate;
  // searchText='';

  displayedColumns: string[] = ['rateprice', 'dateofprice', 'edit', 'delete'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) {}
    // private packageRateService: PackageRateService,
    // private notificationService: NotificationsService

  ngOnInit(): void {
    //this.readPackageRates();
  }

  // readPackageRates(){
  //   this.packageRateService.getPackageRate().subscribe((res)=>{
  //     this.packageRateList=res as PackageRate[];
  //   }, (err:HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Unable to display Payment Types", "Error");
  //     console.log(err);
  //   })
  // }

  // onDelete(id){
  //   this.packageRateService.deletePackageRate(id).subscribe((res)=>{
  //     console.log(id);
  //     this.readPackageRates();
  //   }, (err: HttpErrorResponse)=>{
  //     this.notificationService.failToaster("Pacckage Rate Deleted ", "Success");
  //   });
  // }

  routerAddPackageRate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      CreatePackageRateComponent, 
      dialogConfig
    );
  }
  routerEditPackageRate(packageRateId: number, packageRatePrice: number, packagePriceDate: string) {
    console.log(packageRateId, packageRatePrice, packagePriceDate);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogReference = this.dialog.open(
      EditPackageRateComponent, 
      {
        disableClose:true,
        data:{
          packageRateId,
          packageRatePrice,
          packagePriceDate

        }
      }
    );

}

}