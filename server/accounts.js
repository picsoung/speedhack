Accounts.onCreateUser(function(options, user) ***REMOVED***
       if(!options || !user) ***REMOVED***
        console.log('error creating user');
        return;
***REMOVED*** else ***REMOVED***
        if(options.profile) ***REMOVED***
            if(user.services.github.username)
                options.profile.username = user.services.github.username
            user.profile = options.profile;
***REMOVED***
***REMOVED***
    return user;
***REMOVED***);
