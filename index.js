'use strict';

var request = require("request");
//var fs = require("fs");
var cheerio = require("cheerio");

var callback;

module.exports = ptt;

function ptt(callback){
    request({
        url: "https://www.ptt.cc/bbs/mobile-game/index.html",
        method: "GET"
        }, function(error, response, body) {
            if(error && response.statusCode == 200 || !body) { 
                return callback(error); 
            }
    
            var $ = cheerio.load(body);
            var result = [];
            var titles = $("div.r-ent div.title a");
    
            for (var i = 0; i < titles.length; i++) {
                result.push($(titles[i]).text());
            }
            
            callback(null, result);
                
           //fs.writeFileSync("result.json", JSON.stringify(result));
    });
};

