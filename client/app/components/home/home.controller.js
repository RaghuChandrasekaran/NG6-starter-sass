class HomeController {
    constructor(AuthenticationService,User) {
        "ngInject";
        this.auth = AuthenticationService;
        this.User=User;
        this.message = '';
    }
    handleRequest(res) {
        var token = res.data ? res.data.token : null;
        if (token) {
            this.User.setLoggedInUser(this.auth.parseJwt(this.auth.getToken()).username);
            console.log('JWT:', token);
            console.log(this.User.getLoggedInUser());
        }
        this.message = res.data.message;
    }
    login() {
        this.auth.login(this.username, this.password).then(::this.handleRequest, ::this.handleRequest);
    }
    register() {
        this.auth.register(this.username, this.password).then(::this.handleRequest, ::this.handleRequest)
    }
}
export default HomeController;