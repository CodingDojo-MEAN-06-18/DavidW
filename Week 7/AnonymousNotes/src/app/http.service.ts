import { Injectable } from '@angular/core';
import { Note } from './models/note';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  notes: BehaviorSubject <any[]> = new BehaviorSubject([]);
  editNote: BehaviorSubject <any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { 
    this.getNotes();
    }
    getNotes(){
      // console.log('********************************************in the getNotes method' )
      this._http.get('/notes').subscribe((notes: any[]) => {
          this.notes.next(notes);
          // console.log("Got our notes!", notes)
      });
    }

    addNote(newNote: any){
      // console.log('********************************************in the addNotes method' )
      this._http.post('/notes', newNote).subscribe(
          (response) => { 
              this.getNotes(); 
              console.log("Adding notes!", response);
          }
      );
  }
  }

