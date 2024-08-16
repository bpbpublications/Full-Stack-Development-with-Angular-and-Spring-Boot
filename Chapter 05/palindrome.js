"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
//array of strings
var strings = ['sir', 'madam', 'doctor', 'bob', 'otto'];
//create observables from array
var stringObservables = (0, rxjs_1.from)(strings);
var subscription = stringObservables.subscribe({
    next: function (str) {
        if (checkPalindrome(str))
            console.log(str);
    },
    error: function (err) { return console.log(err); },
    complete: function () { return console.log("complete"); }
});
function checkPalindrome(str) {
    var j = str.length - 1;
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
subscription.unsubscribe();
