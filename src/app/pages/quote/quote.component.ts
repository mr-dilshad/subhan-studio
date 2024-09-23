import { Component } from '@angular/core';
import { FooterComponent } from "../../component/footer/footer.component";
import { CopyrightComponent } from "../../component/copyright/copyright.component";
import { QuotesComponent } from "../../component/quotes/quotes.component";

@Component({
  selector: 'app-quote-page',
  standalone: true,
  imports: [FooterComponent, CopyrightComponent, QuotesComponent],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

}
