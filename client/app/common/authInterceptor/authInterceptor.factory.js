let authInterceptor = function(API, $window) {
    "ngInject";
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
    return {
        request,
        response
    };
};
export default authInterceptor;