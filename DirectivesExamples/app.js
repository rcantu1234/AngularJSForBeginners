var MyApp;
(function (MyApp) {
    angular.module('MyApp', []);
    var BookController = (function () {
        function BookController() {
            this.books = [
                { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
                { id: 2, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
                { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' }
            ];
        }
        return BookController;
    }());
    angular.module('MyApp').controller('BookController', BookController);
})(MyApp || (MyApp = {}));
