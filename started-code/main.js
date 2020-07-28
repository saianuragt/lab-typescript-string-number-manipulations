"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(3));
        console.log(word.concat("Hello"));
        console.log(word.slice(2));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                count++;
            }
        }
        console.log(count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        if (num % num == 0 && num % 1 == num) {
            console.log(num + " is a prime number");
        }
        else {
            console.log(num + " is not a prime number");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 == 1)
            console.log(num + " is a magic number");
        else
            console.log(num + " is not a magic number");
    };
    return NumbersManipulations;
}());
var word = "saianurag";
var obj1 = new StringManipulations();
obj1.print(word);
obj1.printWithSpace(word);
obj1.findVowel(word);
var num = 199;
var obj2 = new NumbersManipulations();
obj2.findPrime(num);
obj2.findMagic(num);
