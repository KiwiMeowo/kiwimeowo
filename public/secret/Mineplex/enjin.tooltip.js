{

// tooltip
$.fn.enjinTooltip = function(options){
    // set the options
    options = $.extend({
        class: null,
        attr: 'data-tooltip',
        container: '.data-tooltip',
        escape: true
    }, options);

    // create the html
    if ($('#mouse_tooltip').length === 0) {
		$('body').append("<div id='mouse_tooltip' class='element_tooltip element_popup' style='display:none'>" +
            "<div class='inner'></div>" +
        "</div>");
	}

    // get the tooltip
    var tooltip = $('#mouse_tooltip');

    // bind the events: mouseover
    $(this).bind('mouseover', function(){
        // build the tooltip
        var html;
        if (options.attr && $(this).attr(options.attr)){
            html = $(this).attr(options.attr);
        } else if (options.container) {
            html = $(this).find(options.container).html();
        }

        // filter the html
        if (options.escape) {
            html = Enjin_Core.filterOutput(html);
        }

        // add the class
        if (options.class) {
            tooltip.attr('class', 'element_tooltip element_popup ' + options.class);
        }

        // add the html in the tooltip
        tooltip.show().children('.inner').html(html);
    });

    // bind the events: mousemove
    $(this).unbind('.mousemove').bind('mousemove', function(event){
        var posY = event.pageY + 14;
		var posX = event.pageX + 10;
        var newX = posX + tooltip.outerWidth();
        var newY = posY + tooltip.outerHeight();
        var windowWidth = $(window).width() + $(window).scrollLeft();
        var windowHeight = $(window).height() + $(window).scrollTop();
        var overflowX = (newX >= windowWidth);
        var overflowY = (newY >= windowHeight);

        if(overflowX) {
            posX = posX - tooltip.outerWidth() - 22;
        }
		if(overflowY) {
            posY = posY - tooltip.outerHeight() - 20;
        }

		tooltip.css({
			top: posY + "px",
			left: posX + "px"
		});
    });

    // bind the events: mouseout
    $(this).unbind('.mouseout').bind('mouseout', function(){
        tooltip.hide();
    });
};


}
/*
     FILE ARCHIVED ON 14:06:35 Oct 25, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:36 Oct 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.458
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 27.513
  LoadShardBlock: 64.806 (3)
  PetaboxLoader3.datanode: 140.4 (5)
  load_resource: 278.73 (2)
  PetaboxLoader3.resolve: 163.798 (2)
*/