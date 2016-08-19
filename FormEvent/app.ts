namespace MyApp {
  angular.module('MyApp', []);

  class DirectoryController {

    public persons;

    constructor() {
      this.persons = [
        {name: 'Scott', age: 29},
        {name: 'Ross', age: 31},
        {name: 'Ben', age: 32},
        {name: 'Courtney', age: 29}
      ];
    }
  }
  angular.module('MyApp').controller('DirectoryController', DirectoryController);
}
