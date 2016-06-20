class AboutController {
    constructor(AuthenticationService) {
        "ngInject";
        this.auth = AuthenticationService;
        this.message = '';
    }
    handleRequest(res) {
        var token = res.data ? res.data.token : null;
        if (token) {
            console.log('JWT:', token);
        }
        this.message = res.data.message;
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
export default AboutController;