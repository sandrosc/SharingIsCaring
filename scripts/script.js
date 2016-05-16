//Search
$('paper-input-container').keypress(function (event) {
    if (event.keyCode == 13) {
        page('/SharingIsCaring/search/' + encodeURIComponent($('paper-input-container input').val()));
    }
});

//Login
app.userIsLoggedIn = function(statusKnown, user) {
    return !statusKnown || !!user;
}
app.userIsLoggedOut = function(statusKnown, user) {
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
app.logout = function() {
    this.$.firebaseLogin.logout();
    page('/SharingIsCaring/login');
}

app.addItem = function(title, desc, image, category) {
    this.push('items', {
        Title: title,
        Desc: desc,
        Image: image,
        Category: category
    });
}