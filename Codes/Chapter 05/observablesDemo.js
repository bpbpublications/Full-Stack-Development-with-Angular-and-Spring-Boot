"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//create an array of first five integers
var intArray = [1, 2, 3, 4, 5];
//emit array as a sequence of values which are observables
var observableSequence = (0, rxjs_1.from)(intArray);
//output: 1,2,3,4,5
//Arrow function below is an observer that subscribes to observables
var subscribtion = observableSequence.subscribe(function (val) { return console.log(val); });
subscribtion.unsubscribe();
