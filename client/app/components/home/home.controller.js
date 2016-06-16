class HomeController {
    constructor(AuthenticationService) {
        "ngInject";
        this.auth=AuthenticationService;
        this.message='';
    }
    handleRequest(res) {
        var token = res.data ? res.data.token : null;
        if (token) {
            console.log('JWT:', token);
        }
        this.message = res.data.message;
    }
    login() {
        this.auth.login(this.username, this.password).then(::this.handleRequest, ::this.handleRequest);
    }
    register() {
        this.auth.register(this.username, this.password).then(::this.handleRequest, ::this.handleRequest)
    }
    getQuote() {
        this.auth.getQuote().then(::this.handleRequest, ::this.handleRequest);
    }
    logout() {
        this.auth.logout && this.auth.logout();
    }
    isAuthed() {
        return this.auth.isAuthed ? this.auth.isAuthed() : false;
    }
}
export default HomeController;