namespace MyApp.Services {
  angular.module('MyApp', []);

  class FortuneService {
    displayFortune() {
      let fortune = ['Today you\'ll discover new possibilities', 'Luck is coming', 'Please try again tomorrow'];

      let random = fortune[Math.floor(Math.random() * fortune.length)];

      return random;
    }
  }
  angular.module('FortuneModule', []).service('FortuneService', FortuneService);

  angular.module('MyApp', ['FortuneModule']);

  class FortuneController {
    public fortune;

    constructor(FortuneService) {
      this.fortune = FortuneService.displayFortune();
      console.log(this.fortune);
    }
  }
  angular.module('MyApp').controller('FortuneController', FortuneController);
}
