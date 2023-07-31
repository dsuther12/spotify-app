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

    return this.http.get(url, { headers });
  }

  getArtistInfo(artistId: string): Observable<any> {
    const url = `${this.baseUrl}artists/${artistId}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, {headers});
  }

  getArtistAlbums(artistId: string): Observable<any> {
    const url = `${this.baseUrl}artists/${artistId}/albums`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, {headers});
  }

  getArtistTopTen(artistId: string): Observable<any> {
    const url = `${this.baseUrl}artists/${artistId}/top-tracks`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get(url, {headers});
  }

  }
