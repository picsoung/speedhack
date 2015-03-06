
Accounts.onCreateUser(function(options, user) {
    console.log(options)
    console.log(user)
       if(!options || !user) {
        console.log('error creating user');
        return;
    } else {
        if(options.profile) {
            // if(user.services.github.username){
            //     options.profile.username = user.services.github.username
            // // }
            // var role = ['hacker'];
            // console.log(typeof role)
            // user.roles = role
            user.profile = options.profile;
            // user.username = user.services.github.username
        }
    }
    return user;
});
