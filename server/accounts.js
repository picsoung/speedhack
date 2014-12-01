Accounts.onCreateUser(function(options, user) ***REMOVED***
       if(!options || !user) ***REMOVED***
        console.log('error creating user');
        return;
***REMOVED*** else ***REMOVED***
        if(options.profile) ***REMOVED***
            if(user.services.github.username)***REMOVED***
                options.profile.username = user.services.github.username
    ***REMOVED***

            var role = ['hacker'];
            user.roles = role
            user.profile = options.profile;
            user.username = user.services.github.username
***REMOVED***
***REMOVED***
    return user;
***REMOVED***);
