import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [EmailService],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent {

  numberCopied: boolean = false; // Declare numberCopied flag

  formData = {
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private renderer: Renderer2, private emailService: EmailService) {}

  copyCompanyNumber() {
    const companyNumber = '+91-8999784575'; // The company number to copy
    navigator.clipboard.writeText(companyNumber)
      .then(() => {
        this.numberCopied = true;
        const messageElement = this.renderer.selectRootElement('#message', true);
        this.renderer.setProperty(messageElement, 'innerText', 'Number copied to clipboard!');
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  }

  sendEmail() {
    this.emailService.sendEmail(this.formData)
      .then(response => {
        this.successMessage = 'Your message has been sent successfully!';
        this.errorMessage = '';
        this.clearForm();  // Clear form data after success
      })
      .catch(error => {
        this.errorMessage = 'Failed to send your message. Please try again later.';
        this.successMessage = '';
      });
  }

  clearForm() {
    this.formData = {
      name: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    };
  }
}