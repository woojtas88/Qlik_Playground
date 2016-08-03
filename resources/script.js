var config={};
Playground.authenticate(config, "qsocks").then(function(ticket){
  config.ticket = ticket;
  qsocks.ConnectOpenApp(config).then(function(result){
    var global = result[0];
    var app = result[1];
    console.log(global);
    console.log(app);
  });
});
