{
Enjin_Core = { };
Enjin_UI = { };

Enjin_Core.favicon = {
	favicon_url: '',

	init: function() {
		if (jQuery.browser.mozilla) {
			//get current favicon
			this.favicon_url = '';
			var self = this;

			$('head link').each(function() {
				var is_attr = ($(this).attr('rel') == 'shortcut icon');
				if (is_attr) {
					self.favicon_url = $(this).attr('href');
				}
			});
		}
	},
	fix: function() {
		if (this.favicon_url != '') {
			var html = '<link href="'+ this.favicon_url +'" rel="shortcut icon" type="image/x-icon" />'
					+ '<link href="'+ this.favicon_url +'" rel="icon" type="image/x-icon" />';
			//force to update the head icon
			$('head link[rel=icon]').remove();
			$(html).appendTo('head');
		}
	}
};

///web.archive.org/web/20171114030930/https://enjin_Core.MAX_ZINDEX = 2147483580;
Enjin_Core.MAX_ZINDEX = 19999;
Enjin_Core._popup_separator = null;
Enjin_Core.floor = function(value, decimals) {
	var base = Math.pow(10, decimals)*1.0;
	value *= base;
	value = Math.floor(value);
	value /= base;

	return value;
};

Enjin_Core.checkMaxChars = function(element, max_length) {
	var length = $(element).val().length;

	if (length >= max_length) {
		var trimmed = $(element).val().substr(0, max_length);
		$(element).val(trimmed);
		return false;
	}

	return true;
};

Enjin_Core.limitMaxChars = function(element, max_length) {
	$(element).bind('keyup', function() {
        Enjin_Core.checkMaxChars(element, max_length);
	});
};

/* from phpjs */
Enjin_Core.__html_translation_table = null;
Enjin_Core.prepare_html_translation_table = function(table, quote_style) {
	if (Enjin_Core.__html_translation_table)
		return; //avoid memory usage

    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +    revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: noname
    // +   bugfixed by: Alex
    // +   bugfixed by: Marco
    // +   bugfixed by: madipta
    // +   improved by: KELAN
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
    // +      input by: Frank Forte
    // +   bugfixed by: T.Wild
    // +      input by: Ratheous
    // %          note: It has been decided that we're not going to add global
    // %          note: dependencies to php.js, meaning the constants are not
    // %          note: real constants, but strings instead. Integers are also supported if someone
    // %          note: chooses to create the constants themselves.
    // *     example 1: get_html_translation_table('HTML_SPECIALCHARS');
    // *     returns 1: {'"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}

    var entities = {}, hash_map = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};

    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';

    useTable       = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';

    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: "+useTable+' not supported');
        // return false;
    }

    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }

    entities['60'] = '&lt;';
    entities['62'] = '&gt;';


    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }

    hash_map["'"] = '&#039;';
    Enjin_Core.__html_translation_table =  hash_map;
};

//fast and "enough version"
Enjin_Core.htmlentities = function(string, quote_style) {
	if ( typeof string === 'undefined' || string === null || typeof string.replace !== 'function' ) return string;
	return string
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;');

};

// Filter string into text (good for concatenating html that includes variables)
Enjin_Core.filterOutput = function(string) {
	if(!string) string = '';
	return $('<pre>').text(string).html();
};

/* from phpjs */
Enjin_Core.html_entity_decode = function(str) {
	var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var random_separator;
	var code;
	var cp;

	do {
		code = '';
		for (i=0; i<5; i++) {
			cp = parseInt(Math.random() * chars.length);
			code += chars.substr(cp, 1);
		}

		random_separator = '@'+code+'@';
	} while (str.indexOf(random_separator) != -1);


	  var ta=document.createElement("textarea");
	  ta.innerHTML=str.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(new RegExp("\n", 'g'), random_separator);
	  return ta.value.replace(new RegExp(random_separator, 'g'), "\n");
};

Enjin_Core.validateIPaddress = function(ipaddress) {
	if(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress))
		return true;
	else
		return false;
};


/**
 * Wrapper helper for using DOM mutation observers, sets up an observer, upon detecting a change
 * the observer wrapper will automatically disconnnect you selector from observation allowing you
 * to make changes to the DOM that can include the selector path (thus preventing DOM mutation loops)
 * and then will automatically reconnect it for you again after calling your handler function.
 *
 * @param string el Selector for element to watch
 * @param function handler Takes an array of mutations as its only argument
 * @param object Optioanl configuration for mutation observer
 *
 * @return MutationObserver The observer itself it returned allowing you to manually disconnect or otherwise manipulate the handler
 * 
 */
Enjin_Core.observe = function( el, handler, cfg ) {
	var target = document.querySelector(el);
	 
	// configuration of the observer:
	var config = { attributes: true }
	if ( typeof cfg !== 'undefined' ) {
		for ( var n in cfg ) { config[n] = cfg[n]; }
	}
	
	// create an observer instance
	var observer = new MutationObserver(function(mutations) {
		observer.disconnect();
		handler(mutations);
		observer.observe(target, config);
	});
	 
	// pass in the target node, as well as the observer options
	observer.observe(target, config);
	return observer;
}

Enjin_Core.alert = function(title, options) {
	if (!options)
		options = {};

	var opts = {};
	$.extend(opts, {
		callback: function() {}, /* doing nothing on call since will be the swf upload part */
		cancel_click_document: true
	}, options, {
		//values that cannot be changed
		message: title,
		button_continue: 'Ok',
		scope: this
	});

	Enjin_Core.showMessagePopup(opts);
};

Enjin_Core._popup = null;
Enjin_Core.showMessagePopup = function(options) {
	var middle = 0;
	var _options = {
		top: null,
		message: '',
		button_continue: 'Ok',
        container_class: '',
		callback: null
	};
	jQuery.extend(_options, options);

	if (Enjin_Core._popup)
		Enjin_Core.cancelPopup();

    var button = '';
    if (_options.button_continue){
        button = '<br><br><div class="element_button">' +
            '<div class="l"></div>' +
            '<div class="r"></div>' +
            '<input type="button" value="' + _options.button_continue + '" class="btncontinue">' +
        '</div>';
    }
	var html = '<div class="element_popup hidden ' + _options.container_class + '">' +
		'<div class="inner inner-message">' +
			'<span class="message">'+_options.message+'</span>' +
            button +
		'</div>' +
	'</div>';

	Enjin_Core._popup = $(html);

	Enjin_Core._popup.appendTo($(document.body));

	Enjin_Core.createPopupSeparator();
	Enjin_Core.placeAfterPopupSeparator(Enjin_Core._popup);


	//position
	if (_options.top == null) {
		_options.top = $(window).scrollTop() +
						($(window).height() - Enjin_Core._popup.height())*0.5;
	}
	Enjin_Core._popup.css('top', _options.top);

	middle = ($(document.body).width() - Enjin_Core._popup.width())*0.5;
	Enjin_Core._popup.css('left', middle);
	Enjin_Core._popup.show();

	Enjin_Core._popup.find('input[type=button].btncontinue').click(function(){
		Enjin_Core.cancelPopup();

		if (_options.callback)
			_options.callback.apply(_options.scope);
	});
};

/**
 * Show a popup window with a single input field in the body, ala JS prompt() method
 * The callback for the popup must take a single param, which will be the value of the input field, e.g
 *
 *   Enjin_Core.showPromptPopup({
 *                                 message: 'Field label',
 *                                 value: 'input default value',
 *								   width: force width of the input
 *								   type: 'input field type attr (e.g. password), default: text',
 *                                 callback: function(input_value) { alert('You typed ' + input_value + ' in the input field'); }
 *                             });
 *
 */
Enjin_Core.showPromptPopup = function(options) {
    // the message is the input field DOM
	var type = ( typeof options.type !== 'undefined' ? options.type : 'text' );
	if ( typeof options.message1 === 'undefined' ) { options.message1 = ''; }
    options.message1 += ' <input type="' + type + '" class="input-text popup-prompt-input" value="">';

    // call the callback before we destory the popup DOM so the callback can extract the user value from the input field
    options.callbackFirst = true;

    // we need to intercept the user-defined callback function and put a step before it to first extract the
    // input value, and then execute the original callback with the input value as a parameter
    var redirect = options.callback;
    options.callback = function() { var value = $('.element_popup .popup-prompt-input').val(); redirect(value); }

    var popup = Enjin_Core.showPopup(options);
	if ( typeof options.value !== 'undefined' ) { popup.find('input[type=text]').val(options.value); }
	if ( typeof options.width !== 'undefined' ) { popup.find('.popup-prompt-input').css({width:options.width}); }
};

/**
 *
 * Display a generic window style popup, with a title bar and an X icon to close window
 *
 *   Enjin_Core.showWindowPopup({
 *                                 title: 'windox title',
 *                                 closable: true|false,		// optional - true to show X close icon
 *								   modal: true|false,  			// true to show popup seperator
 *								   content: string|JQuery,		// window body content
 *								   button_text: 'Ok'			// Ok button text
 *								   footer: string|JQuery		// content show in the footer to left of Ok button
 *								   cancel_link:true|false		// default true, show "or Cancel" link to cancel window
 *								   cancel_click_document:true|false		// default true, clicking document body will cancel window
 *                                 callback: function			// called on click of the OK button, return true to close popup
 *								   form:
 *								   validate: true|false			//	pass false to bypass validation
 *                             });
 */
Enjin_Core.showWindowPopup = function(options)
{
	var _options = {title:'',closable:true, modal:true, button_text:'OK', cancel_link:true, cls:'', cancel_click_document:true, top:null};
	$.extend(_options, options);

	// the window class may consist of several classes, but we use the first one as the base class for identifiying the window
	var base_cls = _options.cls.split(' ').shift();

	var window = $('<div class="element_popup element_popup_core element_popup_window '+_options.cls+'"><div class="inner"></div></div>');
	var inner = window.find('.inner');
	inner.addClass('window-frame');

    if ( _options.hideHeader !== true )
    {
        var title = $("<div class='popup_window_title'></div>");
        title.text(_options.title);
        if ( _options.closable )
        {
            title.append('<a class="close icon-remove icon-large" href="javascript:void(0);" onclick="Enjin_Core.hideCustomPopup(\'.'+base_cls+'\',true);return false;"></a>');
        }

        inner.append(title);
    }

	var content = $('<div class="content"></div>').append(_options.content);
	inner.append( content );

	if ( _options.hideFooter !== true )
	{
		var footer = $("<div class='footer'><div class='content-footer'></div><div class='buttons'></div></div>");
		if ( _options.footer ) { footer.find('.content-footer').append(_options.footer); }

		var okClick = function()
						{
							var form = {};
							var formEl = window.find('form');
							if ( (_options.validate === false) || formEl.valid() )
							{
								window.find('.content form :input').each( function() { form[$(this).attr('name')] = $(this).val(); } );
								if ( typeof _options.callback === 'function' ) { _options.callback(form,formEl); } else { Enjin_Core.hideCustomPopup('.'+base_cls,true); };
							}
						};

		if(_options.button_text !== false) {
			// when form is submitted via Enter, make sure we execute the ok button click handler
			inner.find('form').submit( function() { return false; } );
			var buttons = Enjin_UI.button({value:_options.button_text, click:okClick});
			footer.find('.buttons').append( buttons ).after('<div class="clearing"></div>');
		}
		if ( _options.cancel_link ) { footer.find('.buttons').append('&nbsp; or &nbsp;<a href="javascript:void(0);" class="cancel" onclick="Enjin_Core.cancelPopup(true)">Cancel</a>'); }
		footer.find('.buttons').prepend('<div class="ajax-busy hidden"></div>');

		inner.append(footer);

		inner.find('form :input').keypress( function(event) { if ( event.which == 13 ) { $(this).closest('.element_popup_window').find('.footer input[type=button]').click(); } } );
	}

	window.appendTo($(document.body));
	Enjin_Core._popup = window;

	Enjin_Core.showCustomPopup(window,{center:true, use_separator:options.modal, top: options.top});


	// reindex the form field tab order to ensure that tabbing through fields on this form go in order
    if ( _options.noTabs !== true && typeof $('body').applyTabIndex == 'function'){
        $('body').applyTabIndex();
    }

	return window;
};

/**
 * Shows a popup window requesting the user to enter a captcha, which is posted back to the server to the given
 * url once the captcha comes back correctly the users callback if executed
 *
 *   Enjin_Core.showCaptchaPopup({
 *								   url: required, url to post the captcha to for validation
 *                                 callback: function,			// called once the captcha has been validated successfully
 *                                 message: default 'Prove you are human by typing the two words below:'
 *								});
 */
Enjin_Core.showCaptchaPopup = function( options ) {
	var opt = $.extend({message: 'Prove you are human:', url:'ajax.php?s=captcha'}, options);

	// create a mini-form to put the recaptcha widget into
	var form = $('<form><div class="message">'+opt.message+'</div><div class="g-recaptcha"></div></form>');

	Enjin_Core.showWindowPopup( {content: form,
								 cls: 'element_popup_captcha',
								 button_text: 'Join this website',
							     noTabs:true,			// dont do the form field tab order adjustment to page
								 callback: function() {
										form.find('input').attr('disabled','disabled');
										form.closest('.element_popup_window').find('.ajax-busy').removeClass('hidden');

										 if (typeof Enjin_Core.site_id !== 'undefined' && Enjin_Core.site_id == 1340) {
											 opt.url = '/ajaxsite.php?s=main&cmd=joinsite';
										 }

										$.post( opt.url,
											   {'g-recaptcha-response': form.find('textarea[name=g-recaptcha-response]').val()},
											   function(result) {
													if ( result.success === true ) {
														opt.callback(result);
													} else {
														if ( form.find('.validation-result').length == 0 ) {
															form.append('<div class="validation-result input-error inline"></div>');
														}
														form.find('.validation-result').text(result.error);
														form.find('.input-text').addClass('error-highlight');

														form.find('input').attr('disabled',false).removeAttr('disabled');
														form.closest('.element_popup_window').find('.ajax-busy').addClass('hidden');
													}
												},
												'json'
											);
									}
							});

    grecaptcha.render(form.find('.g-recaptcha')[0], {
        'sitekey' : recaptcha_publickey,
        'theme' : Enjin_Core.detectThemeType()
    });
};

Enjin_Core.joinWebsiteApproval = function(event)
{
	event.cancelBubble = true;
	if (event.stopPropagation) event.stopPropagation();
	Enjin_Core.showCaptchaPopup({message:'This website requires an administrator to approve your registration.<br/>You will be sent an email when approved.',
								 url:"/login/do/joinsite",
								 callback:function() { Enjin_Core.reload(); }
								});
};

Enjin_Core.joinWebsiteRegular = function(event)
{
	event.cancelBubble = true;
	if (event.stopPropagation) event.stopPropagation();
	Enjin_Core.showCaptchaPopup({url:'/login/do/joinsite',
								 callback:function() { Enjin_Core.reload(); }
							   });
};



Enjin_Core.onGoogleSignIn = function(googleUser, jsonpurl) {
	if($('.info_popup.login, .info_popup.signup').is(':visible')) {
		var profile = googleUser.getBasicProfile();
		var id_token = googleUser.getAuthResponse().id_token;

		$.getJSON(jsonpurl+"?callback=?", {s: 'auth', cmd: 'login-google', token: id_token},
			function (data) {
				Core.handleLoginData(data);
			}
		);
	}
};

Enjin_Core.onFacebookSignIn = function(jsonpurl) {
	if($('.info_popup.login, .info_popup.signup').is(':visible')) {
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
				var uid = response.authResponse.userID;
				var accessToken = response.authResponse.accessToken;


				$.getJSON(jsonpurl+"?callback=?", {s: 'auth', cmd: 'login-facebook', token: accessToken},
					function (data) {
						Core.handleLoginData(data);
					}
				);
			} else if (response.status === 'not_authorized') {
				// the user is logged in to Facebook, but has not authenticated your app
			} else {
				// the user isn't logged in to Facebook.
			}
		});
	}
};

Enjin_Core.handleLoginData = function(data) {
	if ( data.success ) {
		location.reload(true);
	} else {
		if (data == 'authy') {
			window.location = '/login/do/authy';
		} else if (data == 'reset') {
			alert('Please reset your password by logging in using your existing email/password');
		}
		else if(data.error != undefined){
			alert('You must verify your account before logging in.');
			window.location = '/signup/verifyemail';
		}
	}
};




Enjin_Core.showCustomPopup = function(popup, params) {
	params = $.extend({
		center: true,
		top: null, //to center
		use_scrolltop: true,
		use_separator: true
	}, params);

	if (typeof popup == 'string') //selector
		popup = $(popup);

	if (params.use_separator) {
		Enjin_Core.createPopupSeparator();
		Enjin_Core.placeAfterPopupSeparator(popup);
	}

	if (params.center) {
		Enjin_Core.centerPopup(popup, params.top, params.use_scrolltop);
	}

	popup.show();
};

Enjin_Core.hideCustomPopup = function(popup,remove) {
	if (typeof popup == 'string') //selector
		popup = $(popup);

	Enjin_Core.removePopupSeparator();
	if ( remove === true ) { popup.remove(); } else { popup.hide(); }
};

Enjin_Core.centerPopup = function(popup, top, use_scrolltop) {
	if (typeof use_scrolltop == 'undefined')
		use_scrolltop = true;

	var window_top = 0;
	if (use_scrolltop)
		window_top = $(window).scrollTop();

	if (top == null) {
		//console.log("T: "+$(window).height()+" -- "+popup.height());
		top = window_top + ($(window).height() - popup.height())*0.5;
	} else {
		top = window_top + top;
	}
	popup.css('top', top);

	middle = ($(document.body).width() - popup.width())*0.5;
	popup.css('left', middle);
};

Enjin_Core.showPopup = function(options) {
	var middle = 0;
	var html_title = '';
	var _options = {
		top: null,
		message: '',
		message1: '',
		button_continue: 'Ok',
		focus_button: false,
		scope: this,
		params: [],
		callback: function() {},
		callback_cancel: function() {},
		cancel_click_document: true,
		callbackFirst: false,                // if true the continue callback will be called before the popup DOM is destroyed
		cls: ''
	};
	jQuery.extend(_options, options);

	if (Enjin_Core._popup)
		Enjin_Core.cancelPopup();

	var cls = '';
	if(_options.cls.length) cls = ' ' + Enjin_Core.filterOutput(_options.cls);

	var html = '<div class="element_popup element_popup_core hidden' + cls + '">\
		<div class="inner">\
			<span class="message">'+_options.message+'</span><br><br>\
			|@extra@|\
			<div class="element_button"><div class="l"><!-- --></div><div class="r"><!-- --></div><input type="button" value="'+_options.button_continue+'" class="btncontinue"></div>&nbsp; or &nbsp;<a href="javascript:void(0);" class="cancel" onclick="Enjin_Core.cancelPopup(true)">Cancel</a>\
		</div>\
	</div>';

	if (_options.message1 != "") {
		html_title = '<span class="message1">'+_options.message1+'</span><div class="clearing"></div><br>';
	}

	html = html.replace('|@extra@|', html_title);

	//prepare base
	Enjin_Core._popup_separator = Enjin_Core.createPopupSeparator();

	Enjin_Core._popup = $(html);
	Enjin_Core._popup.appendTo($(document.body));

	//position
	if (_options.top == null) {
		_options.top = $(window).scrollTop() +
						($(window).height() - Enjin_Core._popup.height())*0.5;
	}
	if(_options.top < 0) _options.top = 30;
	Enjin_Core._popup.css('top', _options.top);


	middle = ($(document.body).width() - Enjin_Core._popup.width())*0.5;
	Enjin_Core._popup.css('left', middle);
	Enjin_Core._popup.show();
	Enjin_Core._popup._options = _options;
	Enjin_Core.placeAfterPopupSeparator(Enjin_Core._popup);

	if(_options.focus_button) {
		Enjin_Core._popup.find('input.btncontinue').focus();
	}

	Enjin_Core._popup.find('input[type=button].btncontinue').click(function(){
	    if ( _options.callbackFirst === true )
	    {
		    _options.callback.apply(_options.scope, _options.params);
		    Enjin_Core.cancelPopup();
	    }
	    else
	    {
		    Enjin_Core.cancelPopup();
		    _options.callback.apply(_options.scope, _options.params);
        }
	});

	if (_options.cancel_click_document) {
		$(document).bind("click", Enjin_Core._waitPopupClick);
	} else {
		//needed to remove the previous binding
		$(document).unbind("click", Enjin_Core._waitPopupClick);
	}

	return Enjin_Core._popup;
};

Enjin_Core._waitPopupClick = function(event) {
	if($(event.target).closest('.element_popup_core').length == 0)
		Enjin_Core.cancelPopup(true);
};

