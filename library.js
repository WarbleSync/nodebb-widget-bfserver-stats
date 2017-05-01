'use strict';

var async =  module.parent.require('async'),
fs = require('fs'),
path = require('path'),
templates = module.parent.require('templates.js'),
BattlefieldStats = require('battlefield-stats'),
util = require("util"),
app;

var Widget = {
	templates: {}
}

Widget.init = function(params, callback) {
  app = params.app;
  var templatesToLoad = [
    'widget.tpl',
    'bfserverstats.tpl'
  ];

  function loadTemplate(template, next){
    fs.readFile(path.resolve(__dirname,'./public/templates/' + template), function(err,data){
      if(err){
        console.log('bfserver-stats',err.message);
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
	var configData = {
		'platform': widget.data.platform,
		'severId': widget.data.severid,
		'apikey': widget.data.apikey
	}
	// console.log(configData)
	var bf = new BattlefieldStats(configData.apikey)
	var params = {
		platform: bf.Platforms[configData.platform],
		id: configData.severId
	}
	bf.Server.quickServerInfo(params, (error, response) => {
		var rep = response
		// console.log('\n',JSON.stringify(response),'\n')
		var pre = ""+fs.readFileSync(path.resolve(__dirname,'./public/templates/bfserverstats.tpl'));
		callback(null, templates.parse(pre, rep));
	})
};

Widget.defineWidgets = function(widgets, callback) {
  widgets = widgets.concat([
  		{
  			widget: "bfserver-stats-vrk",
  			name: "bfserver-stats-vrk",
  			description: "NodeBB Widget to so Battlefield Server Stats",
  			content: Widget.templates['widget.tpl']
  		}
  	]);
    callback(null, widgets);
};

module.exports = Widget;
