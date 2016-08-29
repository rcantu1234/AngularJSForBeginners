namespace MyApp.Controllers {

  export class HomeController {

    countries = [
      {label: 'USA', id: 1},
      {label: 'India', id: 2},
      {label: 'Other', id: 3}
    ];

    selectedCountryId = 2;
    selectedCountry = this.countries[1];

  }
angular.module('MyApp').controller('HomeController', HomeController);
}
