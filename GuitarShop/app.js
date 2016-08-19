var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider
            .state('Home', {
            url: '/',
            templateUrl: 'guitar.html',
            controller: MyApp.Controllers.GuitarController,
            controllerAs: 'controller'
        }).state('Details', {
            url: '/details/:id',
            templateUrl: 'details.html',
            data: {
                requiresAuthentication: true
            },
            controller: MyApp.Controllers.GuitarDetailsController,
            controllerAs: 'controller'
        });
        $urlRouterProvider.otherwise('/');
    });
    angular.module('MyApp').run(function ($rootScope, $state, accountService) {
        $rootScope.$on('$stateChangeStart', function (e, to) {
            if (to.data && to.data.requiresAuthentication) {
                if (!accountService.isLoggedIn()) {
                    e.preventDefault();
                    $state.go('login');
                }
            }
        });
    });
})(MyApp || (MyApp = {}));
