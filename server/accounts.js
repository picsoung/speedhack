Accounts.onCreateUser(function(options, user) {
       if(!options || !user) {
        console.log('error creating user');
        return;
    } else {
        if(options.profile) {
            if(user.services.github.username){
                options.profile.username = user.services.github.username
            }

            var role = ['hacker'];
            user.roles = role
            user.profile = options.profile;
            user.username = user.services.github.username
        }
    }
    return user;
});
