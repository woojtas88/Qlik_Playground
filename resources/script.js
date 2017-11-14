var config={};
Playground.authenticate(config, "qsocks").then(function(ticket){
  config.ticket = ticket;
  qsocks.ConnectOpenApp(config).then(function(result){
 
    var config={
	host:"playground.qlik.com",
	prefix:"/playground/",
	port:"443",
	isSecure:true,
	rejectUnauthorized:false,
	apiKey:"Nh8T4hN8fdc8sIJ8qr9GHL9d01ymR8kO",
	appname:"7916db6a-4802-4834-86ba-2d80d2a1b901"
};
    var global = result[0];
    var app = result[1];
    console.log(global);
    console.log(app);
  });
});
