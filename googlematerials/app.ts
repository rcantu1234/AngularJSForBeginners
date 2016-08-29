namespace DemoMaterial {

  angular.module('DemoMaterial', ['ngMaterial', 'ngMessages', 'ngAnimate']).config(function ($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('green')
            .warnPalette('purple');
    });

}
