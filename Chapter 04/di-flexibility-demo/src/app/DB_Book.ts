export class Book{
    author: string;
    id: number;
    title: string;

    constructor( id:number, title:string, author:string){
            this.author=author;
            this.id = id;
            this.title=title;
    }
   


}

export let BookDB=[
   new Book(1,"Deception Point","Dan Brown"),
   new Book(2,"To kill a mocking bird","Harper Lee"),
   new Book(3,"Harry Pttoer & the chamber of secrets","J k Rowling")
]
 