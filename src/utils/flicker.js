const R = require('ramda');
const $ = require('jquery');
var trace = R.curry(function(tag, x) {
  console.log(tag, x);
  return x;
});

var Impure = {
  getJSON: R.curry(function(callback, url) {
    $.getJSON(url, callback);
  }),
  setHTML: R.curry(function(sel, html) {
    $(sel).html(html);
  })
};

var url = function (term) {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
}


var prop = R.curry(function(property, object) {
  return object[property];
});

var mediaUrl = R.compose(R.prop('m'), R.prop('media'));

// var srcs = R.compose(R.map(mediaUrl),R.prop('items'));
/**
 * img ::  String -> Element
 */
var img = function (url) {
  return $('<img />', {src: url});
}
// var images = R.compose(R.map(img), R.map(mediaUrl),R.prop('items'));
// var images = R.compose(R.map(R.compose(img, mediaUrl)),R.prop('items'));
var mediaToImg = R.compose(img,mediaUrl);
var images = R.compose(R.map(mediaToImg),R.prop('items'));

var renderImages = R.compose(Impure.setHTML('body'),images);
var app = R.compose(Impure.getJSON(renderImages), url);
app('cats');