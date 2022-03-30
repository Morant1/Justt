export class Item {

    
    constructor(public id: number, public name: string, public status: string, public species: string,
        public type: number, public gender: string, public origin: {name:string;url:string}, public location: {name:string;url:string},
        public image:string,public episode:string[],public url:string,public created:string,public more:string) {

    }

}
