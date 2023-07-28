import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  private artistNameSubject = new Subject<any>();
  artistName$ = this.artistNameSubject.asObservable();

  updateArtistName(name: any): void {
    this.artistNameSubject.next(name);
  }
}
