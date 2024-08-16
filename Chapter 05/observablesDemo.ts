import {Observable} from 'rxjs'
import { from } from 'rxjs';

//create an array of first five integers
const intArray = [1, 2, 3, 4, 5];
//emit array as a sequence of values which are observables
const observableSequence = from(intArray);
//output: 1,2,3,4,5

//Arrow function below is an observer that subscribes to observables
const subscription = observableSequence.subscribe(val => console.log(val));

subscription.unsubscribe();
    
    
    