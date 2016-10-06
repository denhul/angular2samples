import {Injectable} from '@angular/core';
import {Order} from './order';
import {Product} from '../products/product';

Injectable()
export class WebShopService{
    public orders: Order[] = new Array<Order>();

    constructor(){
      console.log('made a new webshopservice');
    }

    addItem(product: Product): void{
        let previousOrder = this.orders.filter(o => o.productId === product.id);
        if(previousOrder && previousOrder.length){
            previousOrder[0].quantity++;
            return;
        }

        let orderId = this.orders.length;
        let order = new Order(orderId, product.id, product.productName, 1, product.unitPrice);
        this.orders.push(order);
    }

    removeItem(order: Order):void{
        let index = this.orders.indexOf(order);
        delete this.orders[index];
    }
}