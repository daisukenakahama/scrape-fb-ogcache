'use strict';

var FB = require('fb');
FB.options({version: 'v2.7'});

module.exports = function(url, appAccessToken, callback) {
    FB.api('', 'post', {
        scrape: true,
        id: url,
        access_token: appAccessToken
    }, function (res) {
        callback(res);
    });
}
