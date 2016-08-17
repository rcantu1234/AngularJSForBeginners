namespace PetShopApp {
  angular.module('PetShopApp', []);

  class PetShopController {
    public dogs;
    public bunnies;

    constructor() {
      this.dogs = [
        {id: 1, name: 'Rover the dog', image: 'collie5.jpg'},
        {id: 2, name: 'Ben the dog', image: 'Beagle_portrait_Camry.jpg'}
      ];
      this.bunnies = [
        {id: 1, name: 'Bugs Bunny', image: 'bunny.jpg'},
        {id: 2, name: 'Clover the Piggy', image: 'guinea-pig-tan.jpg'}
      ];
    }
  }
  angular.module('PetShopApp').controller('PetShopController', PetShopController);
}
