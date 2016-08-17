namespace MyApp.Food {

  angular.module('MyApp', []);
  
  class FoodController {
    public food;
    public search;

    constructor() {
      this.food = ['Milk', 'Maripan', 'Mustard', 'Eggs'];
    }
  }
  angular.module('MyApp').controller('FoodController', FoodController);
}
