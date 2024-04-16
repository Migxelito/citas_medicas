const { JSDOM } = require( "jsdom" );

$.ajax({ url: 'https://randomuser.me/api/', 
dataType: 'json', success: function(data) { console.log(data); } });
