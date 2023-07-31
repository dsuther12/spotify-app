import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { SpotifyData } from 'src/models/spotify.models';
import { SharedServiceService } from '../shared-service.service';
import { SelectedArtistServiceService } from '../selected-artist-service.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})

export class ArtistListComponent implements OnInit {

  artistName!: any;
  spotifyData!: SpotifyData;
  showContent: boolean = false;
  selectedArtistId!: any;
  accessToken: any = "enter access token here";

  constructor(private spotifyService: SpotifyService, private sharedService: SharedServiceService, private selectedArtistService: SelectedArtistServiceService) {}
  ngOnInit(): void {
    this.spotifyService.setAccessToken(this.accessToken);

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
        console.log("repeat repeat repeat")
        console.log(response);
      }
    }
    )
  }

  toggleContent(artistId: any): void {
    if (this.selectedArtistId === artistId) {
      this.selectedArtistId = null;
    } else {
      this.selectedArtistId = artistId;
      console.log(this.selectedArtistId);

    }


  }

}

