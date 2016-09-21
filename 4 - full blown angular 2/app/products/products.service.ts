import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Product} from './product';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const productUrl = 'http://localhost:40503';

@Injectable()
export class ProductsService{
    constructor(private http: Http){}

    getProducts(): Observable<Product[]>{
        return this.http
               .get(productUrl + `/api/Product`)
               .map((r: Response) => {
                   let products = r.json() as Product[];
                   products.forEach((p) => {p.imageUrl = productUrl + p.imageUrl});
                   return products;
                });
    }
}
