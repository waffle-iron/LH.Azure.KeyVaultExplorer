console.log("index.js");

document.addEventListener("keydown", function (e) {
      if (e.which === 123) {
        require('remote').getCurrentWindow().toggleDevTools();
      } else if (e.which === 116) {
        location.reload();
      }
    });

jQuery(function ($) {
	$('#widget').split({ orientation: 'vertical', limit: 100 });
	$('#foo').split({ orientation: 'horizontal', limit: 10 });
	$('#a').split({ orientation: 'vertical', limit: 10 });
	// $('#spliter2').css({ width: 200, height: 300 }).split({ orientation: 'horizontal', limit: 20 });
});