module.exports.init = (app, passport,isAuthenticated) => {
 require('./LoginUserController').init(app, passport);
 require('./UserIsLoggedInController').init(app, isAuthenticated);
}