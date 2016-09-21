import {Component, OnInit} from '@angular/core';
import {ProductsService} from './products.service';
import {Product} from './product';

@Component({
    selector: 'product-list',
    template: `
        <div class="container">
            <div class="row">
                <product-detail *ngFor="let product of products" [product]="product"></product-detail>
            </div>
        </div>
    `,
    providers: [ProductsService]
})
export class ProductListComponent implements OnInit{
    public products: Product[];

    constructor( private productsService: ProductsService){ }

    ngOnInit(){
        this.productsService.getProducts().subscribe(
            r => {
                this.products = r;
                console.log(this.products);
            }
        );
    }
}