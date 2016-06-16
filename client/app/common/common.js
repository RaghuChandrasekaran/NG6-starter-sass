import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AuthInterceptor from './authInterceptor/authInterceptor';
import AuthenticationService from './authentication/authentication';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  AuthInterceptor.name,
  AuthenticationService.name
]);

export default commonModule;
