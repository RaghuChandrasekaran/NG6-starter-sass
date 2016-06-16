class AuthenticationService {
    constructor($http, API, $window) {
        "ngInject";
        this.$http = $http;
        this.API = API;
        this.$window = $window;
    }
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64));
    }
    saveToken(token) {
        this.$window.localStorage['jwtToken'] = token;
    }
    getToken() {
        return this.$window.localStorage['jwtToken'];
    }
    isAuthed() {
        var token = this.getToken();
        if (token) {
            var params = this.parseJwt(token);
            return Math.round(new Date().getTime() / 1000) <= params.exp;
        } else {
            return false;
        }
    }
    login(username, password) {
        return this.$http.post(this.API + '/auth/login', {
            username: username,
            password: password
        })
    }
    logout(){
       this.$window.localStorage.removeItem('jwtToken');
    }
    register(username, password) {
        return this.$http.post(this.API + '/auth/register', {
            username: username,
            password: password
        });
    }
    getQuote() {
        return this.$http.get(this.API + '/auth/quote');
    }
}
export default AuthenticationService;