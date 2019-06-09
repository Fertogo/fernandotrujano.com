// JavaScript Document

$(document).ready(function() {  
		$('#content > ul').tabs({ fx: { opacity: 'toggle', height: 'toggle' } });
		$('#portitems').tabs({ fx: { opacity: 'toggle' } });
		$('#activities_items').tabs({ fx: { opacity: 'toggle' } });
		$('#work_items').tabs({ fx: { opacity: 'toggle' } });
		$('a[@rel*=lightbox]').lightBox();

});