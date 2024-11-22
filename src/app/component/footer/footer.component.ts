import {} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubscriberService } from '../../services/subscriber/subscriber.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SubscriberService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', '/src/styles.css']
})
export class FooterComponent {
  email: string = '';
  message: string = '';
  messageColor: string = '';  // To control message color
  isValidEmail: boolean = false;

  constructor(private subscriberService: SubscriberService) {}

  subscribe() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (this.email.match(emailPattern)) {
      this.isValidEmail = true;

      // Call the service and subscribe to the observable
      this.subscriberService.saveSubscriberEmail(this.email).subscribe({
        next: (response) => {
          console.log('Response from server:', response);
          this.message = 'Email saved successfully!';
          this.messageColor = 'green';  // Set color to green for success
        },
        error: (error) => {
          console.error('Error occurred:', error);
          this.message = 'Failed to save email. Please try again.';
          this.messageColor = 'red';  // Set color to red for error
          if (error.status === 0) {
            console.error('Possible CORS issue or network error.');
          } else {
            console.error('Error status:', error.status);
            console.error('Error details:', error.message);
          }
        }
      });

    } else {
      this.isValidEmail = false;
      this.message = 'Please enter a valid email address.';
      this.messageColor = 'red';  // Set color to red for invalid email
    }

    this.email = '';
  }
}
