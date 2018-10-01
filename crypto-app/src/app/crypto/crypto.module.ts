import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinListComponent } from './components/coin-list/coin-list.component';
import { CoinListItemComponent } from './components/coin-list-item/coin-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoinListComponent, CoinListItemComponent],
  declarations: [CoinListComponent, CoinListItemComponent]
})
export class CryptoModule { }
