import {Component, OnInit}      from '@angular/core';
import {WebShopService}         from './webshop.service';
import {Order}                  from './order';

@Component({
    selector: 'webshop-list',
    template: `
      <div class="container">
      <h2 *ngIf="!orders || !orders.length">No items in the cart</h2>
      <table *ngIf="orders && orders.length" class="bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let order of orders">
            <td>{{order.productName}}</td>
            <td>{{order.unitPrice | currency:'USD':true}}</td>
            <td>x{{order.quantity}}</td>
            <td>{{order.unitPrice * order.quantity | currency:'USD':true}}</td>
          </tr>
        </tbody>
      </table>
      </div>
      `
})
export class WebshopListComponent implements OnInit{
    constructor(private webshopService: WebShopService){}

    public orders: Order[];

    ngOnInit(){
      this.orders = this.webshopService.orders
    }
}