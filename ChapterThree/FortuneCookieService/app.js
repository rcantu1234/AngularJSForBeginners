var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        angular.module('MyApp', []);
        var FortuneService = (function () {
            function FortuneService() {
            }
            FortuneService.prototype.displayFortune = function () {
                var fortune = ['Today you\'ll discover new possibilities', 'Luck is coming', 'Please try again tomorrow'];
                var random = fortune[Math.floor(Math.random() * fortune.length)];
                return random;
            };
            return FortuneService;
        }());
        angular.module('FortuneModule', []).service('FortuneService', FortuneService);
        angular.module('MyApp', ['FortuneModule']);
        var FortuneController = (function () {
            function FortuneController(FortuneService) {
                this.fortune = FortuneService.displayFortune();
                console.log(this.fortune);
            }
            return FortuneController;
        }());
        angular.module('MyApp').controller('FortuneController', FortuneController);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsS0FBSyxDQTBCZDtBQTFCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLFFBQVEsQ0EwQnZCO0lBMUJlLFdBQUEsUUFBUSxFQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFNUI7WUFBQTtZQVFBLENBQUM7WUFQQyx1Q0FBYyxHQUFkO2dCQUNFLElBQUksT0FBTyxHQUFHLENBQUMsMENBQTBDLEVBQUUsZ0JBQWdCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztnQkFFMUcsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUVqRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFDSCxxQkFBQztRQUFELENBQUMsQUFSRCxJQVFDO1FBQ0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBR2hGLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUV6QztZQUdFLDJCQUFZLGNBQWM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBQ0gsd0JBQUM7UUFBRCxDQUFDLEFBUEQsSUFPQztRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDN0UsQ0FBQyxFQTFCZSxRQUFRLEdBQVIsY0FBUSxLQUFSLGNBQVEsUUEwQnZCO0FBQUQsQ0FBQyxFQTFCUyxLQUFLLEtBQUwsS0FBSyxRQTBCZCIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBNeUFwcC5TZXJ2aWNlcyB7XG4gIGFuZ3VsYXIubW9kdWxlKCdNeUFwcCcsIFtdKTtcblxuICBjbGFzcyBGb3J0dW5lU2VydmljZSB7XG4gICAgZGlzcGxheUZvcnR1bmUoKSB7XG4gICAgICBsZXQgZm9ydHVuZSA9IFsnVG9kYXkgeW91XFwnbGwgZGlzY292ZXIgbmV3IHBvc3NpYmlsaXRpZXMnLCAnTHVjayBpcyBjb21pbmcnLCAnUGxlYXNlIHRyeSBhZ2FpbiB0b21vcnJvdyddO1xuXG4gICAgICBsZXQgcmFuZG9tID0gZm9ydHVuZVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmb3J0dW5lLmxlbmd0aCldO1xuXG4gICAgICByZXR1cm4gcmFuZG9tO1xuICAgIH1cbiAgfVxuICBhbmd1bGFyLm1vZHVsZSgnRm9ydHVuZU1vZHVsZScsIFtdKS5zZXJ2aWNlKCdGb3J0dW5lU2VydmljZScsIEZvcnR1bmVTZXJ2aWNlKTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnTXlBcHAnLCBbJ0ZvcnR1bmVNb2R1bGUnXSk7XG5cbiAgY2xhc3MgRm9ydHVuZUNvbnRyb2xsZXIge1xuICAgIHB1YmxpYyBmb3J0dW5lO1xuXG4gICAgY29uc3RydWN0b3IoRm9ydHVuZVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuZm9ydHVuZSA9IEZvcnR1bmVTZXJ2aWNlLmRpc3BsYXlGb3J0dW5lKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcnR1bmUpO1xuICAgIH1cbiAgfVxuICBhbmd1bGFyLm1vZHVsZSgnTXlBcHAnKS5jb250cm9sbGVyKCdGb3J0dW5lQ29udHJvbGxlcicsIEZvcnR1bmVDb250cm9sbGVyKTtcbn1cbiJdfQ==