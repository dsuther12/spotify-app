import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { SpotifyData } from 'src/models/spotify.models';
import { SearchComponent } from '../search/search.component';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artistName!: any;
  spotifyData!: SpotifyData;

  constructor(private spotifyService: SpotifyService, private sharedService: SharedServiceService) {}
  ngOnInit(): void {
    const accessToken = "enter your access token here";
    this.spotifyService.setAccessToken(accessToken);

    this.sharedService.artistName$.subscribe(name => {
      this.artistName = name;
      console.log("Artist name in other component: ", this.artistName);
      if(this.artistName) {
        this.getArtist(this.artistName);
      }
    })

  }

  getArtist(artist: string): void {
    this.spotifyService.searchArtist(artist).subscribe({
      next: (response: any) => {
        this.spotifyData = response;
        console.log(response);
      }
    }
    )
  }

}

