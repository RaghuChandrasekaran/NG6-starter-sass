import angular from 'angular';

let constantModule = angular.module('app.constants', [])

.constant('API', 'http://test-routes.herokuapp.com')

export default constantModule;
