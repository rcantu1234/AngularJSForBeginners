namespace MoviesApp {

    angular.module('MoviesApp', ['ui.router', 'ngResource']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/templates/list.html',
                controller: MoviesApp.Controllers.MoviesListController,
                controllerAs: 'controller'
            })
            .state('Add', {
                url: '/add',
                templateUrl: '/templates/add.html',
                controller: MoviesApp.Controllers.MoviesAddController,
                controllerAs: 'controller'
            })
            .state('Edit', {
                url: '/edit/:id',
                templateUrl: '/templates/edit.html',
                controller: MoviesApp.Controllers.MoviesEditController,
                controllerAs: 'controller'
            })
            .state('Delete', {
                url: '/delete/:id',
                templateUrl: '/templates/delete.html',
                controller: MoviesApp.Controllers.MoviesDeleteController,
                controllerAs: 'controller'
            });


        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
}
