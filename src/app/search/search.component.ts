import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArtistListComponent } from '../artist-list/artist-list.component';
import { SharedServiceService } from '../shared-service.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistName: string = "";

  constructor(private sharedService: SharedServiceService) {

  }

  onSubmit() {
    this.sharedService.updateArtistName(this.artistName);
    this.artistName = "";
  }


}
