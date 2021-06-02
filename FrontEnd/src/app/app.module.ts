import { BrowserModule } from '@angular/platform-browser';
import { NgModule , LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { FmdashboardComponent } from './fmdashboard/fmdashboard.component';
import { UploadCFirmwareComponent } from './upload-c-firmware/upload-c-firmware.component';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { UploadJavaFirmwareComponent } from './upload-java-firmware/upload-java-firmware.component';
import { UploadIotFirmwareComponent } from './upload-iot-firmware/upload-iot-firmware.component';
import { UpgradeFirmwareCombinationComponent } from './upgrade-firmware-combination/upgrade-firmware-combination.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { SingleDeviceSearchComponent } from './device-search/single-device-search/single-device-search.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import { StylePaginatorDirective } from './device-search/single-device-search/style-paginator.directive';
import { OutboundStatusComponent } from './outbound-status/outbound-status.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePickerFormatDirective } from './pipe/date-picker-format.directive';
import { OtherOTAPCommandComponent } from './other-otap-command/other-otap-command.component';
import { FirmwareReportComponent } from './firmware-report/firmware-report.component';
import { LoginComponent } from './login/login.component';
import { CustomerselectionComponent } from './customerselection/customerselection.component';
import { AuthenticationService } from './services/authentication.service';
import {  OutboundService } from './outbound-status/outbound.service';
import { ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableExporterModule } from 'mat-table-exporter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GraphQLModule } from './graphql.module';
import {MatDialogModule} from '@angular/material/dialog';
import {addCommand} from './other-otap-command/other-otap-command.component'
import {flashFirmware} from './other-otap-command/other-otap-command.component'
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FmdashboardComponent,
    UploadCFirmwareComponent,
    UploadJavaFirmwareComponent,
    UploadIotFirmwareComponent,
    UpgradeFirmwareCombinationComponent,
    DeviceSearchComponent,
    SingleDeviceSearchComponent,
    StylePaginatorDirective,
    OutboundStatusComponent,
    DatePickerFormatDirective,
    OtherOTAPCommandComponent,
    FirmwareReportComponent,
    LoginComponent,
    CustomerselectionComponent,
    addCommand,
    flashFirmware
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatMenuModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableExporterModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    GraphQLModule,
    MatDialogModule,
    ReactiveFormsModule

  ],
  entryComponents: [addCommand,flashFirmware],
  providers: [ AuthenticationService,OutboundService ,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },
  { provide: LOCALE_ID, useValue: 'en-US'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
