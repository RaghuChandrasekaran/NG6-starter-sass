let UserFactory = function() {
    let loggedInUser = {};
    let getLoggedInUser = () => {
        return loggedInUser;
    };
    let setLoggedInUser = (username) => {
        loggedInUser.username = username;
    }
    return {
        getLoggedInUser,
        setLoggedInUser
    };
};
export default UserFactory;