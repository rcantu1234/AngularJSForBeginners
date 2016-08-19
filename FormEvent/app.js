var MyApp;
(function (MyApp) {
    angular.module('MyApp', []);
    var DirectoryController = (function () {
        function DirectoryController() {
            this.persons = [
                { name: 'Scott', age: 29 },
                { name: 'Ross', age: 31 },
                { name: 'Ben', age: 32 },
                { name: 'Courtney', age: 29 }
            ];
        }
        return DirectoryController;
    }());
    angular.module('MyApp').controller('DirectoryController', DirectoryController);
})(MyApp || (MyApp = {}));
