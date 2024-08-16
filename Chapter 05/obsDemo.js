"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//emit array as a sequence of values
var arraySource = (0, rxjs_1.from)([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
var subscribe = arraySource.subscribe(function (val) { return console.log(val); });
var data = [1, 2, 3, 4, 5, 6, 7];
var observableNos = (0, rxjs_1.from)(data);
var selectedNos = [0];
var subscription = observableNos.subscribe({
    next: function (val) {
        if (val % 2 === 0)
            selectedNos.push(val);
        else
            console.log('no');
    }
});
console.log(selectedNos.length);
observableNos.subscribe({
    next: function (x) {
        if (x % 2 == 0)
            console.log(x + "is Even");
    },
    error: function (err) { return console.log(err); },
    complete: function () { return console.log("Complete"); }
});
//  const obsof3 = of(1, 2, 3);
//  obsof3.subscribe(val => console.log(val),
//    error => console.log("error"),
//    () => console.log("complete"))
// function getObs(data:[]):Observable<number>{
//     let observable =0;
//     for (let i =0;i<data.length;i++)
//          observable = new Observable(i);
// }
