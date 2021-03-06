import { ServiceType } from 'src/app/models/serviceType';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedComponent } from 'src/app/component/shared components/shared/shared.component';
import { DialogInterface } from 'src/app/Interfaces/dialog.interface';
import { ServiceTypeService } from 'src/app/shared/services/service-type.service';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-servicetype',
  templateUrl: './edit-servicetype.component.html',
  styleUrls: ['./edit-servicetype.component.scss']
})
export class EditServicetypeComponent implements OnInit {
  serviceType: ServiceType;
  constructor(public dialog: MatDialog,
    private serviceTypeService: ServiceTypeService,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private notificationService: NotificationsService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.refreshForm();
  }
 
  Close(){
    this.dialog.closeAll();
  }
  

  updateServiceTypes() {
    this.serviceTypeService.patchServiceType(this.serviceType).subscribe((res) => {
      this.serviceType = res as ServiceType;
    });
    this.Close();
    this.notificationService.successToaster("Successfully saved supplied", "Error");
    setTimeout(()=>{
      window.location.reload();
    }, 1000);
  }

  refreshForm() {
    this.serviceType = {
      ServiceTypeId: 0,
      ServiceTypeName: '',
      ServiceTypeDescription: '',
    }
  }
}
