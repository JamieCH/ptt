'use strict';

var request = require("request");
var cheerio = require("cheerio");

module.exports = ptt;

function ptt(callback){
    request({
        url: "https://www.ptt.cc/bbs/mobile-game/index.html",
        method: "GET"
        }, function(error, response, body) {
            if(error && response.statusCode == 200 || !body) { 
                return ; 
            }
            var $ = cheerio.load(body);
            var result = [];
            // 拆解ptt title
            var titles = $("div.r-ent div.title a");   

            for (var i = 0; i < titles.length; i++) {
                result.push($(titles[i]).text());
            }
            console.log(result);
    });
};
