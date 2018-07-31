export class Task {
    id?: number; // mongoose gives the id like _id and will change
    title: string;
    description: string;
    completed: boolean;

    constructor( /* might add http sevice in here or somethin */ ){
        //this.id = Math.round(Math.random() * 1000)
    }
}
