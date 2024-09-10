import {Observable, from} from 'rxjs'
//array of strings
const strings = ['sir', 'madam','doctor','bob','otto'];
//create observables from array
const stringObservables = from(strings);
const subscription = stringObservables.subscribe(
    {
        next:(str)=>{
            if(checkPalindrome(str)) console.log(str);},
        error:(err)=>console.log(err),
        complete:() => console.log("complete")
    }
)

function checkPalindrome(str){
    let j = str.length-1 
    for(let i=0; i<str.length/2; i++){ 
        if(str[i]!=str[j]){ 
            return false; 
        } 
        j--; 
    } 
    return true; 
}
subscription.unsubscribe();