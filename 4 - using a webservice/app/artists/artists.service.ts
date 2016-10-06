import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const artistUrl = 'https://api.spotify.com/v1/search?q={0}&type=artist';

@Injectable()
export class ArtistsService{
    constructor(private http: Http){}

    getArtists(artistName: string): Observable<any[]>{
        return this.http
               .get(artistUrl.replace('{0}', artistName))
               .map((r: Response) => {
                 return r.json().artists.items.filter(a => a.images.length > 0) as any[];
                });
    }
}