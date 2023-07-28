import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { SpotifyData } from 'src/models/spotify.models';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com/v1/';
  private accessToken!: string;


  constructor(private http: HttpClient) {}

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  searchArtist(artist: string): Observable<any> {
    const url = `${this.baseUrl}search?q=${artist}&type=artist`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, { headers })
  }

  }

  "https://api.spotify.com/v1/search?query=Ariana+Grande&type=artist&locale=en-US%2Cen%3Bq%3D0.9%2Cja-JP%3Bq%3D0.8%2Cja%3Bq%3D0.7&offset=0&limit=20"
