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
      controllerAs: 'controller'
    }).state('Show', {
      url: '/show:id',
      templateUrl: '/templates/show.html',
      controller: app.Controllers.ShowController,
      controllerAs: 'controller'
    });

    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);
  });
}
