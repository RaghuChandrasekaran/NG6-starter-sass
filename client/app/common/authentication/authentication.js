import angular from 'angular';
import AuthenticationService from './authentication.service';

let authModule = angular.module('AuthenticationService', [])

.service({
    AuthenticationService
});

export default authModule;