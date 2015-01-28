
Accounts.onCreateUser(function(options, user) ***REMOVED***
    console.log(options)
    console.log(user)
       if(!options || !user) ***REMOVED***
        console.log('error creating user');
        return;
***REMOVED*** else ***REMOVED***
        if(options.profile) ***REMOVED***
            // if(user.services.github.username)***REMOVED***
            //     options.profile.username = user.services.github.username
            // // ***REMOVED***
            // var role = ['hacker'];
            // console.log(typeof role)
            // user.roles = role
            user.profile = options.profile;
            // user.username = user.services.github.username
***REMOVED***
***REMOVED***
    return user;
***REMOVED***);
