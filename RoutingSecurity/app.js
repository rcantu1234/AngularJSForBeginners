var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui-router', 'ngResource']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
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
        $urlRouterProvider.otherwise('/');
    });
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsS0FBSyxDQXdCZDtBQXhCRCxXQUFVLEtBQUssRUFBQyxDQUFDO0lBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxjQUFvQyxFQUFFLGlCQUF1QyxFQUFFLGtCQUE0QztRQUN0TCxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUMzQixHQUFHLEVBQUUsR0FBRztZQUNSLFdBQVcsRUFBRSxXQUFXO1lBQ3hCLFVBQVUsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDNUMsWUFBWSxFQUFFLFlBQVk7U0FDM0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDakIsR0FBRyxFQUFFLFNBQVM7WUFDZCxXQUFXLEVBQUUsYUFBYTtZQUMxQixJQUFJLEVBQUU7Z0JBQ0osc0JBQXNCLEVBQUUsSUFBSTthQUM3QjtTQUNGLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2IsR0FBRyxFQUFFLFNBQVM7WUFDZCxXQUFXLEVBQUUsYUFBYTtTQUMvQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNoQixHQUFHLEVBQUUsUUFBUTtZQUNiLFdBQVcsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUMsRUF4QlMsS0FBSyxLQUFMLEtBQUssUUF3QmQiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgTXlBcHAge1xuICBhbmd1bGFyLm1vZHVsZSgnTXlBcHAnLCBbJ3VpLXJvdXRlcicsICduZ1Jlc291cmNlJ10pLmNvbmZpZygoJHN0YXRlUHJvdmlkZXI6IG5nLnVpLklTdGF0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcjogbmcuSUxvY2F0aW9uUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcjogbmcudWkuSVVybFJvdXRlclByb3ZpZGVyKSA9PiB7XG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ0hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJyxcbiAgICAgIGNvbnRyb2xsZXI6IE15QXBwLkNvbnRyb2xsZXJzLkhvbWVDb250cm9sbGVyLFxuICAgICAgY29udHJvbGxlckFzOiAnY29udHJvbGxlcidcbiAgICB9KS5zdGF0ZSgnc2VjcmV0Jywge1xuICAgICAgdXJsOiAnL3NlY3JldCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NlY3JldC5odG1sJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgcmVxdWlyZXNBdXRoZW50aWNhdGlvbjogdHJ1ZVxuICAgICAgfVxuICAgIH0pLnN0YXRlKCdwdWJsaWMnLCB7XG4gICAgICAgICAgdXJsOiAnL3B1YmxpYycsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdwdWJsaWMuaHRtbCdcbiAgICB9KS5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJ1xuICAgIH0pO1xuICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG4gIH0pO1xuXG59XG4iXX0=