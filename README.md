# AngularCSS

##### CSS on-demand for AngularJS
Optimize the presentation layer of your single-page apps by dynamically injecting stylesheets as needed.

AngularCSS listens for [route](https://github.com/angular/bower-angular-route) (or [states](https://github.com/angular-ui/ui-router)) change events, adds the CSS defined on the current route and removes the CSS from the previous route. It also works with directives in the same fashion with the compile and scope destroy events. See the code samples below for more details.

### Demos

[Angular's ngRoute Demo](http://door3.github.io/angular-css)

[UI Router Demo](http://door3.github.io/angular-css/states.html)

### Quick Start

Install and manage with Bower.

``` bash
$ bower install angular-css
````

1) Load the required JavaScript libraries (ngRoute and UI Router are optional). 

``` html
<!-- Angular 1.2 does not support css for directives, only routes and states -->
<script src="/libs/angularjs/1.3.0/angular.min.js"></script>
<script src="/libs/angularjs/1.3.0/angular-routes.min.js"></script>
<script src="/libs/door3/1.0/angular-css.min.js"></script>
````

2) Add door3.css as a dependency for your app.

``` js
var myApp = angular.module('myApp', ['ngRoute','door3.css']);
````

### Examples

This module can be used by adding a css property in your routes values, directives or by calling the $css service methods from controllers and services.

The css propery supports a string, an array of strings, object notation or an array of objects.

See examples below for more informaton.


#### In Directives

``` js
myApp.directive('myDirective', function () {
  return {
    restrict: 'E',
    templateUrl: 'my-directive/my-directive.html',
    /* Binding css to directives */
    css: 'my-directive/my-directive.css'
  }
});
```


#### In Controllers

``` js
myApp.controller('pageCtrl', function ($scope, $css) {

  // Binds stylesheet(s) to scope create/destroy events (recommended over add/remove)
  $css.bind({ 
    href: 'my-page/my-page.css'
  }, $scope);

  // Simply add stylesheet(s)
  $css.add('my-page/my-page.css');

  // Simply remove stylesheet(s)
  $css.remove(['my-page/my-page.css','my-page/my-page2.css']);

  // Remove all stylesheets
  $css.removeAll();

  // Manual stylesheet preload (via $http request)
  $css.preload('my-page/my-page.css');

});
```


#### For Routes (AngularJS - ngRoute)

Requires [ngRoute](https://github.com/angular/bower-angular-route) as a dependency


``` js
myApp.config(function($routeProvider) {

  $routeProvider
    .when('/page1', {
      templateUrl: 'page1/page1.html',
      controller: 'page1Ctrl',
      /* Now you can bind css to routes */
      css: 'page1/page1.css'
    })
    .when('/page2', {
      templateUrl: 'page2/page2.html',
      controller: 'page2Ctrl',
      /* You can also enable features like bust cache, persist and preload */
      css: {
        href: 'page2/page2.css',
        bustCache: true
      }
    })
    .when('/page3', {
      templateUrl: 'page3/page3.html',
      controller: 'page3Ctrl',
      /* This is how you can include multiple stylesheets */
      css: ['page3/page3.css','page3/page3-2.css']
    })
    .when('/page4', {
      templateUrl: 'page4/page4.html',
      controller: 'page4Ctrl',
      css: [
        {
          href: 'page4/page4.css',
          persist: true
        }, {
          href: 'page4/page4.mobile.css',
          /* Media Query support via window.matchMedia API
           * This will only add the stylesheet if the breakpoint matches */
          media: 'screen and (max-width : 480px)'
        }, {
          href: 'page4/page4.print.css',
          media: 'print'
        }
      ]
    });

});
```

#### For States (AngularUI - UI Router)

Requires [ui.router](https://github.com/angular-ui/ui-router) as a dependency


``` js
myApp.config(function($stateProvider) {

  $stateProvider
    .state('page1', {
      url: '/page1',
      templateUrl: 'page1/page1.html',
      css: 'page1/page1.css'
    })
    .state('page2', {
      url: '/page2',
      templateUrl: 'page2/page2.html',
      css: {
        href: 'page2/page2.css',
        preload: true,
        persist: true
      }
    })
    .state('page3', {
      url: '/page3',
      templateUrl: 'page3/page3.html',
      css: ['page3/page3.css','page3/page3-2.css'],
      views: {
        'state1': {
          templateUrl: 'page3/states/page3-state1.html',
          css: 'page3/states/page3-state1.css'
        },
        'state2': {
          templateUrl: 'page3/states/page3-state2.html',
          css: ['page3/states/page3-state2.css']
        },
        'state3': {
          templateUrl: 'page3/states/page3-state3.html',
          css: {
            href: 'page3/states/page3-state3.css'
          }
        }
      }
    })
    .state('page4', {
      url: '/page4',
      templateUrl: 'page4/page4.html',
      views: {
        'state1': {
          templateUrl: 'states/page4/page4-state1.html',
          css: 'states/page4/page4-state1.css'
        },
        'state2': {
          templateUrl: 'states/page4/page4-state2.html',
          css: ['states/page4/page4-state2.css']
        },
        'state3': {
          templateUrl: 'states/page4/page4-state3.html',
          css: {
            href: 'states/page4/page4-state3.css'
          }
        }
      },
      css: [
        {
          href: 'page4/page4.css',
          bustCache: true,
          persist: false
        }, {
          href: 'page4/page4.mobile.css',
          media: 'screen and (max-width : 480px)'
        }, {
          href: 'page4/page4.print.css',
          media: 'print'
        }
      ]
    });

});
```


#### Global Defaults

``` js
myApp.config(function($cssProvider) {

  angular.extend($cssProvider.defaults, {
    container: 'head',
    method: 'append',
    persist: false,
    preload: false,
    bustCache: false
  });

});
```


#### CSS Options

``` js
css: {
  href: 'file-path.css',
  rel: 'stylesheet',
  type: 'text/css',
  media: false,
  persist: false,
  preload: false,
  bustCache: false,
  weight: 0
}
```


### Contributing

Please submit all pull requests the against master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests.

### Copyright and license

```
The MIT License

Copyright (c) 2014 DOOR3, Alex Castillo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
