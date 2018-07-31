export class Book {
    id: number; // mongoose gives the id like _id and will change
    title: string;
    author: string;
    pages: string;
    year: number;
    publisher: string;

    constructor( /* might add http sevice in here or somethin */ ){
        //this.id = Math.round(Math.random() * 1000)
    }
}
