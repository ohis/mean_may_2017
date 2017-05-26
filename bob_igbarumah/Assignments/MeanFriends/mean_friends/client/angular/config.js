var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'partials/main.html',
    controller:"friendController as FC"
  })
  .when('/new',{
    templateUrl:'partials/new.html',
    controller:"friendController as FC"
  })
  .when('/show/:id',{
    templateUrl:'partials/show.html',
    controller:"friendController as FC"
  })
  .when('/edit/:id',{
    templateUrl:'partials/edit.html',
    controller:"friendController as FC"
  })
  .otherwise({redirecTo:'/'})
})
