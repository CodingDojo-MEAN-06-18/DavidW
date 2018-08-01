import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes: Array<Note>= [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.notes.subscribe(
      (notes) => { this.notes = notes; }
    );
  }

}
