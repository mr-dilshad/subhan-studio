import { Component } from '@angular/core';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  constructor(public dialog: MatDialog) {}
  openDailog(projectToShow: string) {
    console.log('project to show : ' + projectToShow);
    this.dialog.open(ProjectInfoComponent, {
      data: { templateToLoad: projectToShow },
    });
  }
}
