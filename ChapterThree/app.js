var MyApp;
(function (MyApp) {
    angular.module('MyApp', []);
    var HomeController = (function () {
        function HomeController() {
            this.title = 'Dinner';
        }
        return HomeController;
    }());
    angular.module('MyApp', []).controller('HomeController', HomeController);
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsS0FBSyxDQVlkO0FBWkQsV0FBVSxLQUFLLEVBQUMsQ0FBQztJQUVmLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTVCO1FBR0U7WUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztRQUN4QixDQUFDO1FBQ0gscUJBQUM7SUFBRCxDQUFDLEFBTkQsSUFNQztJQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztBQUMzRSxDQUFDLEVBWlMsS0FBSyxLQUFMLEtBQUssUUFZZCIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBNeUFwcCB7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ015QXBwJywgW10pO1xuXG4gIGNsYXNzIEhvbWVDb250cm9sbGVyIHtcbiAgICBwdWJsaWMgdGl0bGU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHRoaXMudGl0bGUgPSAnRGlubmVyJztcbiAgICB9XG4gIH1cbiAgYW5ndWxhci5tb2R1bGUoJ015QXBwJywgW10pLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgSG9tZUNvbnRyb2xsZXIpO1xufVxuIl19