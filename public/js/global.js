(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

loader.global(function (global) {
  // 全局方法或者变量配置，需要在 index.html 引入 js/global.js

  return {
    path: "",
    ajax: function ajax(opt) {
      /**
       * 全局的请求方法
       * 使用示例：
       * global.ajax({url:"",data:{}}).then(function(res){
          console.log(res)
          })
       */
      var props = $.extend(true, {
        headers: {}
      }, opt);
      return bui.ajax(props);
    },
    hint: function hint(text) {
      /**
       * 全局的提示
       * 使用示例：
       * global.hint("提示信息")
       */
      var props = $.extend(true, {
        position: "bottom"
      }, {
        content: text
      });
      return bui.hint(props);
    }
  };
});
},{}]},{},[1]);
