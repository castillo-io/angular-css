
/**
 * Include 'door3.css' as a dependency
 * ngRoute is optional (no configuration required)
 */
var myApp = angular.module('myApp', ['ngRoute','door3.css','hljs']);

/**
 * Routes definition example
 */
myApp.config(function($routeProvider) {
  
  $routeProvider
    .when('/black', {
      title: 'Black',
      templateUrl: 'pages/black/page-black.html',
      /* Now we can bind css to routes */
      css: 'pages/black/page-black.css'
    })
    .when('/cyan', {
      title: 'Cyan',
      templateUrl: 'pages/cyan/page-cyan.html',
      /* We can also enable features like bust cache, persist and preload */
      css: {
        href: 'pages/cyan/page-cyan.css',
        bustCache: true
      }
    })
    .when('/magenta', {
      title: 'Magenta',
      templateUrl: 'pages/magenta/page-magenta.html',
      /* This is how we can include multiple stylesheets */
      css: ['pages/magenta/page-magenta.css','pages/magenta/page-magenta2.css']
    })
    .when('/yellow', {
      title: 'Yellow',
      templateUrl: 'pages/yellow/page-yellow.html',
      css: [
        {
          href: 'pages/yellow/page-yellow.css',
        }, {
          href: 'pages/yellow/page-yellow.mobile.css',
          /* Media Query support via window.matchMedia API
           * This will only add the stylesheet if the breakpoint matches. Give it a try! */
          media: '(max-width : 768px)'
        }, {
          href: 'pages/yellow/page-yellow.print.css',
          media: 'print'
        }
      ]
    })
    .when('/', {
      title: 'Home',
      templateUrl: 'pages/home/page-home.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});


/**
 * Directive Definition Object (DDO) examples
 */

myApp.directive('black', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/black/directive-black.html',
    /* Binding css to directives */
    css: 'directives/black/directive-black.css'
  }
});

myApp.directive('cyan', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/cyan/directive-cyan.html',
    /* Same syntax as in the routes example applies here */
    css: {
      href: 'directives/cyan/directive-cyan.css',
      bustCache: true
    }
  }
});

myApp.directive('magenta', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/magenta/directive-magenta.html',
    css: {
      href: 'directives/magenta/directive-magenta.css',
      /* Preload: this will trigger an HTTP request on app load.
       * Once the stylesheet is added, it will be loaded from the browser cache */
      preload: true
    }
  }
});

myApp.directive('yellow', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/yellow/directive-yellow.html',
    css: {
      href: 'directives/yellow/directive-yellow.css',
      /* Persist: The stylesheet won't be removed even after the directive has been destroyed */
      persist: true
    }
  }
});
