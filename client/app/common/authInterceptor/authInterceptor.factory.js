let authInterceptor = function(API, $window, $timeout, $injector) {
    "ngInject";
     var $state;
    $timeout(function() {
        $state = $injector.get('$state');
    });
    let request = (config) => {
        var token = $window.localStorage['jwtToken'];
        if (config.url.indexOf(API) === 0 && token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    };
    let response = (res) => {
        if (res.config.url.indexOf(API) === 0 && res.data.token) {
            $window.localStorage['jwtToken'] = res.data.token;
        }
        return res;
    };
    let responseError = (res) => {
        if (res.status === 401) {}
        return res;
    };
    return {
        request,
        response,
        responseError
    };
};
export default authInterceptor;