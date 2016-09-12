namespace app.Controllers {
  export class HomeController {

    public dog;
    constructor() {
      this.dog = {
        name: "Fido",
        breed: "Terrier",
        age: 5,
        bark(){
          console.log("Woof!Woof!");
        }
      }
    }
  }

  angular.module('app').controller('HomeController', HomeController);

  class Dog {
    name: string;
    breed: string;
    age: number;
    dogs = [];
    bark() {
      console.log("Woof!Woof!");
    }

    constructor(name:string, breed:string, age:number) {
          this.name = name;
          this.breed = breed;
          this.age = age;
          this.dogs.push(name, breed, age);
          console.log(this.dogs);
    }
  }

  export class ClassController {

    public myDog;

		constructor() {
      this.myDog = new Dog("Jack","Charpei",2);
    }

  }

  angular.module('app').controller('ClassController', ClassController);
}
