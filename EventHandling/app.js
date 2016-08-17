var MyApp;
(function (MyApp) {
    angular.module('MyApp', []);
    var FavoriteController = (function () {
        function FavoriteController() {
            this.color = 'green';
        }
        FavoriteController.prototype.pickColor = function (color) {
            this.color = color;
        };
        return FavoriteController;
    }());
    angular.module('MyApp').controller('FavoriteController', FavoriteController);
})(MyApp || (MyApp = {}));
