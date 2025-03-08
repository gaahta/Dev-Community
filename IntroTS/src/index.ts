/*class HelloWorld {
    valueOne: number = 12;
    valueTwo: number = 2;
    constructor() {
        console.log(this.valueOne + this.valueTwo);
    }
}
const instance = new HelloWorld();

/*--------------------------------------------------------------*/

class HelloWorld {
    name: string = 'Glaucia';
    age: number = 31;
    isRetired: boolean = false;
    constructor() {
        //console.log('O meu nome e ' + this.name + ' e tenho' + this.age + ' anos.');
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
        console.log(`Am I retired? ${this.age > 65 ? 'Yes' : 'No'}`);
        console.log(38 === 38);
        console.log((2 + 2 === 4 && 2 + 3 === 6) || 1 + 1 === 2 ? 'True' : 'False');
    }
}

const instance = new HelloWorld();