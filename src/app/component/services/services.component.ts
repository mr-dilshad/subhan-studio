import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { GenericComponentComponent } from './services-offered/generic-component/generic-component.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'], // Corrected `styleUrl` to `styleUrls`
})
export class ServicesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(serviceName: string) {
    try {
      switch (serviceName) {
        case 'cloud-solution':
        case 'digital-transformation':
        case 'cyber-security':
        case 'data-analytics':
        case 'it-consulting':
        case 'managed-it-service':
          console.log(`Loading template for: ${serviceName}`);
          this.dialog.open(GenericComponentComponent, {
            data: { templateToLoad: serviceName },
          });
          break;
        default:
          console.error(`Unknown service: ${serviceName}`);
      }
    } catch (error) {
      console.error(`Error loading template for ${serviceName}:`, error);
    }
  }
}
