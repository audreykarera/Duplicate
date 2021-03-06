import { QuoteStatusService } from './../../../../shared/services/quote-status.service';
import { QuoteStatus } from 'src/app/models/quotestatus';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-edit-quote-status',
  templateUrl: './edit-quote-status.component.html',
  styleUrls: ['./edit-quote-status.component.scss']
})
export class EditQuoteStatusComponent implements OnInit {

  quoteStatus:QuoteStatus;

  constructor(private quoteStatusService: QuoteStatusService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data:any,
    private notificationService: NotificationsService) { }

    ngOnInit(): void {
      console.log(this.data);
      this.refreshForm();
    }
  
    Close(){
      this.dialog.closeAll();
    }

    onSave(){
      this.quoteStatusService.patchQuoteStatus(this.quoteStatus).subscribe((res)=>{
        this.quoteStatus = res as QuoteStatus; 
      });
      this.Close();
      this.notificationService.successToaster("Successfully saved Payment Type", "Error");
      setTimeout(()=>{
        window.location.reload();
      }, 1000);
    }
  
    refreshForm(){
      this.quoteStatus = {
        QouteStatusId: 0,
        QuoteStatusName: ''
      }
  }
}
