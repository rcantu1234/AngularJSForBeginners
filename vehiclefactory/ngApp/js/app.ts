'use strict';
namespace MyApp {
  angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: MyApp.Controllers.HomeController,
      controllerAs: 'controller'
    }).state('Vehicles', {
      url: '/vehicles',
      templateUrl: '/templates/vehicles.html',
      controller: MyApp.Controllers.VehicleController,
      controllerAs: 'controller'
    }).state('Cars', {
      url: '/cars:id',
      templateUrl: '/templates/cars.html',
      controller: MyApp.Controllers.CarController,
      controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
