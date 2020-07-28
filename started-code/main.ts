import { StringManipulationService, NumberManipulationService} from "./main-service";

class StringManipulations implements StringManipulationService{
    print(word:string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(3));
        console.log(word.concat("Hello"));
        console.log(word.slice(2));
        console.log(word.length);
    }

    printWithSpace(sentence: string): void {
        console.log(sentence.split("").join(" "));
    }

    findVowel(str: string): void {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
                count++;
            }
        }
        console.log(count);
    }
}

class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number) : void{
        if (num % num == 0 && num % 1 == num) {
            console.log(num+" is a prime number");
        }
        else {
            console.log(num +" is not a prime number");
        }
    }

    findMagic(num: number) : void{
        if(num % 9 == 1)
            console.log(num+ " is a magic number");
        else
            console.log(num+" is not a magic number");

    }
}

var word = "saianurag";
var obj1 = new StringManipulations();
obj1.print(word);
obj1.printWithSpace(word);
obj1.findVowel(word);

var num = 199;
var obj2 = new NumbersManipulations();
obj2.findPrime(num);
obj2.findMagic(num);