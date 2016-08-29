'use strict';

const expect = require('chai').expect;
const ogCacheClear = require('../index');
const appAccessToken = process.env.GRAPH_API_APP_TOKEN;
var response;
var startTime;

describe('Cache of OpenGraph on Facebook is updated', function() {
    let url = 'https://architecture.rhizomatiks.com/works/roppongi_artnight.html';

    before(function(done) {
        this.timeout(10000);
        callAPI(url, appAccessToken, done);
    });

    it('description is valid', function() {
        expect(response.description).to.equal('六本木アートナイト2015において、齋藤精一がメディアアートディレクターに就任。');
    });
    it('title is valid', function() {
        expect(response.title).to.equal('六本木アートナイト');
    });
    it('type is valid', function() {
        expect(response.type).to.equal('article');
    });
    it('url is valid', function() {
        expect(response.url).to.equal(url);
    });
    it('image[0].url is valid', function() {
        expect(response.image[0].url).to.equal('https://architecture.rhizomatiks.com/works/images/roppongi_artnight/thumbnail.jpg');
    });
    it('updated_time was updated', function() {
        expect(new Date(response.updated_time).getTime()).to.be.at.least(startTime.getTime() - 1 * 60 * 1000);
    });
});

describe('Error handling', function() {
    it('invalid url', function(done) {
        callAPI('https://architecture/', appAccessToken, function() {
            expect(response.error).to.not.be.undefined;
            console.log(response);
            done();
        });
    });

    it('invalid access token', function(done) {
        callAPI('https://architecture.rhizomatiks.com/works/roppongi_artnight.html', 'abc', function() {
            expect(response.error).to.not.be.undefined;
            console.log(response);
            done();
        });
    });
    
    // 他のエラーの出し方がわからない。。。
});

function callAPI(url, accessToken, done) {
    startTime = new Date(Date.now() - 2 * 60 * 1000);
    ogCacheClear(url, accessToken, function(res) {
        response = res;
        done();
    });
}
