namespace MyApp.Food {

angular.module('MyApp', []);

class FoodController {
  public foods;
  public search;

  constructor() {
    // this.foods = ['Milk', 'Maripan', 'Mustard', 'Eggs'];
    this.foods = [
      {name: 'Milk', price: 2.33, dateCreated: new Date('12/31/1977')},
      {name: 'Marzipan', price: 99.88, dateCreated: new Date('1/8/1992')},
      {name: 'Mustard', price: 6.77, dateCreated: new Date('12/04/1972')},
      {name: 'Eggs', price: 3.44, dateCreated: new Date('12/04/1973')}
    ];
  }
}
  angular.module('MyApp').controller('FoodController', FoodController);
}
