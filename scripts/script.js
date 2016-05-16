//Search
$('paper-input-container').keypress(function (event) {
    if (event.keyCode == 13) {
        page('/SharingIsCaring/search/' + encodeURIComponent($('paper-input-container input').val()));
    }
});

//Login
function computeLoginHidden(statusKnown, user) {
    return !statusKnown || !!user;
}
function computeLogoutHidden(statusKnown, user) {
    return !statusKnown || !user;
}
app.login = function(){
    var params;
    try {
        params = JSON.parse(this.params);
    } catch (e) {
        params = null;
    }
    //this.$.firebaseLogin.login(params);
    this.$.firebaseLogin.login(params);
}