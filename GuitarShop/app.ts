namespace MyApp {
  angular.module('MyApp', ['ui.router', 'ngResource']).config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider,
  $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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

  angular.module('MyApp').run((
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        accountService: MyApp.Services.AccountService
    ) => {
            $rootScope.$on('$stateChangeStart', (e, to) => {
                // protect non-public views
                if (to.data && to.data.requiresAuthentication) {
                    if (!accountService.isLoggedIn()) {
                        e.preventDefault();
                        $state.go('login');
                    }
                }
            });
    });

}
