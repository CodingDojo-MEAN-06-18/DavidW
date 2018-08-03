export class Player {
    _id?: number; // mongoose gives the id like _id and will change
    name: string;
    position: string;
    status: [number];
    // you can add more games and then add in status easily 0= playing, 1=not playing, 2=undecided

    constructor(){
        
    }
}

