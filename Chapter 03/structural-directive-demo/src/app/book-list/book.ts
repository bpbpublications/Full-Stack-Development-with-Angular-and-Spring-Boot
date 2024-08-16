export class Book{

    id!: number;             // '!' for definite assignment assertion
    title!: string;
    author!: string;
    price!: number;
  
  }

  export const books:Book[]=[{
    id:1,title:"Digital forterss",
    author:'Dan Brown',price:30
    
  },{
    id:2,title:"Harry Potter & the chamber of secrets",
    author:'J K Rowling',price:70
    
  },{
    id:3,title:"Accidental PrimeMinister",
    author:'Sanjay Baru',price:35
    
  }];