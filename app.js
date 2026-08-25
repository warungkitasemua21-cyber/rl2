
netlifyIdentity.on("login", function(){
    netlifyIdentity.close();
});

netlifyIdentity.on("init", function(user){
    if(user){
        console.log("User login:", user.email);
    }
});
