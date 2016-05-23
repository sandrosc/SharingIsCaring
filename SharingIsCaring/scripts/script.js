//Search
$('paper-input-container').keypress(function (event) {
    if (event.keyCode == 13) {
        page('/SharingIsCaring/search/' + encodeURIComponent($('paper-input-container input').val()));
    }
});

//Login
app.login = function(){
    this.$.auth.signInWithPopup();
}
app.logout = function() {
    this.$.auth.signOut();
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