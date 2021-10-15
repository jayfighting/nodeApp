const app = require('../app');
var assert = require('assert');

describe('App', function () {
    describe('GetServerTime', function () {
        it('should contain string Hello World! The Time is ', function () {
            let time = new Date();
            assert.equal(app.helloString + time, app.getServerTime(time));
        });
    });
});

describe('App', function () {
    describe('GetWordCount', function () {
        it('Count Should Match', function () {
            let str = "hello world";
            let expected = 2;
            let actual = app.getWordcount(str);
            assert.equal(expected, actual);
        });
    });
});

describe('App', function () {
    describe('Reverse', function () {
        it('Reverse Should Match', function () {
            let str = "hello world";
            let expected = "world hello";
            let actual = app.reverse(str);
            assert.equal(expected, actual);
        });
    });
});
