'use strict';
namespace app {
  angular.module('MyApp', ['uiGmapgoogle-maps']).config((uiGmapGoogleMapApiProvider: any) => {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
    });

});
  // angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
  //   .config((
  //   $stateProvider: ng.ui.IStateProvider,
  //   $locationProvider: ng.ILocationProvider,
  //   $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
  //
  //   $stateProvider.state('Home', {
  //     url: '/',
  //     templateUrl: '/templates/home.html',
  //     controller: app.Controllers.HomeController,
  //     controllerAs: 'vm'
  //   });
  //
  //   $urlRouterProvider.otherwise('/');
  //   $locationProvider.html5Mode(true);
  // });
}
