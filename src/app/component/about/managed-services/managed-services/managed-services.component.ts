import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-managed-services',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './managed-services.component.html',
  styleUrl: './managed-services.component.css',
})
export class ManagedServicesComponent {}
