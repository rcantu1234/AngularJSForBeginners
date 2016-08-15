namespace MyApp.Services {
  angular.module('MyApp', []);

  class TaxService {
    CalculateTax(price) {
      return price * 0.08;
    }
  }
    angular.module('MyApp').service('TaxService', TaxService);
}
  // angular.module

  namespace MyApp.Controllers {
    class HomeController {
      public friends;
      public message;
      public cars;
      public products;

      constructor(TaxService) {
        this.message = 'AngularJS';
        this.friends = ['Cartman', 'Kyle', 'Timmy', 'Stan', 'Kenny'];
        this.cars = [
          {year: 1989, make: 'VM', model: 'Fox'},
          {year: 1988, make: 'Nissan', model: 'Sentra'},
          {year: 1996, make: 'Ford', model: 'Explorer'},
          {year: 2009, make: 'BMW', model: 'i325'},
          {year: 2016, make: 'Tesla', model: 'Model S'},
        ];
        this.products = {
          name: 'Milk',
          price: 8.99,
          tax: TaxService.CalculateTax(8.99)
        };
      }
    }
    angular.module('MyApp').controller('HomeController', HomeController);
  }
