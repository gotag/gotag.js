/* ===========================================================
 * gotag.js v0.1
 * http://developers.gotag.in
 * ===========================================================
 * Copyright 2012 GoTag Limited.
 * =========================================================== 
 */

Gotag(function() {
  (function($){
    console.log("gotag.js starting");
    var gotag_elements = $('[class*="gotag-event-"]');
    function gotag_event_class(element) {
      return $.grep($(element).attr('class').split(/\s+/), function(e, i) { return e.match(/^gotag-event-(\d+)$/)})[0];
    }

    var IE6 = (navigator.userAgent.indexOf("MSIE 6") >= 0) ? true : false;
    if(IE6) {
      gotag_elements.each(function(i) {
        var m, klass;
        klass = gotag_event_class(this);
        if (klass && (m = klass.match(/^gotag-event-(\d+)$/))) {
          var event_id = m[1];
          $(this).click(function(){
            window.location = 'http://gotag.in/events/' + event_id;
            return false;
          });
        }
      });
      return;
    }

    $('head').append($('<link charset="utf-8" type="text/css" rel="stylesheet" href="http://developers.gotag.in/gotag.js/v1.css" />'));

    var lightbox = $('\
      <div id="gotag" class="gotag-lightbox" style="display: none;">\
        <div class="gotag-wrapper">\
          <div class="gotag-container">\
            <div class="gotag-header">\
              <a class="gotag-close" href="#"></a>\
              <span id="gotag-title">Register for Event</span> <em>powered by <a href="http://www.gotag.in?ref=embed" target="_blank">GoTag</a></em>\
            </div>\
            <div class="gotag-body">\
            </div>\
          </div>\
        </div>\
      </div>\
    ');

    if ($('#gotag').length) {
      lightbox = $('#gotag');
    } else {
      lightbox.appendTo('body');
    }

    var default_title = "Buy Tickets";

    Gotag.load_tickets = function(selector, event_id) {
      var iframe_name = 'gotag-iframe-' + event_id;
      if ($('iframe[name=' + iframe_name + ']').length > 0) return;

      var href = 'http://gotag.in/events/' + event_id + '/embed?host_url=' + window.location.toString();
      var iframe = $('<iframe name="' + iframe_name + '" frameborder="0" hspace="0" scrolling="auto" style="display: none;" width="760" height="490" src="' + href + '"></iframe>').appendTo("div.gotag-body");

      $(selector).click(function(){
        var t, title;
        if (t = $(this).attr('title')) {
          title = "Register for " + ((t.length > 30) ? t.substring(0, 25) + "&#8230;" : t);
        } else {
          title = default_title;
        }
        $("#gotag-title")[0].innerHTML = title;
        $('iframe[name^=gotag-iframe-]').css('display', 'none');
        $(iframe).css('display', 'block');
        $(lightbox).css('display','block');
        return false;
      });

      $('.gotag-close').click(function(){
        $(lightbox).css('display','none');
        $("#gotag-title")[0].innerHTML = default_title;
        $(iframe).css('display', 'none');
        $('iframe[name=' + iframe_name + ']')[0].src = href;
        return false;
      });
    };

    gotag_elements.each(function(i) {
      var m, klass;
      klass = gotag_event_class(this);
      if (klass && (m = klass.match(/^gotag-event-(\d+)$/))) {
        var event_id = m[1];
        Gotag.load_tickets("." + klass, event_id);
      }
    });

    // show completed order screen if returning from paypal
    if (document.location.hash && document.location.hash.toString().length > 1) {
      var event_id_order_token = document.location.hash.substring(1).split(';', 2);
      var iframe_name = 'gotag-iframe-' + event_id_order_token[0];
      var iframe = $('iframe[name=' + iframe_name + ']')[0];
      iframe.src = 'http://gotag.in/events/' + event_id_order_token[0] + '/orders/' + event_id_order_token[1] + '/embed?host_url=' + window.location.toString();
      $(iframe).css('display','block');
      $(lightbox).css('display','block');
    }
  })(Gotag);
});