import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor() {}

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_mobile: formData.mobile,
      for_service: formData.service,
      message: formData.message
    };

    return emailjs.send('service_kw9b0up', 'template_jkkv1rh', templateParams, 'ejKKV42sV-54UkwRw');
  }
}
