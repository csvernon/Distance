"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _getDistance=_interopRequireDefault(require("./getDistance"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var isPointInLine=function isPointInLine(point,lineStart,lineEnd){return(0,_getDistance.default)(lineStart,point)+(0,_getDistance.default)(point,lineEnd)===(0,_getDistance.default)(lineStart,lineEnd)};var _default=isPointInLine;exports.default=_default;