/*class HelloWorld {
    valueOne: number = 12;
    valueTwo: number = 2;
    constructor() {
        console.log(this.valueOne + this.valueTwo);
    }
}
const instance = new HelloWorld();

/*--------------------------------------------------------------*/
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
        this.name = 'Glaucia';
        this.age = 31;
        this.isRetired = false;
        //console.log('O meu nome e ' + this.name + ' e tenho' + this.age + ' anos.');
        console.log("My name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
        console.log("Am I retired? ".concat(this.age > 65 ? 'Yes' : 'No'));
        console.log(38 === 38);
        console.log((2 + 2 === 4 && 2 + 3 === 6) || 1 + 1 === 2 ? 'True' : 'False');
    }
    return HelloWorld;
}());
var instance = new HelloWorld();
