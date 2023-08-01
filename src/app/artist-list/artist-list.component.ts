import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { SpotifyData } from 'src/models/spotify.models';
import { SharedServiceService } from '../shared-service.service';
import { SelectedArtistServiceService } from '../selected-artist-service.service';
import { HttpErrorResponse } from '@angular/common/http';

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
  accessToken: any = "enter spotify API key here";
  invalidFlag!: boolean;



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
        this.invalidFlag = false;
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        if ((error.status) === 401) {
          this.invalidFlag = true;
          console.error("Unauthorized. Please make sure you are using a valid Spotify API key");
        }
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

