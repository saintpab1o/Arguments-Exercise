

// function sum(){
//     let total = 0;
//     for(let i = 0; i<arguments.length; i++){
//         total += arguments[i]
//     }
//     return total
// }

// function sum(...numbers){
//     let total = 0;
//     for(let i = 0; i<numbers.length; i++){
//         total += numbers[i]
//     }
//     return total
// }


// console.log(sum(1, 2, 3, 4) === 10)
// console.log(sum(1, 2, 3, 4, 5) === 15)


// V1
// Function.prototype.myBind = function(context){
//     let that = this;
//     let firstArgs = Array.from(arguments).slice(1);
//     return function (){
//         return that.apply(context, firstArgs.concat(Array.from(arguments)))
//     };
// };

//  Assessment Version
// Function.prototype.myBind = function(context, ...bindArgs){
//     let that = this;
//     // let firstArgs = Array.from(arguments).slice(1);
//     return function (...callArgs){
//         // return that.apply(context, firstArgs.concat(Array.from(arguments)))
//         return that.apply(context, bindArgs.concat(callArgs))
//     };
// };


//  ES6 Version
// Function.prototype.myBind = function(context){
//     // let that = this;
//     let firstArgs = Array.from(arguments).slice(1);
//     return (...callArgs) => this.apply(context, firstArgs.concat((callArgs)));
// };

// cat = new Cat
//meow console.log(${name} + "meow")
//andy = new Person
//cat.meow.apply(andy, [])
//"andy meow"

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// // console.log(markov.says("meow", "Ned"));
// console.log(markov.says.myBind(pavlov, "meow", "Kush")());

// // Pavlov says meow to Kush!

// console.log(markov.says.myBind(pavlov)("meow", "a tree"));
// // Pavlov says meow to a tree!

// console.log(markov.says.myBind(pavlov, "meow")("Markov"));
// // Pavlov says meow to Markov!

// const notMarkovSays = markov.says.myBind(pavlov);
// console.log(notMarkovSays("meow", "me"));
// Pavlov says meow to me!
// true


function curriedSum(numArgs){
    let nums = []

    return function _curriedFunction(num){
        nums.push(num)

        if (nums.length === numArgs){
            total = 0
            for(let i=0; i <nums.length; i++){
                total += nums[i]
            }
            return total
        } else return _curriedFunction;
    }
}

// console.log(curriedSum(4)(1)(2)(3)(4))


// Prototype Version

//apply

// Function.prototype.curry = function(numArgs) {
//     const args = [];
//     const that = this;

//     return function _curriedFunction(arg) {
//         args.push(arg); 
//         if (args.length === numArgs) {
//             return that.apply(null , args)  // what is the context here?
            
//         } else return _curriedFunction
//     }
// }

// // console.log(curry(4)(1)(2)(3)(4))    // how to call?



// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
//   }
  
// //   sumThree(4, 20, 6); // == 30

//   console.log(sumThree.curry(3)(1)(2)(3)) // == 6

  



//Spread Version


Function.prototype.curry2 = function(numArgs) {
    const args = [];
    const that = this;

    return function _curriedFunction(arg) {
        args.push(arg); 
        if (args.length === numArgs) {
            return that(...args)
            
        } else return _curriedFunction
    }
}



function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
//   sumThree(4, 20, 6); // == 30

  console.log(sumThree.curry2(3)(1)(2)(3)) // == 6