Enjin_Core.createPopupSeparator = function(callback) {
	if (Enjin_Core._popup_separator) {
		return Enjin_Core._popup_separator; //already created
	}

	var separator = $('<div class="s_popup-canvas-separator">&nbsp;</div>')
				.css('width', $(document).width())
				.css('height', $(document).height())
				.appendTo(document.body);

	$(window).bind('resize', function() {
		separator.css('width', $(document).width());
		separator.css('height', $(document).height());
	});

	if (callback) {
		separator.bind('click', function(response) {
			separator.unbind('click');
			callback.apply();
		});
	}

	Enjin_Core._popup_separator = separator;
	return separator;
};

Enjin_Core.placeAfterPopupSeparator = function(el, index) {
	if (!index)
		index = Enjin_Core.MAX_ZINDEX+1;

	el = $(el);
	el.css('zIndex', index);
	el.appendTo($(document.body));
};

Enjin_Core.removePopupSeparator = function() {
	if (Enjin_Core._popup_separator) {
		Enjin_Core._popup_separator.remove();
		Enjin_Core._popup_separator = null;
	}
};

Enjin_Core.cancelPopup = function(callback) {
	var docall = false;
	$(document).unbind("click", Enjin_Core._waitPopupClick);

	if (callback && Enjin_Core._popup) {
		docall = $.extend(Enjin_Core._popup._options, {}); //copy
	}

	if (Enjin_Core._popup) {
		Enjin_Core._popup.remove();
		Enjin_Core._popup = null;
	}

	Enjin_Core.removePopupSeparator();

	if (docall && typeof docall.callback_cancel !== 'undefined') {
		docall.callback_cancel.apply(
				docall.scope,
				docall.params);
	}
};

Enjin_Core.centerPopupSimple = function(element) {
	var t = $(window).scrollTop() + ($(window).height() - element.height())*0.5;
	var l = ($(document.body).width() - element.width())*0.5;
	element.css({'top': t, 'left': l});
};

Enjin_Core.limitText = function(text, limitNum) {
	if (text.length > limitNum) {
		text = text.substring(0, limitNum);
	}

    return text;
};

Enjin_Core.buttonState = function(button, state)
{
	if(state == false)
	{
		button.attr('disabled', 'disabled');
		button.parent().addClass('disabled');
	}
	else
	{
		button.removeAttr('disabled');
		button.parent().removeClass('disabled');
	}
};


Enjin_Core._anchorState = {};
Enjin_Core.prepareState = function() {
	var curl = document.location.toString();
	if (curl.match('#')) { // the URL contains an anchor
	  var anchors = curl.split('#');
	  anchors.shift();

	  jQuery.each(anchors, function() {
		  if (this == '#')
			  return; //nothing to do

		  var info = this.split('_');
		  var i=1;
		  var iid = info[1];
		  Enjin_Core._anchorState[iid] = {
				  params: {},
				  anchor: this
		  };


		  for (i=1; i<info.length; i++) {
			  var name = info[i];
			  var value = null;

			  if (i+1 < info.length)
				  value = info[i+1];

			  Enjin_Core._anchorState[iid][name] = value;
		  }

		  //simulate clicks on anchor
		  $('a[href="#' + this + '"]').click();
	  });
	}
};
Enjin_Core.getState = function(module) {
	if ( Enjin_Core._anchorState[module] ) {
		return Enjin_Core._anchorState[module];
	}

	return null;
};

Enjin_Core.disableLink = function(a, seconds, disabledText) {
	if(disabledText != undefined) {
		var origText = $(a).html();
		$(a).html(disabledText);
	}

	function reenableLink()
	{
		$(a).removeAttr('disabled');
		$(a).removeClass('disabled');
		if(disabledText != undefined) $(a).val(origText);
	}

	$(a).attr('disabled', true);
	$(a).addClass('disabled');
	setTimeout(reenableLink, seconds*1000);
};

Enjin_Core.disableButton = function(input, seconds, disabledText) {
	if(disabledText != undefined) {
		var origText = $(input).val();
		$(input).val(disabledText);
	}

	function reenableButton()
	{
		$(input).removeAttr('disabled');
		$(input).parent().removeClass('disabled');
		if(disabledText != undefined) $(input).val(origText);
	}

	$(input).attr('disabled', true);
	$(input).parent().addClass('disabled');
	setTimeout(reenableButton, seconds*1000);
};

/**
 * Disable the button, and show a countdown after the disabledText
 * @param input
 * @param seconds
 * @param disabledText
 */
Enjin_Core.disableButtonCountdown = function(input, seconds, disabledText) {
	var origText = $(input).val();

	function reenableButton()
	{
		if(seconds > 0) {
			var mins = Math.floor(seconds/60);
			var secs = seconds-(mins*60);

			$(input).val(disabledText + ' ' + Enjin_Core.number_pad(mins, 2) + ':' + Enjin_Core.number_pad(secs, 2));
			$(input).attr('disabled', true);
			$(input).parent().addClass('disabled');
			seconds--;
			setTimeout(reenableButton, 1000);
		}
		else {
			$(input).removeAttr('disabled');
			$(input).parent().removeClass('disabled');
			if (disabledText != undefined) $(input).val(origText);
		}
	}

	reenableButton();
};

Enjin_Core.number_pad = function(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};

/**
 * Count down to 0 displaying the countdown text in an element, then executing the callback
 * @param element
 * @param seconds
 * @param callback
 */
Enjin_Core.textCountdown = function(element, seconds, callback) {
	function nextSecond()
	{
		if(seconds > 0) {
			var s = '';
			if(seconds > 1) s = 's';
			element.text('in ' + seconds + ' second' + s);
			seconds--;
			setTimeout(nextSecond, 1000);
		}
		else {
			element.text('now');
			if(callback !== undefined) {
				callback();
			}
		}
	}

	nextSecond();
};

/*
 * Dropdown Menu
 */
Enjin_Core.dropdownMenuNoHtml = function(button, container, options) {
    options = (null == options) ? {} : options;
    if (container.is(':hidden')){
        container.css({
            top: button.position().top + options.top,
            left: button.position().left + options.left
        }).show();
    } else {
        container.hide();
    }
};

Enjin_Core.dd_timeout = 500;
Enjin_Core.dd_closetimer = 0;
Enjin_Core.dropdownMenu = function(items, button, cclass, right, xOffset, yOffset) {
	Enjin_Core.dd_canceltimer();
	$('.element_dropdown_menu').remove();

	if(cclass != undefined) var cssClass = ' ' + cclass;
	else var cssClass = '';

	var html = '<div class="element_popup element_dropdown_menu' + cssClass + '">\
		<div class="inner">\
			<ul>';

	var bindFunctions = [];
	var bindCount = 0;
	for(i in items) {
		if(items[i][0] != undefined)
		{
			if(items[i][1] == 'html') {
				html += '<li>' + items[i][0] + '</li>';
			}
			else if(items[i][1] == 'divider') {
				html += '<li><div class="menu-divider-line"></div></li>';
			}
			else {
				var target = '';
				if(items[i][2] == 1) target = ' target="_blank"';
				// functions to be bound on click
				if(items[i][3] != undefined) {
					bindFunctions.push(items[i][3]);
					var bindRef = ' bindref-' + bindCount;
					bindCount++;
				}
				else bindRef = '';
				html += '<li><a class="menu-link' + bindRef + '" href=\"' + items[i][1] + '\"' + target + '>' + items[i][0] + '</a></li>';
			}
		}
	}

	html += '</ul>\
		</div>\
	</div>';

	var alignside = 'left';
	if(right != undefined && right == true) alignside = 'right';
	if(xOffset == undefined) xOffset = 0;
    if (yOffset == undefined) yOffset = 0;

	var popup = $(html);
	// bind any onclick functions if they exist
	if(bindCount > 0) {
		for(var i=0; i<bindCount; i++) {
			var btn = popup.find('.bindref-' + i);
			btn.data('bindClick', bindFunctions[i]);
			btn.bind('click', function(ev){$(this).data('bindClick')(); return false;});
		}
	}

	if(right != undefined && right == true)
		popup.css({'top': $(button).offset().top + $(button).height() + yOffset, 'right': $(window).width() - $(button).offset().left - $(button).width() + xOffset});
	else
		popup.css({'top': $(button).offset().top + $(button).height() + yOffset, 'left': $(button).offset().left + xOffset});
	popup.bind('mouseleave', function(e){
		Enjin_Core.dd_timer();
	});
	popup.bind('mouseenter', Enjin_Core.dd_canceltimer);

	$(button).unbind('mouseleave');
	$(button).bind('mouseleave', function(e){
		if(!(e.pageX > $(button).offset().left
		&& e.pageX < $(button).offset().left + $(button).width()
		&& e.pageY > $(button).offset().top)) Enjin_Core.dd_timer();
	});

	$('body').prepend(popup);
	return popup;
};
Enjin_Core.dd_close = function() {
	$('.element_dropdown_menu').remove();
};

Enjin_Core.dd_timer = function() {
	Enjin_Core.dd_closetimer = window.setTimeout(Enjin_Core.dd_close, Enjin_Core.dd_timeout);
};
Enjin_Core.dd_canceltimer = function() {
	if(Enjin_Core.dd_closetimer) {
		window.clearTimeout(Enjin_Core.dd_closetimer);
		Enjin_Core.dd_closetimer = null;
	}
};



/* Trial Plan */
Enjin_Core.closeTrialReminder = function() {
	$.post("/ajax.php?s=signup", { cmd: 'close-trial-reminder' },
		function(data){
			$('.trial_popup').fadeOut(400);
		}
	);
};

Enjin_Core.stopBubble = function(event) {
	if ($.browser.msie) {
		window.event.cancelBubble = true;
		event.returnValue = false;
	} else
		event.stopPropagation();
};
Enjin_Core.prepareEvent = function(event) {
	if ($.browser.msie) {
		//put some "cross" events
		event.pageX = $(document).scrollLeft() + event.offsetX;
		event.pageY = $(document).scrollTop() + event.offsetY;
	}
};

Enjin_Core.popupWindow = function(url, w, h, scrollbars) {
	if (typeof scrollbars == 'undefined') {
        scrollbars = 1;
    }
	var winl = (screen.width-w)/2;
	var wint = (screen.height-h)/2;
	mywindow = window.open(url, "cms_popup","location=0,toolbar=0,status=1,scrollbars=" + scrollbars + ",width=" + w + ",height=" + h + ",top=" + wint + ",left=" + winl);
};

Enjin_Core.toggleEditMode = function(self) {
	$(".editmode-module").toggle();
	$(self).toggleClass("enabled");
	/*if($(self).hasClass("enabled"))
		$(self).html("Finish editing");
	else
		$(self).html("Quick edit content");*/
};



/* Quick Wall Post */

Enjin_Core.showQuickPostBox = function(event) {
	event.stopPropagation();

	$('#global-search-box').hide();
	var box = $('#quick-post-box');

	box.css({'top': $(this).offset().top + $(this).height() + 2, 'right': $(window).width() - $(this).offset().left - $(this).width() - 5});
	box.show();
	box.find('textarea').focus();

	$('#quick-post-box textarea').autoResize({minHeight:10, maxHeight:640, extraSpace:16, animate: false});

	$(document).bind('mousedown', Enjin_Core.closePostInput);
	setTimeout(function(){$('#quick-post-box .wall-post-input textarea').focus()}, 400);
};

Enjin_Core.initQuickPost = function(icon, id) {
	icon.mousedown(Enjin_Core.showQuickPostBox);

	$('#quick-post-box, #quick-post-box .wall-post-input textarea').bind('click mousedown', function(event){
		event.stopPropagation();
	});

	$('#quick-post-box .wall-post-share input').click(function(){
		var message = $('#quick-post-box .wall-post-input textarea').val();
		if($.trim(message).length == 0) return;

		$('#quick-post-box .wall-post-share').addClass('disabled').children('input').attr('disabled', 'disabled');
		$('#quick-post-box .wall-post-input textarea').attr('disabled', 'disabled').css({ opacity: 0.5 });

		$.ajax({
    		type: "POST",
    		url: "/ajax.php?s=social_wall",
    		dataType: "json",
    		data: {
				cmd: 'post',
				profile_id: $('#enjin-bar').attr('data-user_id'),
				type: 'text',
				message: message,
				access: $('#quick-post-box .wall-post-access').attr('data-access')
			},
    		success: function(data){
    			if(data.error !== undefined) alert('Error', data.error);
    			else {
    				$('#quick-post-box .wall-post-share').removeClass('disabled').children('input').removeAttr('disabled');
    				$('#quick-post-box .wall-post-input textarea').removeAttr('disabled').css({ opacity: null });
    				$('#quick-post-box .wall-post-input textarea').val('').blur();
    				Enjin_Core.closePostInput();

    				/*if((Enjin_Core.owns_profile !== undefined && Enjin_Core.is_wall !== undefined) || Enjin_Core.is_activity !== undefined) {
    					var newpost = $(Enjin_Wall_System.createWallPost(data.post_id, data.username, data.message, data.avatar, data.timestamp, data.posted, data.access));
	    				newpost.hide();
	    				$('.wall-posts-empty').remove();
	    				$('.wall-mywall .posts, .activity-index .posts').prepend(newpost);
	    				newpost.fadeIn(600);
	    				Enjin_Wall_System.updatePostClasses();
    				}*/
    			}
    		}
    	});
	});

	$('#quick-post-box .wall-post-access').click(function(){
		if($(this).attr('data-access') == 'everyone') $(this).attr('data-access', 'friends').html('Friends');
		else $(this).attr('data-access', 'everyone').html('Public');
		$(this).blur();
	});
};

Enjin_Core.closePostInput = function(event) {
	if($('#quick-post-box .wall-post-input textarea').val().length == 0) {
		$('#quick-post-box').hide();
		$(document).unbind('click', Enjin_Core.closePostInput);
	}
};


/* Global Search */

Enjin_Core.showGlobalSearchBox = function(event) {
	event.stopPropagation();

	$('#quick-post-box').hide();
	var box = $('#global-search-box');

	box.css({'top': $(this).offset().top + $(this).height() + 2, 'right': $(window).width() - $(this).offset().left - $(this).width() - 5});
	box.find('.global-search-box-input input').focus().val('');

    // ensure the results area is hidden
    box.find('.search-results ul').empty();
    box.find('.results').addClass('hidden');
    box.find('.empty').addClass('hidden');
    box.find('.loading').addClass('hidden');

	box.show();

	$(document).bind('mousedown', Enjin_Core.closeSearchInput);
	setTimeout(function(){$('#global-search-box .global-search-box-input input').focus()}, 400);
};

Enjin_Core.renderSearchItem = function(item, smallAvatar)
{
    var html = '';
    if ( item.type == "site" || item.type == "team" )
    {
            html += '<div class="avatar element_avatar simple ' + ( smallAvatar === true ? 'mediumsmall' : 'medium' ) + '">' + item.avatar + '</div>';
    }
    else
    {
            html += '<div class="avatar">' + item.avatar + '</div>';
    }
    html += '<div class="body"><div class="header">';

    switch ( item.type )
    {
        case 'user':
        html +=	'<a href="/profile/' + item.user_id + '">' + item.displayname + '</a></div>';
        html += '<div class="bottom">Registered User';
        html += Enjin_Core.searchItemFriendHTML(item);
        html += '</div>'
        break;

        case 'site':
        html +=	'<a href="' + item.domain + '">' + item.site_name + '</a></div>';
        html += '<div class="bottom"><div>' + item.member_count + ' members&nbsp;&middot;&nbsp;<a href="' + item.domain + '">' + item.domain + '</a></div></div>'
        break;

        case 'post':
        html += '<a href="' + item.url + '">' + item.thread_subject + '</a></div>';
        html += '<div class="snippet">' + item.post_content + '</div>';
        html += '<div class="bottom"><a href="' + item.site + '">' + item.site_name + '</a>';
        html += '&nbsp;&raquo;&nbsp;<a href="' + item.category_url + '">' + item.category_name + '</a>';
        html += '&nbsp;&raquo;&nbsp;<a href="' + item.url + '">' + item.forum_name + '</a>';
        html += '&nbsp;&middot;&nbsp;' + item.post_count + ' post' + (parseInt(item.post_count,10) > 1 ? 's' : '') + '&nbsp;&middot;&nbsp;' + item.post_time + '&nbsp;&middot;&nbsp;By <a href="/profile/' + item.post_user_id + '">' + item.post_username + '</a></div>';
        break;

        case 'article':
        html +=	'<a href="' + item.url + '">' + item.title + '</a></div>';
        html +=	'<div class="snippet">' + item.content + '</div>';
        html += '<div class="bottom"><a href="' + item.domain + '">' + item.site_name + '</a>&nbsp;&middot;&nbsp;' + item.timestamp + '&nbsp;&middot;&nbsp;By <a href="/profile/' + item.user_id + '">' + item.displayname + '</a></div>'
        break;

        case 'team':
        html +=	'<a href="' + item.url + '">' + item.team_name + '</a></div>';
        html += '<div class="bottom"><a href="' + item.url + '">' + item.url + '</a>';
        html += '&nbsp;&middot;&nbsp;' + item.game_name + (item.location ? ' - ' + item.location : '') + '</div>';
        break;

        case 'character':
        html +=	'<a href="' + item.url + '">' + item.character_name + ' (' + item.displayname + ')</a></div>';
        html += '<div class="snippet">' + item.game_name + (item.location ? ' - ' + item.location : '') + '</div>';
        html += '<div class="bottom">Character';
        html += Enjin_Core.searchItemFriendHTML(item);
        html += '</div>';
        break;
    }

    html += '</div>';
    return html;
};

Enjin_Core.searchItemFriendHTML = function(item)
{
    var html = '';

    // you cannot friend or message yourself!!
    if ( item.active_user_id != item.user_id )
    {
        html += '&nbsp;&middot;&nbsp;';
        if ( typeof item.state === 'undefined' || !item.state )
        {
            html += '<a href="/profile/' + item.user_id + '/friends//op/add/subaction/friends/user/' + item.user_id + '">Add Friend</a>';
        }
        else if ( item.state == 'request' )
        {
            html += 'Friend Request Pending';
        }
        else if ( item.state == 'friend' )
        {
            html += '<a href="/profile/' + item.user_id + '/friends//op/remove/subaction/friends/user/' + item.user_id + '">Remove Friend</a>';
        }

        if ( typeof item.state !== 'undefined' && item.state != 'blocked' )
        {
            html += '&nbsp;&middot;&nbsp;<a href="/dashboard/messages/compose?type=user&id=' + item.user_id + '">Message</a>';
        }
    }

    return html;
};


Enjin_Core.initGlobalSearch = function(icon, id) {
	if(icon.length == 0) return false;

	icon.mousedown(Enjin_Core.showGlobalSearchBox);

	$('#global-search-box, #global-search-box .global-search-box-input input').bind('click mousedown', function(event){
		event.stopPropagation();
	});
	$('#global-search-box .search-box-area .icon').click(function(){
		$('#global-search-box form').trigger('submit');
	});

    var searchInput = $( "#global-search-box .global-search-box-input input" );
    var ac = searchInput.autocomplete({
		minLength: 3,
		delay:1000,
	    appendTo: '#global-search-box .search-results',
		source: '/ajax.php?s=search',
		focus: function( event, ui ) {
			searchInput.val( ui.item.label );
			return false;
		},
		select: function( event, ui ) {
			searchInput.val( ui.item.label );
			return false;
		},
		search: function( event, ui ) {
		    var searchArea = $('#global-search-box .search-results');

		    // make sure the entire lower area is visible
		    searchArea.removeClass('hidden');

		    // ensure the results area is hidden
		    searchArea.find('.results').addClass('hidden');
		    searchArea.find('.empty').addClass('hidden');

		    // show the loading icon
		    searchArea.find('.loading').removeClass('hidden');
		},
		response: function( event, results ) {
		    var searchArea = $('#global-search-box .search-results');
		    if ( results.content.length == 0 )
		    {
		        searchArea.find('.empty').removeClass('hidden');
		    }
		    else
		    {
		        searchArea.find('.count').text(results.content.length);
		    }
		    searchArea.find('.loading').addClass('hidden');
		}
	});

	ac.data( "autocomplete" )._suggest = function( items )
	{
        var searchArea = $('#global-search-box .search-results');
        searchArea.find('.loading').addClass('hidden');
	    searchArea.find('.results').removeClass('hidden');
        var ul = $('#global-search-box .search-results ul').empty();

        this._renderMenu( ul, items );
    };
	ac.data( "autocomplete" )._renderItem = function( ul, item )
	{
	    var el = $( "<li></li>" );
        el.append( Enjin_Core.renderSearchItem(item) );
	    el.data( "item.autocomplete", item ).appendTo( ul );
		return el;

	};

};

Enjin_Core.closeSearchInput = function(event) {
	//if($('#global-search-box .global-search-input input').val().length == 0) {
		$('#global-search-box').hide();
		$(document).unbind('click', Enjin_Core.closeSearchInput);
//	}
};

