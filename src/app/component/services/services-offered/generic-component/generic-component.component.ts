import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-component',
  standalone: true,
  imports: [MatDialogModule, CommonModule],
  templateUrl: './generic-component.component.html',
  styleUrl: './generic-component.component.css',
})
export class GenericComponentComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { templateToLoad: string }
  ) {}
}
