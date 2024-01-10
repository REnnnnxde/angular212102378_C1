import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { formatCurrency } from '@angular/common';

declare const $: any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1: any;

  constructor(private renderer: Renderer2, private http: HttpClient) {}

  ngOnInit(): void {
    // Panggil method getData saat komponen diinisialisasi
    this.getData();
  }

  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-close");

    this._table1 = $("#table1").DataTable({
      "columnDefs": [
        {
          "targets": 2,
          "className": "text-right"
        }
      ]
    });
  }

  // Method untuk mendapatkan data
  // getData() {
  //   console.log("getData()");

  //   const url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

  //   this.http.get(url)
  //     .subscribe((data: any) => {
  //       console.log(data);

  //       const rates = data.rates;

  //       const idr = rates.IDR;
  //       const idr2 = this.formatCurrency(idr, "en-US", "USD");
  //       console.log("USD: " + idr2);
  //       let row = [1, "USD", idr2];
  //       this._table1.row.add(row);

  //       const sgd = rates.SGD;
  //       const sgd2 = this.formatCurrency(sgd, "en-US", "SGD");
  //       console.log("SGD: " + sgd2);
  //       row = [2, "SGD", sgd2];
  //       this._table1.row.add(row);

  //       const bnd = rates.BND;
  //       const bnd2 = this.formatCurrency(bnd, "en-US", "BND");
  //       console.log("BND: " + bnd2);
  //       row = [3, "BND", bnd2];
  //       this._table1.row.add(row);

  //       const hkd = rates.HKD;
  //       const hkd2 = this.formatCurrency(hkd, "en-US", "HKD");
  //       console.log("HKD: " + hkd2);
  //       row = [4, "HKD", hkd2];
  //       this._table1.row.add(row);

  //       const btc = rates.IDR / rates.BTC;
  //       const btc2 = this.formatCurrency(btc, "en-US", "BTC");
  //       console.log("BTC: " + btc2);
  //       row = [5, "BTC", btc2];
  //       this._table1.row.add(row);

  //       this._table1.draw(false);


  //     });
  // }
  // getData() {
  //   console.log("getData()");

  //   const url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

  //   this.http.get(url)
  //     .subscribe((data: any) => {
  //       console.log(data);

  //       const rates = data.rates;

  //       // Ambil 10 mata uang pertama
  //       const currencies = Object.keys(rates).slice(0, 20);

  //       currencies.forEach((currency: string, index: number) => {
  //         const rate = rates[currency];
  //         const formattedRate = this.formatCurrency(rate, "en-US", currency);

  //         console.log(`${currency}: ${formattedRate}`);
  //         const row = [index + 1, currency, formattedRate];
  //         this._table1.row.add(row);
  //       });

  //       this._table1.draw(false);
  //     });
  // }
  // getData() {
  //   console.log("getData()");

  //   const url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

  //   this.http.get(url)
  //     .subscribe((data: any) => {
  //       console.log(data);

  //       const rates = data.rates;

  //       // Urutkan nilai rates dari yang terbesar ke yang terkecil
  //       const sortedCurrencies = Object.keys(rates).sort((a, b) => rates[b] - rates[a]);

  //       // Ambil 10 mata uang dengan nilai terbesar
  //       const topCurrencies = sortedCurrencies.slice(0, 10);

  //       topCurrencies.forEach((currency: string, index: number) => {
  //         const rate = rates[currency];
  //         const formattedRate = this.formatCurrency(rate, "en-US", currency);

  //         console.log(`${currency}: ${formattedRate}`);
  //         const row = [index + 1, currency, formattedRate];
  //         this._table1.row.add(row);
  //       });

  //       this._table1.draw(false);
  //     });
  // }
  // getData() {
  //   console.log("getData()");

  //   const url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

  //   this.http.get(url)
  //     .subscribe((data: any) => {
  //       console.log(data);

  //       const rates = data.rates;

  //       // Urutkan nilai rates dari yang terbesar ke yang terkecil
  //       const sortedCurrencies = Object.keys(rates).sort((a, b) => rates[b] - rates[a]);

  //       // Ambil 10 mata uang dengan nilai terbesar
  //       const topCurrencies = sortedCurrencies.slice(0, 50);

  //       topCurrencies.forEach((currency: string, index: number) => {
  //         const rate = rates[currency];
  //         const formattedRate = this.formatCurrency(rate, "en-US", currency);

  //         // Menghilangkan simbol mata uang dari string
  //         const rateWithoutSymbol = formattedRate.substring(currency.length).trim();

  //         console.log(`${currency}: ${rateWithoutSymbol}`);
  //         const row = [index + 1, currency, rateWithoutSymbol];
  //         this._table1.row.add(row);
  //       });

  //       this._table1.draw(false);
  //     });
  // }
  getData() {
    console.log("getData()");

    const url = "https://openexchangerates.org/api/latest.json?app_id=9d00a8c0800644d6a358ddf3b33b49c2";

    this.http.get(url)
      .subscribe((data: any) => {
        console.log(data);

        const rates = data.rates;

        Object.keys(rates).forEach((currency: string, index: number) => {
          const rate = rates[currency];
          const formattedRate = this.formatCurrency(rate, "en-US", currency);

          // Menghilangkan simbol mata uang dari string
          const rateWithoutSymbol = formattedRate.substring(currency.length).trim();

          console.log(`${currency}: ${rateWithoutSymbol}`);
          const row = [index + 1, currency, rateWithoutSymbol];
          this._table1.row.add(row);
        });

        this._table1.draw(false);
      });
  }



  // Method untuk melakukan format currency
  formatCurrency(value: number, locale: string, currency: string): string {
    return formatCurrency(value, locale, currency);
  }
}
