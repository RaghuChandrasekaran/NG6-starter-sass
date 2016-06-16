import angular from 'angular';
import authInterceptor from './authInterceptor.factory';

let authInterceptorModule = angular.module('authInterceptor', [])

.factory('AuthInterceptor', authInterceptor);

export default authInterceptorModule;
