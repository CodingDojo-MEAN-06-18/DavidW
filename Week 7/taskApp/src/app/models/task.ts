export class Task {
    id?: number; // mongoose gives the id like _id and will change
    title: string;
    description: string;
    completed: boolean;

    constructor(){
        
    }
}
