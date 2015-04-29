var args = arguments[0] || {};


var loginModel = Alloy.createModel("login", {
    "URL" : "old.muranddesign.com/verifone/user/devices"
});

// save model
loginModel.save();

// force tables to update
Alloy.Collections.login.fetch();




$.myDevices.open() ;