import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var calendar: any;

@Component({
  selector: 'app-calander',
  standalone: true,
  imports: [],
  templateUrl: './calander.component.html',
  styleUrl: './calander.component.css'
})
export class CalanderComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Get reference to the button
    const button = this.elementRef.nativeElement.querySelector('#scheduleButton');

    // Add click event listener to open the popup window
    if (button) {
      button.addEventListener('click', () => {
        // URL of the Google Calendar appointment scheduling page
        const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3br0IQGFHtErGOzgHXOlvaEMTqazEuV8Mkgz7tR7jbJjVS5fzY2DBF-Ku55znO0DrK2F2pBmYm?gv=true';

        // Open the calendar URL in a new popup window
        window.open(
          calendarUrl,
          'popup', // Window name
          'width=600,height=700,scrollbars=yes,resizable=yes' // Window features
        );
      });
    }
  }
}
