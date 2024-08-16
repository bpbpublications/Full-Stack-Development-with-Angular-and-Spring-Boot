"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var rxjs_2 = require("rxjs");
//create an array of first five integers
var intArray = [1, 2, 3, 4, 5];
//with from operator,we are piping filter operator with predicate for filtering even numbers.
var subscription = (0, rxjs_2.from)(intArray).pipe((0, rxjs_1.filter)(function (val) { return (val % 2 == 0); })).subscribe(function (val) { return console.log(val); });
subscription.unsubscribe();
