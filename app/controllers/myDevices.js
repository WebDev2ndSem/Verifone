// Ti.API.info(Titanium.App.Properties.getString('encodedUser'));
	var args = arguments[0] || {};
	var collection = Alloy.Collections.myDevices;
	// SETTING THE HEADER PROPERLY
	collection.config.headers.Authorization = Alloy.Globals.authstr;
	collection.fetch({ 
	    success : function(){
	    	Ti.API.info('success');
	    	
	        _.each(collection.models, function(element, index, list){
	            /*element.attributes.title = element.attributes.node_title + " for " + element.attributes.productprice;
	            element.attributes.productid = element.cid;
	            element.attributes.description = element.attributes.body;*/
	            // We are looping through the returned models from the remote REST API
	            // Implement your custom logic here
	        });
	    },
	    error : function(){
		    Ti.API.info('fail');

   

	    }
	});




$.myDevices.open() ;