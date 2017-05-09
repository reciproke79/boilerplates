// *** Some Code snippets for boiler plating

// 'use strict'; checks behaviour and throws error/warnings and run time
'use strict';

// var declare

let somevar // declaration limited to block scope
var somevar // declaration for global var
const somevar // constant declaration (immutable once declared)

// constructor

function MyNewStuff ( param1, param2 ) {
	this.param1 = param1;
	this.param2 = param2;
}

// constructor func 

MyNewStuff.prototype.extra = function( opt_arg ) {
	// Do something here
};

// prototypal interitance

function ImportSomethingElse ( param1, param2, param3 ) {
	MyNewStuff.call(this, param1, param2);
	this.param3 = param3;
}

ImportSomethingElse.prototype = Object.create(MyNewStuff.prototype);

// function call(s)

ImportSomethingElse.extra();
someFunc();

// *** Programming Patterns

// function declaration without Global Namespace cluttering
// Wrapped in anonymous func and being immediately called

!function() {
	function foo() {
	  console.log('foobar');
	}
  foo();
}();

// New class definition with destructuring

class Student {
  constructor({name, age, interestLevel = 5} = {}) {
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map();
  }
}

let joey = new Student({ name: 'Joey', age: 25 });
let sarah = new Student({ name: 'Sarah', age: 22 });
  
sarah.grades.set('History', 'B');
sarah.grades.set('Math', 'A');

// Extend a parent (super) class
// This extends the Person Class with Student and extends it's parameters and methods

class Person {
  dance() {
    const dances = [
      'waltz',
      'tango',
      'mambo',
      'foxtrot'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
  }
  constructor({ name, age, eyeColor = 'brown' } = {}) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
}
               
class Student extends Person {
  dance( traditional ) {
    if(traditional) {
      super.dance();
      return;
    }
               
    const dances = [
      'lyrical',
      'tap',
      'ballet',
      'jazz'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
  }
  constructor({ name, age, interestLevel = 5 } = {} ) {
    super({ name, age });
    this.name = name;
    this.age = age;
    this.interestLevel = interestLevel;
    this.grades = new Map;
  }
}

let stevenJ = new Student({ name: 'Steven', age: 22, interestLevel: 3 });