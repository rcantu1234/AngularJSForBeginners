namespace DemoMaterial.Controllers {

    class DialogController {
        public pickColor(favoriteColor: string) {
            this.$mdDialog.hide(favoriteColor);
        }

        constructor(private $mdDialog: angular.material.IDialogService) { }
    }

    class HomeController {
        public favoriteColor: string

        public openDialog() {
            this.$mdDialog.show({
                controller: DialogController,
                controllerAs: 'dialog',
                templateUrl: 'dialog.html',
                clickOutsideToClose: true
            })
                .then((favoriteColor: string) => {
                    this.favoriteColor = favoriteColor;
                }, () => {
                    this.favoriteColor = 'You cancelled the dialog.';
                });
        }

        constructor(private $mdDialog: angular.material.IDialogService) { }
    }

      angular.module('DemoMaterial').controller('HomeController', HomeController);

  class FavoriteAnimalController {

    public openDialog(animalName: string) {
        this.$mdDialog.show({
            controller: AnimalDialogController,
            controllerAs: 'modal',
            templateUrl: 'animalDialog.html',
            clickOutsideToClose: true,
            locals: { animalName: animalName }
        })
    }

      constructor(private $mdDialog: angular.material.IDialogService) { }
  }

  angular.module('DemoMaterial').controller('FavoriteAnimalController', FavoriteAnimalController);

  class AnimalDialogController {
      constructor(public animalName: string) { }
  }

  class TODOController {
    public todos = ['Walk the dog', 'Tak a nap', 'Clean the house', 'Get groceries'];
    public todo;
    public openDialog(todoName: string) {
        this.$mdDialog.show({
            controller: TODODialogController,
            controllerAs: 'modal',
            templateUrl: 'animalDialog.html',
            clickOutsideToClose: true,
            locals: { todoName: todoName }
        })
    }

    todoRun = function(todo) {
        this.todos.push(todo);
        console.log('TODO LIST : ' + this.todos);

        for (let i = 0; i < this.todos.length; i++) {
          console.log(this.todos[i]);
        }
    };


      constructor(private $mdDialog: angular.material.IDialogService) { }
  }

  angular.module('DemoMaterial').controller('TODOController', TODOController);

  class TODODialogController {
      constructor(public todoName: string) { }
  }


// GOOD WAY TO ENTER DATA IN CONSTRUCTORS
  class TasksController {
    constructor(public tasks, public newTask){
        this.tasks = [
            { name: 'Feed dog' },
            { name: 'Take out garbage' },
            { name: 'Water lawn' },
        ];
    }

    addTask() {
        this.tasks.push({ name: this.newTask });
        this.newTask = '';
        console.log(this.tasks);
    };
}

angular.module("DemoMaterial").controller('TasksController', TasksController);
}
