'use strict';
namespace MyApp {
  angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'ngAnimate'])
    .config((
    $stateProvider: ng.ui.IStateProvider,
    $locationProvider: ng.ILocationProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) => {

    $stateProvider.state('Home', {
      url: '/',
      templateUrl: '/templates/home.html',
      controller: MyApp.Controllers.HomeController,
      controllerAs: 'controller'
    }).state('About', {
      url: '/about',
      templateUrl: '/templates/about.html',
      controller: MyApp.Controllers.MakesController,
      controllerAs: 'controller'
    }).state('Details', {
      url: '/details',
      templateUrl: '/templates/details.html',
      controller: MyApp.Controllers.DetailsController,
      controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);
  });
}
