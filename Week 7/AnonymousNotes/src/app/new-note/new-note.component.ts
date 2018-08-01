import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from '../models/note';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  note: Note = new Note();

  @Output() newNote = new EventEmitter<Note>();
  constructor(private _httpService: HttpService) { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting ', this.note);

    this.newNote.emit(this.note);
    this._httpService.addNote(this.note)
    this.note = new Note();

    form.reset();
  }
}
