"use strict";

exports.__esModule = true;
exports.UNMOUNTED = exports.EXITING = exports.EXITED = exports.ENTERING = exports.ENTERED = exports.config = exports.Transition = exports.TransitionGroup = exports.SwitchTransition = exports.ReplaceTransition = exports.CSSTransition = void 0;

var _CSSTransition = _interopRequireDefault(require("./CSSTransition"));

exports.CSSTransition = _CSSTransition.default;

var _ReplaceTransition = _interopRequireDefault(require("./ReplaceTransition"));

exports.ReplaceTransition = _ReplaceTransition.default;

var _SwitchTransition = _interopRequireDefault(require("./SwitchTransition"));

exports.SwitchTransition = _SwitchTransition.default;

var _TransitionGroup = _interopRequireDefault(require("./TransitionGroup"));

exports.TransitionGroup = _TransitionGroup.default;

var _Transition = _interopRequireWildcard(require("./Transition"));

exports.Transition = _Transition.default;
exports.ENTERED = _Transition.ENTERED;
exports.ENTERING = _Transition.ENTERING;
exports.EXITED = _Transition.EXITED;
exports.EXITING = _Transition.EXITING;
exports.UNMOUNTED = _Transition.UNMOUNTED;

var _config = _interopRequireDefault(require("./config"));

exports.config = _config.default;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }