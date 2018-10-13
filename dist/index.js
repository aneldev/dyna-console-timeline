(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dyna-console-timeline", [], factory);
	else if(typeof exports === 'object')
		exports["dyna-console-timeline"] = factory();
	else
		root["dyna-console-timeline"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var consoleTimeline_1 = __webpack_require__(1);
exports.consoleTimeline = consoleTimeline_1.consoleTimeline;
exports.consoleTimelineReport = consoleTimeline_1.consoleTimelineReport;
exports.consoleTimelineReset = consoleTimeline_1.consoleTimelineReset;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// methods
Object.defineProperty(exports, "__esModule", { value: true });
exports.consoleTimeline = function (timelineName, taskName) {
    if (!timelines[timelineName])
        timelines[timelineName] = { ticks: [] };
    timelines[timelineName].ticks.push({ taskName: taskName, time: Number(new Date) });
};
exports.consoleTimelineReport = function (timelineName, consoleIt) {
    if (consoleIt === void 0) { consoleIt = true; }
    var timeline = timelines[timelineName];
    if (timeline) {
        if (consoleIt)
            consoleReportTimeline(timelineName, timeline);
        return timeline;
    }
    else {
        console.error("consoleTimelineReport: there is not timeline with this name");
        return null;
    }
};
exports.consoleTimelineReset = function (timelineName, consoleIt) {
    if (consoleIt === void 0) { consoleIt = true; }
    delete timelines[timelineName];
};
var timelines = {};
// private
var consoleReportTimeline = function (timelineName, timeline) {
    if (!timeline.ticks.length) {
        console.log('consoleTimelineReport: no ticks, nothing to show');
        return;
    }
    var lastTime = timeline.ticks[0].time;
    var duration = timeline.ticks[timeline.ticks.length - 1].time - timeline.ticks[0].time;
    var maxTime = timeline.ticks.reduce(function (acc, tick) { return tick.time - timeline.ticks[0].time > acc ? tick.time - timeline.ticks[0].time : acc; }, 0);
    var maxTickTimeLength = duration.toString().length;
    var graphWidth = 40;
    console.log('consoleTimelineReport for timeline', timelineName, new Date);
    timeline.ticks.forEach(function (tick) {
        var timeLappsed = tick.time - lastTime;
        lastTime = tick.time;
        var graph = Array(Math.round(graphWidth * timeLappsed / maxTime)).fill('#').join('');
        var output = "";
        output += textSize(graph, graphWidth, 'r') + " ";
        output += textSize(timeLappsed.toString(), maxTickTimeLength, 'r') + " ";
        output += tick.taskName;
        console.log(output);
    });
    console.log('total duration', duration);
};
var textSize = function (text, size, align) {
    text = text.substr(0, size);
    while (text.length < size) {
        if (align === 'l')
            text += " ";
        else
            text = " " + text;
    }
    return text;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);
});