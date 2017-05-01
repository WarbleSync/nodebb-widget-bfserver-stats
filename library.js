'use strict';

var async =  module.parent.require('async'),
fs = require('fs'),
path = require('path'),
templates = module.parent.require('templates.js'),
TeamSpeakClient = require("node-teamspeak"),
util = require("util"),
app;

var Widget = {
	templates: {}
};

Widget.init = function(params, callback) {
  app = params.app;
  var templatesToLoad = [
    'widget.tpl',
    'bfserverstats.tpl'
  ];

  function loadTemplate(template, next){
    fs.readFile(path.resolve(__dirname,'./public/templates/' + template), function(err,data){
      if(err){
        console.log(err.message);
        return next(err);
      }
      Widget.templates[template] = data.toString();
      next(null);
    });
  }

  async.each(templatesToLoad, loadTemplate);

  callback();
};

Widget.renderBFServerWidget = function(widget, callback) {
  // console.log('[[[[[[[[[[[[[ RENDERING ]]]]]]]]]]]]]')
  //need to check for null before rendering!!!!
	var serverData = {
		'serverName': widget.data.name,
		'severId': widget.data.severid,
		'apikey': widget.data.apikey
	}
	console.log(serverData)
	var rep = {
		'serverName': widget.data.name || 'Teamspeak Server',
		'serverAddress': serverData.serverAddress,
		'clients': []
	};
	// var cl = new TeamSpeakClient(serverData.serverAddress, serverData.serverQueryPort);
	//
	// cl.on('error', function(err){
	// 	console.log(err)
	// })
	//
	// cl.on('connect', function(res){
	// 	cl.send(
	// 		'login',
	// 		{
	// 			client_login_name: serverData.username,
	// 			client_login_password: serverData.password
	// 		},
	// 		function(err, res){
	// 			if(err) { console.log(err) }
	// 			cl.send('use',
	// 			{ sid: serverData.serverVID },
	// 			function(err,res){
	// 				cl.send('clientlist', function(err, clients){
	// 					if(err) { console.log(err) }
	// 					async.each(clients,function(client, callback){
	// 						if(client.client_type !== 1){
	// 							rep.clients.push(client)
	// 						}
	// 						callback()
	// 					},
	// 					function(err){
	// 						async.sortBy(rep.clients, function(x, callback) {
	// 						    callback(null, x.client_nickname);
	// 						}, function(err,result) {
	// 						    rep.clients = result
	// 								var pre = ""+fs.readFileSync(path.resolve(__dirname,'./public/templates/teamspeak.tpl'));
	// 							  callback(null, templates.parse(pre, rep));
	// 						});
	// 					})
	// 				}) // end get clients
	// 			})
	// 		})
	// })

	var pre = ""+fs.readFileSync(path.resolve(__dirname,'./public/templates/bfserverstats.tpl'));
	callback(null, templates.parse(pre, rep));
};

Widget.defineWidgets = function(widgets, callback) {
  widgets = widgets.concat([
  		{
  			widget: "bfserver-stats-vrk",
  			name: "bfserver-stats-vrk",
  			description: "description",
  			content: Widget.templates['widget.tpl']
  		}
  	]);
    callback(null, widgets);
};

module.exports = Widget;