Enjin_Core.initTs3Icon = function(event) {
	$('#enjin-bar .site-ts3-icon').click(function() {
		if($('#enjin-tray .tray-button.ts3').length) {
			$('#enjin-tray .tray-button.ts3').mouseover().mousedown();
			return false;
		}
		else return true;
	});
};

Enjin_Core.initMumbleIcon = function(event) {
	$('#enjin-bar .site-mumble-icon').click(function() {
		if($('#enjin-tray .tray-button.mumble').length) {
			$('#enjin-tray .tray-button.mumble').mouseover().mousedown();
			return false;
		}
		else return true;
	});
};


/*
 * Like Site
 */
Enjin_Core.enjinLikeSite = function(el, menuv2, color, liked_color) {
    if (typeof menuv2==='undefined') menuv2 = false;
	if (!menuv2) var likes = $(el).siblings('.likes').children('span'); else likes = parseInt($(el).find(".menuv2-enjin-likes").html());

    if (!menuv2) {
        if($(el).hasClass('liked')) {
            $(el).removeClass('liked');
            var cmd = 'unlike-site';
            likes.text(parseInt(likes.text(), 10)-1);
        }
        else {
            $(el).addClass('liked');
            var cmd = 'like-site';
            likes.text(parseInt(likes.text(), 10)+1);
        }
    }else{
        if($(el).hasClass('menuv2-liked')) {
            $(el).removeClass('menuv2-liked').css("color", color);;
            var cmd = 'unlike-site';
            $(el).find(".menuv2-enjin-likes").html(likes-1);
        }
        else {
            $(el).addClass('menuv2-liked').css("color", liked_color);
            var cmd = 'like-site';
            $(el).find(".menuv2-enjin-likes").html(likes+1);
        }
    }
	$.post('/ajax.php?s=site', {cmd: cmd, site_id: Enjin_Core.site_id});
};


/*
 * Tooltips
 */
Enjin_Core.bindTooltip = function(el, html, cls, html_container, condition) {
	Enjin_Core.createTooltipElement();

	if(cls == undefined) var cls = '';
	else cls = ' ' + cls;

	el.bind('mouseover', function(e){

        // the tooltip only appears when a condition is defined and if its true
        if (undefined != condition && false == condition($(this))) {
            return;
        }

        // html_container can be a class name or an attribute name
        // if you pass an html class, that html class element needs to be inside the el container, at any level
        if (html_container){
            if ($(this).attr(html_container)){  // attribute
                html = $(this).attr(html_container);
            } else {    // html class
                html = $(this).find('.' + html_container).html();
            }
        }
		$('#mouse_tooltip').attr('class', 'element_tooltip element_popup' + cls).children('.inner').html(html);
        $('#mouse_tooltip').show();
	});

	Enjin_Core.createTooltipBindings(el);
};

Enjin_Core.createTooltipElement = function() {
	if($('#mouse_tooltip').length == 0) {
		$('body').append("<div id='mouse_tooltip' class='element_tooltip element_popup' style='display: none;'><div class='inner'></div></div>");
	}
};

Enjin_Core.createTooltipBindings = function(el) {
	el.unbind('mousemove mouseout');

    el.bind('mousemove', function(e){
		var posY = (e.pageY + 14);
		var posX = (e.pageX + 10);

		var overflow = Enjin_Core.withinWindow(posX, posY);
           if(overflow[0]) posX = posX - $('#mouse_tooltip').outerWidth() - 22;
		if(overflow[1]) posY = posY - $('#mouse_tooltip').outerHeight() - 20;

		$('#mouse_tooltip').css({
			top: posY + "px",
			left: posX + "px"
		});
	});

	el.bind('mouseout', function(){
		$('#mouse_tooltip').hide();
	});
};

Enjin_Core.withinWindow = function(posX, posY)
{
	var newX = posX + $('#mouse_tooltip').outerWidth();
	var newY = posY + $('#mouse_tooltip').outerHeight();

	var windowWidth = jQuery(window).width() + jQuery(window).scrollLeft();
	var windowHeight = jQuery(window).height() + jQuery(window).scrollTop();

	return [(newX >= windowWidth), (newY >= windowHeight)];
};





/*
 * Beacon
 */
Enjin_Core.beaconPush = {
	_channels: [],
	_key: null,
	_options: null,

	connect: function(key, channels, options) {
		this._channels = channels;
		this._key = key;
		this._options = options;

		Beacon.connect(key, channels, options)
	},

	reconnect: function() {
		Beacon.disconnect();
		Beacon.connect(this._key, this._channels.join(','), this._options);
	},

	addChannel: function(channel) {
		for (var i=0; i<this._channels.length; i++) {
			if (this._channels[i] == channel)
				return; //already here
		}

		this._channels.push(channel);
		this.reconnect();
	},

	removeChannel: function(channel) {
		var __channels = [];
		for (var i=0; i<this._channels.length; i++) {
			if (this._channels[i] == channel)
				continue;

			__channels.push(this._channels[i]);
		}

		this._channels = __channels;
		this.reconnect();
	}
};

Enjin_Core.handleBeacon = function(push) {
	switch (push.name) {
		case 'game_player_online':
			Enjin_Core.Notifications.addGrowl(push.data);
			break;

		case 'ts3-online-count':
			var total = parseInt(push.data.count) || 0;
			$('.button.ts3 .ts3_total').html(total);
			break;

		case 'gchat':
			Enjin_Messaging_BeaconPush.triggerMessage(push.data);
			break;

		case 'chat-message':
			Enjin_Core.Chat.handleMessage(push.data);
			if (false == $("#chat-"+ push.data.userId).is(':visible')){
				Enjin_Core.Chat.displayMicroTip(push.data.userId, true);
			}
			break;

		case 'chat-close':
			Enjin_Core.Chat.StatusUpdate(push.data);
			break;

		case 'alert':
			Enjin_Core.newAlert(push);
			break;

		default:
			if(push.data.hasOwnProperty('growl')) {
				Enjin_Core.Notifications.addGrowl(push.data.growl);
				Enjin_Core.Notifications.addRecord(push.data.growl);
			}
			break;
	}
};

Enjin_Core.newAlert = function(payload) {

	var type = payload.name;
	var data = payload.data;
	var trayAlert = $("#tray-alert");

	//populate alert
	trayAlert.find("div.element_avatar a").attr("href", '/profile/' + data.senderId);
	//trayAlert.find("div.element_avatar img").attr("src", data.avatar_url);

	trayAlert.find("span.username a").text(data.from);

	// move into position
	var pos = $("#chatpanel").offset();
	trayAlert.css('right', 15).css('top', pos.top - 40 );


	switch (data.name) {
		case "user-login":
			var message = "is now online.";
			break;
		case "user-logout":
			var message = "has gone offline.";
			break;
		default:
			break;
	}


	trayAlert.find("span.message").text(message);
	$("#tray-alert div.element_avatar").remove();
	Enjin_Core.Chat.getUserAvatar(data.userId, function(avatar) {
		trayAlert.prepend(avatar);
		var clone = $("#tray-alert div.element_avatar").clone();
		clone.removeClass("small");
		clone.addClass("verysmall");
		clone.addClass(data.senderId);
		Enjin_Core.Chat.StatusUpdate(data, clone);
		trayAlert.fadeIn("fast").delay(5000).fadeOut("fast");
	});
};


/* Micro Tooltips */
Enjin_Core.microTip = function(cssObject, content, triangle_position, id, bgcolor, color, idClass, zindex) {
	if(color != undefined) color = 'color: #' + color + '; ';

	var triangle_border = '';
	if(triangle_position == undefined) triangle_position = 'bl';
	if(triangle_position == 'bl' || triangle_position == 'br') triangle_border = 'top';
	if(triangle_position == 'tl' || triangle_position == 'tr') triangle_border = 'bottom';

	if(bgcolor != undefined) {
		var bg = 'background: #' + bgcolor + '; ';
		var triangle_color = 'border-' + triangle_border + '-color: #' + bgcolor + ';';
	}
	else {
		var bg = ''
		var triangle_color = '';
	}

	if(id != undefined) {
		$('#' + id).remove();
		id = ' id="' + id + '"';
	}
	else id = '';

	if (idClass != undefined) {
		idClass = ' ' + idClass;
	} else idClass = '';

    zindex = zindex ? zindex : 99999999999;
	var html = '<div class="element_microtip'+idClass+'" style="z-index:' + zindex + ';' + bg + color + '"' + id + '><div class="inner">' + $('<pre>').text(content).html() + '<div class="triangle ' + triangle_position + '" style="' + triangle_color + '"></div></div></div>';
	var tooltip = $(html);
	tooltip.css(cssObject);
	$('body').prepend(tooltip);

	return tooltip;
};

/*
 * Bind Microtip to an element as hover tooltip
 */
Enjin_Core.bindMicroTip = function(el, data) {
	//var tooltip = Enjin_Core.microTip({right: $(window).width() - $('#notificationpanel .notification-icon.'+type).offset().left - 22, bottom: 28}, num, 'bl', type+'-notification-tip', 'fff471', '000000', type);
};

/*
 * Game Item Tooltips
 */
Enjin_Core.itemTooltipCache = {};
Enjin_Core.itemNameCache = {};
Enjin_Core.itemIdCache = {};
Enjin_Core.initItemTooltips = function() {
	$(document).bind("mouseover", function(ev){
		if(ev.target.nodeName != 'A' && ev.target.parentNode && ev.target.parentNode.nodeName == 'A')
			var el = $(ev.target.parentNode);
		else if(ev.target.nodeName == 'A')
			var el = $(ev.target);

		if(el != undefined) {
			var itemtooltip = el.attr('data-itemtooltip');
			if(itemtooltip != undefined) {
				Enjin_Core.createTooltipElement();

				if(Enjin_Core.itemTooltipCache[itemtooltip] != undefined) {
					var html = Enjin_Core.itemTooltipCache[itemtooltip];
				}
				else {
					var html = 'Loading...';
					$.get('/ajax.php?s=itemtooltip&item=' + itemtooltip, function(data) {
						Enjin_Core.itemTooltipCache[itemtooltip] = data;
						$('#mouse_tooltip .inner').html(data);
					});
				}

				$('#mouse_tooltip').attr('class', 'element_tooltip element_popup element_itemtooltip').children('.inner').html(html);
				$('#mouse_tooltip').show();


				Enjin_Core.createTooltipBindings(el);

				$(document).one("mouseup", function(ev){
					$('#mouse_tooltip').hide();
				});
			}
			else {
				var game = el.attr('data-itemgame');
				if(game != undefined) {
					var itemname = el.attr('data-itemid');
					if(itemname == undefined) var itemname = el.attr('data-itemname');
					if(itemname == undefined) var itemname = el.text();

					if(itemname != undefined && itemname.length > 0) {
						var key = game + '|' + itemname;
						var gameurl = '';

						if(game == 'wow' || game == '14') {
							game = '14';
							gameurl = '/ajax.php?s=redirect&cmd=wowitem&id=';
						}
						else if(game == 'rift' || game == '4910') {
							game = '4910';
							gameurl = '/ajax.php?s=redirect&cmd=riftitem&id=';
						}

						Enjin_Core.createTooltipElement();

						if(Enjin_Core.itemNameCache[key] != undefined) {
							var html = Enjin_Core.itemNameCache[key];
						}
						if(Enjin_Core.itemIdCache[key] != undefined) {
							var id = Enjin_Core.itemIdCache[key];
						}
						else {
							var html = 'Loading...';
							var id = '';

							$.getJSON('/ajax.php?s=itemtooltip&g=' + game + '&name=' + itemname, function(data) {
								Enjin_Core.itemNameCache[key] = data.html;
								Enjin_Core.itemIdCache[key] = data.id;
								$('#mouse_tooltip .inner').html(data.html);
								el.attr('href', gameurl + data.id);
							});
						}

						$('#mouse_tooltip').attr('class', 'element_tooltip element_popup element_itemtooltip').children('.inner').html(html);
						if(id.length) el.attr('href', gameurl + id);
						$('#mouse_tooltip').show();

						Enjin_Core.createTooltipBindings(el);

						$(document).one("mouseup", function(ev){
							$('#mouse_tooltip').hide();
						});
					}
				}
			}
		}
	});
};



/**
 * Auto Tooltips
 */
Enjin_Core.tooltipHover = null;
Enjin_Core.tooltipHoverTarget = null;
Enjin_Core.initHoverTips = function()
{
	$(document).bind("mouseover", function(ev)
	{
		if(typeof ev.target.attributes !== 'undefined' && ev.target.attributes['data-minitooltip']) {
			var el = $(ev.target);
			var tooltip = ev.target.attributes['data-minitooltip'].value;
		} else if(ev.target.parentNode && ev.target.parentNode.attributes && ev.target.parentNode.attributes['data-minitooltip']) {
			var el = $(ev.target.parentNode);
			var tooltip = ev.target.parentNode.attributes['data-minitooltip'].value;
		} else {
			return true;
        }

        // skip the tooltip if it's the current user
        if (current_session_user_id && el.attr('data-minitooltip-userid') && current_session_user_id == el.attr('data-minitooltip-userid')) {
            return;
        }

        var tooltipType = el.attr('data-tooltiptype');

        /*
         * Themed tooltip that follows the mouse
         */
        if(tooltipType == 'follow') {
            Enjin_Core.createTooltipElement();

            $('#mouse_tooltip').attr('class', 'element_tooltip element_popup').children('.inner').html(tooltip);

            if (el.attr("data-tooltipclass")) {
                var el_class = el.attr("data-tooltipclass");
                $('#mouse_tooltip').addClass(el_class);
            }

            $('#mouse_tooltip').show();

            Enjin_Core.createTooltipBindings(el);

            $(document).one("mouseup", function(ev){
                $('#mouse_tooltip').hide();
            });
        }

        /*
         * Default white micro tip
         */
        else {
            if ( el != undefined && typeof tooltip !== 'undefined' && tooltip )
            {
                // just in case, if there is a tip being shown, remove it
                if ( Enjin_Core.tooltipHover != null ) { Enjin_Core.tooltipHover.remove(); }

                Enjin_Core.tooltipHover = Enjin_Core.microTip({top:'-32px',left:'16px'}, tooltip, 'bl', 'mini-tooltip', '', '', 'mini-tooltip');

                var tipOffset = ["+0","-4"];
                var triOffset = ["+0","+22"];
                if ( $.browser.mozilla )
                {
                    tipOffset = ["+0","-8"];
                    triOffset = ["+0","+0"];
                }

                // check to see if the tooltip has a special instruction for the element to which this
                // tooltip must be aligned, if there is a setting, this will be a jquery selector that will
                // select an element assuming it is contained within the el
                var target = el.attr('data-minitooltip-target');
                if ( typeof target !== 'undefined' ) {
					target = el.find(target);
				} else {
					target = el;
					// if the target is wrapping an img tag use the image in chrome we need to use the image as a target
					// instead as the a tag does not take the proper width
					if ( $.browser.webkit && target.children().first().is('img') ) {
						target = target.children().first();
					}
				}
				Enjin_Core.tooltipHoverTarget = target;

                Enjin_Core.tooltipHover.position({of:target, my:"center bottom", at:"center"+tipOffset[0]+" top"+tipOffset[1], collision:'none'});
                Enjin_Core.tooltipHover.find('.triangle').position({of:Enjin_Core.tooltipHover,my:"center top", at:"center bottom", collision:'none'});

                $(document).bind('mousemove', Enjin_Core.checkHoverTip);
            }
        }
	});
};


Enjin_Core.initOnlinePresence = function(user_channel) {
	$( document ).idleTimer({
		timeout: 15000,
		timerSyncId: 'lastActive'
	});

	$( document ).on( "active.idleTimer", function(event, elem, obj, triggerevent){
		$.post('/api/v1/api.php', Enjin_Core.makeJSONRequest('User.refreshOnline', {channels: user_channel}), function (response) {
		}, 'json');
	});
};

Enjin_Core.makeJSONRequest = function(method, params) {
	var request = {
		"jsonrpc": "2.0",
		"id": Math.round(Math.random() * (999999 - 100000) + 100000)
	};

	request.method = method;
	request.params = params;

	return JSON.stringify(request);
};


Enjin_Core.checkHoverTip = function(e) {
	if (Enjin_Core.tooltipHover && !Enjin_Core.tooltipHover.ismouseover() && !Enjin_Core.tooltipHoverTarget.ismouseover()) {
		Enjin_Core.tooltipHover.remove();
		Enjin_Core.tooltipHover = null;
		$(document).unbind('mousemove', Enjin_Core.checkHoverTip);
	}
};


// workaround for deprecated is(':hover')
(function($){
	$.mlp = {x:0,y:0}; // Mouse Last Position
	function documentHandler(){
		var $current = this === document ? $(document) : $(document).contents();
		$current.mousemove(function(e){jQuery.mlp = {x:e.pageX,y:e.pageY}});
		$current.find("iframe").load(documentHandler);
	}
	$(documentHandler);
	$.fn.ismouseover = function(overThis) {
		var result = false;
		this.eq(0).each(function() {
			var $current = $(this).is("iframe") ? $(this).contents().find("body") : $(this);
			var offset = $current.offset();
			result =    offset.left<=$.mlp.x && offset.left + $current.outerWidth() > $.mlp.x &&
				offset.top<=$.mlp.y && offset.top + $current.outerHeight() > $.mlp.y;
		});
		return result;
	};
})(jQuery);


/** 
 * Site Announcements
 */ 
