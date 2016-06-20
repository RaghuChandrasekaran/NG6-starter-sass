import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import AppConstants from './app.constants';
import 'normalize.css';
import _ from 'lodash';
angular.module('app', [
    uiRouter,
    Common.name,
    Components.name,
    AppConstants.name
]).config(($locationProvider, $httpProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('AuthInterceptor');
}).run(function($rootScope, $state, AuthenticationService, User) {
    "ngInject";
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        console.log(`got here ${toState.name}`);
        console.log(User.getLoggedInUser());
        var requireLogin = toState.data.requireLogin;
        if (requireLogin && !AuthenticationService.isAuthed()) {
            event.preventDefault();
            $state.go('home', null, {
                reload: true
            });
        }
        if (AuthenticationService.isAuthed() && _.isEmpty(User.getLoggedInUser())) {
            User.setLoggedInUser(AuthenticationService.parseJwt(AuthenticationService.getToken()).username);
        }
        console.log(User.getLoggedInUser());
    });
}).component('app', AppComponent);