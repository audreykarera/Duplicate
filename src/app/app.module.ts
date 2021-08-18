import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ReadEmployeesComponent } from './systems/employees/read-employee/read-employees/read-employees.component';
import { CreateEmployeeComponent } from './systems/employees/create-employee/create-employee/create-employee.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { ReadClientsComponent } from './systems/clients/read-clients/read-clients.component';
import { ReadSuppliersComponent } from './systems/supplier/read-supplier/read-suppliers/read-suppliers.component';
import { ReadUsersComponent } from './systems/users/read-users/read-users/read-users.component';
import { GenerateReportComponent } from './systems/reports/generate-report/generate-report/generate-report.component';
import { CreateSupplierComponent } from './systems/supplier/create-supplier/create-supplier/create-supplier.component';
import { ViewEmployeeComponent } from './systems/employees/view-employee/view-employee/view-employee.component';
import { EditUsersComponent } from './systems/users/edit-user/edit-users/edit-users.component';
import { ViewClientsComponent } from './systems/clients/view-clients/view-clients/view-clients.component';
import { EditSuppliersComponent } from './systems/supplier/edit-supplier/edit-suppliers/edit-suppliers.component';
import { ReadServicesComponent } from './systems/services/read-service/read-services/read-services.component';
import { CreateServiceComponent } from './systems/services/create-service/create-service/create-service.component';
import { DeleteServiceComponent } from './systems/services/delete-service/delete-service/delete-service.component';
import { EditServiceComponent } from './systems/services/edit-service/edit-service/edit-service.component';
import { CreatePackageComponent } from './systems/packages/create-packages/create-package/create-package.component';
import { ReadPackagesComponent } from './systems/packages/read-packages/read-packages/read-packages.component';
import { EditPackagesComponent } from './systems/packages/edit-packages/edit-packages/edit-packages.component';
import { DeletePackageComponent } from './systems/packages/delete-packages/delete-package/delete-package.component';
import { CreateServicetypeComponent } from './systems/service types/create-servicetypes/create-servicetype/create-servicetype.component';
import { EditServicetypeComponent } from './systems/service types/edit-servicetype/edit-servicetype/edit-servicetype.component';
import { ReadServicetypeComponent } from './systems/service types/read-servicetype/read-servicetype/read-servicetype.component';
import { SharedComponent } from './component/shared components/shared/shared.component';
import { AddCollectionNoteComponent } from './systems/collection note/add-collection-note/add-collection-note/add-collection-note.component';
import { ViewCollectionNoteComponent } from './systems/collection note/add-collection-note/view-collection-note/view-collection-note/view-collection-note.component';
import { ReadCollectionNoteComponent } from './systems/collection note/add-collection-note/read-collection-note/read-collection-note/read-collection-note.component';
import { CreateScheduleComponent } from './systems/schedule/create-schedule/create-schedule/create-schedule.component';
import { ReadScheduleComponent } from './systems/schedule/create-schedule/read-schedule/read-schedule/read-schedule.component';
import { UpdateScheduleComponent } from './systems/schedule/create-schedule/update-schedule/update-schedule/update-schedule.component';
import { DeleteScheduleComponent } from './systems/schedule/create-schedule/delete-schedule/delete-schedule/delete-schedule.component';
import { CreateBookingComponent } from './systems/bookings/create-booking/create-booking/create-booking.component';
import { ReadBookingComponent } from './systems/bookings/read-booking/read-booking/read-booking.component';
import { UpdateBookingComponent } from './systems/bookings/update-booking/update-booking/update-booking.component';
import { DeleteBookingComponent } from './systems/bookings/delete-booking/delete-booking/delete-booking.component';
import { CreateQuoteComponent } from './systems/quotes/create-quote/create-quote/create-quote.component';
import { ReadQuoteComponent } from './systems/quotes/read-quote/read-quote/read-quote.component';
import { CreateInvoiceComponent } from './systems/invoices/create-invoice/create-invoice/create-invoice.component';
import { ReadInvoiceComponent } from './systems/invoices/read-invoice/read-invoice/read-invoice.component';
import { CreateExtracollectionComponent } from './systems/extra collection/create-extracollection/create-extracollection/create-extracollection.component';
import { ReadExtracollectionComponent } from './systems/extra collection/read-extracollection/read-extracollection/read-extracollection.component';
import { EditExtracollectionComponent } from './systems/extra collection/edit-extracollection/edit-extracollection/edit-extracollection.component';



const angularMaterials = [
  MatIconModule,
  MatMenuModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatDividerModule, 
  MatListModule,
  MatTableModule, 
  MatFormFieldModule,
  MatDialogModule, 
  MatDatepickerModule, 
  MatNativeDateModule,
  MatInputModule, 
  MatSelectModule
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    ReadEmployeesComponent,
    CreateEmployeeComponent,
    ConfirmDialogComponent,
    ReadClientsComponent,
    ReadSuppliersComponent,
    ReadUsersComponent,
    GenerateReportComponent,
    CreateSupplierComponent,
    ViewEmployeeComponent,
    EditUsersComponent,
    ViewClientsComponent,
    EditSuppliersComponent,
    ReadServicesComponent,
    CreateServiceComponent,
    DeleteServiceComponent,
    EditServiceComponent,
    CreatePackageComponent,
    ReadPackagesComponent,
    EditPackagesComponent,
    DeletePackageComponent,
    CreateServicetypeComponent,
    EditServicetypeComponent,
    ReadServicetypeComponent,
    SharedComponent,
    AddCollectionNoteComponent,
    ViewCollectionNoteComponent,
    ReadCollectionNoteComponent,
    CreateScheduleComponent,
    ReadScheduleComponent,
    UpdateScheduleComponent,
    DeleteScheduleComponent,
    CreateBookingComponent,
    ReadBookingComponent,
    UpdateBookingComponent,
    DeleteBookingComponent,
    CreateQuoteComponent,
    ReadQuoteComponent,
    CreateInvoiceComponent,
    ReadInvoiceComponent,
    CreateExtracollectionComponent,
    ReadExtracollectionComponent,
    EditExtracollectionComponent,
  ],
  imports: [
    ...angularMaterials,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}