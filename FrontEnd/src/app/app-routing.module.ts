import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FmdashboardComponent } from './fmdashboard/fmdashboard.component';
import { UploadCFirmwareComponent } from './upload-c-firmware/upload-c-firmware.component';
import { UploadJavaFirmwareComponent } from './upload-java-firmware/upload-java-firmware.component';
import { UploadIotFirmwareComponent } from './upload-iot-firmware/upload-iot-firmware.component';
import { UpgradeFirmwareCombinationComponent } from './upgrade-firmware-combination/upgrade-firmware-combination.component';
import { DeviceSearchComponent } from './device-search/device-search.component';
import { SingleDeviceSearchComponent } from './device-search/single-device-search/single-device-search.component';
import { OutboundStatusComponent } from './outbound-status/outbound-status.component';
import { OtherOTAPCommandComponent } from './other-otap-command/other-otap-command.component';
import { FirmwareReportComponent } from './firmware-report/firmware-report.component';
import { LoginComponent } from './login/login.component';
import { CustomerselectionComponent } from './customerselection/customerselection.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
    },
    {
      path: 'Firmware', component: FmdashboardComponent
    },
    {
      path: 'upload/c', component: UploadCFirmwareComponent, canActivate: [AuthGuard]
    },
    {
      path: 'upload/java', component:  UploadJavaFirmwareComponent
    },
    {
      path: 'upload/iot', component:  UploadIotFirmwareComponent
    },
  
    {
      path: 'deviceSearch/:device', component:  DeviceSearchComponent
    },
    {
      path: 'upgrade', component:  UpgradeFirmwareCombinationComponent
    },
    {
      path: 'deviceSearch/single_device/:id', component:  SingleDeviceSearchComponent
    },
    {
      path: 'outboundstatus', component:  OutboundStatusComponent
    },
    {
      path: 'othercommand/:device', component:  OtherOTAPCommandComponent 
    },
    {
      path: 'firmwarereport', component:   FirmwareReportComponent
    },
    {
      path: 'login', component:    LoginComponent 
    },
    {
      path: 'customerselection', component:    CustomerselectionComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
