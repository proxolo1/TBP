import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor() {}

  ngOnInit() {
    let amount = <HTMLInputElement>document.querySelector('#amount');
    let percentage = <HTMLInputElement>document.querySelector('#percentage');
    let commission = <HTMLInputElement>document.querySelector('#commission');
    let totalIncome = <HTMLInputElement>document.querySelector('#totalIncome');
    amount!.addEventListener('keydown', () => {
      checkCommission();
    });
    percentage!.addEventListener('click', () => {
      checkCommission();
    });
    function checkCommission() {
      let amountV: any = amount.value;
      let percentageV: any = percentage.value;
      console.log(amountV);
      commission.value = `${(amountV * percentageV) / 100}`;
      totalIncome.value = `${amountV - (amountV * percentageV) / 100}`;
      // commission.innerHTML=amount!.value*(percentage.value/100);
      // document.querySelector('.total-income').innerHTML= amount.value-amount.value*(percentage.value/100)
    }
  }
}
