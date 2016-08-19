namespace MyApp {
  angular.module('MyApp', ['ui-router', 'ngResource']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
    $stateProvider.state('Home', {
      url: '/',
      templateUrl: 'home.html',
      controller: MyApp.Controllers.HomeController,
      controllerAs: 'controller'
    }).state('secret', {
      url: '/secret',
      templateUrl: 'secret.html',
      data: {
        requiresAuthentication: true
      }
    }).state('public', {
          url: '/public',
          templateUrl: 'public.html'
    }).state('login', {
      url: '/login',
      templateUrl: 'login.html'
    });
    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  });

}
