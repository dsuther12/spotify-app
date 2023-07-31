import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedArtistServiceService {

  private selectedArtistSubject = new Subject<any>();
  selectedArtist$ = this.selectedArtistSubject.asObservable();

  selectedArtistName(name: any): void {
    this.selectedArtistSubject.next(name);
  }
}
