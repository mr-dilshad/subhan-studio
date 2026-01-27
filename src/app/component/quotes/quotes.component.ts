import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';
import { subscribe } from 'diagnostics_channel';

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
    from_name: '',
    from_email: '',
    from_mobile: '',
    for_service: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private renderer: Renderer2, private emailService: EmailService) { }

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
    this.emailService.saveUserQuery(this.formData)
      .subscribe({
        next: (response: any) => {
          this.successMessage = 'Your message has been sent successfully!';
          this.errorMessage = '';
          this.clearForm();
        },
        error: (error : any) => {
          this.errorMessage = 'Failed to send your message.';
          this.successMessage = '';
        }
      });
  }

  clearForm() {
    this.formData = {
      from_name: '',
      from_email: '',
      from_mobile: '',
      for_service: '',
      message: ''
    };
  }
}