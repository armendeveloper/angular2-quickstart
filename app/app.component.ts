/**
 * Created by armennalbandyan on 27/08/2016.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
                  <input type='text' 
                     placeholder= "Enter stock symbol" [(ngModel)] = "lastStockSymbol"> // 1
               <br>The value of lastStockSymbol is {{lastStockSymbol}}
              `
})
export class AppComponent {
    lastStockSymbol:String;

    constructor(){
    }
}
