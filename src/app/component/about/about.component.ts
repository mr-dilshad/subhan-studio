import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DedicatedExpertsComponent } from './dedicated-experts/dedicated-experts/dedicated-experts.component';
import { ManagedServicesComponent } from './managed-services/managed-services/managed-services.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [DedicatedExpertsComponent, ManagedServicesComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public dialog: MatDialog) {}
  openDedicatedExperts() {
    console.log('inside dedicated experts');
    this.dialog.open(DedicatedExpertsComponent);
  }
  openManagedServices() {
    console.log('inside Managed Services');
    this.dialog.open(ManagedServicesComponent);
  }
  openDialog() {
    console.log('inside dedicated experts');
    this.dialog.open(DedicatedExpertsComponent);
  }
}
