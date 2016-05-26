console.log("index.js");

document.addEventListener("keydown", function (e) {
      if (e.which === 123) {
        require('remote').getCurrentWindow().toggleDevTools();
      } else if (e.which === 116) {
        location.reload();
      }
    });

jQuery(function ($) {
	$('#main').split({ orientation: 'vertical', limit: 200, position: '25%' });
});