Enjin_Core.Announcements = {
	
	init: function( announcements )
	{	
		Enjin_Core.Announcements.anns_all = announcements;
		Enjin_Core.Announcements.anns_popup = {index: 0, list: []};
		Enjin_Core.Announcements.anns_tray = {index: 0, list: []};

		for (var i = 0; i < announcements.length; i++) {
			if (-1 != $.inArray(announcements[i].type, ['popup', 'popup_ackn_button'])) {
				Enjin_Core.Announcements.anns_popup.list.push(announcements[i]);
			} else {
				Enjin_Core.Announcements.anns_tray.list.push(announcements[i]);
			}
		}

		// show popup_ackn_button first as we need to make sure user acknowledge them.
		Enjin_Core.Announcements.anns_popup.list.sort(function(a, b) {
			if ('popup_ackn_button' == a.type) {
				return -1;
			} else {
				return 1;
			}
		});

		this.showAlert();

		$('#site-announcements a').click(Enjin_Core.Announcements.show);
		$('#site-announcements .ann-tray-text span.amount').text(Enjin_Core.Announcements.anns_tray.list.length);

		if (Enjin_Core.Announcements.anns_tray.list.length > 1) {
			$('#site-announcements .ann-tray-text span.plural').show();
			$('#site-announcements .ann-tray-text span.singular').hide();
		} else {
			$('#site-announcements .ann-tray-text span.plural').hide();
			$('#site-announcements .ann-tray-text span.singular').show();
		}

		for (var n = 0; n < Enjin_Core.Announcements.anns_tray.list.length; n++) {
			var type = Enjin_Core.Announcements.anns_tray.list[n].type
			if (-1 != $.inArray(type, ['tray_bar_max', 'tray_bar_ackn_button_max'])) {
				var announcement_id = Enjin_Core.Announcements.anns_tray.list[n].announcement_id
				if (! Enjin_Core.Announcements.isAnnouncementMinimized(announcement_id)) {
					Enjin_Core.Announcements.anns_tray.index = n;
					Enjin_Core.Announcements.show(false);
					break;
				}
			}
		}

		this.initPopupAnnouncements();
		Enjin_Core.Announcements.fixChatChannelsPosition();
	}

	,show: function(event)
	{
		if (event) {
			event.cancelBubble = true; 
			if (event.stopPropagation) {
				event.stopPropagation(); 
			}
		}		
		
		Enjin_Core.Announcements.showAnnouncement();
		$('#site-announcements a').unbind('click').click(Enjin_Core.Announcements.close);

		$('#site-announcements .border').width($('#site-announcements').outerWidth() - 2);
		return false;
	}
	
	,showAlert: function( )
	{
		if (Enjin_Core.Announcements.anns_tray.list == undefined) {
			var num = 0;
		} else {
			var num = Enjin_Core.Announcements.anns_tray.list.length;
		}

		if (num > 0) {
			$('#site-announcements').removeClass('active').show();
		} else {	
			$('#site-announcements').hide();
		}
	}
	
	,showAnnouncement: function()
	{		
		var a = Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index];
		if ('undefined' == typeof a) {
			return;
		}
		var can_delete = a.ends == 'delete';
		
		var el = $('.site-announcement');
		el.find('.ann-title').html( a.title );		
		el.find('.content').html( a.announcement );

		el.find('.title .index').text(Enjin_Core.Announcements.anns_tray.index+1);
		el.find('.title .total').text(Enjin_Core.Announcements.anns_tray.list.length);

		var action;

		action = (1 == Enjin_Core.Announcements.anns_tray.list.length) ? 'hide': 'show';
		el.find('.announcements-nav')[action]();

		if (-1 == $.inArray(a.type, ['tray_bar_ackn_button_min', 'tray_bar_ackn_button_max']) || null != a.time_acknowledge) {
			el.find('.btn-agree-terms').hide();
			
			action = ('date_cant_delete' == a.ends || 'days' == a.ends) ? 'hide': 'show';

			el.find('div.btn-delete-ann')[action]();
			el.find('.close-wrapper').show();			
		} else {
			var btn_agree = el.find('.btn-agree-terms');
			btn_agree.show();
			el.find('.btn-delete-ann').hide();
			el.find('.close-wrapper').hide();			
		}

		if ('guest' == a.starts) {
			el.find('.btn-delete-ann').hide();
			el.find('.btn-agree-terms').hide();	
		}

		el.find('.nav-bar').show();
		el.find('.delete')[ can_delete ? 'show' : 'hide' ]();

		el.find('.btn-agree-terms').unbind('click').on('click', function() {
			el.find('.btn-agree-terms').hide();
			el.find('.btn-delete-ann').fadeIn(300);
			el.find('.close-wrapper').show();

			var date = new Date;
			Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index].time_acknowledge = '' + Math.floor(date.getTime() / 1000);
			Enjin_Core.Announcements.announcementAcknowlege(a.announcement_id);
		});
		var that = this;
		el.find('.btn-delete-ann').unbind('click').on('click', function() {
			Enjin_Core.Announcements.announcementDelete(a.announcement_id);
			Enjin_Core.Announcements.anns_tray.list.splice(Enjin_Core.Announcements.anns_tray.index, 1);
			$('#site-announcements .ann-tray-text .amount').text(Enjin_Core.Announcements.anns_tray.list.length);
			Enjin_Core.Announcements.fixChatChannelsPosition();
			if (0 == Enjin_Core.Announcements.anns_tray.list.length) {
				that.close();
			}
			if ('undefined' == typeof Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index]) {
				Enjin_Core.Announcements.anns_tray.index = 0;
			}
			that.showAnnouncement();
		});
		
		
		el.show(); //.position({of:$('#site-announcements'),my:"left bottom",at:"left top",offset:"0 2"});
		
		// show the fragment div covering the bottom left border giving appearance of flowing into the icon
		$('#site-announcements .border').show();
		
		$('#site-announcements').addClass('active');
		
		Enjin_Core.Announcements.announcementView(a.announcement_id);
	}
	
	,close: function(add_to_minimized)
	{
		$('.site-announcement').hide();
		$('#site-announcements .border').hide();
		$('#site-announcements a').unbind('click').click(Enjin_Core.Announcements.show);

		if ('undefined' != typeof add_to_minimized && true == add_to_minimized) {
			Enjin_Core.Announcements.addMinimizedAnnouncement(Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index].announcement_id)
		}
		Enjin_Core.Announcements.showAlert();
	}
	
	,remove: function()
	{
		var id = Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index].announcement_id;
		$.post('/ajax.php?s=announcements',{op:'delete', announcement_id:id});
		
		// they removed the last announcement, so close window and hide icon
		if ( Enjin_Core.Announcements.anns_tray.list.length == 1 )
		{
			Enjin_Core.Announcements.anns_tray.list = [];
			this.close();		
		}
		else
		{		
			var tmp = Enjin_Core.Announcements.anns_tray.list;
			Enjin_Core.Announcements.anns_tray.list = [];
			for ( var i = 0; i < tmp.length; i++ ) { if ( tmp[i].announcement_id != id ) {Enjin_Core.Announcements.anns_tray.list.push(tmp[i]);} }
			if ( Enjin_Core.Announcements.anns_tray.index >= Enjin_Core.Announcements.anns_tray.list.length ) 
			{
				Enjin_Core.Announcements.prev();
			}
			else
			{
				Enjin_Core.Announcements.showAnnouncement();
			}			
		}
	}
	
	,prev: function()
	{
		if (typeof Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index - 1] != 'undefined') {
			Enjin_Core.Announcements.anns_tray.index--;	
		} else {
			Enjin_Core.Announcements.anns_tray.index = Enjin_Core.Announcements.anns_tray.list.length - 1;
		}
		Enjin_Core.Announcements.showAnnouncement();
	}
	
	,next: function()
	{
		if (typeof Enjin_Core.Announcements.anns_tray.list[Enjin_Core.Announcements.anns_tray.index + 1] != 'undefined') {
			Enjin_Core.Announcements.anns_tray.index++;
		} else {
			Enjin_Core.Announcements.anns_tray.index = 0;
		}		
		Enjin_Core.Announcements.showAnnouncement();
	}

	,popupPrev: function()
	{
		if ('undefined' != typeof Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index - 1]) {
			Enjin_Core.Announcements.anns_popup.index--;
		} else {
			Enjin_Core.Announcements.anns_popup.index = Enjin_Core.Announcements.anns_popup.index - 1;
		}
		Enjin_Core.Announcements.showPopupAnnouncement();
	}

	,popupNext: function()
	{
		if ('undefined' != typeof Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index + 1]) {
			Enjin_Core.Announcements.anns_popup.index++;
		} else {
			Enjin_Core.Announcements.anns_popup.index = 0;
		}
		Enjin_Core.Announcements.showPopupAnnouncement();
	}

	,initPopupAnnouncements: function() {
		if (Enjin_Core.Announcements.anns_popup.list.length > 0) {		
			var ann_popup = $('#announcement-popup');
			ann_popup.find('div.prev').on('click', Enjin_Core.Announcements.popupPrev);
			ann_popup.find('div.next').on('click', Enjin_Core.Announcements.popupNext);

			if (typeof window.issued_warnings != 'undefined' && window.issued_warnings.length > 0) {
				setTimeout(function() {
					var waitForWarningPopup = setInterval(function() {
						if (0 == window.issued_warnings.length) {
							Enjin_Core.Announcements.showPopupAnnouncement();
							clearInterval(waitForWarningPopup);
						}
					}, 200);
				}, 2700);
			} else {
				Enjin_Core.Announcements.showPopupAnnouncement();
			}
		}
	}

	,positionPopupAnnouncement: function() {
		var w = $(window);
		var selector = ($.browser.mozilla) ? 'body, html': 'body';
		var scrollTop = $(selector)[0].scrollTop;
		var ann_popup = $('#announcement-popup');

		var ptop = (w.height() / 2) - (ann_popup.height() / 2) + scrollTop - 50;
		var left = (w.width() / 2) - (ann_popup.width() / 2);

		ann_popup.css({
			left: left, 
			top: ptop
		});

		return {
			top: ptop,
			left: left
		};
	}

	,showPopupAnnouncement: function() {
		var that = this;

		var body = $('body');
		var ann_canvas = $('.announcement-canvas-separator');
		ann_canvas.width(body.width());
		ann_canvas.show();

		var ann_popup = $('#announcement-popup');
		var announcement = Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index];
		if ('undefined' == typeof announcement) {
			return;
		}

		ann_popup.find('span.title-text').text(announcement.title);
		ann_popup.find('div.announcement-text').html(announcement.announcement);

		ann_popup.find('.title-bottom .index').text(Enjin_Core.Announcements.anns_popup.index + 1);
		ann_popup.find('.title-bottom .total').text(Enjin_Core.Announcements.anns_popup.list.length);
		
		var action = (1 == Enjin_Core.Announcements.anns_popup.list.length) ? 'hide': 'show';
		ann_popup.find('div.prev,div.next')[action]();
		ann_popup.find('.title-bottom')[action]();
		

		// only when announcement is popup: type = 'popup' or 'popup_ackn_button'
		if ('popup' == announcement.type) {
			ann_popup.find('.btn-delete-ann').show();
			ann_popup.find('.close-wrapper').show();
			// ann_popup.find('.title-bottom').show();
			ann_popup.find('.btn-agree').hide();
		} else {
			ann_popup.find('.btn-delete-ann').hide();
			ann_popup.find('.close-wrapper').hide();
			// ann_popup.find('.title-bottom').hide();
			ann_popup.find('.btn-agree').show();
		}

		var ack_btn_text = announcement.ack_btn_text;
		if ('' == ack_btn_text) {
			ack_btn_text = 'I Agree';
		}

		ann_popup.find('div.btn-agree input').attr('value', ack_btn_text);
		ann_popup.find('.btn-agree').off('click').on('click', function() {
			var ann = Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index];

			if ('popup_ackn_button' == ann.type) {
				Enjin_Core.Announcements.announcementAcknowlege(ann.announcement_id);
				Enjin_Core.Announcements.announcementDelete(ann.announcement_id);
			}
			
			Enjin_Core.Announcements.anns_popup.list.splice(Enjin_Core.Announcements.anns_popup.index, 1);
			if (Enjin_Core.Announcements.anns_popup.list.length > 0) {
				that.showPopupAnnouncement();
			} else {
				that.popupClose();
			}
		});
		ann_popup.find('.btn-delete-ann-x').off('click').on('click', function() {
			that.popupClose();
		});
		ann_popup.find('.btn-delete-ann').off('click').on('click', function() {
			var announcement_id = Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index].announcement_id;
			Enjin_Core.Announcements.announcementDelete(announcement_id);

			
			Enjin_Core.Announcements.anns_popup.list.splice(Enjin_Core.Announcements.anns_popup.index, 1);
			if (0 == Enjin_Core.Announcements.anns_popup.list.length) {
				that.popupClose();
			}
			if ('undefined' == typeof Enjin_Core.Announcements.anns_popup.list[Enjin_Core.Announcements.anns_popup.index]) {
				Enjin_Core.Announcements.anns_popup.index = 0;
			}
			that.showPopupAnnouncement(announcement.announcement_id);
		});

		Enjin_Core.Announcements.announcementView(announcement.announcement_id);

		// if popup hidden - show it
		if (ann_popup.is(':hidden')) {
			var ann_popup_data = Enjin_Core.Announcements.positionPopupAnnouncement();
			if ('popup' == announcement.type || 'popup_ackn_button' == announcement.type) {
				switch (announcement.animation) {
					case 'disabled':
						ann_popup.show();
						break;
					case 'fade_in':
						ann_popup.css('opacity', '0');
						ann_popup.show();
						TweenLite.to(ann_popup, 1.5, {
							delay: 2,
							opacity: 1,
							ease: Power3.easeOut,
						});
						break;
					case 'animate_in': 
						setTimeout(function() {
							ann_popup.show(800);
						}, 1200);
						break;
					case 'slide_from_top':
						ann_popup.css('top', '-' + (ann_popup.height() + 10) + 'px');
						ann_popup.show();
						TweenLite.to(ann_popup, 1, {
							delay: 2,
							top: ann_popup_data.top + 'px',
							ease: Power3.easeOut,
						});
						break;
					case 'slide_from_left':
						ann_popup.css('left', '-' + (ann_popup.width() + 10) + 'px');
						ann_popup.show();
						TweenLite.to(ann_popup, 1.5, {
							delay: 2,
							left: ann_popup_data.left + 'px',
							ease: Power3.easeOut,
						});
						break;
					case 'slide_from_bottom':
						$('body').css('overflow', 'hidden');
						ann_popup.css('top', $(window).height() + 'px');
						ann_popup.show();
						TweenLite.to(ann_popup, 1.3, {
							delay: 2,
							top: ann_popup_data.top + 'px',
							ease: Power3.easeOut,
							onComplete: function() {
								$('body').css('overflow', 'hidden');
							}
						});
						break;
				}
			} else {
				ann_popup.show();
			}
		}
	}

	,popupClose: function() {
		$('.announcement-canvas-separator,#announcement-popup').remove();
	}
	
	,getAnnouncementById: function(announcement_id) {
		var ann = null;
		for (var i = 0; i < Enjin_Core.Announcements.anns_all.length; i++) {
			if (announcement_id == Enjin_Core.Announcements.anns_all[i]['announcement_id']) {
				ann = Enjin_Core.Announcements.anns_all[i];
				break;
			}
		}
		return ann;
	}

	,announcementView: function(announcement_id) {
		var ann = Enjin_Core.Announcements.getAnnouncementById(announcement_id);
		if (ann && ann._time_viewed_) {
			return;
		}

		$.post('/ajax.php?s=announcements', {
			'announcement_id': announcement_id,
			'op': 'view'
		}, function() {
			
		});
	}

	,announcementDelete: function(announcement_id) {
		$.post('/ajax.php?s=announcements', {
			'announcement_id': announcement_id,
			'op': 'delete'
		}, function(response) {
			
		});
	}

	,announcementAcknowlege: function(announcement_id) {
		$.post('/ajax.php?s=announcements', {
			'announcement_id': announcement_id,
			'op': 'acknowlege'
		}, function(response) {
			
		});
	}

	,addMinimizedAnnouncement: function(announcement_id) {
		var minimized_anns = $.jStorage.get('minimized_anns', []);
		minimized_anns.push(parseInt(announcement_id, 10))
		$.jStorage.set('minimized_anns', minimized_anns);
	}

	,isAnnouncementMinimized: function(announcement_id) {
		var minimized_anns = $.jStorage.get('minimized_anns', []);
		announcement_id = parseInt(announcement_id, 10);
		return (-1 != $.inArray(announcement_id, minimized_anns));
	}

	,fixChatChannelsPosition: function() {
		var sa = $('#site-announcements'); 
		var chatchannels_margin_left = sa.offset().left + sa.outerWidth()
		$('#enjin-tray-chatchannels.announcements').css('margin-left', chatchannels_margin_left);
	}
};

/*
 * Minecraft Voting Reminders
 */
Enjin_Core.Reminders = {
	init: function(data) {
		if(data.length) {
			for(var i=0; i<data.length; i++) {
				Enjin_Core.showPopup({
					message: data[i].reminder_text,
					params: [data[i].site_id, 'closed_minecraft_voting_reminder', data[i].preset_id, 'minecraft_voting_reminders_site'],
					callback: function(site_id, flag, external_id, clear_cache) {
						Enjin_Core.setFlag(site_id, flag, external_id, clear_cache);
					},
					button_continue: 'Ok, thanks for the reminder',
					cls: 'm_minecraftvoting-reminder-popup'
				});
			}
		}
	}
};

// teaser
Enjin_Core.teaser = function(string, max, trail) {
	if (string === null) {
		return '';
	}
	if (string.length <= max) {
		return string;
	}
	trail = trail || '...';
	return string.substr(0, max) + trail;
};


/*
 * Notifications
 */
Enjin_Core.Notifications = {
	stylizeContent: function(content){
		content = Enjin_Core.filterOutput(content);
		
		var data = ['Wall Like: ', 'Comment Like: ', 'Wall Mention: ', 'Comment Mention: ', 'Wall Post: ', 
			'Shared Image: ', 'Shared Link: ', 'Shared Video: ', 'Wall Reply: ', 'Liked Post: '];
		$.each(data, function(i, n){
			content = content.replace(n, '<b>' + n + '</b>');
		});
		
		return content;
	},

	addGrowl: function(data){
		if('' == data.growl_class) {
			console.log(data);
			return;
		}

		var block = $('body > .user_tray .growls .template .growl').clone();
		block.attr('href', data.url);
		block.addClass(Enjin_Core.filterOutput(data.growl_class));
		block.find('.growl_avatar').attr('src', data.avatar);
		block.find('.growl_username').html(data.username);

		data.growl_type ? block.find('.growl_type').html(Enjin_Core.filterOutput(data.growl_type)).show() : null;
		data.growl_text ? block.find('.growl_text').html(Enjin_Core.Notifications.stylizeContent(Enjin_Core.teaser(data.growl_text, 45))).show() : null;
		data.growl_game ? block.find('.growl_game').html(Enjin_Core.filterOutput(data.growl_game)).show() : null;

		// add the block to the main growls
		var container = $('body > .user_tray .growls .inner').append(block);

		// update the margin top - 54 + 52 * TOTAL_ITEMS
		container.css('margin-top', -(52 * container.children().length - 12) + 'px');

		// make the block disappear after a while
		block.mouseenter(function() {
			$(this).addClass('over');
		}).mouseleave(function() {
			$(this).removeClass('over');
		});
		
		setTimeout(function(){
			if (false === block.hasClass('over')) {
				block.slideUp(300, function(){
					$(this).remove();
				});
			} else {
				var onTime = arguments.callee;
				block.mouseleave(function() {
					setTimeout(onTime, 1600);
				});
			}
		}, 5500);
	},

	addRecord: function(data) {
		var main = $('body > .user_tray .button.' + data.category);
		
		// update the total
		var total_container = main.find('.button_total_container');
		var total = parseInt(total_container.find('.button_total').text()) || 0;	// must be numeric
		total++;
		total_container.show().find('.button_total').html(total);
		main.find('.window_title .total_value').html(total);
		main.find('.window_title').userTrayUpdateTotalText();
		
		if (false === main.find('.button_click').hasClass('filled')) {
			main.find('.button_click').addClass('filled');
		}
		
		// update the messages subtab total
		if ('messages' === data.category) {
			var subtotal_container = main.find('.window_message_tab[data-type="' + data.type + '"] .window_message_tab_total');
			var subtotal = parseInt(subtotal_container.text()) || 0;	// must be numeric
			subtotal++;
			subtotal_container.html(subtotal);
		}
		
		// check if we need to add the record block
		if (main.attr('data-triggered') !== '1') {
			return;
		}		
		
		// get the main container for record blocks
		var container;
		if ('messages' === data.category) {
			container = main.find('.window_message_container[data-type="' + data.type + '"]');
		} else {
			container = main.find('.window_content');
		}

		// if the container is still loading then don't add the record
		if ('none' !== container.find('.window_loading').css('display')) {
			return;
		}			
			
		// create and append the block to the main list container if it's already loaded			
		var box = main.find('.window_box_template .box').clone();			
		box.attr('data-id', Enjin_Core.filterOutput(data.item_id));
		box.attr('data-type', Enjin_Core.filterOutput(data.type));
		box.attr('href', data.url);
		box.find('.box_avatar').attr('src', data.avatar_large);
		box.find('.box_date').html(Enjin_Core.filterOutput(data.time_left));
		box.find('.box_delete').attr('data-url', data.read_url);
		box.find('.box_author').html(data.username);
		box.find('.box_title .fa').addClass(Enjin_Core.filterOutput(data.icon));
		box.find('.box_title_content').html(Enjin_Core.Notifications.stylizeContent(Enjin_Core.teaser(data.title, 30)));
		box.find('.box_details_content').html(Enjin_Core.filterOutput(Enjin_Core.teaser(data.description, 40)));
		box.find('.box_details_double .fa').addClass(Enjin_Core.filterOutput(data.icon));
		box.find('.box_details_double_content').html(Enjin_Core.Notifications.stylizeContent(data.title));

		if (box.find('.box_friend_interact').length) {
			box.find('.box_friend_interact').each(function(){
				var interact_url = $(this).attr('href').replace(/user_id=1/, 'user_id=' + Enjin_Core.filterOutput(data.user_id));
				$(this).attr('href', interact_url);
			});
		}

		if (data.description) {
			box.find('.box_details_single').show().next().hide();
		} else {
			box.find('.box_details_single').hide().next().show();
		}
		if (data.type === 'friend_request') {
			box.find('.box_friend_request').show().prev().hide();
		} else {
			box.find('.box_details_content').show().next().hide();
		}

		// add the html			
		container.find('.window_empty').hide().next().show().find('.window_filled_inner').prepend(box);
	},
};

Enjin_Core.WowFetcher = {
	runFetcher: function(data) {
		if(data != undefined && data.name && data.server && data.region) Enjin_Core.WowFetcher.loadCharacter(data);
		else {
			$.get('/ajax.php?s=profile_characters&cmd=fetcher-get-wow', function(response){
				if(window.console) window.console.debug('got new char to fetch:');
				if(window.console) window.console.debug(response);
				Enjin_Core.WowFetcher.loadCharacter(response);
			}, 'json');
		}
	},

	loadCharacter: function(data) {
		if(window.console) window.console.debug('loadCharacter starting, name: ' + data.name + ' server: ' + data.server + ' region: ' + data.region);
		var character_id = data.character_id;
		if(data.character_id && data.name && data.server && data.region) {
			if(window.console) window.console.debug('Fetching...');
			var timer = setTimeout(Enjin_Core.WowFetcher.runFetcher, 11000);
			$.getJSON('http://' + data.region + '.battle.net/api/wow/character/' + data.server + '/' + data.name + '?fields=guild,stats,talents,items,titles,professions,achievements,progression,pvp&jsonp=?', function(fetched) {
				clearTimeout(timer);
				if(window.console) window.console.debug('Got response from Armory: ', fetched);
				if(Enjin_Core.WowFetcher.validateData(fetched)) {
					$.post('/ajax.php?s=profile_characters&cmd=fetcher-save-wow', {data: fetched, character_id: character_id}, function(response){
						if(window.console) window.console.debug('Data Saved. Got response: ', response);
						if(response.name && response.server && response.region) {
							setTimeout(function(){
								Enjin_Core.WowFetcher.runFetcher(response)
							}, Math.floor(Math.random()*3001));
						}
					}, 'json');
				}
			});
		}
	},

	validateData: function(data) {
		if(window.console) window.console.debug('Validating data: ', data);
		if(data.name && data.realm) return true;
		else return false;
	}
};

