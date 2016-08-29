namespace MyApp {

  angular.module('MyApp', ['ui.router']).config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'home.html',
        controller: MyApp.Controllers.HomeController,
        controllerAs: 'controller'
      }).state('About', {
        url: '/about',
        templateUrl: 'about.html',
        controller: MyApp.Controllers.AboutController,
        controllerAs: 'controller'
      })
      $urlRouterProvider.otherwise('/');
  });
}
