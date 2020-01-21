/*!
* phone-codes/phone-ru.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7-25
*/

!function(factory) {
    "function" == typeof define && define.amd ? define([ "inputmask" ], factory) : "object" == typeof exports ? module.exports = factory(require("inputmask")) : factory(window.Inputmask);
}(function(Inputmask) {
    return Inputmask.extendAliases({
        phoneru: {
            alias: "abstractphone",
            countrycode: "7",
            phoneCodes: [ {
                mask: "+38(301)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3012)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0423\u043b\u0430\u043d-\u0423\u0434\u044d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: [ "\u041d\u0438\u0436\u043d\u0435\u0430\u043d\u0433\u0430\u0440\u0441\u043a", "\u0421\u0435\u0432\u0435\u0440\u043e\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(30131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0430\u0440\u0433\u0443\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0430\u043a\u0441\u0438\u043c\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0438\u0447\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e-\u041e\u0437\u0451\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0417\u0430\u0438\u0433\u0440\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0417\u0430\u043a\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0430\u0431\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0418\u0432\u043e\u043b\u0433\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0438\u0436\u0438\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u044f\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041c\u0443\u0445\u043e\u0440\u0448\u0438\u0431\u0438\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0443\u0440\u0443\u043d\u0442\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0413\u0443\u0441\u0438\u043d\u043e\u043e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0422\u0430\u0440\u0431\u0430\u0433\u0430\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u044b\u0440\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0425\u043e\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041a\u0443\u0440\u0443\u043c\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u041e\u0440\u043b\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0443\u0440\u044f\u0442\u0438\u044f",
                city: "\u0411\u0430\u0433\u0434\u0430\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(302)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3022)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0438\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0427\u0438\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0440\u0437\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u044b\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u044b\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a-\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0438\u043b\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u043b\u0451\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0433\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0433\u043e\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0440\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0440\u0438\u0430\u0440\u0433\u0443\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0438\u043b\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u043a\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0440\u0435\u0442\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u0437\u0438\u043c\u0443\u0440\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0440\u0447\u0438\u043d\u0441\u043a\u0438\u0439 \u0417\u0430\u0432\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0426\u0430\u0441\u0443\u0447\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043b\u043e\u0432\u044f\u043d\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0433\u043e\u0439\u0442\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0443\u043b\u044c\u0434\u0443\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u041a\u0430\u043b\u0430\u0440", "\u0427\u0430\u0440\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(30262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0445-\u0423\u0441\u0443\u0433\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u044b\u0448\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(30266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0417\u0430\u0431\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0435\u043b\u043e\u043f\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(341)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3412)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0436\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34126)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0417\u0430\u0432\u044c\u044f\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0423\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0430\u0440\u0430\u043a\u0443\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0438\u044f\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u0440\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041c\u0430\u043b\u0430\u044f \u041f\u0443\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041c\u043e\u0436\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u043b\u0430\u0437\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u043e\u0442\u043a\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0430\u0440\u0430\u043f\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u043b\u043d\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0414\u0435\u0431\u0451\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u044e\u043c\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0430\u043c\u0431\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0438\u0437\u043d\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u0430\u0432\u043e\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0435\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0435\u043b\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042e\u043a\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u042f\u043a\u0448\u0443\u0440-\u0411\u043e\u0434\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0440\u0430\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u0434\u043c\u0443\u0440\u0442\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0411\u0430\u043b\u0435\u0437\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(342)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(342)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(342)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3424)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u0434\u044b\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0439\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0432\u0438\u0448\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u043e\u043b\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u0439\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042e\u0441\u044c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0443\u0431\u0430\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u044b\u0441\u044c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0440\u0435\u043c\u044f\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0438\u0448\u0435\u0440\u0442\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u0438\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0435\u0449\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0437\u0435\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u0441\u043e\u0432\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0421\u043e\u0441\u043d\u043e\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0440\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34260)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0434\u044b\u043c\u043a\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u0443\u0448\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0435\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0432\u0451\u0437\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u043e\u0431\u0440\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0441\u0442\u044b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34269)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u043d\u0433\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u044b\u0442\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0443\u043a\u0441\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34277)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0438\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34278)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0447\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34279)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0445\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34291)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34292)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0440\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34293)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0447\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34294)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042e\u0440\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34296)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34297)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0433\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34298)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u0440\u043c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(343)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(343)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(343)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0447\u043a\u0430\u043d\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34342)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u044f\u044f \u0422\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34342)3-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34342)5-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34342)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0448\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0421\u0430\u043b\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0430\u043f\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0431\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3435)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0422\u0430\u0433\u0438\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u0435\u0432\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0440\u0431\u0438\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u044c\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0432\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0440\u0438\u043d\u0441\u043a\u0430\u044f \u0421\u043b\u043e\u0431\u043e\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0439\u043a\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0442\u0435\u043c\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0431\u0435\u0441\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0433\u0443\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u041f\u044b\u0448\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043b\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u044b\u0448\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0445\u043e\u0439 \u041b\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0441\u0435\u0440\u0442\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0448\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u0434\u0430\u043d\u043e\u0432\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u044f\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34380)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34383)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u043f\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34383)5-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0447\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34384)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0442\u0443\u0440\u044c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34385)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34386)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0434\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34387)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34388)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u0430\u044f \u041b\u044f\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34389)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0442\u0443\u0440\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3439)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3439)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a-\u0423\u0440\u0430\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3439)54-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a-\u0423\u0440\u0430\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3439)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34391)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0447\u0438\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34394)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0443\u0444\u0438\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34395)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0442\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34397)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u0432\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34398)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0432\u0435\u0440\u0434\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0435 \u0421\u0435\u0440\u0433\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(345)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3452)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044e\u043c\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u044f\u044f \u0422\u0430\u0432\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u043b\u0443\u0442\u043e\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0435\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0433\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043f\u043e\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u043e\u0434\u043e\u0443\u043a\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u0433\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0443\u0442\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u043e\u043c\u0430\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u043b\u044b\u0448\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u043c\u0438\u0437\u043e\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u043e\u0440\u043e\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0448\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0437\u0430\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0434\u044e\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u0430\u0434\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0431\u0430\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0438\u043a\u0443\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3456)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0431\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u044e\u043c\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0432\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(346)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3462)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0421\u0443\u0440\u0433\u0443\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3463)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u0435\u0444\u0442\u0435\u044e\u0433\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041f\u044b\u0442\u044c-\u042f\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041b\u044f\u043d\u0442\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041c\u0435\u0433\u0438\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3466)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u0438\u0436\u043d\u0435\u0432\u0430\u0440\u0442\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041a\u043e\u0433\u0430\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34668)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0420\u0430\u0434\u0443\u0436\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34669)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041b\u0430\u043d\u0433\u0435\u043f\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34670)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0435\u043b\u043e\u044f\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34672)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u044f\u0433\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34673)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34674)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34675)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34676)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0423\u0440\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34677)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041a\u043e\u043d\u0434\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34678)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043d\u0442\u044b-\u041c\u0430\u043d\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(347)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(347)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0423\u0444\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3473)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0435\u0440\u043b\u0438\u0442\u0430\u043c\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0410\u0433\u0438\u0434\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0435\u0440\u043b\u0438\u0431\u0430\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34740)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0443\u0441\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0415\u0440\u043c\u0435\u043a\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u043a\u0430\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0438\u0436\u0431\u0443\u043b\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0440\u0430\u0438\u0434\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0422\u043e\u043b\u0431\u0430\u0437\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0424\u0451\u0434\u043e\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34747)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u042f\u0437\u044b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34748)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0435 \u041a\u0438\u0433\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34749)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0438\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34750)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u0431\u0435\u043b\u043e\u043a\u0430\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34751)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0439\u043c\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34752)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0417\u0438\u043b\u0430\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34753)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0430\u0440\u043e\u0431\u0430\u043b\u0442\u0430\u0447\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34754)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0420\u0430\u0435\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34755)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0430\u0440\u043e\u0441\u0443\u0431\u0445\u0430\u043d\u0433\u0443\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34756)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0440\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34757)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0415\u0440\u043c\u043e\u043b\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34758)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u044a\u044f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34759)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041d\u0438\u043a\u043e\u043b\u043e-\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34760)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u042f\u043d\u0430\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34761)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u043c\u0435\u0440\u0442\u0430\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34762)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0412\u0435\u0440\u0445\u043d\u0435\u044f\u0440\u043a\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34763)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0430\u043b\u0430\u0432\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34764)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u043b\u0435\u0443\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34765)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0440\u043c\u0430\u0441\u043a\u0430\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34766)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34767)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34768)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0414\u0430\u0432\u043b\u0435\u043a\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34769)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0428\u0430\u0440\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34770)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u044c\u0448\u0435\u0443\u0441\u0442\u044c\u0438\u043a\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34771)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0410\u0441\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34772)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0410\u0441\u043a\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34773)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0437\u0434\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34774)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34775)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0421\u0438\u0431\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34776)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0413\u043e\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34777)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u043b\u043e\u044f\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34778)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0435 \u0422\u0430\u0442\u044b\u0448\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34779)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u043b\u0442\u0430\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34780)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u0448\u043d\u0430\u0440\u0435\u043d\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34781)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u0436\u0433\u043e\u0440\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34782)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0422\u0443\u0439\u043c\u0430\u0437\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34783)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041d\u0435\u0444\u0442\u0435\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34784)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0438\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34785)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0418\u0441\u044f\u043d\u0433\u0443\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34786)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0435\u043b\u0435\u0431\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34787)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0414\u044e\u0440\u0442\u044e\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34788)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041a\u0438\u0440\u0433\u0438\u0437-\u041c\u0438\u044f\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34789)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0440\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34791)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0423\u0447\u0430\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34792)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0411\u0435\u043b\u043e\u0440\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34794)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0418\u0448\u0438\u043c\u0431\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34795)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0418\u0433\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34796)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0427\u0435\u043a\u043c\u0430\u0433\u0443\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34797)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u0427\u0438\u0448\u043c\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34798)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0411\u0430\u0448\u043a\u043e\u0440\u0442\u043e\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u0441\u044f\u0433\u0443\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(349)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34922)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0421\u0430\u043b\u0435\u0445\u0430\u0440\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34932)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0441\u0435\u043b\u044c\u043a\u0443\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34934)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0423\u0440\u0435\u043d\u0433\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34936)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0413\u0443\u0431\u043a\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34938)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041c\u0443\u0440\u0430\u0432\u043b\u0435\u043d\u043a\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3494)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u043e\u0432\u044b\u0439 \u0423\u0440\u0435\u043d\u0433\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34940)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0422\u0430\u0437\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34948)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0425\u0430\u0440\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34949)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u042f\u043c\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3496)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u043e\u044f\u0431\u0440\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34992)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041b\u0430\u0431\u044b\u0442\u043d\u0430\u043d\u0433\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34993)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0410\u043a\u0441\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34994)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041c\u0443\u0436\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34995)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041d\u0430\u0434\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34996)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u042f\u0440-\u0421\u0430\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(34997)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043c\u0430\u043b\u043e-\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0422\u0430\u0440\u043a\u043e-\u0421\u0430\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(351)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(351)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(351)301-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(351)7##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(351)90#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0441 \u0437\u043e\u043d\u043e\u0432\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438"
            }, {
                mask: "+38(3513)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0430\u0441\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3513)5#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0430\u0441\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3513)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043b\u0430\u0442\u043e\u0443\u0441\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3513)7#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043b\u0430\u0442\u043e\u0443\u0441\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35130)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35130)4-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35130)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35130)7-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35130)9-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0433\u0430\u044f\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0442\u0430\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u043d\u043e\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043c\u0430\u043d\u0436\u0435\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043f\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0433\u0430\u043f\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0440\u0435\u0434\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0440\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0435\u0443\u0440\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0433\u043e\u0434\u0435\u0440\u0435\u0432\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0442\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043d\u0435\u0436\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0430\u0442\u0430\u0432-\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a", "\u042e\u0440\u044e\u0437\u0430\u043d\u044c" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(35148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043d\u0430\u0448\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0441\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0430\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u044b\u0448\u0442\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0430\u0431\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0437\u0438\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u044f\u0437\u0435\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0435\u0440\u0448\u0430\u043c\u043f\u0435\u043d\u0443\u0430\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u0430\u0441\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0423\u0444\u0430\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0432\u0435\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u0442\u0430\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0431\u0430\u0440\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0441\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3519)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0433\u043d\u0438\u0442\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u043b\u044f\u0431\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u0451\u0445\u0433\u043e\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(352)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3522)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u0441\u0442\u043e\u043e\u0437\u0435\u0440\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0437\u0435\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0440\u0433\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043a\u0440\u043e\u0443\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0443\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0443\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u044f\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u043e\u0432\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u044f\u0434\u044f\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0432\u0435\u0440\u0438\u043d\u043e\u0433\u043e\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0435\u043b\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u044c\u043c\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0444\u0430\u043a\u0443\u043b\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0443\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u043c\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u0433\u0430\u043c\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0442\u0430\u043c\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0434\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u043f\u043e\u043b\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0433\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(353)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3532)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043a\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044e\u043b\u044c\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u043a\u0442\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044f\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043a\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u044c-\u0418\u043b\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0432\u043e\u043b\u043e\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u0440\u0433\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u043c\u0430\u043d\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0437\u0443\u043b\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0430\u0447\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u0435\u0448\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0440\u043e\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0448\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0435\u043a\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0433\u0443\u0440\u0443\u0441\u043b\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0431\u0434\u0443\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0442\u0432\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u043e\u043c\u0430\u0440\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u043b\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0432\u0430\u043d\u0434\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0432\u0430\u0440\u043a\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0434\u0430\u043c\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043c\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0441\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3537)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3537)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3537)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3537)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0442\u0440\u043e\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(35379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u0435\u043d\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(381)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3812)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0418\u0448\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0432\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0432\u0430\u0440\u0448\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0432\u0440\u0438\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u041f\u043e\u043b\u044f\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u044c\u043a\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043e\u043c\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0434\u0435\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0437\u044b\u0432\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0423\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u044f\u044f \u041e\u043c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u043e\u043d\u0435\u0448\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0443\u0442\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u044c\u044f\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0435\u0440\u0435\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u043c\u0438\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0433\u0440\u0430\u0434\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0438\u043b\u044c\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0441\u043a\u0430\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044e\u043a\u0430\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u0440\u0431\u0430\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0433\u0430\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(382)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3822)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3823)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u044b\u0440\u044f\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0436\u0435\u0432\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0433\u0443\u043b\u044c\u0434\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043a\u0447\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u0434\u0440\u043e\u0432\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0438\u0432\u043e\u0448\u0435\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0430\u0431\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u0441\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043f\u0430\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043b\u0447\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0433\u043e\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u0435\u0436\u0435\u0432\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(383)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0433\u0443\u0447\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u043a\u0438\u0442\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043f\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0441\u043b\u044f\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u043e\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0447\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044b\u0432\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0432\u043e\u043b\u044c\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0430\u0441\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0447\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0437\u0435\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043f\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0434\u044b\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0431\u044b\u0448\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0433\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0431\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0438\u0441\u0442\u043e\u043e\u0437\u0435\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043d\u0433\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u044b\u0448\u0442\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0422\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(384)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3842)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3843)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0437\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u0438\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445-\u0427\u0435\u0431\u0443\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u043f\u0438\u0432\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u0441\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0439\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044f\u0436\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0436\u0435\u0440\u043e-\u0421\u0443\u0434\u0436\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043f\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a-\u041a\u0443\u0437\u043d\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38459)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0436\u043c\u043e\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3846)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043a\u043e\u043f\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0441\u0435\u043b\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38471)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0438\u043d\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0448\u0442\u0430\u0433\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u044b\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0435\u043c\u0435\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0436\u0434\u0443\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(385)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3852)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0440\u043d\u0430\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0441\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0430\u043b\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u0442\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0435\u0440\u0445-\u0421\u0443\u0435\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0430\u043b\u044c\u0431\u0448\u0442\u0430\u0434\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3854)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0438\u043f\u0443\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u043c\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u043e\u043f\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0427\u0430\u0440\u044b\u0448\u0441\u043a\u0430\u044f \u041f\u0440\u0438\u0441\u0442\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u0438\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u0441\u043f\u0435\u043b\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u0443\u0431\u0446\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0435\u043b\u0430\u0431\u043e\u043b\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u0430\u043b\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0435\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0432\u044c\u044f\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u043e\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043e\u043b\u0447\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u043b\u0443\u043d\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u0431\u0443\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0431\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38570)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38571)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0418\u0441\u0442\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38572)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0443\u0440\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38573)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38574)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0430\u0440\u044b\u0448\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38575)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0449\u0435\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38576)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38577)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u043e\u043a\u0443\u0440\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38578)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043b\u044e\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38579)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0433\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38580)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u043d\u043a\u0440\u0443\u0448\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38581)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38582)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0420\u0435\u0431\u0440\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38583)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0430\u043c\u043e\u043d\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38584)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u044c-\u043d\u0430-\u041e\u0431\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38585)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38586)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38587)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u043c\u0435\u0438\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38588)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u044e\u043c\u0435\u043d\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38589)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0443\u0442\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38590)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u044b\u0442\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38591)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u043b\u044c\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u043b\u0435\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u044c\u0446\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38594)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u043e\u043d\u0435\u0448\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38596)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0426\u0435\u043b\u0438\u043d\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38597)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u043e\u0433\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38598)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38599)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043b\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043b\u043c\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(388)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3882)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0413\u043e\u0440\u043d\u043e-\u0410\u043b\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38840)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0427\u043e\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38841)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0427\u0435\u043c\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38842)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041a\u043e\u0448-\u0410\u0433\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38843)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0422\u0443\u0440\u043e\u0447\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38844)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041c\u0430\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38845)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u041e\u043d\u0433\u0443\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38846)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0410\u043a\u0442\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38847)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38848)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u043e\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(38849)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u043b\u0442\u0430\u0439",
                city: "\u0428\u0435\u0431\u0430\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(390)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3902)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0431\u0430\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39031)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39032)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u0410\u0431\u0430\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39033)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0421\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39034)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39035)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0428\u0438\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39036)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u041a\u043e\u043f\u044c\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39041)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u0435\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39042)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0421\u0430\u044f\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39044)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0411\u0435\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39045)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0441\u043a\u0438\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39046)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0422\u0430\u0448\u0442\u044b\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39047)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u043a\u0430\u0441\u0438\u044f",
                city: "\u0410\u0431\u0430\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(391)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(391)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043d\u0443\u0441\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043c\u0435\u043b\u044c\u044f\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0442\u0443\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0434\u0440\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0442\u0443\u0437\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0440\u043c\u0430\u043a\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0443\u0448\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0440\u0442\u0438\u0437\u0430\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0442\u044b\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0433\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u0432\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0441\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u044f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u043b\u0430\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0430\u043b\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0431\u0438\u0440\u0438\u043b\u044e\u0441\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u043a\u0441\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0428\u0430\u0440\u044b\u043f\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0437\u0443\u043b\u044c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0430\u0437\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0436\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u043e\u0442\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u044e\u0445\u0442\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0423\u043b\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e-\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u0443\u0447\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0431\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0430\u0441\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0430\u043e\u0437\u0435\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0438\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0440\u043e\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u0418\u043d\u0433\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0433\u0430\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043b\u0430\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0440\u0431\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0442\u0430\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0430\u043d\u0430\u0432\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0430\u0439\u043a\u0438\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0440\u0430\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3919)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3919)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39190)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0440\u0443\u0445\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0443\u0434\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043d\u0435\u0436\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043d\u0438\u0441\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0437\u0430\u0447\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39197)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39198)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u041c\u0443\u0440\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39199)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u044f\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0443\u0445\u043e\u0431\u0443\u0437\u0438\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(394)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3942)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041a\u044b\u0437\u044b\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0430\u0440\u044b\u0433-\u0421\u0435\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0410\u043a-\u0414\u043e\u0432\u0443\u0440\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0427\u0430\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u0443\u0440\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0428\u0430\u0433\u043e\u043d\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0411\u0430\u0439-\u0425\u0430\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0430\u043c\u0430\u0433\u0430\u043b\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u042d\u0440\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041a\u044b\u0437\u044b\u043b-\u041c\u0430\u0436\u0430\u043b\u044b\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u044d\u044d\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0425\u0430\u043d\u0434\u0430\u0433\u0430\u0439\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0421\u0443\u0433-\u0410\u043a\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u0422\u043e\u043e\u0440\u0430-\u0425\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0422\u044b\u0432\u0430",
                city: "\u041c\u0443\u0433\u0443\u0440-\u0410\u043a\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(395)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3952)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3953)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0440\u0430\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u043b\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0418\u043b\u0438\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0442\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u044f\u043d\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0445\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0447\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041e\u0440\u0434\u044b\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0439\u043a\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u043e\u043b\u044c\u0435-\u0421\u0438\u0431\u0438\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u044e\u0434\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0423\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043c\u0445\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0433\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043d\u0443\u043a\u0443\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(3955)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0433\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043b\u0435\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0433\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043b\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0438\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0435\u0443\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0430\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0431\u043e\u0433\u0430\u0447\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0434\u0430\u0439\u0431\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0437\u0430\u0447\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0439\u0448\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0442\u0443\u043b\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0443\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a-\u0418\u043b\u0438\u043c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(39569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0440\u043a\u0443\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(401)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4012)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044f\u0445\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0451\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0441\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0441\u0442\u0435\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0433\u0440\u0430\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u043e\u043d\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0440\u0430\u0442\u0438\u043e\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0430\u0432\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u0435\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u0430\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(40164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0437\u043d\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(411)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4112)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u042f\u043a\u0443\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0435\u0440\u0434\u0438\u0433\u0435\u0441\u0442\u044f\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0412\u0438\u043b\u044e\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0412\u0435\u0440\u0445\u043d\u0435\u0432\u0438\u043b\u044e\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u044e\u0440\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0443\u043d\u0442\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041c\u0438\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041b\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041e\u043b\u0451\u043a\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u041c\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0410\u043c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041c\u0430\u0439\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0410\u043b\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u0435\u0440\u044e\u043d\u0433\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0425\u043e\u043d\u0443\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u0443\u0440\u0430\u043f\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u042b\u0442\u044b\u043a-\u041a\u044e\u0451\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0425\u0430\u043d\u0434\u044b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u041d\u0435\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0417\u044b\u0440\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0440\u0435\u0434\u043d\u0435\u043a\u043e\u043b\u044b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0427\u043e\u043a\u0443\u0440\u0434\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0435\u043b\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0430\u0442\u0430\u0433\u0430\u0439-\u0410\u043b\u044b\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u043e\u0440\u043e\u0433\u043e\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041d\u0430\u043c\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0430\u043d\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0416\u0438\u0433\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0411\u0430\u0442\u0430\u0433\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0414\u0435\u043f\u0443\u0442\u0430\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0422\u0438\u043a\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u0421\u0430\u0441\u043a\u044b\u043b\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u043a\u0443\u0442\u0438\u044f",
                city: "\u041e\u043b\u0435\u043d\u0451\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(413)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4132)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0433\u043e\u0434\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u041e\u043c\u0447\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0441\u0443\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0441\u0443\u043a\u0447\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0439\u043c\u0447\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0433\u0430\u0434\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u0432\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(415)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4152)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u043b\u0438\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0411\u043e\u043b\u044c\u0448\u0435\u0440\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043b\u044c\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0438\u043b\u044e\u0447\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0431\u043e\u043b\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u0433\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0438\u043b\u044e\u0447\u0438\u043d\u0441\u043a-3",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u0425\u0430\u0439\u0440\u044e\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043b\u044e\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042d\u0441\u0441\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u043b\u0430\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u043b\u0438\u0447\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0441\u0441\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0437\u044b\u0440\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(416)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4162)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a", "\u0411\u043b\u0430\u0433\u043e\u0432\u0435\u0449\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(41631)2-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(41632)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(41633)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0439\u0447\u0438\u0445\u0438\u043d\u0441\u043a",
                operator: "\u0422\u0440\u0430\u043d\u0441\u0441\u0432\u044f\u0437\u044c\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(41634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0440\u0435\u0439\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41641)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0433\u043e\u0440\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41642)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u044b\u0448\u0435\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0437\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u043d\u0435\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0435\u043c\u0434\u0436\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0439\u0447\u0438\u0445\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0445\u0430\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41649)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043c\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0433\u0434\u0430\u0433\u0430\u0447\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043a\u043e\u0432\u043e\u0440\u043e\u0434\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0435\u043c\u0434\u0436\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044b\u043d\u0434\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u0439\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(421)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4212)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a-\u043d\u0430-\u0410\u043c\u0443\u0440\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(41636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u043c\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0438\u0442\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0430\u044f \u0413\u0430\u0432\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0445\u043e\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043c\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u043c\u0438\u043a\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0438\u043c. \u041f\u043e\u043b\u0438\u043d\u044b \u041e\u0441\u0438\u043f\u0435\u043d\u043a\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u044f\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0433\u0434\u043e\u043c\u044b\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u044f\u0437\u0435\u043c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0435\u0440\u0435\u044f\u0441\u043b\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0438\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4217)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0425\u0430\u0431\u0430\u0440\u043e\u0432\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a-\u043d\u0430-\u0410\u043c\u0443\u0440\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(423)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043b\u0430\u0434\u0438\u0432\u043e\u0441\u0442\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0412\u043e\u043b\u044c\u043d\u043e-\u041d\u0430\u0434\u0435\u0436\u0434\u0438\u043d\u0441\u043a\u043e\u0435", "\u0420\u0430\u0437\u0434\u043e\u043b\u044c\u043d\u043e\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(42335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u041a\u0430\u043c\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0442\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0424\u043e\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4234)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0441\u0443\u0440\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0425\u043e\u0440\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043c\u0435\u043d\u044c-\u0420\u044b\u0431\u043e\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a-\u0414\u0430\u043b\u044c\u043d\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0441\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0443\u0447\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u043e\u043a\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4236)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u041d\u0430\u0445\u043e\u0434\u043a\u0430", "\u041f\u043e\u0440\u0442 \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(42361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0441\u0435\u043d\u044c\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043d\u0443\u0447\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0440\u0442\u0438\u0437\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e-\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u042f\u043a\u043e\u0432\u043b\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0427\u0443\u0433\u0443\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0435\u0440\u043d\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0432\u0430\u043b\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u043b\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0437\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(424)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4242)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u043d\u043e-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0440\u043e\u043d\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u043b\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a-\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0441\u0430\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0438\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0430\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0433\u043b\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043c\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u044b\u043c\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u0438\u0440\u043d\u044b\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e-\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0445\u0430\u043b\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u043d\u043e-\u041a\u0443\u0440\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(426)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42622)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0438\u0440\u043e\u0431\u0438\u0434\u0436\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u0438\u0434\u043e\u0432\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043c\u0443\u0440\u0437\u0435\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0415\u0432\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043b\u0443\u0447\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(427)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42722)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0410\u043d\u0430\u0434\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0423\u0433\u043e\u043b\u044c\u043d\u044b\u0435 \u041a\u043e\u043f\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0435\u0440\u0438\u043d\u0433\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u042d\u0433\u0432\u0435\u043a\u0438\u043d\u043e\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041f\u0440\u043e\u0432\u0438\u0434\u0435\u043d\u0438\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041b\u0430\u0432\u0440\u0435\u043d\u0442\u0438\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041f\u0435\u0432\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u0411\u0438\u043b\u0438\u0431\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(42739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u043a\u043e\u0442\u0441\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433",
                city: "\u041c\u044b\u0441 \u0428\u043c\u0438\u0434\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(471)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4712)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u0447\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0443\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u0448\u0435\u0447\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0441\u0442\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u044b\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u043e\u043b\u0434\u0430\u0442\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043c\u0443\u0442\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044c\u0433\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043e\u044f\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u044f\u043c\u0438\u0446\u044b\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0430\u0442\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0438\u0433\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u0432\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0435\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432-\u041b\u044c\u0433\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043e\u043b\u043e\u0442\u0443\u0445\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u043d\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043d\u0442\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u044b\u0448\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0441\u0442\u043e\u0440\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0448\u0435\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043c\u0438\u0441\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(472)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4722)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u043e\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0439 \u041e\u0441\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u043a\u043e\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u043b\u0443\u0439\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0439\u0434\u0435\u043b\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0432\u0435\u043d\u044c\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0431\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u0445\u043e\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043a\u0438\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u0431\u0435\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4725)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u044b\u0439 \u041e\u0441\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0430\u0439\u0432\u043e\u0440\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0435\u043b\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u042f\u0440\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(473)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u043e\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u0430\u044f \u0423\u0441\u043c\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0425\u0430\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u0440\u0442\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u0438\u0431\u0430\u043d\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0431\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043b\u043e\u0432\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0445\u043e\u043f\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0433\u043b\u0435\u0431\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041c\u0430\u043c\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u0431\u044c\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0442\u0443\u0440\u043b\u0438\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0432\u043e\u0440\u043e\u043d\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u0443\u0447\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043d\u0442\u0435\u043c\u0438\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0435\u0434\u0435\u0432\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u0445\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0421\u0435\u043c\u0438\u043b\u0443\u043a\u0438", "\u0421\u0435\u043c\u0438\u043b\u0443\u043a\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(47374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u043f\u044c\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0433\u043e\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0432\u043e\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47391)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47394)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0433\u043e\u0440\u0435\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47395)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u0432\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u0440\u043e\u043d\u0435\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0441\u043e\u0448\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(474)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4742)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043f\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47461)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u044f\u0437\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47462)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0431\u0440\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0431\u0440\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47465)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47466)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u0435\u0434\u044f\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47467)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47468)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0433\u043e\u0440\u0443\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47469)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47471)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0434\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u043c\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u0431\u0443\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043f\u043b\u044b\u0433\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47476)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u043d\u043e\u0432\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47477)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043b\u0435\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47478)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0438\u043f\u0435\u0446\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0437\u043c\u0430\u043b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(475)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4752)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0431\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0441\u0441\u043a\u0430\u0437\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u0448\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043d\u0434\u0430\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0435\u0440\u0434\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0441\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u044e\u0440\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0447\u0443\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0447\u043a\u0430\u043f\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432\u043a\u0430 \u0412\u0442\u043e\u0440\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043d\u0436\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0447\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0436\u0430\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0442\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043a\u0430\u0440\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0432\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(47559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u043c\u0431\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043c\u0451\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(481)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4812)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0447\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0437\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u043c\u044f\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0433\u0430\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0451\u043c\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0434\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c-\u0416\u0438\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0438\u0441\u043b\u0430\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0434\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0444\u043e\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u0446\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u0440\u043e\u0433\u043e\u0431\u0443\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u044c\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u043c\u0438\u0434\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043d\u0430\u0441\u0442\u044b\u0440\u0449\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0438\u043d\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0448\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0445\u043e\u0432\u0449\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u043c\u043e\u043b\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0434\u044b\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(482)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4822)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0432\u0435\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0436\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0436\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0448\u043d\u0438\u0439 \u0412\u043e\u043b\u043e\u0447\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0430\u0448\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043c\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0425\u043e\u043b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u043e\u0433\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0438\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u0435\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043d\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u044f\u0437\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48250)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48251)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0440\u0436\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0441\u0430\u0442\u0438\u0445\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0434\u043e\u043c\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0432\u0448\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0435\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0445\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0443\u0431\u0446\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0441\u044c\u0435\u0433\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043f\u0430\u0434\u043d\u0430\u044f \u0414\u0432\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043b\u0438\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48267)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0434\u0440\u0435\u0430\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0440\u043e\u043f\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48269)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u0438\u0436\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0441\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043d\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0430\u0440\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0435\u0441\u043e\u0432\u0430 \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043b\u043e\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0438\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(483)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4832)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u0440\u044f\u043d\u0441\u043a", "\u0421\u0435\u043b\u044c\u0446\u043e", "\u0411\u0435\u043b\u044b\u0435 \u0411\u0435\u0440\u0435\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(48330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u0430\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0433\u043d\u0435\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u0440\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0414\u044f\u0442\u044c\u043a\u043e\u0432\u043e", "\u0424\u043e\u043a\u0438\u043d\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(48334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0443\u043a\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0430\u0447\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0435\u0442\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0433\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u0434\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0433\u043e\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0432\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0437\u044b\u0431\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0440\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0435\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u0434\u0443\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043d\u0435\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u0443\u0431\u0447\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0435\u043c\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043a\u043e\u0442\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043c\u0430\u0440\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0411\u0440\u044f\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043b\u044b\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(484)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4842)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043e\u044f\u0440\u043e\u0441\u043b\u0430\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0443\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0434\u044b\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0434\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0443\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0445\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0435\u0440\u0437\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48438)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0431\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48438)4-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48438)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0431\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u043c\u044b\u0448\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0437\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0434\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0437\u0434\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u0449\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u043c\u0438\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0431\u044b\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0437\u043d\u043e\u0441\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0445\u0438\u043d\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0441\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u0430\u0441\u0442\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441-\u0414\u0435\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u0443\u0436\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0442\u043b\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(485)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4852)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043a\u0440\u0430\u0441\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0433\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0442\u0430\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432 \u042f\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0441\u043b\u0430\u0432\u043b\u044c-\u0417\u0430\u043b\u0435\u0441\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u0438\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0438\u0441\u043e\u0433\u043b\u0435\u0431\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0421\u0435\u043b\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u0438\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u044b\u0448\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0440\u0435\u0439\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0448\u0435\u0445\u043e\u043d\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0439 \u041d\u0435\u043a\u043e\u0443\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0435\u0447\u0438\u0441\u0442\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4855)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u042f\u0440\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(486)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4862)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041e\u0440\u0451\u043b", "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(48640)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48642)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u0442\u044b\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u043e\u043c\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0431\u043b\u044b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043c\u0438\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0446\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u044b\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043b\u0435\u0433\u043e\u0449\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48649)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "\u041c\u0422\u0421",
                desc: "\u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u044b \u0441 \u0437\u043e\u043d\u043e\u0432\u044b\u043c\u0438 \u043d\u043e\u043c\u0435\u0440\u0430\u043c\u0438"
            }, {
                mask: "+38(48662)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0417\u0430\u0440\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0440\u043e\u0441\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0441\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48672)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043b\u0433\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48673)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48674)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043f\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48675)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043b\u0430\u0437\u0443\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48676)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0432\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48677)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u0432\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48678)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043c\u0443\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48679)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043e\u0430\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(487)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4872)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0437\u043b\u043e\u0432\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0441\u0435\u043d\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043e\u043a\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043c\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0434\u043e\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0444\u0440\u0435\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0440\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043d\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043d\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48751)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0435\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48752)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u0430\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48753)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48754)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0435\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48755)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0451\u043f\u043b\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48756)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48761)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0438\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48762)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043c\u043e\u0441\u043a\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48763)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0432\u043e\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48766)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48767)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(48768)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0443\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(491)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4912)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0420\u044f\u0437\u0430\u043d\u044c", "\u0421\u043e\u043b\u043e\u0442\u0447\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(49130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0441\u0438\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044f\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a-\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u044b\u0431\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0447\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043c\u0438\u0447\u0443\u0440\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441-\u041a\u043b\u0435\u043f\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0440\u0430\u0431\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u043c\u0438\u0448\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0442\u0435\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0442\u044f\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u043e\u0436\u0438\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043f\u043e\u0436\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0445\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0445\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043a\u043e\u043f\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u043e\u0441\u043b\u0430\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u044f\u0437\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e-\u041d\u0435\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(492)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4922)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0437\u0434\u0430\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u043e\u0433\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u0430\u044f \u0413\u043e\u0440\u0431\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0436\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0445\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u0441\u044c-\u0425\u0440\u0443\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0431\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49243)2-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0443\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49243)6-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044c\u0447\u0443\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u0435\u0432-\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0435\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u0448\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0434\u0443\u0436\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(493)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4932)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u0448\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u0435\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0434\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u0435\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0432\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0443\u0440\u043c\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0439\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0447\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u044f\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041b\u0430\u043d\u0434\u0435\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u043e\u0435-\u0425\u043e\u0432\u0430\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0438\u0447\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0432\u0440\u0438\u043b\u043e\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0418\u0432\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0436\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(494)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(4942)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49430)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043d\u0442\u0440\u043e\u043f\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0440\u0435\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0435-\u043d\u0430-\u0412\u043e\u043b\u0433\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0434\u0438\u0441\u043b\u0430\u0432\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0441\u0430\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49435)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u0438\u0433\u0430\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u043b\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49440)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0444\u0435\u043d\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0445\u043b\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u0433\u0440\u0438\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043a\u0430\u0440\u044c\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043d\u0442\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0435\u043e\u0440\u0433\u0438\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043d\u0430\u0437\u044b\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0445\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0432\u0430\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u044b\u0449\u0443\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(49453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u043e\u0441\u0442\u0440\u043e\u043c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(495)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(495)323-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)323-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)338-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u0440\u0435\u043d\u0442\u0433\u0435\u043d",
                operator: "\u041c\u0413\u0422\u0421",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+38(495)339-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u0440\u0435\u043d\u0442\u0433\u0435\u043d",
                operator: "\u041c\u0413\u0422\u0421",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+38(495)355-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430",
                operator: "\u041e\u0410\u041e \xab\u0413\u0430\u0437\u043f\u0440\u043e\u043c\u0441\u0432\u044f\u0437\u044c\xbb",
                desc: ""
            }, {
                mask: "+38(495)408-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)439-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: "\u0447\u0430\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440\u043e\u0432 \u0410\u0422\u0421"
            }, {
                mask: "+38(495)50#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044e\u0431\u0435\u0440\u0446\u044b",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)500-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)51#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041a\u043e\u0440\u043e\u043b\u0451\u0432", "\u042e\u0431\u0438\u043b\u0435\u0439\u043d\u044b\u0439" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)52#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0411\u0430\u043b\u0430\u0448\u0438\u0445\u0430", "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0439", "\u0420\u0435\u0443\u0442\u043e\u0432" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)541-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)542-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)543-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)544-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)545-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)546-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)546-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)546-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430" ],
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)546-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "\u0420\u043e\u0441\u0442\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0441\u043e\u0432\u0445\u043e\u0437\u0430 \u0438\u043c. \u041b\u0435\u043d\u0438\u043d\u0430",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0441\u043e\u0432\u0445\u043e\u0437\u0430 \u0438\u043c. \u041b\u0435\u043d\u0438\u043d\u0430", "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u043e\u0433\u043e", "\u0413\u043e\u0440\u043a\u0438 \u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0435" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041f\u043e\u0441\u0435\u043b\u043e\u043a \u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u043e\u0433\u043e", "\u0413\u043e\u0440\u043a\u0438 \u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0435" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)548-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0412\u0438\u0434\u043d\u043e\u0435",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: "\u043f\u0440\u043e\u043c\u0437\u043e\u043d\u0430"
            }, {
                mask: "+38(495)549-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439", "\u043f\u043e\u0441. \u041d\u043e\u0432\u043e-\u0414\u0440\u043e\u0436\u0436\u0438\u043d\u043e", "\u043f\u043e\u0441. \u0418\u0437\u043c\u0430\u0439\u043b\u043e\u0432\u043e", "\u043f\u043e\u0441. \u0411\u0443\u043b\u0430\u0442\u043d\u0438\u043a\u043e\u0432\u043e", "\u043f\u043e\u0441. \u0414\u0443\u0431\u0440\u043e\u0432\u0441\u043a\u0438\u0439", "\u043f\u043e\u0441. \u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442\u0430 \u0421\u0430\u0434\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)55#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044e\u0431\u0435\u0440\u0446\u044b",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)552-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044b\u0442\u043a\u0430\u0440\u0438\u043d\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)555-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u044b\u0442\u043a\u0430\u0440\u0438\u043d\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)56#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)57#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041a\u043e\u0440\u043e\u043b\u0451\u0432", "\u041c\u044b\u0442\u0438\u0449\u0438", "\u042e\u0431\u0438\u043b\u0435\u0439\u043d\u044b\u0439" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)573-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0425\u0438\u043c\u043a\u0438",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)576-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)577-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041b\u043e\u0431\u043d\u044f",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)578-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u041b\u043e\u0431\u043d\u044f", "\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0430\u044d\u0440\u043e\u043f\u043e\u0440\u0442 \xab\u0428\u0435\u0440\u0435\u043c\u0435\u0442\u044c\u0435\u0432\u043e\xbb" ],
                operator: "\u041f\u043e\u0440\u0442-\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)579-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: [ "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439", "\u041b\u043e\u0431\u043d\u044f" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(495)58#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u0425\u0438\u043c\u043a\u0438",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)585-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)589-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u041c\u0435\u0433\u0430\u0444\u043e\u043d", "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444" ],
                desc: ""
            }, {
                mask: "+38(495)59#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041e\u0434\u0438\u043d\u0446\u043e\u0432\u043e",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(495)597-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430 \u0438 \u0431\u043b\u0438\u0436\u043d\u0435\u0435 \u041f\u043e\u0434\u043c\u043e\u0441\u043a\u043e\u0432\u044c\u0435",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: [ "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444", "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c" ],
                desc: ""
            }, {
                mask: "+38(496)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)20#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043b\u0434\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)21#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)22#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043c\u0438\u0442\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)25#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0451\u043b\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)26#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)28#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0442\u043e\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)30#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0410\u041e \u041a\u0430\u043b\u0438\u0442\u0430-\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)31#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0442\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)34#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u043e-\u0424\u043e\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)36#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u043a\u043e\u043b\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)37#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)38#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0436\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)40#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0433\u043e\u0440\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)41#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0417\u0443\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)42#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0435\u0445\u043e\u0432\u043e-\u0417\u0443\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)43#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)44#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)45#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u0443\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)46#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)51#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0433\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)52#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u043e\u0433\u043e\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)53#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)54#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)55#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)56#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0429\u0435\u043b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)57#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u0441\u0442\u0430\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)61#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u043e\u043c\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)63#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0445\u043e\u0432\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)64#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0443\u043f\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)66#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0440\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)67#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0435\u0431\u0440\u044f\u043d\u044b\u0435 \u041f\u0440\u0443\u0434\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)69#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0438\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)70#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)72#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)73#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)75#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)76#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)77#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u043f\u0443\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(496)79#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043c\u043e\u0434\u0435\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)48#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0416\u0443\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)54#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: [ "\u0412\u0438\u0434\u043d\u043e\u0435", "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d" ],
                operator: "\u0426\u0435\u043d\u0442\u0440\u0422\u0435\u043b\u0435\u043a\u043e\u043c",
                desc: ""
            }, {
                mask: "+38(498)617-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: [ "\u0413\u0430\u0437\u043e\u043f\u0440\u043e\u0432\u043e\u0434", "\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440\u043a\u0430" ],
                operator: "\u0417\u0410\u041e \xab\u0413\u0430\u0437\u0442\u0435\u043b\u0435\u043a\u043e\u043c\xbb",
                desc: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d"
            }, {
                mask: "+38(498)657-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0420\u0430\u0437\u0432\u0438\u043b\u043a\u0430",
                operator: "\u041e\u041e\u041e \xab\u0413\u0430\u0437\u043f\u0440\u043e\u043c \u0441\u0432\u044f\u0437\u044c\xbb",
                desc: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0440\u0430\u0439\u043e\u043d"
            }, {
                mask: "+38(498)664-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0434\u043e\u0440\u043e\u0436\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)68#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u041b\u043e\u0431\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)713-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(498)744-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u0441\u043e\u043f\u0430\u0440\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u0449\u0438\u0442\u043d\u044b\u0439 \u043f\u043e\u044f\u0441 \u041c\u043e\u0441\u043a\u0432\u044b",
                city: "\u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(499)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(499)39#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: ""
            }, {
                mask: "+38(499)50#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0422\u0435\u043b\u0435\u0433\u0440\u0430\u0444",
                desc: ""
            }, {
                mask: "+38(499)755-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0441\u043a\u0432\u0430",
                city: "\u041c\u043e\u0441\u043a\u0432\u0430",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: ""
            }, {
                mask: "+38(811)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8112)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0441\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0434\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0440\u0443\u0433\u0438 \u041a\u0440\u0430\u0441\u043d\u044b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043b\u044e\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0440\u0445\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0434\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043f\u043e\u0447\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043a\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0431\u0435\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0436\u0430\u043d\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0441\u0442\u043e\u0448\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0440\u0436\u0435\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u043e\u043a\u043e\u043b\u044c\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0448\u043a\u0438\u043d\u0441\u043a\u0438\u0435 \u0413\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u044b\u0442\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0447\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043d\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0432\u044f\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0435 \u041b\u0443\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(812)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(813)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0441\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u0440\u043e\u0432\u0441\u043a", "\u0428\u043b\u0438\u0441\u0441\u0435\u043b\u044c\u0431\u0443\u0440\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u043e\u043b\u0445\u043e\u0432", "\u041d\u043e\u0432\u0430\u044f \u041b\u0430\u0434\u043e\u0433\u0430", "\u0421\u044f\u0441\u044c\u0441\u0442\u0440\u043e\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0434\u0435\u0439\u043d\u043e\u0435 \u041f\u043e\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0411\u043e\u043a\u0441\u0438\u0442\u043e\u0433\u043e\u0440\u0441\u043a", "\u041f\u0438\u043a\u0430\u043b\u0451\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0438\u0445\u0432\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u0440\u0438\u0448\u0438", "\u0411\u0443\u0434\u043e\u0433\u043e\u0449\u044c" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439 \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u0441\u0435\u0432\u043e\u043b\u043e\u0436\u0441\u043a", "\u0422\u043e\u043a\u0441\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0413\u0430\u0442\u0447\u0438\u043d\u0430", "\u0412\u044b\u0440\u0438\u0446\u0430", "\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u0440" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0441\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u0430\u043d\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041a\u0438\u043d\u0433\u0438\u0441\u0435\u043f\u043f", "\u0418\u0432\u0430\u043d\u0433\u043e\u0440\u043e\u0434" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043c\u043e\u043d\u043e\u0441\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0412\u044b\u0431\u043e\u0440\u0433", "\u0412\u044b\u0441\u043e\u0446\u043a", "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a", "\u0421\u0432\u0435\u0442\u043e\u0433\u043e\u0440\u0441\u043a" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(814)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8142)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0435\u0442\u0440\u043e\u0437\u0430\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u0440\u0442\u0430\u0432\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u044f\u0440\u0442\u0441\u0438\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0425\u0435\u043b\u044e\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0443\u0441\u043a\u0435\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0439\u043a\u043a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0425\u0430\u0430\u043f\u0430\u043b\u0430\u043c\u043f\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u0430\u043b\u0430\u043c\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81430)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0417\u0430\u043e\u0437\u0451\u0440\u043d\u044b\u0439", "\u041b\u0430\u043c\u0431\u0435\u0440\u0433", "\u0421\u043e\u0440\u0442\u0430\u0432\u0430\u043b\u0430", "\u0425\u044e\u043c\u043f\u0435\u043b\u044f" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0435\u0433\u0435\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0447\u043a\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041e\u043b\u0435\u043d\u0438\u0439", "\u041f\u0435\u0440\u0442\u043e\u0437\u0435\u0440\u043e", "\u0427\u0435\u0440\u043d\u044b\u0439 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0430\u043b\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u0434\u043e\u0437\u0435\u0440\u043e", "\u0418\u0434\u0435\u043b\u044c", "\u041a\u044f\u0440\u0433\u043e\u0437\u0435\u0440\u043e", "\u041f\u043e\u043f\u043e\u0432 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043c\u0435\u043d\u043d\u044b\u0439 \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u043b\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81431)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041d\u0430\u0434\u0432\u043e\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0438\u0442\u043a\u044f\u0440\u0430\u043d\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81433)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u044f\u0441\u043a\u0435\u043b\u044f", "\u0420\u0430\u0443\u0442\u0430\u043b\u0430\u0445\u0442\u0438", "\u0425\u0430\u0440\u043b\u0443", "\u0425\u0438\u0439\u0434\u0435\u043d\u0441\u0435\u043b\u044c\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81433)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0420\u044f\u0439\u043c\u044f\u043b\u044f", "\u0421\u0430\u043b\u043c\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81433)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0418\u043c\u043f\u0438\u043b\u0430\u0445\u0442\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81433)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u0435\u043f\u043f\u044f\u0441\u0438\u043b\u0442\u0430", "\u0423\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0435\u0434\u0432\u0435\u0436\u044c\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u043e\u043b\u0432\u0443\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u0443\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u043b\u0438\u043a\u0430\u044f \u0413\u0443\u0431\u0430", "\u0412\u0435\u043b\u0438\u043a\u0430\u044f \u041d\u0438\u0432\u0430", "\u041a\u0438\u0436\u0438", "\u041a\u043e\u0441\u043c\u043e\u0437\u0435\u0440\u043e", "\u041b\u0430\u043c\u0431\u0430\u0441\u0440\u0443\u0447\u0435\u0439", "\u0421\u0435\u043d\u043d\u0430\u044f \u0413\u0443\u0431\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0443\u043c\u0441\u0430", "\u041b\u0430\u0432\u0430\u0441 \u0413\u0443\u0431\u0430", "\u041b\u0443\u043c\u0431\u0443\u0448\u0438", "\u0427\u0435\u0431\u0438\u043d\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u043e\u0437\u0435\u0440\u043e", "\u0413\u0430\u0431\u0441\u0435\u043b\u044c\u0433\u0430", "\u0421\u043e\u0441\u043d\u043e\u0432\u043a\u0430", "\u0427\u0435\u043b\u043c\u0443\u0436\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)4-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041e\u0433\u043e\u0440\u0435\u043b\u044b\u0448\u0438", "\u0421\u0435\u0440\u0433\u0438\u0435\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)4-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0432\u0435\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)4-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0438\u043d\u0434\u0443\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81434)4-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0430\u0434\u0430\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041e\u043b\u043e\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u041e\u043b\u043e\u043d\u0435\u0446", "\u041a\u043e\u0432\u0435\u0440\u0430", "\u0420\u0435\u0447\u043d\u0430\u044f \u0421\u0435\u043b\u044c\u0433\u0430", "\u0421\u044f\u043d\u0434\u0435\u0431\u0430", "\u0422\u0443\u043b\u043e\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u043b\u0435\u043a\u0441\u0430\u043b\u0430", "\u041c\u0435\u0433\u0440\u0435\u0433\u0430", "\u0420\u044b\u043f\u0443\u0448\u043a\u0430\u043b\u0438\u0446\u0430", "\u0422\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0438\u0434\u043b\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0442\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81436)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0443\u0439\u0442\u0435\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0435\u043b\u043e\u043c\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-0#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043c\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0417\u043e\u043b\u043e\u0442\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u043e\u043b\u0435\u0436\u043c\u0430", "\u041b\u0430\u043f\u0438\u043d\u043e", "\u041b\u0435\u0445\u0442\u0430", "\u041c\u0430\u043b\u0435\u043d\u044c\u0433\u0430", "\u041d\u043e\u0432\u043e\u0435 \u041c\u0430\u0448\u043e\u0437\u0435\u0440\u043e", "\u041d\u044e\u0445\u0447\u0430", "\u0422\u0443\u043d\u0433\u0443\u0437\u0430", "\u0425\u0432\u043e\u0439\u043d\u044b\u0439", "\u0428\u0443\u0435\u0440\u0435\u0446\u043a\u043e\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u0441\u043e\u0431\u0438\u0440\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0438\u0440\u0430\u043d\u0434\u043e\u0437\u0435\u0440\u043e", "\u041b\u0435\u0442\u043d\u0435\u0440\u0435\u0447\u0435\u043d\u0441\u043a\u0438\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81437)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0448\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u043e\u0443\u0445\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u0441\u0442\u0435\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0421\u043e\u0444\u043f\u043e\u0440\u043e\u0433", "\u0422\u0443\u043d\u0433\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u044f\u043e\u0437\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u043c\u0431\u0430\u0440\u043d\u044b\u0439", "\u041f\u043b\u043e\u0442\u0438\u043d\u0430", "\u0421\u043e\u0441\u043d\u043e\u0432\u044b\u0439", "\u042d\u043d\u0433\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)4-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u0443\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)4-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u043a\u0430\u043b\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81439)45#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u044d\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81450)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0430\u0445\u0434\u0435\u043d\u043f\u043e\u0445\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81450)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0418\u0445\u0430\u043b\u0430", "\u041c\u0438\u0439\u043d\u0430\u043b\u0430", "\u042f\u043a\u043a\u0438\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81450)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0443\u0440\u043a\u0438\u0451\u043a\u0438", "\u0425\u0438\u0439\u0442\u043e\u043b\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81450)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u042d\u043b\u0438\u0441\u0435\u043d\u0432\u0430\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0434\u043e\u043f\u043e\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u0434\u0440\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0413\u0438\u0440\u0432\u0430\u0441", "\u0422\u0438\u0432\u0434\u0438\u044f", "\u042d\u043b\u044c\u043c\u0443\u0441" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a\u0430\u044f \u0413\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0438\u0432\u0430\u0447", "\u041d\u043e\u0432\u0438\u043d\u043a\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u044f\u043f\u0435\u0441\u0435\u043b\u044c\u0433\u0430", "\u041d\u0435\u043b\u0433\u043e\u043c\u043e\u0437\u0435\u0440\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0447\u0435\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0435\u0440\u0451\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81451)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0421\u0443\u043d\u0430", "\u042f\u043d\u0438\u0448\u043f\u043e\u043b\u0435" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0443\u0434\u043e\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0411\u043e\u0447\u0438\u043b\u043e\u0432\u043e", "\u041a\u0430\u0440\u0448\u0435\u0432\u043e", "\u041a\u043e\u043b\u043e\u0432\u043e", "\u041a\u043e\u043b\u043e\u0434\u043e\u0437\u0435\u0440\u043e", "\u0421\u0435\u043c\u0451\u043d\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u0434\u043b\u0430", "\u041a\u0443\u0431\u043e\u0432\u043e", "\u041e\u043d\u0435\u0436\u0441\u043a\u0438\u0439", "\u0420\u0430\u0433\u043d\u0443\u043a\u0441\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041a\u0440\u0438\u0432\u0446\u044b", "\u041f\u0440\u0438\u0440\u0435\u0447\u043d\u044b\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0410\u0432\u0434\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0434\u043f\u043e\u0440\u043e\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81452)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u044f\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043b\u0435\u0432\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81454)5-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81454)5-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u042e\u0448\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81454)5-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u0439\u043d\u0438\u0446\u0430", "\u041a\u0443\u0443\u0441\u0438\u043d\u0438\u0435\u043c\u0438", "\u041b\u0443\u0443\u0441\u0430\u043b\u043c\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0443\u0435\u0437\u0435\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0422\u0438\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0435\u0431\u043e\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0438\u0433\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u043e\u043b\u043e\u043c\u0430", "\u041f\u0435\u043d\u0438\u043d\u0433\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043a\u043a\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u0434\u043c\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81455)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u043d\u0434\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u0440\u044f\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0438\u043b\u043b\u0430 \u0413\u043e\u0440\u0430", "\u0421\u043e\u0434\u0434\u0435\u0440", "\u0421\u044f\u043f\u0441\u044f", "\u042d\u0441\u0441\u043e\u0439\u043b\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0434\u043b\u043e\u0437\u0435\u0440\u043e", "\u041a\u0438\u043d\u0435\u043b\u0430\u0445\u0442\u0430", "\u041a\u043e\u0439\u0432\u0443\u0441\u0435\u043b\u044c\u0433\u0430", "\u041a\u043e\u043b\u0430\u0442\u0441\u0435\u043b\u044c\u0433\u0430", "\u0421\u0430\u0432\u0438\u043d\u043e\u0432\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0427\u0430\u043b\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041c\u0430\u0442\u0440\u043e\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0435 \u0412\u0430\u0436\u0438\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0440\u043e\u0448\u043d\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81456)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0432\u044f\u0442\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u0443\u043e\u044f\u0440\u0432\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0430\u0445\u043a\u043e\u043b\u0430\u043c\u0431\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041f\u043e\u0440\u043e\u0441\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041d\u0430\u0439\u0441\u0442\u0435\u043d\u044c\u044f\u0440\u0432\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0433\u0430\u0440\u0443\u0441", "\u0421\u0443\u043e\u0451\u043a\u0438", "\u0422\u043e\u0439\u0432\u043e\u043b\u0430", "\u0425\u0430\u0443\u0442\u043e\u0432\u0430\u0430\u0440\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0412\u0435\u0448\u043a\u0435\u043b\u0438\u0446\u0430", "\u041b\u043e\u0439\u043c\u043e\u043b\u0430", "\u041f\u0438\u0439\u0442\u0441\u0438\u0451\u043a\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)2-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041b\u0435\u043f\u043f\u044f\u0441\u044e\u0440\u044c\u044f", "\u0420\u0430\u0439\u043a\u043e\u043d\u043a\u043e\u0441\u043a\u0438", "\u0421\u0443\u0439\u0441\u0442\u0430\u043c\u043e" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81457)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041b\u0435\u043f\u043f\u044f\u043d\u0438\u0435\u043c\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0435\u043c\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0430\u043b\u0433\u0430\u043b\u0430\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-2#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u041f\u0430\u043d\u043e\u0437\u0435\u0440\u043e", "\u041f\u043e\u043d\u044c\u0433\u043e\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-4#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: [ "\u0410\u0432\u043d\u0435\u043f\u043e\u0440\u043e\u0433", "\u041a\u0440\u0438\u0432\u043e\u0439 \u041f\u043e\u0440\u043e\u0433" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0420\u0430\u0431\u043e\u0447\u0435\u043e\u0441\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-6#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0428\u043e\u043c\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-7#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u0443\u0437\u0435\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-8#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0411\u0430\u0431-\u0413\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81458)3-9#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0421\u043e\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81459)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u0441\u0442\u043e\u043c\u0443\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81459)9-3#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u041a\u043e\u043d\u0442\u043e\u043a\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81459)9-5#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0440\u0435\u043b\u0438\u044f",
                city: "\u0412\u043e\u043a\u043d\u0430\u0432\u043e\u043b\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(815)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8152)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043d\u0435\u0436\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u044f\u0440\u043d\u044b\u0435 \u0417\u043e\u0440\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043d\u0434\u0430\u043b\u0430\u043a\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0434\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043d\u0447\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0432\u0435\u0440\u043e\u043c\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u0432\u043e\u0437\u0435\u0440\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0434\u0436\u0438\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043b\u044f\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u0435\u043d\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u0417\u0430\u043f\u043e\u043b\u044f\u0440\u043d\u044b\u0439", "\u041d\u0438\u043a\u0435\u043b\u044c" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(81555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043f\u0430\u0442\u0438\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0441\u0442\u0440\u043e\u0432\u043d\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0443\u0440\u043c\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043c\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(816)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8162)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81650)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0440\u0444\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u043c\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u0420\u0443\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0448\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u043e\u043b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043b\u044c\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81657)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0443\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u0434\u043e\u0440\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81659)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0435\u0441\u0442\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81660)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u0430\u044f \u0412\u0438\u0448\u0435\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0442\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81662)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u0451\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u043e\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81665)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0443\u0434\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u043b\u0434\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u043e\u0439\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81668)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044e\u0431\u044b\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81669)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(817)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8172)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0433\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0430\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043a\u043e\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044e\u0436\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u043b\u0438\u043a\u0438\u0439 \u0423\u0441\u0442\u044e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u0442\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81740)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0447\u043c\u0435\u043d\u0433\u0441\u043a\u0438\u0439 \u0413\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u0433\u043e\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0434\u0443\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0431\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0436\u0435\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043b\u043e \u0438\u043c\u0435\u043d\u0438 \u0411\u0430\u0431\u0443\u0448\u043a\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u0442\u0435\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81747)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u044e\u043a\u0441\u0435\u043d\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81748)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u043d\u043e\u0433\u0441\u043a\u0438\u0439 \u0413\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81749)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0443\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81751)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043a\u0441\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81752)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044f\u043c\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81753)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81754)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81755)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0440\u044f\u0437\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81756)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u043e\u0437\u0435\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81757)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0438\u043b\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81758)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043f\u0438\u043d \u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81759)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0432\u0430\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(818)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81830)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0425\u043e\u043b\u043c\u043e\u0433\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81831)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81832)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041f\u043b\u0435\u0441\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81833)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041b\u0435\u0448\u0443\u043a\u043e\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81834)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041c\u0438\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81835)9-0#-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0421\u043e\u043b\u043e\u0432\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81836)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0412\u0435\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81837)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u0442\u043b\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81838)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u044f\u043d\u0434\u043e\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81839)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041e\u043d\u0435\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81840)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81841)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0430\u0440\u0433\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81842)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0421\u0435\u0432\u0435\u0440\u043e\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81843)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0418\u043b\u044c\u0438\u043d\u0441\u043a\u043e-\u041f\u043e\u0434\u043e\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81848)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041c\u0435\u0437\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81850)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u0440\u044f\u0436\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81851)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0428\u0435\u043d\u043a\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81852)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u043e\u0432\u043e\u0434\u0432\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81853)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041d\u0430\u0440\u044c\u044f\u043d-\u041c\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81854)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u0412\u0435\u0440\u0445\u043d\u044f\u044f \u0422\u043e\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81855)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81856)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u0430\u0440\u043f\u043e\u0433\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81858)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u041a\u043e\u043d\u043e\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(81859)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: [ "\u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c", "\u041d\u0435\u043d\u0435\u0446\u043a\u0438\u0439 \u0430\u0432\u0442\u043e\u043d\u043e\u043c\u043d\u044b\u0439 \u043e\u043a\u0440\u0443\u0433" ],
                city: "\u042f\u0440\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(820)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8202)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u043e\u0433\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0435\u043f\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(821)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8212)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0421\u044b\u043a\u0442\u044b\u0432\u043a\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u044b\u043b\u044c\u0433\u043e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u0438\u0437\u0438\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041a\u043e\u0439\u0433\u043e\u0440\u043e\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041e\u0431\u044a\u044f\u0447\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0410\u0439\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041a\u043e\u0440\u0442\u043a\u0435\u0440\u043e\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0442\u044c-\u041a\u0443\u043b\u043e\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e-\u041f\u0435\u0447\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0415\u043c\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0418\u0436\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0442\u044c-\u0426\u0438\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u041f\u0435\u0447\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0441\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0418\u043d\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u0443\u043a\u0442\u044b\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0421\u043e\u0441\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(82151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0412\u043e\u0440\u043a\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8216)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u043e\u043c\u0438",
                city: "\u0423\u0445\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(831)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u041d\u043e\u0432\u0433\u043e\u0440\u043e\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8313)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0437\u0435\u0440\u0436\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0438\u0432\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u043a\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0411\u043e\u043b\u0434\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83139)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0432\u043e\u043c\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0445\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0437\u0430\u043c\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u0432\u043e\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044b\u0441\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0442\u043b\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043d\u0448\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u0443\u043d\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043d\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0435\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0440\u0430\u043d\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u0411\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0432\u0435\u0440\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0440\u043d\u0430\u0432\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u043a\u0430\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043c\u0451\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0440\u043e\u0442\u044b\u043d\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043d\u044f\u0433\u0438\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u041c\u0443\u0440\u0430\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043b\u044c\u043d\u0435\u0435 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u043e\u043b\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83170)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: [ "\u041f\u0430\u0432\u043b\u043e\u0432\u043e", "\u0412\u043e\u0440\u0441\u043c\u0430" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(83172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0443\u0442\u0443\u0440\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83173)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83174)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83175)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0432\u0430\u0448\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83176)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043b\u0435\u0431\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83177)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044b\u043a\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83178)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0437\u043d\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83179)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0434\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83190)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0442\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0430\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83192)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u043b\u044c\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0447\u0435\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83194)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0430\u0437\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0430\u0433\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u043a\u043e\u044f\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83197)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041d\u0438\u0436\u0435\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0447\u0438\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(833)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8332)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83330)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u0431\u0430\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83331)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0444\u0430\u043d\u0430\u0441\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83332)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0430\u043b\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83333)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u043e\u0440\u043e\u0434\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83334)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u044f\u0442\u0441\u043a\u0438\u0435 \u041f\u043e\u043b\u044f\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83335)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0440\u0445\u043e\u0448\u0438\u0436\u0435\u043c\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83336)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u0440\u043e\u0432\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83337)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0443\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83338)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043b\u044c\u043c\u0435\u0437\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83339)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0436\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043a\u043d\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u0435\u043b\u044c\u043d\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043c\u0435\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u0431\u044f\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u043c\u044b\u0436",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0443\u0440\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0434\u043e\u0441\u0438\u043d\u043e\u0432\u0435\u0446",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83352)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043c\u0443\u0442\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043f\u0430\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0436\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043d\u0447\u0443\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0447\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u0440\u043e\u0432\u043e-\u0427\u0435\u043f\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043b\u043e\u0431\u043e\u0434\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u0436\u0443\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f \u0425\u043e\u043b\u0443\u043d\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u043b\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042e\u0440\u044c\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042f\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0438\u0440\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(834)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8342)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0421\u0430\u0440\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83431)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0440\u0434\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83432)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0421\u0442\u0430\u0440\u043e\u0435 \u0428\u0430\u0439\u0433\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83433)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0435\u043c\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83434)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0442\u044f\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83436)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u0411\u0435\u0440\u0435\u0437\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83437)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0427\u0430\u043c\u0437\u0438\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83438)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0420\u043e\u043c\u043e\u0434\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83439)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u043e\u0447\u043a\u0443\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83441)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041b\u044f\u043c\u0431\u0438\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0418\u0433\u043d\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0441\u043b\u043e\u0431\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0415\u043b\u044c\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u0435\u043c\u043d\u0438\u043a\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u0435\u043d\u044c\u0433\u0443\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0414\u0443\u0431\u0435\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83448)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u0430\u0434\u043e\u0448\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83449)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0418\u043d\u0441\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83451)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0420\u0443\u0437\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u041a\u043e\u0432\u044b\u043b\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0410\u0442\u044e\u0440\u044c\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0422\u043e\u0440\u0431\u0435\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u042f\u0432\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u043e\u0440\u0434\u043e\u0432\u0438\u044f",
                city: "\u0417\u0443\u0431\u043e\u0432\u0430 \u041f\u043e\u043b\u044f\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(835)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8352)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8352)7#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041d\u043e\u0432\u043e\u0447\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83530)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83531)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0410\u043b\u0430\u0442\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83532)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0411\u0430\u0442\u044b\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83533)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0430\u043d\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83534)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u043e\u0437\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83535)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0410\u043b\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83536)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0428\u0443\u043c\u0435\u0440\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83537)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0412\u0443\u0440\u043d\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83538)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0418\u0431\u0440\u0435\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83539)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0443\u0433\u0435\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041c\u043e\u0440\u0433\u0430\u0443\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041c\u0430\u0440\u0438\u0438\u043d\u0441\u043a\u0438\u0439 \u041f\u043e\u0441\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041f\u043e\u0440\u0435\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0423\u0440\u043c\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0426\u0438\u0432\u0438\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u0428\u0435\u043c\u0443\u0440\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u0434\u0440\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u043d\u0442\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u042f\u043b\u044c\u0447\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0443\u0432\u0430\u0448\u0438\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0435 \u0427\u0435\u0442\u0430\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(836)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8362)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0419\u043e\u0448\u043a\u0430\u0440-\u041e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83631)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u043e\u0437\u044c\u043c\u043e\u0434\u0435\u043c\u044c\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83633)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0421\u0435\u0440\u043d\u0443\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041c\u0430\u0440\u0438-\u0422\u0443\u0440\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041c\u043e\u0440\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041d\u043e\u0432\u044b\u0439 \u0422\u043e\u0440\u044a\u044f\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u0443\u0436\u0435\u043d\u0435\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041f\u0430\u0440\u0430\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83641)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041e\u0440\u0448\u0430\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83643)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u041a\u0438\u043b\u0435\u043c\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83644)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u042e\u0440\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(83645)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041c\u0430\u0440\u0438\u0439 \u042d\u043b",
                city: "\u0417\u0432\u0435\u043d\u0438\u0433\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)22#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0421\u0443\u0445\u0443\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)23#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0430\u0433\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0443\u0434\u0430\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)25#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u041e\u0447\u0430\u043c\u0447\u044b\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)26#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0422\u043a\u0443\u0430\u0440\u0447\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0443\u043b\u0440\u044b\u043f\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(840)28#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0431\u0445\u0430\u0437\u0438\u044f",
                city: "\u0413\u0430\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(841)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8412)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u043d\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0441\u0441\u043e\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0430\u0434\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0448\u043c\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0441\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u041a\u0430\u043c\u0435\u0448\u043a\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043b\u044b\u0448\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0434\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u043e\u043f\u0430\u0442\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043a\u0448\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043f\u0430\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0447\u0435\u043b\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u0436\u043d\u0438\u0439 \u041b\u043e\u043c\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u043c\u0435\u0442\u0447\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0437\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0438\u0449\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043c\u044b\u0448\u0435\u0439\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0443\u043d\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u043b\u0430\u044f \u0421\u0435\u0440\u0434\u043e\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u043e\u0432\u0447\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0432\u0435\u0440\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0434\u043e\u0431\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0441\u043d\u043e\u0432\u043e\u0431\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041f\u0435\u043d\u0437\u0435\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u043c\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(842)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8422)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041c\u0430\u0439\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0434\u0430\u043a\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u0430\u044f \u041c\u0430\u043b\u044b\u043a\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043d\u0433\u0438\u043b\u0435\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0435\u0440\u0435\u043d\u044c\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0438\u043c\u0438\u0442\u0440\u043e\u0432\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0437\u043e\u0432\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0441\u043f\u0430\u0441\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0430\u0434\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0439 \u0421\u044b\u0437\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84241)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043d\u0437\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0448\u043a\u0430\u0439\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0439\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u041d\u0430\u0433\u0430\u0442\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0440\u0441\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041a\u0443\u043b\u0430\u0442\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84253)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0440\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0448\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0423\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0443\u043b\u044c\u044f\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(843)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0437\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0427\u0438\u0441\u0442\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0441\u0443\u0431\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0443\u0440\u043b\u0430\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84346)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0435 \u041c\u0430\u0442\u0430\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u0433\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u0448\u0435\u0448\u043c\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0422\u044e\u043b\u044f\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0420\u044b\u0431\u043d\u0430\u044f \u0421\u043b\u043e\u0431\u043e\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84362)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u0433\u0430\u0442\u044b\u0435 \u0421\u0430\u0431\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u043a\u043c\u043e\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0413\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84366)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041f\u0435\u0441\u0442\u0440\u0435\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u043b\u0442\u0430\u0441\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0410\u0442\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u043b\u044c\u0448\u0438\u0435 \u041a\u0430\u0439\u0431\u0438\u0446\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u0434\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0422\u0435\u0442\u044e\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0421\u0442\u0430\u0440\u043e\u0435 \u0414\u0440\u043e\u0436\u0436\u0430\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043f\u0430\u0441\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u043c\u0441\u043a\u043e\u0435 \u0423\u0441\u0442\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041b\u0430\u0438\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0412\u0435\u0440\u0445\u043d\u0438\u0439 \u0423\u0441\u043b\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0427\u0435\u0440\u0435\u043c\u0448\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(844)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(844)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(844)70#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8443)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84442)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0440\u044e\u043f\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84443)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0445\u0430\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84444)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84445)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84446)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84447)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0430\u043d\u043d\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84452)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84453)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0443\u0434\u043d\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84454)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0440\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84455)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84456)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043b\u044c\u0445\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84457)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0448\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84458)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84461)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0430\u043d\u0438\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84462)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u043c\u044b\u043b\u0436\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84463)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84464)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0430\u0444\u0438\u043c\u043e\u0432\u0438\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84465)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0424\u0440\u043e\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84466)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u0435\u0442\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84467)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043b\u043e\u0432\u043b\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84468)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043e\u0434\u0438\u0449\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84472)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0430\u0447-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84473)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0443\u0440\u043e\u0432\u0438\u043a\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84474)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u043d\u044b\u0448\u043a\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84475)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84476)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0442\u0435\u043b\u044c\u043d\u0438\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84477)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0432\u0435\u0442\u043b\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84478)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0435\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84479)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0410\u0445\u0442\u0443\u0431\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84492)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0430\u043b\u043b\u0430\u0441\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84493)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0430\u0440\u0430\u044f \u041f\u043e\u043b\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84494)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84495)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0412\u043e\u043b\u0433\u043e\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u044b\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(845)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8452)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)5#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)7#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8453)9#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u042d\u043d\u0433\u0435\u043b\u044c\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0442\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0440\u043a\u0430\u0434\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0443\u0440\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0430\u0448\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u043e\u0439\u043b\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u044b\u0441\u044b\u0435 \u0413\u043e\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0442\u043a\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u044b\u0435 \u0411\u0443\u0440\u0430\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0442\u0438\u0449\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u041a\u0443\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84561)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0438\u0442\u0435\u0440\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84562)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0443\u0437\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0435\u0440\u0433\u0430\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84564)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0440\u0448\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u043a\u0440\u043e\u0443\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84566)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0442\u0435\u043f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84567)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0440\u043a\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84568)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84573)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0445\u043e\u0432\u043d\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84574)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0443\u0433\u0430\u0447\u0451\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84575)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0440\u0435\u043b\u044e\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84576)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0437\u0438\u043d\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84577)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u043e\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84578)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432 \u0413\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84579)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0432\u0430\u043d\u0442\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84591)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0437\u0430\u0440\u043d\u044b\u0439 \u041a\u0430\u0440\u0430\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u043b\u0442\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u0430\u043b\u044b\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84596)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u0440\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)300-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)302-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)303-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)309-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)31#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)33#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)34#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)37#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(846)9##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043c\u0430\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84630)5-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0436\u0441\u043a\u0438\u0439 \u0423\u0442\u0451\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0439\u0431\u044b\u0448\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84639)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043f\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8464)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8464)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8464)9#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u044b\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84646)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84647)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u0438\u0432\u043e\u043b\u0436\u044c\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84648)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0438\u0433\u043e\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84650)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u0448\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84651)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u043b\u043d\u043e-\u0412\u0435\u0440\u0448\u0438\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84652)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0435\u043d\u0442\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84653)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043b\u044f\u0432\u043b\u0438\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84654)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u0441\u0430\u043a\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84655)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u0440\u0433\u0438\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84656)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u0445\u0432\u0438\u0441\u0442\u043d\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84657)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84658)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043b\u0445\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84660)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u043b\u044c-\u0427\u0435\u0440\u043a\u0430\u0441\u0441\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84661)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0442\u0440\u0430\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84663)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0438\u043d\u0435\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84664)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0448\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84666)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0433\u0430\u0442\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84667)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u0440\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84670)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0435\u0444\u0442\u0435\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84671)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043b\u0435\u043a\u0441\u0435\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84672)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0427\u0435\u0440\u043d\u0438\u0433\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84673)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0413\u043b\u0443\u0448\u0438\u0446\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84674)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0442\u0440\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84675)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0430\u0440\u043c\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84676)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u0437\u0435\u043d\u0447\u0443\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84677)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0432\u043e\u0440\u043e\u0441\u0442\u044f\u043d\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(847)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84722)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042d\u043b\u0438\u0441\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0413\u043e\u0440\u043e\u0434\u043e\u0432\u0438\u043a\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0418\u043a\u0438-\u0411\u0443\u0440\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041b\u0430\u0433\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041c\u0430\u043b\u044b\u0435 \u0414\u0435\u0440\u0431\u0435\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041a\u0435\u0442\u0447\u0435\u043d\u0435\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041f\u0440\u0438\u044e\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84741)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0421\u0430\u0434\u043e\u0432\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84742)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0422\u0440\u043e\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84743)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u041a\u043e\u043c\u0441\u043e\u043c\u043e\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84744)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0426\u0430\u0433\u0430\u043d \u0410\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84745)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042f\u0448\u0430\u043b\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84746)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u042f\u0448\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84747)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u043b\u043c\u044b\u043a\u0438\u044f",
                city: "\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0426\u0430\u0440\u044b\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(848)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8482)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(84862)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0430\u043c\u0430\u0440\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0416\u0438\u0433\u0443\u043b\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(851)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8512)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0445\u0442\u0443\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u043d\u043e\u0442\u0430\u0435\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0418\u043a\u0440\u044f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u044b\u0437\u044f\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041b\u0438\u043c\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0425\u0430\u0440\u0430\u0431\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0451\u0440\u043d\u044b\u0439 \u042f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85171)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0440\u0438\u043c\u0430\u043d\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85172)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0410\u0441\u0442\u0440\u0430\u0445\u0430\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u0430\u0447\u0430\u043b\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(855)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8552)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8553)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043b\u044c\u043c\u0435\u0442\u044c\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u043d\u0434\u0435\u043b\u0435\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8555)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0438\u0436\u043d\u0435\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8555)4#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0438\u0436\u043d\u0435\u043a\u0430\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85551)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0433\u0440\u044b\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0442\u0430\u043d\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u043d\u0437\u0435\u043b\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0443\u0441\u043b\u044e\u043c\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0415\u043b\u0430\u0431\u0443\u0433\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0417\u0430\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0421\u0430\u0440\u043c\u0430\u043d\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u043c\u0430\u0434\u044b\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85569)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0432\u043b\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8557)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8557)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041d\u0430\u0431\u0435\u0440\u0435\u0436\u043d\u044b\u0435 \u0427\u0435\u043b\u043d\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85592)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0410\u0437\u043d\u0430\u043a\u0430\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85593)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0423\u0440\u0443\u0441\u0441\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85594)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0433\u0443\u043b\u044c\u043c\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(85595)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0422\u0430\u0442\u0430\u0440\u0441\u0442\u0430\u043d",
                city: "\u041b\u0435\u043d\u0438\u043d\u043e\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(861)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86130)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u043c\u0430\u0448\u0451\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86131)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u044b\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86133)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043d\u0430\u043f\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u0442\u044c-\u041b\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86137)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u043c\u0430\u0432\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86138)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u043e\u043f\u043e\u0442\u043a\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86140)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0423\u0441\u043f\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86141)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0435\u043b\u0435\u043d\u0434\u0436\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0440\u0435\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0440\u0438\u043c\u043e\u0440\u0441\u043a\u043e-\u0410\u0445\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86144)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041e\u0442\u0440\u0430\u0434\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u043d\u0438\u043d\u0433\u0440\u0430\u0434\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u043b\u0430\u0432\u044f\u043d\u0441\u043a-\u043d\u0430-\u041a\u0443\u0431\u0430\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0433\u0430\u043d\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0435\u043c\u0440\u044e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86149)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86150)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86151)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u0449\u0435\u0440\u0431\u0438\u043d\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043f\u0448\u0435\u0440\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86153)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0440\u043e\u043c\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u0430\u044f \u0413\u043b\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0435\u043b\u043e\u0440\u0435\u0447\u0435\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0440\u044e\u0445\u043e\u0432\u0435\u0446\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86157)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0412\u044b\u0441\u0435\u043b\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86158)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0431\u0438\u043b\u0438\u0441\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86159)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u043e\u0440\u044f\u0447\u0438\u0439 \u041a\u043b\u044e\u0447",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86160)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0443\u043b\u044c\u043a\u0435\u0432\u0438\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86161)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u044b\u043b\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86162)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86163)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043b\u0438\u043d\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u043d\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86165)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u043e\u043b\u0442\u0430\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86166)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0435\u0432\u0435\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86167)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0443\u0430\u043f\u0441\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86168)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0449\u0451\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86169)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0431\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8617)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0440\u043e\u0441\u0441\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86191)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u0430\u0432\u043b\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86192)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86193)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0430\u0432\u043a\u0430\u0437\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86195)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043a\u0443\u0431\u0430\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86196)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0422\u0438\u0445\u043e\u0440\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(862)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0410\u0448\u0435", "\u0412\u0430\u0440\u0434\u0430\u043d\u0435", "\u0413\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0430", "\u0413\u043e\u043b\u043e\u0432\u0438\u043d\u043a\u0430", "\u0421\u043e\u0447\u0438", "\u0425\u043e\u0441\u0442\u0430" ],
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)23#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "\u041c\u0422\u0421",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)24#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0434\u043b\u0435\u0440",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)247-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0434\u0435\u043f\u0441\u0442\u0430",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)252-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: [ "\u0414\u0430\u0433\u043e\u043c\u044b\u0441", "\u041b\u043e\u043e" ],
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)27#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0430\u0437\u0430\u0440\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(862)295-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0440\u0430\u0441\u043d\u043e\u0434\u0430\u0440\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "\u041c\u0435\u0433\u0430\u0424\u043e\u043d",
                desc: "\u0430\u0433\u043b\u043e\u043c\u0435\u0440\u0430\u0446\u0438\u044f \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0421\u043e\u0447\u0438"
            }, {
                mask: "+38(863)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(863)2##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(863)3##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0441\u0442\u043e\u0432-\u043d\u0430-\u0414\u043e\u043d\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8634)3#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8634)43-1#-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8634)6#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0433\u0430\u043d\u0440\u043e\u0433",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86340)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u0434\u0438\u043e\u043d\u043e\u0432\u043e-\u041d\u0435\u0441\u0432\u0435\u0442\u0430\u0439\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0430\u0442\u0432\u0435\u0435\u0432-\u041a\u0443\u0440\u0433\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u0437\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0446\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86347)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u043e\u043a\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86348)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0443\u0439\u0431\u044b\u0448\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86349)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0430\u043b\u0442\u044b\u0440\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8635)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0447\u0435\u0440\u043a\u0430\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86350)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0410\u043a\u0441\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86351)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0423\u0441\u0442\u044c-\u0414\u043e\u043d\u0435\u0446\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86353)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0451\u0448\u0435\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86354)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0442\u0430\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86355)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0432\u0435\u0440\u0435\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86356)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0435\u043c\u0438\u043a\u0430\u0440\u0430\u043a\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86357)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0430\u0433\u0430\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86358)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u0435\u0441\u0451\u043b\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86359)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0435\u0440\u043d\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8636)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0428\u0430\u0445\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86360)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u043e\u043b\u043e\u043c\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86361)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0413\u0443\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86363)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86364)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0437\u0430\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86365)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u043c\u0435\u043d\u0441\u043a-\u0428\u0430\u0445\u0442\u0438\u043d\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86367)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0421\u0443\u043b\u0438\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86368)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u043e\u043d\u0435\u0446\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86369)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041d\u043e\u0432\u043e\u0448\u0430\u0445\u0442\u0438\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86370)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0415\u0433\u043e\u0440\u043b\u044b\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86371)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0435\u043b\u0438\u043d\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86372)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0421\u0430\u043b\u044c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86373)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0435\u0441\u0447\u0430\u043d\u043e\u043a\u043e\u043f\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86374)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041f\u0440\u043e\u043b\u0435\u0442\u0430\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86375)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0440\u043b\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86376)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0438\u043c\u043e\u0432\u043d\u0438\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86377)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0414\u0443\u0431\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86378)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0417\u0430\u0432\u0435\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86379)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u0435\u043c\u043e\u043d\u0442\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86382)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043a\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86383)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u0435\u043b\u0430\u044f \u041a\u0430\u043b\u0438\u0442\u0432\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86384)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u043e\u0440\u043e\u0437\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86385)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u043b\u0435\u0440\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86386)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0440\u0430\u0441\u043e\u0432\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86387)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0427\u0435\u0440\u0442\u043a\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86388)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u0430\u0448\u0430\u0440\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86389)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041c\u0438\u043b\u044e\u0442\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8639)2#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0412\u043e\u043b\u0433\u043e\u0434\u043e\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86391)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0426\u0438\u043c\u043b\u044f\u043d\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86393)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86394)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0420\u043e\u043c\u0430\u043d\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86395)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u041c\u0430\u0440\u0442\u044b\u043d\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86396)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u041e\u0431\u043b\u0438\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86397)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u043e\u0441\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
                city: "\u0422\u0430\u0446\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(865)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8652)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86540)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0440\u0430\u0447\u0451\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86541)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86542)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u043f\u0430\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86543)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0432\u043e\u043a\u0443\u043c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86544)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0430\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86545)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0418\u0437\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86546)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u043e\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86547)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0432\u0435\u0442\u043b\u043e\u0433\u0440\u0430\u0434",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86548)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u0441\u0435\u043b\u0438\u0446\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86549)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86550)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u043e\u0447\u0443\u0431\u0435\u0435\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86552)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0417\u0435\u043b\u0435\u043d\u043e\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86553)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86554)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0432\u0438\u043d\u043d\u043e\u043c\u044b\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86555)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0414\u0438\u0432\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86556)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0441\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86557)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86558)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u0435\u0444\u0442\u0435\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86559)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0411\u0443\u0434\u0435\u043d\u043d\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86560)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0410\u0440\u0437\u0433\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86563)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0421\u0442\u0435\u043f\u043d\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86565)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0442\u043d\u044f\u044f \u0421\u0442\u0430\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(866)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8662)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041d\u0430\u043b\u044c\u0447\u0438\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86630)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0427\u0435\u0433\u0435\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86631)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041f\u0440\u043e\u0445\u043b\u0430\u0434\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86632)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0422\u0435\u0440\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86633)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041c\u0430\u0439\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86634)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0411\u0430\u043a\u0441\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86635)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041d\u0430\u0440\u0442\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86636)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u041a\u0430\u0448\u0445\u0430\u0442\u0430\u0443",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86637)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0417\u0430\u043b\u0443\u043a\u043e\u043a\u043e\u0430\u0436\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86638)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u041a\u0430\u0431\u0430\u0440\u0434\u0438\u043d\u043e-\u0411\u0430\u043b\u043a\u0430\u0440\u0438\u044f",
                city: "\u0422\u044b\u0440\u043d\u044b\u0430\u0443\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(867)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8672)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0412\u043b\u0430\u0434\u0438\u043a\u0430\u0432\u043a\u0430\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86731)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u043b\u0430\u0433\u0438\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86732)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u0440\u0434\u043e\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86733)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0414\u0438\u0433\u043e\u0440\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86734)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0427\u0438\u043a\u043e\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86735)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u042d\u043b\u044c\u0445\u043e\u0442\u043e\u0432\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86736)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u041c\u043e\u0437\u0434\u043e\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86737)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0411\u0435\u0441\u043b\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86738)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(86739)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u041e\u0441\u0435\u0442\u0438\u044f",
                city: "\u0410\u0440\u0445\u043e\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(871)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8712)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0440\u043e\u0437\u043d\u044b\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87132)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0417\u043d\u0430\u043c\u0435\u043d\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87134)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0412\u0435\u0434\u0435\u043d\u043e",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87135)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u0442\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87136)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0435\u043b\u043a\u043e\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87142)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u0447\u0445\u043e\u0439-\u041c\u0430\u0440\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87143)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041d\u0430\u0443\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87145)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0423\u0440\u0443\u0441-\u041c\u0430\u0440\u0442\u0430\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87146)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0428\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87147)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0410\u0440\u0433\u0443\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87148)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041d\u043e\u0436\u0430\u0439-\u042e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87152)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0413\u0443\u0434\u0435\u0440\u043c\u0435\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87154)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0421\u0435\u0440\u043d\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87155)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u041a\u0443\u0440\u0447\u0430\u043b\u043e\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87156)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: [ "\u0422\u043e\u043b\u0441\u0442\u043e\u0439-\u042e\u0440\u0442", "\u0421\u0442\u0430\u0440\u044b\u0435 \u0410\u0442\u0430\u0433\u0438" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(87164)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0427\u0435\u0447\u0435\u043d\u0441\u043a\u0430\u044f \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430",
                city: "\u0418\u0442\u0443\u043c-\u041a\u0430\u043b\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(872)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8722)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0445\u0430\u0447\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87230)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0421\u0435\u0440\u0433\u043e\u043a\u0430\u043b\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87231)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0430\u0441\u0430\u0432\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87232)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0440\u0430\u0431\u0443\u0434\u0430\u0445\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87233)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0443\u043d\u0437\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87234)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0438\u0437\u0438\u043b\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87235)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0433\u0430\u0440\u0430\u043c\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87236)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0441\u0443\u043c\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87237)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0443\u0439\u043d\u0430\u043a\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87238)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0430\u0434\u0436\u0430\u043b\u0438\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87239)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0438\u0437\u043b\u044f\u0440",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87240)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u0435\u0440\u0431\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87242)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u043b\u0430\u043a\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87243)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: [ "\u0422\u043f\u0438\u0433", "\u0410\u0433\u0443\u043b" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(87244)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0438\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87245)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0418\u0437\u0431\u0435\u0440\u0431\u0430\u0448",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87246)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0430\u0441\u043f\u0438\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87247)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0430\u0431\u0430\u044e\u0440\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87248)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041d\u043e\u0432\u043e\u043a\u0430\u044f\u043a\u0435\u043d\u0442",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87249)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0443\u0447\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87252)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041b\u0435\u0432\u0430\u0448\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87254)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0423\u0440\u043a\u0430\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87255)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0413\u0435\u0440\u0433\u0435\u0431\u0438\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87256)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u0435\u0440\u0435\u043a\u043b\u0438-\u041c\u0435\u043a\u0442\u0435\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87257)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0423\u043d\u0446\u0443\u043a\u0443\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87258)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0413\u0443\u043d\u0438\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87259)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0425\u0435\u0431\u0434\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87260)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u043a\u0443\u0448\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87261)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u0430\u0440\u0443\u043c\u043e\u0432\u043a\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87262)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87263)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u0445\u0442\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87264)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0420\u0443\u0442\u0443\u043b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87265)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0422\u043b\u044f\u0440\u0430\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87266)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0426\u0443\u0440\u0438\u0431",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87267)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041a\u0443\u043c\u0443\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87268)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0412\u0430\u0447\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87271)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u043e\u0442\u043b\u0438\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87272)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u041c\u0435\u0445\u0435\u043b\u044c\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87273)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0410\u0433\u0432\u0430\u043b\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87274)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0411\u0435\u0436\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87275)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0435 \u041e\u0433\u043d\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87276)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u042e\u0436\u043d\u043e-\u0421\u0443\u0445\u043e\u043a\u0443\u043c\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87279)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0414\u0430\u0433\u0435\u0441\u0442\u0430\u043d",
                city: "\u0414\u044b\u043b\u044b\u043c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(873)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8732)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041d\u0430\u0437\u0440\u0430\u043d\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87341)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041e\u0440\u0434\u0436\u043e\u043d\u0438\u043a\u0438\u0434\u0437\u0435\u0432\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87342)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041c\u0430\u043b\u0433\u043e\u0431\u0435\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87343)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u0414\u0436\u0435\u0439\u0440\u0430\u0445",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87344)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041a\u0430\u0440\u0430\u0431\u0443\u043b\u0430\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87345)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0418\u043d\u0433\u0443\u0448\u0435\u0442\u0438\u044f",
                city: "\u041c\u0430\u0433\u0430\u0441",
                operator: "",
                desc: ""
            }, {
                mask: "+38(877)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8772)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041c\u0430\u0439\u043a\u043e\u043f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87770)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041a\u043e\u0448\u0435\u0445\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87771)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0422\u0430\u0445\u0442\u0430\u043c\u0443\u043a\u0430\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87772)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0410\u0434\u044b\u0433\u0435\u0439\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87773)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0425\u0430\u043a\u0443\u0440\u0438\u043d\u043e\u0445\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87777)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0422\u0443\u043b\u044c\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87778)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u041a\u0440\u0430\u0441\u043d\u043e\u0433\u0432\u0430\u0440\u0434\u0435\u0439\u0441\u043a\u043e\u0435",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87779)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u0410\u0434\u044b\u0433\u0435\u044f",
                city: "\u0413\u0438\u0430\u0433\u0438\u043d\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(878)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8782)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0427\u0435\u0440\u043a\u0435\u0441\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87870)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0410\u0434\u044b\u0433\u0435-\u0425\u0430\u0431\u043b\u044c",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87872)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: [ "\u0422\u0435\u0431\u0435\u0440\u0434\u0430", "\u0414\u043e\u043c\u0431\u0430\u0439" ],
                operator: "",
                desc: ""
            }, {
                mask: "+38(87873)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0425\u0430\u0431\u0435\u0437",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87874)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041a\u0430\u0432\u043a\u0430\u0437\u0441\u043a\u0438\u0439",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87875)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0423\u0441\u0442\u044c-\u0414\u0436\u0435\u0433\u0443\u0442\u0430",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87876)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041f\u0440\u0435\u0433\u0440\u0430\u0434\u043d\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87877)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0423\u0447\u043a\u0435\u043a\u0435\u043d",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87878)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u0417\u0435\u043b\u0435\u043d\u0447\u0443\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87879)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u043e-\u0427\u0435\u0440\u043a\u0435\u0441\u0438\u044f",
                city: "\u041a\u0430\u0440\u0430\u0447\u0430\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(879)###-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87922)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041c\u0438\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0412\u043e\u0434\u044b",
                operator: "",
                desc: ""
            }, {
                mask: "+38(8793)##-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041f\u044f\u0442\u0438\u0433\u043e\u0440\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87932)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87934)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0441\u0441\u0435\u043d\u0442\u0443\u043a\u0438",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87935)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041b\u0435\u0440\u043c\u043e\u043d\u0442\u043e\u0432",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87937)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0438\u0441\u043b\u043e\u0432\u043e\u0434\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87938)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041d\u043e\u0432\u043e\u043f\u0430\u0432\u043b\u043e\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87951)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0413\u0435\u043e\u0440\u0433\u0438\u0435\u0432\u0441\u043a",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87961)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u0415\u0441\u0441\u0435\u043d\u0442\u0443\u043a\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(87964)#-##-##",
                cc: "RU",
                cd: "Russia",
                region: "\u0421\u0442\u0430\u0432\u0440\u043e\u043f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u043a\u0440\u0430\u0439",
                city: "\u041a\u0443\u0440\u0441\u043a\u0430\u044f",
                operator: "",
                desc: ""
            }, {
                mask: "+38(9##)###-##-##",
                cc: "RU",
                cd: "Russia",
                type: "mobile"
            } ]
        }
    }), Inputmask;
});
