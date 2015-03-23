(function(){
	// window.$ = require('../jquery-2.1.3.min.js');
	window.oc = {};
	
	oc.ui = require('./ui');
	oc.dialog = require('./dialog');
	oc.localSorage = require('./localStorage');
	oc.FileView = require('./fileView');
	oc.Uploader = require('./uploader');
	oc.TreeSelect = require('./treeSelect');
	oc.TreeDialogSelect = require('./treeDialogSelect');
	oc.Tree = require('./tree');
	
	var cssPath = $('script[data-occss]').attr('data-occss');
	if(cssPath){
		$("<link>").attr({ rel: "stylesheet", type: "text/css", href: cssPath}).appendTo("head");
		cssPath = cssPath.replace('dest/oc.css', 'icons/style.css');
		$("<link>").attr({ rel: "stylesheet", type: "text/css", href: cssPath}).appendTo("head");
	}
	else{
		// $("<link>").attr({ rel: "stylesheet", type: "text/css", href: 'http://localhost:3000/dest/oc.css'}).appendTo("head");
		$("<link>").attr({ rel: "stylesheet", type: "text/css", href: '/product/js/oc/oc.css'}).appendTo("head");
		$("<link>").attr({ rel: "stylesheet", type: "text/css", href: '/product/js/oc/icons/style.css'}).appendTo("head");
	}
})()