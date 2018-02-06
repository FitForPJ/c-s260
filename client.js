var net = require('net');
var HOST = 'dev.werapun.com';
var PORT = 6969;
var client = new net.Socket();
client.connect(PORT, HOST, function() 
	{    
	console.log('CONNECTED TO: ' + HOST + ':' + PORT);
	var name = 'Thanapat'
    client.write(name);
   

});
 
client.on('data', function(data) {
        console.log('DATA: ' + data);

    	client.write('18')
    	
        // Close the client socket completely    
   		
});
client.on('data', function(data) {
        console.log('DATA: ' + data);

    	
    	client.destroy();
        // Close the client socket completely    
   
});
   
client.on('close', function() 
    	{    
    		console.log('Connection closed');
    }
); 
