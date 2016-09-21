import {Component, Input} from '@angular/core';
import {Product} from './product';
import {WebShopService} from '../webshop/webshop.service';

@Component({
    selector: 'product-detail',
    template: `<div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="{{product.imageUrl}}">
              <span class="card-title">{{product.productName}}</span>
            </div>
            <div class="card-content">
              <p>{{showDescription()}}</p>
            </div>
            <div class="card-action">
                <a (click)="addToBasket($event)">
                    <div class="row">
                        <div class="col s6 btn waves-effect waves-light">Add</div>
                        <div class="col s6 right-align price">{{product.unitPrice | currency:'USD':true}}</div>
                    </div>
                </a>
            </div>
          </div>
        </div>`,
        styles: [`
        .card-image img{
            height: 150px;
        }
        .card-content p{
            height: 170px;
        }
        .card-action .row{
            margin-bottom: 0;
            cursor: pointer;
        }
        .card-action{
            padding: 5px 20px;
        }
        .card-action .price{
          margin-top: 7px;
        }
        `]
})
export class ProductDetailComponent{
    @Input()
    public product: Product;

    constructor(private webshopService: WebShopService){    }

    addToBasket(event: any):void{
        event.preventDefault();
        this.webshopService.addItem(this.product);
        console.debug(this.product.productName + ' added to basket');
    }

    showDescription():string{
        let temp = this.product.description.substring(0, 250);
        if(this.product.description.length > 250){ temp += "..."; }
        return temp;
    }
}