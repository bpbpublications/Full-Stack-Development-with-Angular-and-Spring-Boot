import {Observable, filter} from 'rxjs'
import { from } from 'rxjs';

//create an array of first five integers
const intArray = [1, 2, 3, 4, 5];

//with from operator,we are piping filter operator with predicate for filtering even numbers.
const subscription=from(intArray).pipe(filter((val)=>(val%2==0))).subscribe(val=>console.log(val));

subscription.unsubscribe();