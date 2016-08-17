namespace MyApp {
  angular.module('MyApp', []);

  class FavoriteController {
    public color = 'green';

    pickColor(color) {
      this.color = color;
    }
  }
  angular.module('MyApp').controller('FavoriteController', FavoriteController);
}
