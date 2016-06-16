import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppConstants from './app.constants';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    AppConstants.name
  ])
  .config(($locationProvider,$httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('AuthInterceptor');
  })

  .component('app', AppComponent);
