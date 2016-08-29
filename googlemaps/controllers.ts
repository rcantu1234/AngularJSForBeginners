namespace MyApp.Controllers {

    class HomeController {
        public center = {latitude: 47.671853, longitude: -122.121328};
        public zoom = 15;
    }

    angular.module('MyApp').controller('HomeController', HomeController);

}
