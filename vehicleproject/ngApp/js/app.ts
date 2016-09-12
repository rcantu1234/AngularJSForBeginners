'use strict';
namespace app {
  angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    }).state('Vehcicles', {
      url: '/vehicles',
      templateUrl: '/templates/vehicles.html',
      controller: app.Controllers.VehicleController,
      controllerAs: 'controller'
    }).state('Cars', {
      url: '/cars',
      templateUrl: '/templates/cars.html',
      controller: app.Controllers.CarController,
      controllerAs: 'controller'
    }).state('Vans', {
      url: '/vans',
      templateUrl: '/templates/vans.html',
      controller: app.Controllers.CarController,
      controllerAs: 'controller'
    }).state('Motorcycles', {
        url: '/motorcycles',
        templateUrl: '/templates/motorcycles.html',
        controller: app.Controllers.MotorcycleController,
        controllerAs: 'controller'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
