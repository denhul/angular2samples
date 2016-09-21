import { Component } from '@angular/core';
import { ArtistsService } from './artists.service';

@Component({
  selector: 'artist-list',
  template: `
    <div class="container">
      <input type="text" [(ngModel)]="artistName" />
      <button (click)="search()" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons dp48">search</i></button>
      <div class="row" *ngIf="artists && artists.length" >
          <div class="col s12 m6" *ngFor="let artist of artists">
            <div class="card">
              <div class="card-image">
                <img src="{{artist.images[1].url}}">
                <span class="card-title">{{artist.name}}</span>
              </div>
              <div class="card-action">
                <a href="{{artist.external_urls.spotify}}">Open in spotify</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  `,
  styles: [`
  .card-image img{
    height: 360px;
  }
  `],
  providers: [ArtistsService]
})
export class ArtistListComponent {
  constructor(private artistsService: ArtistsService){

  }
  public artistName: string;
  public artists: Array<any>;

  search(){
    this.artistsService.getArtists(this.artistName)
                       .subscribe(
                          artists => this.artists = artists
                      );
  }

 }