Enjin_Core.setFlag = function(site_id, flag, external_id, clear_cache) {
	var params = {
		cmd: 'set-flag',
		site_id: site_id,
		flag: flag,
		external_id: external_id
	};

	if(clear_cache != undefined)
		params['clear-cache'] = clear_cache;

	$.post('/ajax.php?s=flags', params, function(result) {}, 'json');
};


/* Init */

$(document).ready(function(){
	Enjin_Core.initQuickPost($('#enjin-bar .quick-wall-post-icon'));
	Enjin_Core.initGlobalSearch($('#enjin-bar .global-search-icon'));
	Enjin_Core.initTs3Icon();
	Enjin_Core.initMumbleIcon();
	Enjin_Core.initItemTooltips();
	Enjin_Core.initHoverTips();
	//Enjin_Core.initOnlinePresence(Enjin_Messaging_Pusher.channel_user_name);
});


/* IE9 fix */
if (typeof Range != "undefined" && typeof Range.prototype.createContextualFragment == "undefined") {
    Range.prototype.createContextualFragment = function(html) {
        var doc = this.startContainer.ownerDocument;
        var container = doc.createElement("div");
        container.innerHTML = html;
        var frag = doc.createDocumentFragment(), n;
        while ( (n = container.firstChild) ) {
            frag.appendChild(n);
        }
        return frag;
    };
}

/* IE9 draggable hotfix */
if($.ui && $.ui.mouse && $.ui.mouse.prototype) (function($){var a=$.ui.mouse.prototype._mouseMove;$.ui.mouse.prototype._mouseMove=function(b){if($.browser.msie&&document.documentMode>=9){b.button=1};a.apply(this,[b]);}}(jQuery));


/* plugin for select options */
(function( $ ){
	$.fn.setSelectOptions = function(opts) {
		assignOptions = function(el, opts) {
			el = $(el);
			el.empty();

			jQuery.each(opts, function(key, value) {
				if (typeof value == 'object') {
					var nel = $('<optgroup />').attr('label', key);
					assignOptions(nel, value);
					el.append(nel);
				} else {
					el.append(
								$('<option />')
									.attr('value', key)
									.attr('label', value)
									.text(value)
								);
				}
			});
		};

		jQuery.each(this, function() {
			if (this.nodeName.toLowerCase() == 'select') {
				assignOptions(this, opts);
			}
		});
	};


	var documentGlobalHandler = {
		handlers: [],
		addHandler: function(el) {
			for (var i=0; i<this.handlers.length; i++) {
				if (this.handlers[i] == el)
					return; //already
			}

			this.handlers.push(el);
		},
		removeHandler: function(el) {
			var nhandlers = [];
			for (var i=0; i<this.handlers.length; i++) {
				if (this.handlers[i] == el)
					continue;

				nhandlers.push(this.handlers[i]);
			}

			this.handlers = nhandlers;
		},

		haveParent: function(el, parent) {
			 return (el == parent) ||
			 	($(el).parents().index(parent) >= 0);
		},

		init: function() {
			var self = this;
			$(document).bind('click', function(evt) {
				for (var i=0; i<self.handlers.length; i++) {
					var handler = self.handlers[i];
					if (self.haveParent(evt.target, handler)
						|| self.haveParent(evt.currentTarget, handler)) {
						return; //we won't process it
					}

					if ($(handler).is(':visible'))
						$(handler).trigger("outsideClick");
				}
			});
		}
	};
	documentGlobalHandler.init();

	$.fn.outsideClick = function(opts) {
		jQuery.each(this, function() {
			var el = this;
			documentGlobalHandler.addHandler(el);
			$(el).bind('outsideClick', function() {
				opts.callback.apply(el)
			});
		});
	};
})( jQuery );

/*
bindWithDelay jQuery plugin
Author: Brian Grinstead
MIT license: http://www.opensource.org/licenses/mit-license.php

http://github.com/bgrins/bindWithDelay
http://briangrinstead.com/files/bindWithDelay

Usage:
	See http://api.jquery.com/bind/
	.bindWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

Examples:
	$("#foo").bindWithDelay("click", function(e) { }, 100);
	$(window).bindWithDelay("resize", { optional: "eventData" }, callback, 1000);
	$(window).bindWithDelay("resize", callback, 1000, true);
*/

(function($) {
$.fn.bindWithDelay = function( type, data, fn, timeout, throttle ) {
	var wait = null;
	var that = this;

	if ( $.isFunction( data ) ) {
		throttle = timeout;
		timeout = fn;
		fn = data;
		data = undefined;
	}

	function cb() {
		var e = $.extend(true, { }, arguments[0]);
		var throttler = function() {
			wait = null;
			fn.apply(that, [e]);
		};

		if (!throttle) { clearTimeout(wait); }
		if (!throttle || !wait) { wait = setTimeout(throttler, timeout); }
	}

	return this.bind(type, data, cb);
}
})(jQuery);

/**
 * Focus at any position in an input
 */
(function($) {
$.fn.setCursorPosition = function(pos) {
  this.each(function(index, elem) {
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  });
  return this;
}
})(jQuery);

/**
 * Prevent repeated firings of fast events. Use like so:
 * $(document).on('keyup', '.myinput', debounce(500, function(){ ...
 * @param delay
 * @param fn
 * @returns {Function}
 */
function debounce(delay, fn) {
	var timer = null;
	return function () {
		var context = this, args = arguments;
		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.apply(context, args);
		}, delay);
	};
}


/**
 * Zero-fills a number to the specified length (works on floats and negatives, too).
 *
 * @param number
 * @param width
 * @param includeDecimal
 * @return string
 */
Enjin_Core.zeroFill = function(number, width, includeDecimal) {
	if (includeDecimal === undefined)
		includeDecimal = false;

	var result = parseFloat(number),
		negative = false,
		length = width - result.toString().length,
		i = length - 1;

	if (result < 0) {
		result = Math.abs(result);
		negative = true;
		length++;
		i = length - 1;
	}

	if (width > 0) {
		if (result.toString().indexOf('.') > 0) {
			if (!includeDecimal)
				length += result.toString().split('.')[1].length;

			length++;
			i = length - 1;
		}

		if (i >= 0) {
			do {
				result = '0' + result;
			} while (i--);
		}
	}

	if (negative)
		return '-' + result;

	return result;
};

/**
 *
 *
 */
