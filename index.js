'use strict';

var request = require("request");
var cheerio = require("cheerio");

module.exports = ptt;  // 把module的結果export出去讓其他.js可以使用

function ptt(callback){
    request({
        url: "https://www.ptt.cc/bbs/mobile-game/index.html",  // 練習只爬這一頁的title
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
            // 把每個title puch到一個array裡面
            console.log(result);
    });
};
