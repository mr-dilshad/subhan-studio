import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SubscriberService } from '../../services/subscriber/subscriber.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ CommonModule,FormsModule,HttpClientModule],
  providers: [SubscriberService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','/src/styles.css']
})
export class FooterComponent {
  email: string = '';
  message: string = '';
  messageColor: string = '';  // Add this property to control the message color
  isValidEmail= false;
  constructor(private subscriberService: SubscriberService) {}
  
  async subscribe() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (this.email.match(emailPattern)) {
      this.isValidEmail = true;
      try {
        const response = await this.subscriberService.saveSubscriberEmail(this.email);
        this.message = 'Email saved successfully!';
        this.messageColor = 'green';  // Set color to green for success
      } catch (error) {
        this.message = 'Failed to save email. Please try again.';
        this.messageColor = 'red';  // Set color to red for error
      }
    } else {
      this.isValidEmail = false;
      this.message = 'Please enter a valid email address.';
      this.messageColor = 'red';  // Set color to red if input is invalid
    }

    this.email = '';
    
  }
}