Enjin_Core.selectText = function(element)
{
    var text = typeof element === 'object' ? element[0] : $(element)[0];
    if ($.browser.msie) {
        var range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if ($.browser.safari) {
        var selection = window.getSelection();
        selection.setBaseAndExtent(text, 0, text, 1);
    } else {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
	}
};


/**
 * Detect the theme (light/dark) by checking for the theme css style in the body tag
 * @return string light | dark
 */
Enjin_Core.detectThemeType = function() {
	return ( $('body.dark-theme').length == 0 ? 'light' : 'dark' );
 }

/*******************************************************************************************************************
 *
 * Enjin_UI - JQuery helper functions for generating Enjin specific UI elements
 *
 *******************************************************************************************************************/


Enjin_UI.input = function( options )
{
	var el = $('<div class="input-text"><input type="text" /></div>');
	var elInput = el.find('input');
	for ( var n in options ) { elInput.attr(n,options[n]); }
	return el;
};

Enjin_UI.textarea = function( options )
{
	var el = $('<div class="input-textarea"><textarea></textarea></div>');
	var elText = el.find('textarea');
	if ( typeof options === 'object' )
	{
		if ( typeof options.value !== 'undefined' ) { elText.text(options.value); delete options.value; }
		for ( var n in options ) { elText.attr(n,options[n]); }
	}
	return el;
};

Enjin_UI.container = function( label )
{
	return $("<div class='" + label + "-body'>" +
			 "<div class='" + label + "-body-left'><!--  --></div><div class='" + label + "-body-right'><!--  --></div>" +
			 "<div class='" + label + "-header-left'><!--  --></div><div class='" + label + "-header-right'><!--  --></div>" +
			 "<div class='" + label + "-footer-left'><!--  --></div><div class='" + label + "-footer-right'><!--  --></div>" +
			 "<div class='" + label + "-body-content'>" +
			 "</div>" +
			 "</div>"
			);
};

Enjin_UI.blockContainer = function( options )
{
	var el = $("<div class='block-container " + (typeof options !== 'undefined' ? options.cssClass : '') + "'></div>");
	el.html( "<div class='he l'><!--  --></div>" +
				"<div class='he r'><!--  --></div>" +
				"<div class='he tl'><!--  --></div>" +
				"<div class='he tr'><!--  --></div>" +
				"<div class='he bl'><!--  --></div>" +
				"<div class='he br'><!--  --></div>" +
				"<div class='structure'></div>");
	return el;
};

Enjin_UI.button = function( options )
{
	var button_type = 'element_button';
	if(options.button_type != undefined) button_type = options.button_type;
	var el = $('<div class="' + button_type + '"><div class="l"><!-- --></div><div class="r"><!-- --></div><input type="button"/></div>');
	var elInput = el.find('input');
	for ( var n in options ) { if ( typeof options[n] === 'function' ) { elInput[n](options[n]); } else { elInput.attr(n,options[n]); } }
	return el;
};


/* just an util function, check maybe extending to get
 * something like el.bind('enter')
 * in jquery
 */
Enjin_Core.bindEnter = function(el, callback, options) {
	var options = $.extend({
			multiple_line: false
		}, options);

	el.bind('keyup', function(event) {
		if (event.keyCode == 0xD) {
			if (event.shiftKey && options.multiple_line)
				return;

			callback.call(el);
		}
	});
};


/*
 * persistence utilitie
 * fields it's an array
 * [name1, name2, name3]
 */
Enjin_Core_Persistence = function(namespace, el, fields) {
	this.init(namespace, el, fields);
};
Enjin_Core_Persistence.prototype = {
	namespace: null,
	el: null,

	init: function(namespace, el, fields) {
		this.namespace = namespace;
		this.el = el;

		for (var i=0; i<fields.length; i++) {
			var ftype = 'value';
			var field = fields[i];
			var fvalue;
			var fpname = this.getPersistenceFieldKey(field);

			fvalue = this.getPersistence(field);
			if (typeof fvalue != 'undefined'
				&& fvalue != null) {
				el[field] = fvalue;
			}
		}
	},

	set: function(field, value) {
		if (typeof value != 'undefined')
			this.el[field] = value;

		this.savePersistence(field, this.el[field]);
	},

	getPersistence: function(field) {
		var fpname = this.getPersistenceFieldKey(field);
		return $.jStorage.get(fpname);
	},

	savePersistence: function(field, value) {
		var fpname = this.getPersistenceFieldKey(field);
		$.jStorage.set(fpname, value);
	},

	getPersistenceFieldKey: function(field) {
		return this.namespace+"-"+field;
	}
};

Enjin_Core.ucFirst = function(string) {
	return string.substr(0, 1).toUpperCase()+string.substr(1);
};

Enjin_Core_Storage_Cache = {
	get: function(key, def) {
		var el = $.jStorage.get(key, def);
		var now = (new Date()).getTime();

		if (el && el.xcache) {
			//check if still valid
			if (el.xcache < now) //not valid
				return def;
			else
				return el.data;
		} else
			return el;
	},

	set: function(key, data, until) {
		if (!until)
			until = 3600; //cache for an hour

		$.jStorage.set(key, {
			xcache: (new Date()).getTime() + until*1000,
			data: data
		});
	},

	invalidate: function(key) {
		//for now just delete item
		$.jStorage.deleteKey(key, null);
	}
};

// Requires library/rawdeflate.js
Enjin_Core.gzdeflate = function(str) {
    return Enjin_Core.base64.encode(RawDeflate.deflate(unescape(encodeURIComponent(str))));
};
// Requires library/rawinflate.js
Enjin_Core.gzinflate = function gzinflate(str) {
    return decodeURIComponent(escape(RawDeflate.inflate(Enjin_Core.base64.decode(str))));
};

/*
  jQuery strings - 0.3
  http://code.google.com/p/jquery-utils/

  (c) Maxime Haineault <haineault@gmail.com>
  http://haineault.com

  MIT License (http://www.opensource.org/licenses/mit-license.php)

  Implementation of Python3K advanced string formatting
  http://www.python.org/dev/peps/pep-3101/

  Documentation: http://code.google.com/p/jquery-utils/wiki/StringFormat

*/
(function($){
    var strings = {
        strConversion: {
            // tries to translate any objects type into string gracefully
            __repr: function(i){
                switch(this.__getType(i)) {
                    case 'array':case 'date':case 'number':
                        return i.toString();
                    case 'object':
                        var o = [];
                        for (x=0; x<i.length; i++) { o.push(i+': '+ this.__repr(i[x])); }
                        return o.join(', ');
                    case 'string':
                        return i;
                    default:
                        return i;
                }
            },
            // like typeof but less vague
            __getType: function(i) {
                if (!i || !i.constructor) { return typeof(i); }
                var match = i.constructor.toString().match(/Array|Number|String|Object|Date/);
                return match && match[0].toLowerCase() || typeof(i);
            },
            //+ Jonas Raoni Soares Silva
            //@ http://jsfromhell.com/string/pad [v1.0]
            __pad: function(str, l, s, t){
                var p = s || ' ';
                var o = str;
                if (l - str.length > 0) {
                    o = new Array(Math.ceil(l / p.length)).join(p).substr(0, t = !t ? l : t == 1 ? 0 : Math.ceil(l / 2)) + str + p.substr(0, l - t);
                }
                return o;
            },
            __getInput: function(arg, args) {
                 var key = arg.getKey();
                switch(this.__getType(args)){
                    case 'object': // Thanks to Jonathan Works for the patch
                        var keys = key.split('.');
                        var obj = args;
                        for(var subkey = 0; subkey < keys.length; subkey++){
                            obj = obj[keys[subkey]];
                        }
                        if (typeof(obj) != 'undefined') {
                            if (strings.strConversion.__getType(obj) == 'array') {
                                return arg.getFormat().match(/\.\*/) && obj[1] || obj;
                            }
                            return obj;
                        }
                        else {
                            // TODO: try by numerical index
                        }
                    break;
                    case 'array':
                        key = parseInt(key, 10);
                        if (arg.getFormat().match(/\.\*/) && typeof args[key+1] != 'undefined') { return args[key+1]; }
                        else if (typeof args[key] != 'undefined') { return args[key]; }
                        else { return key; }
                    break;
                }
                return '{'+key+'}';
            },
            __formatToken: function(token, args) {
                var arg   = new Argument(token, args);
                return strings.strConversion[arg.getFormat().slice(-1)](this.__getInput(arg, args), arg);
            },

            // Signed integer decimal.
            d: function(input, arg){
                var o = parseInt(input, 10); // enforce base 10
                var p = arg.getPaddingLength();
                if (p) { return this.__pad(o.toString(), p, arg.getPaddingString(), 0); }
                else   { return o; }
            },
            // Signed integer decimal.
            i: function(input, args){
                return this.d(input, args);
            },
            // Unsigned octal
            o: function(input, arg){
                var o = input.toString(8);
                if (arg.isAlternate()) { o = this.__pad(o, o.length+1, '0', 0); }
                return this.__pad(o, arg.getPaddingLength(), arg.getPaddingString(), 0);
            },
            // Unsigned decimal
            u: function(input, args) {
                return Math.abs(this.d(input, args));
            },
            // Unsigned hexadecimal (lowercase)
            x: function(input, arg){
                var o = parseInt(input, 10).toString(16);
                o = this.__pad(o, arg.getPaddingLength(), arg.getPaddingString(),0);
                return arg.isAlternate() ? '0x'+o : o;
            },
            // Unsigned hexadecimal (uppercase)
            X: function(input, arg){
                return this.x(input, arg).toUpperCase();
            },
            // Floating point exponential format (lowercase)
            e: function(input, arg){
                return parseFloat(input, 10).toExponential(arg.getPrecision());
            },
            // Floating point exponential format (uppercase)
            E: function(input, arg){
                return this.e(input, arg).toUpperCase();
            },
            // Floating point decimal format
            f: function(input, arg){
                return this.__pad(parseFloat(input, 10).toFixed(arg.getPrecision()), arg.getPaddingLength(), arg.getPaddingString(),0);
            },
            // Floating point decimal format (alias)
            F: function(input, args){
                return this.f(input, args);
            },
            // Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise
            g: function(input, arg){
                var o = parseFloat(input, 10);
                return (o.toString().length > 6) ? Math.round(o.toExponential(arg.getPrecision())): o;
            },
            // Floating point format. Uses exponential format if exponent is greater than -4 or less than precision, decimal format otherwise
            G: function(input, args){
                return this.g(input, args);
            },
            // Single character (accepts integer or single character string).
            c: function(input, args) {
                var match = input.match(/\w|\d/);
                return match && match[0] || '';
            },
            // String (converts any JavaScript object to anotated format)
            r: function(input, args) {
                return this.__repr(input);
            },
            // String (converts any JavaScript object using object.toString())
            s: function(input, args) {
                return input === null ? '' : (input.toString && input.toString() || ''+input);
            }
        },

        strformat: function(str, args) {
            var end    = 0;
            var start  = 0;
            var match  = false;
            var buffer = [];
            var token  = '';
            var tmp    = (str||'').split('');
            for(start=0; start < tmp.length; start++) {
                if (tmp[start] == '{' && tmp[start+1] !='{') {
                    end   = str.indexOf('}', start);
                    token = tmp.slice(start+1, end).join('');
                    if (tmp[start-1] != '{' && tmp[end+1] != '}') {
                        var tokenArgs = (typeof arguments[1] != 'object')? arguments2Array(arguments, 2): args || [];
                        buffer.push(strings.strConversion.__formatToken(token, tokenArgs));
                    }
                    else {
                        buffer.push(token);
                    }
                }
                else if (start > end || buffer.length < 1) { buffer.push(tmp[start]); }
            }
            return (buffer.length > 1)? buffer.join(''): buffer[0];
        },

        calc: function(str, args) {
            return eval(format(str, args));
        },

        repeat: function(s, n) {
            return new Array(n+1).join(s);
        },

        UTF8encode: function(s) {
            return unescape(encodeURIComponent(s));
        },

        UTF8decode: function(s) {
            return decodeURIComponent(escape(s));
        },

        tpl: function() {
            var out = '';
            var render = true;
            // Set
            // $.tpl('ui.test', ['<span>', helloWorld ,'</span>']);
            if (arguments.length == 2 && $.isArray(arguments[1])) {
                this[arguments[0]] = arguments[1].join('');
                return $(this[arguments[0]]);
            }
            // $.tpl('ui.test', '<span>hello world</span>');
            if (arguments.length == 2 && $.isString(arguments[1])) {
                this[arguments[0]] = arguments[1];
                return $(this[arguments[0]]);
            }
            // Call
            // $.tpl('ui.test');
            if (arguments.length == 1) {
                return $(this[arguments[0]]);
            }
            // $.tpl('ui.test', false);
            if (arguments.length == 2 && arguments[1] == false) {
                return this[arguments[0]];
            }
            // $.tpl('ui.test', {value:blah});
            if (arguments.length == 2 && $.isObject(arguments[1])) {
                return $($.format(this[arguments[0]], arguments[1]));
            }
            // $.tpl('ui.test', {value:blah}, false);
            if (arguments.length == 3 && $.isObject(arguments[1])) {
                return (arguments[2] == true)
                    ? $.format(this[arguments[0]], arguments[1])
                    : $($.format(this[arguments[0]], arguments[1]));
            }
        }
    };

    var Argument = function(arg, args) {
        this.__arg  = arg;
        this.__args = args;
        this.__max_precision = parseFloat('1.'+ (new Array(32)).join('1'), 10).toString().length-3;
        this.__def_precision = 6;
        this.getString = function(){
            return this.__arg;
        };
        this.getKey = function(){
            return this.__arg.split(':')[0];
        };
        this.getFormat = function(){
            var match = this.getString().split(':');
            return (match && match[1])? match[1]: 's';
        };
        this.getPrecision = function(){
            var match = this.getFormat().match(/\.(\d+|\*)/g);
            if (!match) { return this.__def_precision; }
            else {
                match = match[0].slice(1);
                if (match != '*') { return parseInt(match, 10); }
                else if(strings.strConversion.__getType(this.__args) == 'array') {
                    return this.__args[1] && this.__args[0] || this.__def_precision;
                }
                else if(strings.strConversion.__getType(this.__args) == 'object') {
                    return this.__args[this.getKey()] && this.__args[this.getKey()][0] || this.__def_precision;
                }
                else { return this.__def_precision; }
            }
        };
        this.getPaddingLength = function(){
            var match = false;
            if (this.isAlternate()) {
                match = this.getString().match(/0?#0?(\d+)/);
                if (match && match[1]) { return parseInt(match[1], 10); }
            }
            match = this.getString().match(/(0|\.)(\d+|\*)/g);
            return match && parseInt(match[0].slice(1), 10) || 0;
        };
        this.getPaddingString = function(){
            var o = '';
            if (this.isAlternate()) { o = ' '; }
            // 0 take precedence on alternate format
            if (this.getFormat().match(/#0|0#|^0|\.\d+/)) { o = '0'; }
            return o;
        };
        this.getFlags = function(){
            var match = this.getString().matc(/^(0|\#|\-|\+|\s)+/);
            return match && match[0].split('') || [];
        };
        this.isAlternate = function() {
            return !!this.getFormat().match(/^0?#/);
        };
    };

    var arguments2Array = function(args, shift) {
        var o = [];
        for (l=args.length, x=(shift || 0)-1; x<l;x++) { o.push(args[x]); }
        return o;
    };
    $.extend(strings);
})(jQuery);


/*
 * Count up from a timestamp
 */
(function($){
	$.fn.countup = function (options) {
		options = $.extend({
			start : 1,
			startText: 'Status updated ',
			endText: ' ago',
			onMinute: function(){}
		}, options);

		return this.each(function () {
			var sec = options.start;
			var hour = Math.floor(sec / 3600);
			var min = Math.floor((sec - (hour * 3600))/60);
			sec -= ((hour * 3600) + (min * 60));

			html = [
				'<span>', options.startText,'</span>',
				'<span class="hour"><i>', hour,'</i><span>h</span></span> ',
				'<span class="min"><i>', min,'</i><span>m</span></span> ',
				'<span class="sec"><i>', sec,'</i><span>s</span></span> ',
				'<span>', options.endText,'</span>'
			].join('');

			var clock = $(this);
			$(clock).html(html);

			if(hour > 0) $('.hour').show();
			if(min > 0) $('.min').show();

			setInterval(function () {
				var h = $('.hour i', clock),
					m = $('.min i', clock),
					s = $('.sec i', clock);

				var hx = parseInt(h.html()),
					mx = parseInt(m.html()),
					sx = parseInt(s.html());

				s.html(sx+1);

				if (parseInt(s.html()) > 59) {
					m.html(parseInt(m.html())+1).parent().show();
					s.html(0);

					if (parseInt(m.html()) > 59) {
						h.html(parseInt(h.html())+1);
						m.html(0);
					}

					options.onMinute(clock);
				}
			}, 1000);
		});
	}
})(jQuery);

Enjin_Core.__currentSound = null;
Enjin_Core.playSound = function(sound) {
	var type = 'audio/ogg';

	if (!$.browser.mozilla) {
		type = 'audio/mp3';
		sound = sound.replace(".wav", ".mp3");
	} else {
		sound = sound.replace(".wav", ".ogg");
	}

	if (Enjin_Core.__currentSound != sound) {
		Enjin_Core.__currentSound = sound;
		$('body > #sound_').remove();
		$('body').append('<audio id="sound_" autoplay="autoplay"><source type="'+type+'" src="'+sound+'" /></audio>');
	} else {
		var el = document.getElementById('sound_');
		if (el)
			el.cloneNode(true).play();
	}
}



Enjin_Core.base64 = {
    base64s : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",

    encode: function(decStr){
        if (typeof btoa === 'function') {
             return btoa(decStr);
        }
        var base64s = this.base64s;
        var bits;
        var dual;
        var i = 0;
        var encOut = "";
        while(decStr.length >= i + 3){
            bits = (decStr.charCodeAt(i++) & 0xff) <<16 | (decStr.charCodeAt(i++) & 0xff) <<8 | decStr.charCodeAt(i++) & 0xff;
            encOut += base64s.charAt((bits & 0x00fc0000) >>18) + base64s.charAt((bits & 0x0003f000) >>12) + base64s.charAt((bits & 0x00000fc0) >> 6) + base64s.charAt((bits & 0x0000003f));
        }
        if(decStr.length -i > 0 && decStr.length -i < 3){
            dual = Boolean(decStr.length -i -1);
            bits = ((decStr.charCodeAt(i++) & 0xff) <<16) |    (dual ? (decStr.charCodeAt(i) & 0xff) <<8 : 0);
            encOut += base64s.charAt((bits & 0x00fc0000) >>18) + base64s.charAt((bits & 0x0003f000) >>12) + (dual ? base64s.charAt((bits & 0x00000fc0) >>6) : '=') + '=';
        }
        return(encOut);
    },

    decode: function(encStr){
        if (typeof atob === 'function') {
            return atob(encStr);
        }
        var base64s = this.base64s;
        var bits;
        var decOut = "";
        var i = 0;
        for(; i<encStr.length; i += 4){
            bits = (base64s.indexOf(encStr.charAt(i)) & 0xff) <<18 | (base64s.indexOf(encStr.charAt(i +1)) & 0xff) <<12 | (base64s.indexOf(encStr.charAt(i +2)) & 0xff) << 6 | base64s.indexOf(encStr.charAt(i +3)) & 0xff;
            decOut += String.fromCharCode((bits & 0xff0000) >>16, (bits & 0xff00) >>8, bits & 0xff);
        }
        if(encStr.charCodeAt(i -2) == 61){
            return(decOut.substring(0, decOut.length -2));
        }
        else if(encStr.charCodeAt(i -1) == 61){
            return(decOut.substring(0, decOut.length -1));
        }
        else {
            return(decOut);
        }
    }

};

Enjin_Core.month_names = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
Enjin_Core.formatDate = function(unix_timestamp) {
	var dt = new Date(unix_timestamp*1000);
	return Enjin_Core.month_names[dt.getMonth()] + ' ' + dt.getDate() + ', ' + dt.getFullYear();
};

Enjin_Core.isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/**
 * Use this to do the equivalent of  a document.location.href = "xx"; to redirect the page to a new
 * url. Converts the URL into a form POST opertion to pass over the CSRF token
 */
Enjin_Core.redirect = function( url, params, target )
{
	target = ( typeof target !== 'undefined' ? 'target="'+target+'"' : "" );
	$('body').append('<form name="post-redirect" '+target+' method="POST" action="'+url+'"></form>');
	if ( typeof params === 'object' ) 
	{ 
		for ( var f in params ) { $('body form[name=post-redirect]').append('<input type="hidden" name="'+f+'" value="'+params[f]+'">'); }		
	}	

	$('body form[name=post-redirect]').submit();
};

/**
 * Reload the page by navigating via POST with the token, use this in place of document.location.reload()
 * on pages that you arrived to via a csrf POST action to prevent the browser from prompting the user to
 * resubmit a form
 */
Enjin_Core.reload = function()
{
	Enjin_Core.redirect( document.location.href );
};

/**
 *
 */
Enjin_Core.postToWindow = function( url, width, height, params )
{
    Enjin_Core.popupWindow( '', width, height );
	Enjin_Core.redirect( url, params, 'cms_popup' );
};


Enjin_Core.ping = function() {
	setInterval( function() { $.get('/ajax.php?s=ping'); }, 1000*60*60 );			// ping the ajax server once an hour to keep csrf token alive
}

/* minecraft online */
$(document).ready(function(){
    $.fn.hoverMinecraftOnlineIcon();
});

$.fn.hoverMinecraftOnlineIcon = function(){
	// older versions of jQuery
	if('live' in $) {
		$(document).on('mouseover', '.icon-minecraft-online', function(){
			var tooltip = $(this).prev();
			var left = $(this).position().left - parseInt((tooltip.width() / 2)) + 4;
			tooltip.css('left', left+'px').css('visibility', 'visible');
		}).on('mouseout', '.icon-minecraft-online', function(){
			$(this).prev().css('visibility', 'hidden');
		});
	}
	// jQuery 1.9, live() is deprecated so use on()
	else if('on' in $) {
		$('body').on('mouseover', '.icon-minecraft-online', function() {
			var tooltip = $(this).prev();
			var left = $(this).position().left - parseInt((tooltip.width() / 2)) + 4;
			tooltip.css('left', left+'px').css('visibility', 'visible');
		}).on('mouseout', '.icon-minecraft-online', function() {
			$(this).prev().css('visibility', 'hidden');
		});
	}
};

/**
 * Convert forms and 'data-as-post' anchors in all tags inside the target element to use csrf
 * This is done automatically on document load, but you can use this on a case-by-case basis
 * to apply the changes to any HTML fragments you load/generate after the document.ready() event
 */
$.fn.applyCSRF = function()
{
/*	$(this).find('form').prepend('<input type="hidden" name="csrf_token" value="'+csrf_token+'"/>');
	$(this).convertPostURLs();
*/
};

$.fn.convertPostURLs = function()
{
/*	$(this).find('a[data-as-post]').click( function() { $('body').append('<form name="a-navigate" method="POST" action="'+$(this).attr('href')+'"><input type="hidden" value="'+csrf_token+'" name="csrf_token"/></form>'); $('form[name=a-navigate]').submit(); return false; } );
	$(this).find('a[data-as-post]').removeAttr('data-as-post');
*/
}

/**
 * Extend the ajax POST method to include the ajax token automatically into the
 * post data, as well as force any forms on the page to include the token in their forms
 */
$(document).ready( function() 
{ 
	$( document ).ajaxSend(function(elm, xhr, s)
								{
									// only include the tokens if the request is going back to the same domain,
									// if it is going to a domain outside enjin then its fine to skip tokens, and if
									// it is going to another website on enjin its ok to skip token as this will have the
									// same effect of the request being denied as the token is missing
									var href = document.location.href.split('//').pop().split('/').shift();
									var location = s.url.split('//').pop().split('/').shift();
									if ( location == "" || location == href ) {
									  xhr.setRequestHeader('X-REQUEST-SOURCE', 'ajax' );
								   }
								}
					);	
					
	$( document ).ajaxError( function(event, request, settings)	{ if ( request.status > 302 ) { /*alert(request.responseText);*/ } } );	
});


// dnsme update flags
$(document).ready(function(){
    var dns_flag_type = $('body').attr('data-dnsme-update-flag');
    if (dns_flag_type == 'owner' || dns_flag_type == 'admin'){

        // set the message
        var msg = "Enjin has launched a brand new, full featured DNS panel which provides major security improvements to your website. "+
            "We've detected you are currently using a third party DNS service. "+
            "By setting your domain to use Enjin DNS, you will experience faster worldwide response times from our Anycast DNS Network, "+
            "security benefits like protection from DDoS attacks, and a flexible DNS control panel integrated with your website.";

        // set the title
        var title = '';
        if (dns_flag_type == 'owner'){
            title = 'Important steps are required for your website';
        } else { // admin
            title = 'Important steps are required by the owner of this website';
        }

        // set the url
        var url = '/ajax.php?s=flags&cmd=remove-flag&flag=dnsme_update_'+dns_flag_type;

        // show the popup
        Enjin_Core.showMessagePopup({
            message: title + '<br><br>' + msg + '<br><br>'+
                '<input type="button" class="dnsme-yes" value="Show me how"> &nbsp;' +
                '<input type="button" class="dnsme-no" value="I will do this later">' +
                '<br>'
        });

        // fix the width and position/
        $('.element_popup').css({
            width: 600,
            left: $('body').width() / 2 - 300
        });

        // fix the buttons
        $('.element_popup').find('.message').siblings().remove();

        // bind events on buttons
        $('body').bind('click', function(event){
            var target = $(event.target);
            if (target.is('.dnsme-no')){

                // no
                Enjin_Core.cancelPopup();
                $.get(url);

            } else if (target.is('.dnsme-yes')){

                // yes
                $.get(url);
                window.open('https://web.archive.org/web/20171114030930/https://support.enjin.com/hc/en-us/categories/200005349');
                Enjin_Core.cancelPopup();
            }
        });
    }

	/*
	$(document).mousemove(function(){
		var ww = $(window).width();
		var wh = $(window).height();

		var rx = event.pageX / ww * 10;
		var ry = event.pageY / wh * 10;

		$('div').css('-webkit-transform', 'rotateZ(' + rx + 'deg)');
	});
	*/
});



Enjin_Core.wp_admin_version = false;
if (location.href.indexOf('/admin') != -1
	|| location.href.indexOf('ajax.php?s=punish') != -1
	|| location.href.indexOf('ajax.php?s=warn') != -1) {
	Enjin_Core.wp_admin_version = true;
}

$(function() {
	if (location.href.indexOf('ajax.php?s=punish') != -1) {
		Enjin_Core.punishments.onPopupLoad();
	}
	if (location.href.indexOf('ajax.php?s=warn') != -1) {
		Enjin_Core.warnings.onPopupLoad();
	}
});

Enjin_Core.getAddWidthHeight = function() {
	var isWindows = navigator.platform.toUpperCase().indexOf('WIN')!==-1;
	var add_w = 3;
    var add_h = 55;
	if (isWindows) {
		if ($.browser.msie) {
			add_w = 10;
    		add_h = 70;
		} else if ($.browser.webkit) {
			add_w = 20;
    		add_h = 73;
		} else if ($.browser.mozilla) {
			add_w = 12;
    		add_h = 69;
		}
	}
	return {w: add_w, h: add_h};
}

/**
 *  Issue Warning dialog
 */
Enjin_Core.warnings = {
	ajaxLoader: '',
	issuedWarningInterval: 0,
	new_punishment_will_be_issued: false,
    closeDialog: function() {
    	if (Enjin_Core.wp_admin_version) {
    		window.close();
    	} else {
    		$('.element_popup_window.issue-warning-popup').remove();
        	$('.element_popup_window.issue-warning-success-popup').remove();
        	$('.s_popup-canvas-separator').hide();
    	}
    },
    showDialog: function(user_id, issued_location_id, issued_location_text) {
    	var additional_params = '';
		if (typeof issued_location_id != 'undefined' && null != issued_location_id) {
			if (typeof issued_location_id == 'object') {
				issued_location_id = JSON.stringify(issued_location_id);
			}
			additional_params += '&issued_location_id=' + encodeURIComponent(issued_location_id);
		}
		if (typeof issued_location_text != 'undefined' && null != issued_location_text) {
			additional_params += '&issued_location_text=' + issued_location_text;
		}

		if (Enjin_Core.wp_admin_version) {
			Enjin_Core.popupWindow('/ajax.php?s=warn&action=get-dialog-html&user_id=' + user_id + additional_params, 633, 694, 0);
		} else {
			new Enjin.UI.Window({
				title:'',
				button_text:'',
				cancel_link: false,
				cancel_button: '',
				closable: false,
				cls:'issue-warning-popup',
				content: 'content',
				footer: '',
				callback: function() {},
				cancel_callback: function() {}
			});
			var that = this;
			var popup = $('.issue-warning-popup .inner.window-frame');
			popup.show();
			popup.html('<img style="margin: 5px 10px;" src="' + Enjin_Core.warnings.ajaxLoader + '" />');

			$.get('/ajax.php?s=warn&ajax=1&action=get-dialog-html&user_id=' + user_id + additional_params, function(response) {
				popup.html(response);
				that.onPopupLoad();
			});
		}

    },
    onPopupLoad: function() {
    	// fix popup position
		// left:
		var issue_warning_popup = $('.issue-warning-popup');
		var warn_user_popup = issue_warning_popup.find('#warn-user-popup');
		var body = $('body');
		issue_warning_popup.css('left', body.width() / 2 - warn_user_popup.width() / 2);

		// top:
		var selector = ($.browser.mozilla) ? 'body, html': 'body';
			issue_warning_popup.css('top', $(selector)[0].scrollTop + 60);

   		// add listeners
    	var warningMessage = $('#warn-user-popup #warning_message');
        warningMessage.markItUp(MarkItUp.BBCode, {
            smileys: $.parseJSON(warningMessage.attr('data-smileys')),
            buttons: MarkItUp.BBCode.buttons.replace("|", warningMessage.attr('data-games') + " | ")
        });

        var punishmentMessage = $('#warn-user-popup #punishment_message');
        punishmentMessage.markItUp(MarkItUp.BBCode, {
            smileys: $.parseJSON(punishmentMessage.attr('data-smileys')),
            buttons: MarkItUp.BBCode.buttons.replace("|", punishmentMessage.attr('data-games') + " | ")
        });

        var input_issued_points = $('input[name=issued_points]');
        input_issued_points.keyup(function() {
            input_issued_points.val(input_issued_points.val());
            input_issued_points.trigger('change');
        });

        var warning_select = $('select[name=warning_id]');
        warning_select.change(function() {
            var warning_id = $(this).val();
            var warning = window.warnings_by_id[warning_id];
            $('input[name=issued_points]').val(warning.points);
            if ('0' == warning.allow_custom_points) {
				$('input[name=issued_points]').attr('readonly', 'readonly');
            } else {
            	$('input[name=issued_points]').removeAttr('readonly');
            }
            $('span#points_expiration').text(warning._expiration_text);
            $('input#warning_subject').val(warning.title);
            $('textarea#warning_message').val(warning.message);
            if ('0' == warning.allow_message_editing) {
            	$('textarea#warning_message').attr('readonly', 'readonly');
            } else {
            	$('textarea#warning_message').removeAttr('readonly');
            }
        });
        warning_select.trigger('change');

        if (window.current_punishment) {
            $('#current_punishment_info').show();
            $('#current_punishment_title').text(window.current_punishment.punishment_json.title);
        } else {
            $('#current_punishment_info').hide();
        }

        var send_private_message = $('#send_private_message');
        send_private_message.change(function() {
            var punishment_message_el = $('#punishment-message-element');
            if (send_private_message.is(':checked')) {
                punishment_message_el.show();
            } else {
                punishment_message_el.hide();
            }
        });

        var points_input = $('input[name=issued_points]');
        points_input.keyup(function() {
            var waring_points = points_input.val();
            var warning_points_total = parseInt(window.current_warning_points, 10) + parseInt(waring_points, 10);

            var new_punishment = Enjin_Core.getPunishmentToIssue(window.punishments, window.current_punishment, warning_points_total);
            if (null != new_punishment && window.issue_punishment_possible) {
				Enjin_Core.warnings.new_punishment_will_be_issued = true;
                $('#no_new_punishment').hide();
                $('#new_punishment').show();
                $('#new_punishment_title').text(new_punishment.title);
                $('#button_issue_warning').val('Issue Warning & Punishment');
                $('#punishment_message_checkbox').show();

                if ($('#send_private_message').is(':checked')) {
                    $('.punishment-message-element').show();
                } else {
                    $('.punishment-message-element').hide();
                }

				var p_subject = $('#punishment-message-element [name="punishment_subject"]');
				var p_message = $('#punishment-message-element #punishment_message');
				p_subject.val(new_punishment.title);
				p_message.text(new_punishment.message);

				if ('1' == new_punishment.allow_editing_message) {
					p_subject.removeAttr('readonly');
					p_message.removeAttr('readonly');
				} else {
					p_subject.attr('readonly', 'readonly');
					p_message.attr('readonly', 'readonly');
				}

				if (! $('#send_private_message').is(':checked')) {
					$('#send_private_message').trigger('click');
				}
            } else {
            	Enjin_Core.warnings.new_punishment_will_be_issued = false;
                $('#new_punishment').hide();
                $('#no_new_punishment').show();
                $('#button_issue_warning').val('Issue Warning');
                $('.punishment-message-element').hide();
                $('#send_private_message').removeAttr('checked').trigger('change');
                $('#punishment_message_checkbox').hide().removeAttr('checked');
                if ($('#send_private_message').is(':checked')) {
					$('#send_private_message').trigger('click');
				}
            }
        });
        points_input.trigger('keyup');

        var inputs = $('#warn-user-popup').find('input,textarea,select');
        inputs.change(Enjin_Core.warnings.resize);
        inputs.keyup(Enjin_Core.warnings.resize);
        setTimeout(Enjin_Core.warnings.resize, 1000);

        $('select.select-warning').on('change click', function() {
			points_input.trigger('keyup');
		});

		jQuery.validator.setDefaults({
		    errorPlacement: function(error, element) {
		    	if (element.hasClass('penalty-points')) {
		    		error.insertAfter(element.parent().next());
		    	} else {
		    		error.insertAfter(element);
		    	}
		    }
		});

		if (Enjin_Core.wp_admin_version) {
			$('body').css('overflow', 'hidden');
		}

    },
    resize: function() {
    	if (! Enjin_Core.wp_admin_version) {
    		return;
    	}

    	var add = Enjin_Core.getAddWidthHeight();
        var warn_user_popup = $('#warn-user-popup');
        window.resizeTo(warn_user_popup.width() + add['w'], warn_user_popup.height() + add['h']);
    },
    issueWarning: function() {
        var warn_user_form = $('#warn_user_form');
        if (! warn_user_form.valid()) {
        	Enjin_Core.warnings.resize();
            return false;
        }
        Enjin_Core.warnings.resize();

        var warn_user_data = warn_user_form.serialize();
        $('#button_issue_warning').attr('disabled', 'disabled').css('color', '#777');

        $.post('/ajax.php?s=warn&action=issue-warning', warn_user_data, function(response) {
            $('#button_issue_warning').removeAttr('disabled').css('color', '');
            if (response.success == true)  {
            	var what_issued;
            	if (Enjin_Core.warnings.new_punishment_will_be_issued) {
            		what_issued = 'Warning and punishment';
            	} else {
            		what_issued = 'Warning';
            	}

				new Enjin.UI.Window({
					cancel_link: false,
					closable: false,
					cls:'issue-warning-success-popup',
					content: what_issued + ' successfully issued to user.',
					footer: '',
					callback: function() {
						Enjin_Core.warnings.closeDialog();
					},
					cancel_callback: function() {}
				});
            } else {
            	if (typeof response.error != 'undefined') {
            		alert(response.error);
            	} else {
                	alert('Error issuing warning');
                }
            }
	    }, 'json');
    },
    positionAcknowledgePopup: function(issued_warning) {
    	var w = $(window);
		var selector = ($.browser.mozilla) ? 'body, html': 'body';
		var scrollTop = $(selector)[0].scrollTop;
		var warning_acknowledge_popup = $('#warning-acknowledge-popup');
		warning_acknowledge_popup.css({
			top: (w.height() / 2) - (warning_acknowledge_popup.height() / 2) + scrollTop,
			left: (w.width() / 2) - (warning_acknowledge_popup.width() / 2)
		});
    },
    showWarningAcknowledge: function(issued_warning) {
    	var body_wrap = $('.body-wrap-2');
		var popup_canvas_separator = $('.s_popup-canvas-separator');
		popup_canvas_separator.width(body_wrap.width()).height(body_wrap.height());
		popup_canvas_separator.show();

		var warning_acknowledge_popup = $('#warning-acknowledge-popup');
		warning_acknowledge_popup.find('input.issued_warning_rid').val(issued_warning.rid);
		warning_acknowledge_popup.find('input.warning_popup_confirmation').val(issued_warning.warning_json.warning_popup_confirmation);
		warning_acknowledge_popup.find('.warning-title').text(issued_warning.warning_json.title);
        warning_acknowledge_popup.find('.warning-penalty').text(issued_warning.issued_points + ' penalty point' + (issued_warning.issued_points > 1 ? 's': '') + '.');
        warning_acknowledge_popup.find('.warning-description').html(issued_warning.warning_message);
        warning_acknowledge_popup.find('.moderator-displayname').attr('href', '/profile/' + issued_warning.moderator_user_id);
        warning_acknowledge_popup.find('.moderator-displayname').text(issued_warning.moderator_displayname);

        warning_acknowledge_popup.show();
		Enjin_Core.warnings.positionAcknowledgePopup();

		var warning_acknowledge_button = $('#warning-acknowledge-button');
		if (0 == issued_warning.warning_json.warning_popup_confirmation) {
			Enjin_Core.warnings._confirmWarning(issued_warning.rid);
			warning_acknowledge_button.find('.acknowledge').hide();
			warning_acknowledge_button.find('.close').show();
		} else {
			warning_acknowledge_button.find('.acknowledge').show();
			warning_acknowledge_button.find('.close').hide();
		}
    },
    _confirmWarning: function(issued_warning_rid) {
    	$.post('/ajax.php?s=warn&action=acknowledge-warning', {
			issued_warning_rid: issued_warning_rid
		}, function() {});
    },
    closeWarningAcknowledge: function() {
    	var popup_canvas_separator = $('.s_popup-canvas-separator');
    	var warning_acknowledge_popup = $('#warning-acknowledge-popup');

    	popup_canvas_separator.hide();
    	warning_acknowledge_popup.hide();

    	var issued_warning_rid = warning_acknowledge_popup.find('input.issued_warning_rid').val();
    	var warning_popup_confirmation = warning_acknowledge_popup.find('input.warning_popup_confirmation').val();
    	if (0 != warning_popup_confirmation) {
    		Enjin_Core.warnings._confirmWarning(issued_warning_rid);
    	}

		// remove element
		window.issued_warnings.splice(0, 1);
    },
    checkWarningAcknowledges: function() {
    	if (typeof window.issued_warnings == 'undefined') {
    		return;
    	}
    	var length = window.issued_warnings.length;
    	if (length > 0) {
			Enjin_Core.warnings.showWarningAcknowledge(window.issued_warnings[0]);
			Enjin_Core.warnings.issuedWarningInterval = setInterval(function() {
				if (window.issued_warnings.length < length) {
					clearInterval(Enjin_Core.warnings.issuedWarningInterval);
					Enjin_Core.warnings.checkWarningAcknowledges();
				}
			}, 300);
		}
    }
};
$(function() {
	Enjin_Core.warnings.checkWarningAcknowledges();
});


/**
 *  Issue Punishment dialog
 */
Enjin_Core.punishments = {
	ajaxLoader: '',
    closeDialog: function() {
    	if (Enjin_Core.wp_admin_version) {
    		window.close();
    	} else {
    		$('.element_popup_window.issue-punishment-popup').remove();
    		$('.element_popup_window.issue-punishment-success-popup').remove();
        	$('.s_popup-canvas-separator').hide();
    	}
    },
    showDialog: function(user_id) {
    	if (Enjin_Core.wp_admin_version) {
			Enjin_Core.popupWindow('/ajax.php?s=punish&action=get-dialog-html&user_id=' + user_id, 633, 694, 0);
		} else {
			new Enjin.UI.Window({
				title:'',
				button_text:'',
				cancel_link: false,
				cancel_button: '',
				closable: false,
				cls:'issue-punishment-popup',
				content: 'content',
				footer: '',
				callback: function() {},
				cancel_callback: function() {}
			});
			var that = this;
			var popup = $('.issue-punishment-popup .inner.window-frame');
			popup.html('<img style="margin: 5px 10px;" src="' + Enjin_Core.punishments.ajaxLoader + '" />');
			popup.show();
			$.get('/ajax.php?s=punish&ajax=1&action=get-dialog-html&user_id=' + user_id, function(response) {
				popup.html(response);
				that.onPopupLoad();
			});
		}
    },
    onPopupLoad: function() {
    	// fix popup position
		// left:
		var issue_punishment_popup = $('.issue-punishment-popup');
		var punish_user_popup = issue_punishment_popup.find('#punish-user-popup');
		var body = $('body');
		issue_punishment_popup.css('left', body.width() / 2 - punish_user_popup.width() / 2);

		// top:
		var selector = ($.browser.mozilla) ? 'body, html': 'body';
			issue_punishment_popup.css('top', $(selector)[0].scrollTop + 60);

   		// handle elements and add listeners
   		var punishmentMessage = $('#punish-user-popup #punishment_message');
        punishmentMessage.markItUp(MarkItUp.BBCode, {
            smileys: $.parseJSON(punishmentMessage.attr('data-smileys')),
            buttons: MarkItUp.BBCode.buttons.replace("|", punishmentMessage.attr('data-games') + " | ")
        });

	    var punish_send_private_message = $('#punish-send-private-message');
	    if (punish_send_private_message.length > 0) {
	        punish_send_private_message.click(function() {
	            var punishment_message_el = $('#punishment-message-element');
	            var checkbox = $(this);
	            if (checkbox.is(':checked')) {
	                punishment_message_el.show();
	            } else {
	                punishment_message_el.hide();
	            }
	            Enjin_Core.punishments.resize();
	        });
	        Enjin_Core.punishments.resize();
	        setTimeout(Enjin_Core.punishments.resize, 1000);
	    }

	    var select_punishment = $('#punish_user_form select.select-punishment');
	    select_punishment.change(function() {
	    	var punishment_id = $(this).val();
	    	var punishment = window.punishments_by_id[punishment_id];
			$('#punish_user_form [name="punishment_subject"]').val(punishment.title);
			$('#punish_user_form #punishment_message').text(punishment.message);
			if ('0' == punishment.allow_editing_message) {
            	$('textarea#punishment_message').attr('readonly', 'readonly');
            } else {
            	$('textarea#punishment_message').removeAttr('readonly');
            }
	    });
	    select_punishment.trigger('change');

	    if (Enjin_Core.wp_admin_version) {
			$('body').css('overflow', 'hidden');
		}
    },
    resize: function() {
    	if (! Enjin_Core.wp_admin_version) {
    		return;
    	}

    	var add = Enjin_Core.getAddWidthHeight();
        var punish_user_popup = $('#punish-user-popup');
        window.resizeTo(punish_user_popup.width() + add['w'], punish_user_popup.height() + add['h']);
    },
    issuePunishment: function() {
        var button_issue_punishment = $('#button_issue_punishment')
        button_issue_punishment.attr('disabled', 'disabled').css('color', '#777');

        var punish_user_form = $('#punish_user_form');
        var punish_user_data = punish_user_form.serialize();
        $.post('/ajax.php?s=punish&action=issue-punishment', punish_user_data, function(response) {
        	button_issue_punishment.removeAttr('disabled').css('color', '');
        	if (response.error) {
        		alert(response.error);
        	} else {
        		new Enjin.UI.Window({
					cancel_link: false,
					closable: false,
					cls:'issue-punishment-success-popup',
					content: 'Punishment successfully issued to user.',
					footer: '',
					callback: function() {
						Enjin_Core.punishments.closeDialog();
					},
					cancel_callback: function() {}
				});
        	}
        }, 'json');
    },
    showGuidePopup: function() {
        var punish_guide_popup = $('#punish-guide-popup');
        punish_guide_popup.show();
        punish_guide_popup.find('.content').height($('#punish-user-popup').height() - 90);
    },
    hideGuidePopup: function() {
        $('#punish-guide-popup').hide();
    }
}

/**
*   punishments - array of punishments
*   current_punishment - current user's punishment
*   warning_points - amount of points we plan to add to the user
*/
Enjin_Core.getPunishmentToIssue = function(punishments, current_punishment, warning_points) {
    // check if new warning points will initiate issue of new punishment
    var points_to_autoexecute = 0;
    if (typeof current_punishment != 'undefined'
        && false != current_punishment
    ) {
        points_to_autoexecute = current_punishment.punishment_json.points_to_autoexecute;
    }
    var punishment_to_issue = null;
    for (var i = 0; i < punishments.length; i++) {
        if (
            punishments[i].points_to_autoexecute > points_to_autoexecute
            && warning_points >= punishments[i].points_to_autoexecute
        ) {
            var punishment = punishments[i];
            punishment_to_issue = punishment;
            break;
        }
    }
    return punishment_to_issue;
}



Enjin_Core.navCollapse = (function() {
    var _this = this;

    _this.plus_html = '<span class="plus"></span>';
    _this.minus_html = '<span class="minus"></span>';

    _this.lis = {
        // <value in id attribute> : <element>
    };

    _this.click_handler_set = false;

    this.init = function(nav_selector) {
        _this.lis = [];

        $(nav_selector + ' li.collapsible').each(function() {
            var li = $(this);

            var li_id = li.attr('id');
            if (typeof li_id == 'undefined') {
                li.prepend(_this.plus_html);
                li.attr('id', 'id_' + Math.round(Math.random() * 100000));
                li_id = li.attr('id');
            } else {
                _this.lis[li_id] = li;
                return;
            }
            _this.lis[li_id] = li;
            _this.hide(li_id);

            var game_id = li.attr('data-game-id');
            if (typeof game_id != 'undefined' && '4923' == game_id) { // minecraft
                setTimeout(function() {
                    li.click();
                    li.find('.plus,.minus').remove();
                    li.removeClass('collapsible');
                }, 0);
            } else {
                if (li.hasClass('expand-by-default')) {
                    setTimeout(function() {
                        // I used timeout here to let code
                        // below to add "click" handler to <li> before I call "click()" method
                        li.click();
                    }, 0);
                }
            }

        });
        if (! _this.click_handler_set) {
            $('.left-column-nav').on('click', 'li.collapsible', function() {
                var li = $(this);
                var span = li.find('span:first');
                var li_id = li.attr('id');

                if (span.hasClass('plus')) {
                    _this.expand(li_id);
                } else {
                    _this.hide(li_id);
                }
                span.toggleClass('minus plus');
            });
            _this.click_handler_set = true;
        }
    }

    this.hide = function(id) {
        _this.lis[id].nextUntil('li.nav-header').each(function() {
            $(this).hide();
        });
        _this.lis[id].removeClass('state-expand').addClass('state-hide');
    }

    this.expand = function(id) {
        _this.lis[id].nextUntil('li.nav-header').each(function() {
            $(this).show();
        });
        _this.lis[id].removeClass('state-hide').addClass('state-expand');
    }

    this.hideAll = function() {
        for (var id in _this.lis) {
            _this.hide(id);
        }
    }

    this.expandAll = function() {
        for (var id in _this.lis) {
            _this.expand(id);
        }
    }
    return this;
})();


// award notifications
$(document).ready(function(){
	var awards_main = $('body > .awards_notifications');
	if (awards_main.length > 0) {
		new Enjin.UI.Window({
			title: awards_main.attr('data-title'),
			cls: 'awards_notifications',
			content: awards_main.html()
		});

		// pagination
		$(document).on('click', '.element_popup.awards_notifications .prev', function(){
			var main = $(this).parents('.awards');
			var current = main.find('.award_block:visible').addClass('hide');
			if (current.prev().length > 0) {
				current.prev().removeClass('hide');
			} else {
				current.nextAll(':last').removeClass('hide');
			}
		});
		$(document).on('click', '.element_popup.awards_notifications .next', function(){
			var main = $(this).parents('.awards');
			var current = main.find('.award_block:visible').addClass('hide');
			if (current.next().length > 0) {
				current.next().removeClass('hide');
			} else {
				current.prevAll(':last').removeClass('hide');
			}
		});
	}
});

// containers collapse
var containers_collapse_key;
Enjin_Core.handleContainersCollapse = function() {
	if (typeof $('body').on != 'undefined') {
		$('body').on('click', '.section .container_header .collapse-icon', function() {
			var icon = $(this);
			var container_body = icon.parents('.container_header').next();
			if (icon.hasClass('icon-caret-right')) {
				container_body.find('.container_left_top,.container_right_top,.container_left_bottom,.container_right_bottom').show();
				// change icon image
				icon.removeClass('icon-caret-right').addClass('icon-caret-down');
				// change content
				container_body.find('.container-minimized').hide();
				var msgs = container_body.find('.container-maximized').show();
                msgs.find('.content-messages-container').css('width', 'auto');
                msgs.find('.content-messages-scrollbar').scrollTop(999999);
			} else {
				container_body.find('.container_left_top,.container_right_top,.container_left_bottom,.container_right_bottom').hide();
				// change icon image
				icon.removeClass('icon-caret-down').addClass('icon-caret-right');
				// change content
				container_body.find('.container-minimized').show();
				container_body.find('.container-maximized').hide();
			}
			Enjin_Core.storeContainersCollapse();
		});

		$('body').on('click', '.container-minimized a', function() {
			$(this).parents('.container_body').prev().find('.collapse-icon').click();
		});
	}
}

Enjin_Core.storeContainersCollapse = function() {
	var collapse_modified = {};
	$('div[data-container-id]').each(function() {
		var container = $(this);

		var container_id = container.attr('data-container-id');
		var default_collapsed = parseInt(container.attr('data-start-collapsed'), 10);
		var collapsed = container.find('.container-maximized').is(':hidden') ? 1: 0;

		if (collapsed != default_collapsed) {
			collapse_modified[container_id] = !!collapsed;
		}
	});
	$.jStorage.set(containers_collapse_key, collapse_modified);
}

Enjin_Core.loadContainersCollapse = function() {
	var collapse_modified = $.jStorage.get(containers_collapse_key, {});
	for (var container_id in collapse_modified) {
		var container = $('div.container[data-container-id=' + container_id + ']');

		var nowCollapsed = container.find('.container-maximized').is(':hidden');
		var setCollapsed = collapse_modified[container_id];

		if (nowCollapsed != setCollapsed) {
			container.find('.collapse-icon').click();
		}
	}
}

$(document).ready(function(){
	$(function() {
		if (typeof $.jStorage != 'undefined') {
			containers_collapse_key = 'collapse_modified_' + Enjin_Core.site_id;
			Enjin_Core.handleContainersCollapse();
			Enjin_Core.loadContainersCollapse();
		}
	});

	$(function() {
		Enjin_Core.showBanAcknowledge();
	});
});

Enjin_Core.showBanAcknowledge = function() {
	var body_wrap = $('.body-wrap-2');
	var popup_canvas_separator = $('.s_popup-canvas-separator');
	if (body_wrap.length == 0 || popup_canvas_separator.length == 0) {
		return;
	}

	popup_canvas_separator.width(body_wrap.width()).height(body_wrap.height());
	popup_canvas_separator.show();

	var popup = $('#ban-acknowledge-popup');
	if (popup.length > 0) {
		popup.show();

	    // position popup
		var w = $(window);
		var selector = ($.browser.mozilla) ? 'body, html': 'body';
		var scrollTop = $(selector)[0].scrollTop;
		var warning_acknowledge_popup = $('#ban-acknowledge-popup');

		warning_acknowledge_popup.css({
			top: (w.height() / 2) - (warning_acknowledge_popup.height() / 2) + scrollTop,
			left: (w.width() / 2) - (warning_acknowledge_popup.width() / 2)
		});
	}
};


// build the mentions logic
$.fn.userMentions = function(){
	var input = $(this);
	var xhr;
	input.mentionsInput({
		minChars: 1,
		elastic: false,
		onDataRequest: function (mode, query, callback) {
			// check if we have already reached 10 mentions
			var mentions = input.prev().find('strong').length;
			if (mentions >= 30) {
				alert('Max limit reached');
				return;
			}
			
			// call the ajax for the users list
			if (xhr) {
				xhr.abort();
			}
			xhr = $.getJSON('/ajax.php?s=user&cmd=mentionable&query=' + query, function(responseData) {
				responseData = _.filter(responseData, function(item) {
					return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
				});
				callback.call(this, responseData);
			});
		},
		templates: {
			mentionItemSyntax: _.template('[user]<%= id %>[/user]')
		}
	});
};


// twitch.tv authorization messages
$(function() {
    if (location.href.indexOf('cmd=twitch_auth&success=true') != -1) {
        Enjin_Core.showWindowPopup({
            title: 'Success!',
            button_text: 'Ok',
            content: 'You have successfully connected your Twitch account. <br> Specific Twitch TV related features are now unlocked.',
            form: false,
            validate: false,
            cancel_link: false,
            closable:true,
            callback: function() {
                Enjin_Core.cancelPopup();
            }
        });
    }else if (location.href.indexOf('cmd=twitch_auth&success=false') != -1) {
        var reason_description;
        if (Enjin_Core.getUrlParam('reason') != '') {
            var reason = Enjin_Core.getUrlParam('reason');
            var errno = 0;
            errno = Enjin_Core.getUrlParam('errno');

            if (reason == 'missing-data-fail') {
                reason_description = "The authorization failed because we were missing data. Please try <br> again or contact support if this continues.";
            } else if (reason == 'add-token-fail') {
                reason_description = "The authorization failed (errno: "+errno+") because we could not properly add your <br> token. Please try again or contact support if this continues.";
            } else if (reason == 'get-token-fail') {
                reason_description = "The authorization failed because we could not collect your token. <br> Please try again or contact support if this continues.";
            } else if (reason == 'bad-auth-secure-token') {
            	reason_description = "The authentication failed due to an invalid security token.<br>" +
					"Please try again or, if the issue persists, <a href='https://web.archive.org/web/20171114030930/https://www.enjin.com/support'>contact support</a>.";
			}
        }

        Enjin_Core.showWindowPopup({
            title: 'Authorization Failed',
            button_text: 'Ok',
            content: reason_description,
            form: false,
            validate: false,
            cancel_link: false,
            closable:true,
            callback: function() {
                Enjin_Core.cancelPopup();
            }
        });
    }
});


// get url parameter values
Enjin_Core.getUrlParam = function(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
        return null;
    else
        return results[1];
}


// set url parameter
Enjin_Core.setUrlParam = function(param, value) {
    var currentURL = window.location.href+'&';
    var change = new RegExp('('+param+')=(.*)&', 'g');
    var newURL = currentURL.replace(change, '$1='+value+'&');

    if (Enjin_Core.getUrlParam(param) !== null){
        try {
            window.history.replaceState('', '', newURL.slice(0, - 1) );
        } catch (e) {
            console.log(e);
        }
    } else {
        var currURL = window.location.href;
        if (currURL.indexOf("?") !== -1){
            window.history.replaceState('', '', currentURL.slice(0, - 1) + '&' + param + '=' + value);
        } else {
            window.history.replaceState('', '', currentURL.slice(0, - 1) + '?' + param + '=' + value);
        }
    }
}


Enjin_Core.showTwitchAuthPopup = function(auth_url) {
    var content = '' +
        '<div class="twitch-enjin-img"></div>' +
        '<div class="popup-title">Link your Twitch account with Enjin and get promoted!</div>' +
        '<ul>' +
            '<li>Get listed in Enjin’s global ranking system</li>' +
            '<li>Automatically alert your Enjin friends when you go LIVE</li>' +
            '<li>Promote your channel among millions of Enjin users</li>' +
            '<li>Enable advanced Twitch features on your Enjin profile</li>' +
        '</ul>';
    ;

    var params = {
        title:'Enjin + Twitch Authentication',
        closable:true,
        modal:true,
        content:content,
        button_text:'Authenticate',
        cancel_link:true,
        cancel_click_document:true,
        validate:false,
        cls:'twitch-auth-popup',
        callback: function() {
            window.location.href = auth_url;
        }
    };

    Enjin_Core.showWindowPopup(params);
};


Enjin_Core.BBCodeToggleSpoiler = function(link) {
	var link = $(link);
	var spoiler = link.closest(".bbcode_spoiler");
	var spoiler_title = spoiler.children(".bbcode_spoiler_title");
	var spoiler_content = spoiler.children(".bbcode_spoiler_content");

	if(spoiler_content.css('display') == 'block') {
		link.text('Show');
		spoiler_content.css({display:'none'});
		spoiler_title.css("padding-bottom", '0');
	} else{
		link.text('Hide');
		spoiler_content.css({display:'block'});
		spoiler_title.css("padding-bottom", '15px');
	}

	return false;
};


// extract the query string of an url
Enjin_Core.getParameterByName = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var expiredCaptchaCallback = function() {
    grecaptcha.reset();
};

Enjin_Core.numberFormat = function(number, decimals, dec_point, thousands_sep) {
	// Strip all characters but numerical ones.
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}

	return s.join(dec);
};


Enjin_Core.paymentwallBrickTweakOverlay = function(block){
    // add taxes notice
    var html = '<div style="margin-top:20px;text-align:center;line-height:18px;font-weight:bold;font-size:12px;color:#000">'+
        'Your statement will show POS TSI PUTEAUX FR. Fees may apply</div>';
    block.find('#brick-payment-form').append(html);
};

/**
 * Report content OR profiles
 *
 * @param user_id
 * 	user_id of user being reported
 * @param content_id
 * 	content_id (wall post id, comment_id)
 * @param content_type
 * 	wall_post, wall_comment, message, message_reply, profile
 */
Enjin_Core.reportContent = function(user_id, content_id, content_type) {
	var popup, options;
	var is_friend = false;
	var is_blocked = false;

	function showActions(infraction_type, with_report_options, with_message_option) {
		popup.attr("data-infraction_type", infraction_type);
		popup.attr("data-view", "actions");
		options.html("");
		var options_html = '';
		if (with_report_options) {
			options_html += '<label class="checkbox"><input type="radio" name="options" value="report" /> Report to Enjin for review</label>';
		}

		if (is_friend) {
			options_html += '<label class="checkbox"><input type="radio" name="options" value="unfriend" /> Unfriend User</label>';
		}

		if (!is_blocked) {
			options_html += '<label class="checkbox"><input type="radio" name="options" value="block" /> Block User</label>';
		}

		if (with_message_option) {
			options_html += '<label class="checkbox"><input type="radio" name="options" value="message" /> Message User to resolve</label>';
		}

		options.html(options_html);
	}

	function removeFriend() {
		$.get("/ajax.php", {
			s: "friends",
			user_id: user_id,
			op: "remove"
		}, function(ajax) {
			if (ajax['success']) {
				popup.find(".content").text("You have successfully removed this user from your friends list.");
				popup.find(".footer").hide();
			}
		}, 'json');
	}

	function blockUser() {
		$.get("/ajax.php", {
			s: "friends",
			user_id: user_id,
			op: "block"
		}, function(ajax) {
			if (ajax['success']) {
				popup.find(".content").text("You have successfully blocked this user.");
				popup.find(".footer").hide();
			}
		}, 'json');
	}

	function messageUser() {
		location.href = '/dashboard/messages/compose?type=user&id=' + user_id;
	}

	function report() {
		var infraction_type = popup.attr("data-infraction_type");
		if (typeof infraction_type !== 'undefined' && infraction_type !== '') {
			$.get("/ajax.php", {
				s: "reports",
				op: "report",
				infraction_type: infraction_type,
				content_type: content_type,
				content_id: content_id,
				user_id: user_id
			}, function(ajax) {
				popup.find(".footer").hide();
				if (ajax['success']) {
					popup.find(".content .options").text("Thank you! You're report has been successfully submitted. We will review the content in question as soon as possible.");
				} else {
					popup.find(".content .options").text(ajax['error']);
				}
			}, 'json');
		}
	}

	// open initial popup
	$.post("/ajax.php", {
		s: "friends",
		op: "get_friendship",
		user_id: user_id
	}, function(ajax) {
		is_friend = ajax['is_friend'];
		is_blocked = ajax['is_blocked'];

		var params, content;
		if (content_type == 'profile') {

			content = '' +
				'<div class="options">' +
					'<label class="checkbox"><input type="radio" name="options" value="report_shared" /> Report something shared by User</label>' +
					'<label class="checkbox"><input type="radio" name="options" value="report_profile" /> Report this profile</label>' +
				'</div>'
			;

			params = {
				title: 'Report User Profile',
				closable: true,
				modal: true,
				content: content,
				button_text: 'Next',
				cancel_link: true,
				cancel_click_document: true,
				validate: false,
				cls: 'report-content',
				callback: function() {
					popup = $(".report-content.element_popup");
					options = popup.find(".options");
					var view = popup.attr("data-view");
					var option_chosen = options.find("[name=options]:checked").val();

					if (typeof view === 'undefined' || view == '') {
						view = 'initial_options';
						popup.attr("data-view", view);
					}

					if (view == 'initial_options') {
						if (option_chosen == 'report_shared') {
							options.html("").html("Please click report via the specific post that the user shared.");
							popup.find(".footer").hide();
						}else if (option_chosen == 'report_profile') {
							options.html("");

							// don't show this option if they are already blocked
							if (!is_blocked) {
								options.append(
									'<label class="checkbox"><input type="radio" name="options" value="annoying_me" /> This person is annoying me</label>'
								);
							}

							options.append(
								'<label class="checkbox"><input type="radio" name="options" value="sharing_offensive_posts" /> Sharing inappropriate or offensive posts</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="spam_profile" /> This is a spam profile</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="inappropriate_profile_art" /> Inappropriate profile picture / cover</label>'
							);

							popup.attr("data-view", "report_profile");
						}
					}

					if (view == 'report_profile') {
						if (option_chosen == 'annoying_me') {
							showActions('', false, true);
						}else if (option_chosen == 'sharing_offensive_posts') {
							options.html("").html("Please click report via the specific post that the user shared.");
							popup.find(".footer").hide();
						}else if (option_chosen == 'spam_profile') {
							showActions('spam', true, true);
						}else if (option_chosen == 'inappropriate_profile_art') {
							showActions('profile_art', true, true);
						}
					}

					if (view == 'actions') {
						if (option_chosen == 'report') {
							options.html("").html(
								"I swear this report is accurate and I’m not wasting Enjin’s staff time. <br /><br />" +
								"If I’m found to have reported this incorrectly - I agree that my " +
								"account may be limited or banned from Enjin."
							);
							popup.attr("data-view", "actions_confirm");
						} else if (option_chosen == 'unfriend') {
							removeFriend();
						} else if (option_chosen == 'block') {
							blockUser();
						} else if (option_chosen == 'message') {
							messageUser();
						}
					}

					if (view == 'actions_confirm') {
						report();
					}
				}
			};

		}else{

			content = '' +
				'<div class="options">' +
					'<label class="checkbox"><input type="radio" name="options" value="annoys_me" /> It annoys me</label>' +
					'<label class="checkbox"><input type="radio" name="options" value="spam" /> It\'s spam</label>' +
					'<label class="checkbox"><input type="radio" name="options" value="should_not_be_here" /> It should not be on Enjin</label>' +
				'</div>'
			;

			params = {
				title: 'Report Content',
				closable: true,
				modal: true,
				content: content,
				button_text: 'Next',
				cancel_link: true,
				cancel_click_document: true,
				validate: false,
				cls: 'report-content',
				callback: function() {
					popup = $(".report-content.element_popup");
					options = popup.find(".options");
					var view = popup.attr("data-view");
					var option_chosen = options.find("[name=options]:checked").val();

					if (typeof view === 'undefined' || view == '') {
						view = 'initial_options';
						popup.attr("data-view", view);
					}

					if (view == 'initial_options') {
						if (option_chosen == 'annoys_me') {
							showActions('', false, true);
						} else if (option_chosen == 'spam') {
							showActions('spam', true, true);
						} else if (option_chosen == 'should_not_be_here') {
							options.html("").html(
								'<label class="checkbox"><input type="radio" name="options" value="porn" /> Inappropriate content</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="violence" /> It\'s threatening, violent or suicidal</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="other" /> Other reasons</label>'
							);
							popup.attr("data-view", "should_not_be_here");
						}
					}

					if (view == 'should_not_be_here') {
						if (option_chosen == 'porn') {
							showActions('porn', true, true);
						} else if (option_chosen == 'violence') {
							showActions('violence', true, true);
						} else if (option_chosen == 'other') {
							options.html("").html(
								'<label class="checkbox"><input type="radio" name="options" value="reveals_personal_info" /> Reveals my personal information</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="intellectual_property" /> Unauthorized use of my intellectual property</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="adult_products" /> Buying or selling illegal items</label>' +
								'<label class="checkbox"><input type="radio" name="options" value="illegal_downloads" /> Illegal downloads or warez</label>'
							);
							popup.attr("data-view", "other_reasons");
						}
					}

					if (view == 'other_reasons') {
						if (option_chosen == 'reveals_personal_info') {
							showActions(option_chosen, true, true);
						} else if (option_chosen == 'intellectual_property') {
							showActions(option_chosen, true, true);
						} else if (option_chosen == 'adult_products') {
							showActions(option_chosen, true, false);
						} else if (option_chosen == 'illegal_downloads') {
							showActions(option_chosen, true, false);
						}
					}

					if (view == 'actions') {
						if (option_chosen == 'report') {
							options.html("").html(
								"I swear this report is accurate and I’m not wasting Enjin’s staff time. <br /><br />" +
								"If I’m found to have reported this incorrectly - I agree that my " +
								"account may be limited or banned from Enjin."
							);
							popup.attr("data-view", "actions_confirm");
						} else if (option_chosen == 'unfriend') {
							removeFriend();
						} else if (option_chosen == 'block') {
							blockUser();
						} else if (option_chosen == 'message') {
							messageUser();
						}
					}

					if (view == 'actions_confirm') {
						report();
					}
				}
			};

		}

		// close other popups open
		Enjin_Core.cancelPopup();

		Enjin_Core.showWindowPopup(params);
	}, 'json');
};

/*! Idle Timer v1.1.0 2016-03-21 | https://github.com/thorst/jquery-idletimer | (c) 2016 Paul Irish | Licensed MIT */
!function(a){a.idleTimer=function(b,c){var d;"object"==typeof b?(d=b,b=null):"number"==typeof b&&(d={timeout:b},b=null),c=c||document,d=a.extend({idle:!1,timeout:3e4,events:"mousemove keydown wheel DOMMouseScroll mousewheel mousedown touchstart touchmove MSPointerDown MSPointerMove"},d);var e=a(c),f=e.data("idleTimerObj")||{},g=function(b){var d=a.data(c,"idleTimerObj")||{};d.idle=!d.idle,d.olddate=+new Date;var e=a.Event((d.idle?"idle":"active")+".idleTimer");a(c).trigger(e,[c,a.extend({},d),b])},h=function(b){var d=a.data(c,"idleTimerObj")||{};if(("storage"!==b.type||b.originalEvent.key===d.timerSyncId)&&null==d.remaining){if("mousemove"===b.type){if(b.pageX===d.pageX&&b.pageY===d.pageY)return;if("undefined"==typeof b.pageX&&"undefined"==typeof b.pageY)return;var e=+new Date-d.olddate;if(200>e)return}clearTimeout(d.tId),d.idle&&g(b),d.lastActive=+new Date,d.pageX=b.pageX,d.pageY=b.pageY,"storage"!==b.type&&d.timerSyncId&&"undefined"!=typeof localStorage&&localStorage.setItem(d.timerSyncId,d.lastActive),d.tId=setTimeout(g,d.timeout)}},i=function(){var b=a.data(c,"idleTimerObj")||{};b.idle=b.idleBackup,b.olddate=+new Date,b.lastActive=b.olddate,b.remaining=null,clearTimeout(b.tId),b.idle||(b.tId=setTimeout(g,b.timeout))},j=function(){var b=a.data(c,"idleTimerObj")||{};null==b.remaining&&(b.remaining=b.timeout-(+new Date-b.olddate),clearTimeout(b.tId))},k=function(){var b=a.data(c,"idleTimerObj")||{};null!=b.remaining&&(b.idle||(b.tId=setTimeout(g,b.remaining)),b.remaining=null)},l=function(){var b=a.data(c,"idleTimerObj")||{};clearTimeout(b.tId),e.removeData("idleTimerObj"),e.off("._idleTimer")},m=function(){var b=a.data(c,"idleTimerObj")||{};if(b.idle)return 0;if(null!=b.remaining)return b.remaining;var d=b.timeout-(+new Date-b.lastActive);return 0>d&&(d=0),d};if(null===b&&"undefined"!=typeof f.idle)return i(),e;if(null===b);else{if(null!==b&&"undefined"==typeof f.idle)return!1;if("destroy"===b)return l(),e;if("pause"===b)return j(),e;if("resume"===b)return k(),e;if("reset"===b)return i(),e;if("getRemainingTime"===b)return m();if("getElapsedTime"===b)return+new Date-f.olddate;if("getLastActiveTime"===b)return f.lastActive;if("isIdle"===b)return f.idle}return e.on(a.trim((d.events+" ").split(" ").join("._idleTimer ")),function(a){h(a)}),d.timerSyncId&&a(window).bind("storage",h),f=a.extend({},{olddate:+new Date,lastActive:+new Date,idle:d.idle,idleBackup:d.idle,timeout:d.timeout,remaining:null,timerSyncId:d.timerSyncId,tId:null,pageX:null,pageY:null}),f.idle||(f.tId=setTimeout(g,f.timeout)),a.data(c,"idleTimerObj",f),e},a.fn.idleTimer=function(b){return this[0]?a.idleTimer(b,this[0]):this}}(jQuery);

/**
 * URL Safe Redirect
 * Use the new method if available as it'll be bound immediately.
 * However, if not available, fall back on the old method which will bind once the document has finished loading.
 */

Enjin_Core.getSafeRedirectUri = function(element) {
    var attributeName = 'data-safe-url';
    var url = element.attr('href');

    if (typeof element.attr(attributeName) !== 'undefined') {
        url = element.attr(attributeName) + (current_session_user_id > 0 ? '?u=' + current_session_user_id : '');
    }

    return url;
};

$.fn.handleSafeUriClickEvent = function(event, force_target) {
    event.preventDefault();

	var elem_target = (typeof $(this).attr('target') !== 'undefined' ? $(this).attr('target') : '_self');
    var force_target = (typeof force_target !== 'undefined' ? force_target : elem_target);
    var safe_uri = Enjin_Core.getSafeRedirectUri($(this));

    switch (force_target) {
		case '_blank':
            window.open(safe_uri, force_target);
			break;
		case '_self':
		default:
            window.location.href = safe_uri;
            break;
	}
};

if (typeof $.fn.on !== 'function') {
    $(document).ready(function () {
        $('a.bbcode_url').click(function (event) {
            $(this).handleSafeUriClickEvent(event);
        });
    });
} else {
    $(document).on('click', 'a.bbcode_url', function (event) {
        $(this).handleSafeUriClickEvent(event);
    });
}

$(document).ready(function () {
    $('a.bbcode_url').mousedown(function (event) {
        if (event.which == 2) {
            $(this).handleSafeUriClickEvent(event, '_blank');
        }
    });
});

/**
 * React Modules
 **/
$(document).ready(function() {
	// forum latest threads
	$(".m_forumlatestthreads.react").each(function() {
		EnjinReact.renderReactComponent('ModuleForumLatestThreads', this, {
			siteId: Enjin_Core.site_id,
			presetId: parseInt($(this).attr("data-preset-id")),
			moduleType: 'forumlatestthreads',
		});
	});

	// forum latest new threads
	$(".m_forumlatestnewthreads.react").each(function() {
		EnjinReact.renderReactComponent('ModuleForumLatestNewThreads', this, {
			siteId: Enjin_Core.site_id,
			presetId: parseInt($(this).attr("data-preset-id")),
			moduleType: 'forumlatestnewthreads',
		});
	});

    // quote button inside view thread
    $(".post-bottom .quote-post").click(function() {
        var post_row = $(this).closest(".row");
        var post_id = post_row.attr('post_id');
        var preset_id = post_row.closest(".m_forum").attr("data-preset_id");
        EnjinReact.getUUID(preset_id, 'forumEditor', function(uuid) {
            EnjinReact.addQuote(post_id, uuid, EnjinReact.getStore());
		});
    });

    // reply button innside view thread
    $(".post-bottom .post-button.reply-post").click(function() {
        var post_row = $(this).closest(".row");
        var post_id = post_row.attr('post_id');
        var preset_id = post_row.closest(".m_forum").attr("data-preset_id");
        EnjinReact.getUUID(preset_id, 'forumEditor', function(uuid) {
            EnjinReact.setReplyMode(post_id, uuid, post_row.offset().top, EnjinReact.getStore());
        });
    });

	// enjin editors
	$.fn.initEnjinEditors();
});

$.fn.initEnjinEditors = function() {
    $(".enjin_editor").each(function() {
        var editor = this;
        var editorData = $(editor).data();

        var properties = {
            siteId: Enjin_Core.site_id,
            editorOpen: (typeof editorData.editorOpen !== 'undefined' ? editorData.editorOpen : true),
            canAttachFiles: (typeof editorData.canAttachFiles !== 'undefined' ? editorData.canAttachFiles : true),
            customSmileys: editorData.customSmileys || null,
            defaultEditor: editorData.defaultEditor || 'wysiwyg',
            themeCacheId: editorData.themeCacheId || null,
            text: editorData.text || null,
			smallWidth: (typeof editorData.smallWidth !== 'undefined' ? editorData.smallWidth : false),
        };

        if (editorData.component) {
            if (editorData.component === 'ForumEditor') {
                properties['presetId'] = editorData.presetId || null;
                properties['threadId'] = editorData.threadId || null;
                properties['forumId'] = editorData.forumId || null;
                properties['postId'] = editorData.postId || null;
                properties['mode'] = editorData.mode || 'quickreply';
                properties['labels'] = editorData.labels || null;
                properties['poll'] = editorData.poll || null;
                properties['firstPost'] = (typeof editorData.firstPost !== 'undefined' ? editorData.firstPost : false);
                properties['threadSubject'] = editorData.threadSubject || null;
                properties['threadType'] = editorData.threadType || null;
                properties['postWithSignature'] = (typeof editorData.postWithSignature !== 'undefined' ? editorData.postWithSignature : true);
                properties['postWithTagEffects'] = (typeof editorData.postWithTagEffects !== 'undefined' ? editorData.postWithTagEffects : true);
                properties['requiredEditReason'] = (typeof editorData.requiredEditReason !== 'undefined' ? editorData.requiredEditReason : false);
                properties['dev'] = (typeof editorData.dev !== 'undefined' ? editorData.dev : false);
                properties['replyUser'] = editorData.replyUser || null;
                properties['notificationType'] = editorData.notificationType || null;
                properties['games'] = editorData.games || null;
                properties['allLabels'] = editorData.allLabels || null;
                properties['pollEnabled'] = (typeof editorData.pollEnabled !== 'undefined' ? editorData.pollEnabled : false);
				properties['moderationAccess'] = (typeof editorData.moderationAccess !== 'undefined' ? editorData.moderationAccess : false);
				properties['subjectEditing'] = (typeof editorData.subjectEditing !== 'undefined' ? editorData.subjectEditing : true);
            }

            if (editorData.component === 'PrivateMessageReply') {
            	properties['pmId'] = editorData.pmId;
			}

			if (editorData.component === 'ComposePrivateMessage') {
            	properties['tagList'] = editorData.tagList;
				properties['recipients'] = editorData.recipients;
			}
        }

        EnjinReact.renderReactComponent(
            editorData.component,
            editor,
            properties
        );
    });
};

}
/*
     FILE ARCHIVED ON 03:09:30 Nov 14, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:19:33 Oct 26, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.472
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 59.262
  LoadShardBlock: 73.189 (3)
  PetaboxLoader3.datanode: 88.44 (4)
  load_resource: 114.039
  PetaboxLoader3.resolve: 66.289
*/