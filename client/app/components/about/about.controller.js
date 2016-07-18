class AboutController {
    constructor(AuthenticationService, $q, $scope) {
        "ngInject";
        this.auth = AuthenticationService;
        this.$q = $q;
        this.$scope = $scope;
        this.message = '';
        this.callQuotes();
    }

    createPromises() {
        let promises = [];
        for (let i = 0; i < 5; i++) {
            promises.push(this.getQuote());
        }
        return promises;
    }

    async callQuotes() {
        let quotesArray = await this.$q.all(this.createPromises());
        this.message=quotesArray;
        this.$scope.$apply();
    }

    handleRequest(res) {
        var token = res.data ? res.data.token : null;
        return res.data.message;
    }

    getQuote() {
        return this.auth.getQuote().then(::this.handleRequest, ::this.handleRequest);
    }

    logout() {
        this.auth.logout && this.auth.logout();
    }

    isAuthed() {
        return this.auth.isAuthed ? this.auth.isAuthed() : false;
    }
}
export default AboutController;