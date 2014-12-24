
/**
 * Include 'door3.css' as a dependency
 * ui.router is optional (no configuration required)
 */
var myApp = angular.module('myApp', ['ui.router','door3.css','hljs']);

/**
 * States definition example
 */
myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  /**
   * State provider settings
   */
  $stateProvider
    .state('black', {
      url: '/black',
      title: 'Black',
      templateUrl: 'pages/black/page-black.html',
      /* Now we can bind css to states */
      css: 'pages/black/page-black.css',
      views: {
        'state1': {
          templateUrl: 'pages/black/states/state-black1.html',
          /* and state views */
          css: 'pages/black/states/state-black1.css'
        },
        'state2': {
          templateUrl: 'pages/black/states/state-black2.html',
          css: ['pages/black/states/state-black2.css']
        },
        'state3': {
          templateUrl: 'pages/black/states/state-black3.html',
          css: {
            href: 'pages/black/states/state-black3.css'
          }
        }
      }
    })
    .state('cyan', {
      url: '/cyan',
      title: 'Cyan',
      templateUrl: 'pages/cyan/page-cyan.html',
      /* We can also enable features like bust cache, persist and preload */
      css: {
        href: 'pages/cyan/page-cyan.css',
        bustCache: true
      },
      views: {
        'state1': {
          templateUrl: 'pages/cyan/states/state-cyan1.html',
          css: 'pages/cyan/states/state-cyan1.css'
        },
        'state2': {
          templateUrl: 'pages/cyan/states/state-cyan2.html',
          css: ['pages/cyan/states/state-cyan2.css']
        },
        'state3': {
          templateUrl: 'pages/cyan/states/state-cyan3.html',
          css: {
            href: 'pages/cyan/states/state-cyan3.css'
          }
        }
      }
    })
    .state('magenta', {
      url: '/magenta',
      title: 'Magenta',
      templateUrl: 'pages/magenta/page-magenta.html',
      /* This is how we can include multiple stylesheets */
      css: ['pages/magenta/page-magenta.css','pages/magenta/page-magenta2.css'],
      views: {
        'state1': {
          templateUrl: 'pages/magenta/states/state-magenta1.html',
          css: 'pages/magenta/states/state-magenta1.css'
        },
        'state2': {
          templateUrl: 'pages/magenta/states/state-magenta2.html',
          css: ['pages/magenta/states/state-magenta2.css']
        },
        'state3': {
          templateUrl: 'pages/magenta/states/state-magenta3.html',
          css: {
            href: 'pages/magenta/states/state-magenta3.css'
          }
        }
      }
    })
    .state('yellow', {
      url: '/yellow',
      title: 'Yellow',
      templateUrl: 'pages/yellow/page-yellow.html',
      views: {
        'state1': {
          templateUrl: 'pages/yellow/states/state-yellow1.html',
          css: 'pages/yellow/states/state-yellow1.css'
        },
        'state2': {
          templateUrl: 'pages/yellow/states/state-yellow2.html',
          css: ['pages/yellow/states/state-yellow2.css']
        },
        'state3': {
          templateUrl: 'pages/yellow/states/state-yellow3.html',
          css: {
            href: 'pages/yellow/states/state-yellow3.css'
          }
        }
      },
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
    .state('home', {
      url: '/',
      title: 'Home',
      templateUrl: 'pages/home/page-home.html'
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
    /* Same syntax as in the states example applies here */
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
