import { Component, Input, OnInit } from '@angular/core';
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.css']
})
export class ArtistInfoComponent {

  @Input() selectedArtistId: any;
  selectedArtistInfo!: any;
  selectedArtistAlbums!: object;
  selectedArtistTopTen!: object;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {

    this.getArtistInfo(this.selectedArtistId);
    this.getArtistAlbums(this.selectedArtistId);
    this.getArtistTopTen(this.selectedArtistId);

  }


  getArtistInfo(artistId: string): void {
    this.spotifyService.getArtistInfo(artistId)
    .subscribe({
      next: (response: any) => {
        this.selectedArtistInfo = response;
        console.log(this.selectedArtistInfo);
      }
    })
  }

  getArtistAlbums(artistId: string): void {
    this.spotifyService.getArtistAlbums(artistId)
    .subscribe({
      next: (response: any) => {
        this.selectedArtistAlbums = response;
        console.log(this.selectedArtistAlbums);
      }
    })
  }

  getArtistTopTen(artistId: string): void {
    this.spotifyService.getArtistAlbums(artistId).
    subscribe({
      next: (response: any) => {
        this.selectedArtistTopTen = response;
        console.log(this.selectedArtistTopTen);
      }
    })
  }

}
