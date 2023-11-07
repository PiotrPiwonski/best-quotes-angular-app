import { Component } from '@angular/core';
import {Quotation} from './models/quotation';
import {QUOTES} from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showForm = false;
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = {author: '', sentence: '', votes: 0};

  // przełącza pole klasy true/false
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  // metoda obsługuje głosowanie na konkretny cytat
  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }

  // dodaje cytat na początek listy i resetuje pole quotation
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }


}
