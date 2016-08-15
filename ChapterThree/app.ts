namespace MyApp {

  angular.module('MyApp', []);

  class HomeController {
    public title;

    constructor() {
      this.title = 'Dinner';
    }
  }
  angular.module('MyApp', []).controller('HomeController', HomeController);
}
