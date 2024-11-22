import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css',
})
export class ProjectInfoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { templateToLoad: string }
  ) {}
}
