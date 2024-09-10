import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService { 
  
  override createDb(reqInfo?: RequestInfo | undefined): {} 
  | Observable<{}> | Promise<{}> 
  {
   const books=[

    new Book(1,"Deception Point","Dan Brown"),
    new Book(2,"To kill a mocking bird","Harper Lee"),
    new Book(3,"Harry Pttoer & the chamber of secrets","J k Rowling")
  ]
  
  
  return {books};
}

 
 
}
