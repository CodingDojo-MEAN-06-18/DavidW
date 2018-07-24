export class Product {
    constructor(
        public id: number = Math.floor((Math.random()*100)), //x=random number between 1-100
        public title?: string,
        public price?: number,
        public url?: string
    ) {}
}