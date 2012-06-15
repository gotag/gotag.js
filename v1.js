/* ===========================================================
 * gotag.js v0.1
 * http://developers.gotag.in
 * ===========================================================
 * Copyright 2012 GoTag, Inc.
 * =========================================================== 
 */

require(["jquery", "lib/jquery.fancybox.pack", "lib/humane.min"], function($) {
  /********************* CONFIG ***************************/
  var DOMAIN = "http://localhost:3000/"
  var DEFAULT_HEIGHT = "90%";
  var DEFAULT_WIDTH = "70%";
  /******************* End Config ***********************/
  
  $(function() {
    loadCss("http://developers.gotag.in/gotag.js/v1.css");
    loadCss("http://developers.gotag.in/gotag.js/lib/jquery.fancybox.css");
    loadCss("http://developers.gotag.in/gotag.js/lib/humane-original.css");
    
    // Auto close modal if iframe is same as parent
    //parent.$.colorbox.close();
  
    $.fn.events = function(options) {
      var element = this;
      $.getJSON(DOMAIN + "events.json?callback=?", {company_id: options["company"], venue_id: options["venue"], 
        return_url: (options["return_url"] != null) ? options["return_url"] : document.URL },
        function(data) {
          var html = useThumbnails(data)
          element.html(html);
          $('a#buy-link').fancybox({
          	fitToView	: false,
          	height : DEFAULT_HEIGHT,
          	width : DEFAULT_WIDTH
          });
        }
      );
    }
  
    $.fn.my_account = function(options) {
      this.attr("data-fancybox-type", "iframe")
      this.attr("href", DOMAIN + "me?display=iframe");
      this.fancybox()
    }
  });
  
  function useThumbnails(response) {
    var html = '';
    var data = response.events;
    $.each(data, function(key, val) {
      var event = ''
      event += '<div class="span3">';
        event += '<div class="thumbnail">';
          event +=  '<img src="' + val.flyer.flyer.default.url + '" alt="">';
          event += '<div class="caption">';
            event += '<h5>' + val.name + '</h5>';
            //event += '<h5>' + formateIsoDate(val.starts_at) + '</h5>';
            //if (val.description.length > 1) {
            //  event += '<p>' + val.description.substring(0, 150).split(" ").slice(0, -1).join(" ") + "..." + '</p>';
            //}
            event += '<h5>Ticket price &pound'+ val.ticket_price + '</h5>';
            event += '<p><a href=' + DOMAIN + 'events/' + val.id + "?return_url=" + document.URL +'&display=iframe class="btn btn-primary" id="buy-link" data-fancybox-type="iframe">Buy Tickets</a></p>';
          event += '</div>';
        event += '</div>';
      event += '</div>';
      html += event;
    })
    return html;
  }
  
  jQuery.extend({
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    },
    getUrlVar: function(name) {
      return $.getUrlVars()[name];
    }
  });
  
  if ($.getUrlVar("error") != null) {
    humane.error(decodeURI($.getUrlVar("error")));
  }
  
  function formateIsoDate(value) {
    var date = new Date(value);
    var a_p = "";
    var curr_hour = date.getHours();
    var curr_min = date.getMinutes();
    if (curr_hour < 12) {
      a_p = "AM";
    } else {
      a_p = "PM";
    }
    if (curr_hour == 0) {
      curr_hour = 12;
    }
    if (curr_hour > 12) {
      curr_hour = curr_hour - 12;
    }
    curr_min = curr_min + "";
    if (curr_min.length == 1) {
      curr_min = "0" + curr_min;
    }
    var str = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + curr_hour + ":" + curr_min + " " + a_p;
    return str;
  }
  
  function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
});