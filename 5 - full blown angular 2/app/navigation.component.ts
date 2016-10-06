import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    template: `
    <div class="navbar-fixed">
      <nav >
        <div class="nav-wrapper">
          <a href="#" class="brand-logo"><img src="/logo.png"></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a routerLink="/webshop"><i class="material-icons dp48">shopping_cart</i>Cart</a></li>
            <li><a routerLink="/products"><i class="material-icons dp48">store</i>Store</a></li>
          </ul>
        </div>
      </nav>
    </div>
  `
})
export class NavigationComponent{ }