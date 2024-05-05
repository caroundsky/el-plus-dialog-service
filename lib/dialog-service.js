(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".service-dialog .el-dialog{max-width:90%}.service-dialog .el-dialog--center .el-dialog__title{left:50%!important;transform:translate(-50%)}.service-dialog.is-fullscreen{max-width:initial;display:flex;flex-direction:column}.service-dialog.is-fullscreen .el-dialog__body{flex-grow:1;overflow:auto}.service-dialog__title{font-size:16px;position:absolute;top:11px;left:20px}.service-dialog__icon{position:absolute;right:36px;top:14px;line-height:1;cursor:pointer}.service-dialog__icon:hover{color:#409eff}.service-dialog__icon>img{width:1em;height:1em}.service-dialog .el-dialog__header{padding:10px 15px;margin-right:0;height:24px;box-sizing:content-box;border-bottom:1px solid #ebeef5}.service-dialog .el-dialog__header .el-dialog__headerbtn{top:15px;right:13px;width:auto;height:auto}.service-dialog .el-dialog__header .el-dialog__headerbtn>i{color:#333}.service-dialog .el-dialog__body{padding:0;color:#333}.service-dialog .el-dialog__footer{padding:0}.service-dialog.is-iframe .service-dialog__content{padding:0;line-height:0}.service-dialog__content{line-height:1.4;box-sizing:border-box;overflow:auto}.service-dialog__footer{padding:10px 20px;border-top:1px solid #ebeef5}.service-dialog__footer>*{display:inline-block}.service-dialog__footer .el-button{font-size:12px}.service-dialog__resize{position:absolute;right:0;bottom:0;width:13px;height:13px;overflow:hidden;cursor:nw-resize;user-select:none;opacity:0}.service-dialog__resize.hidden{display:none}.service-dialog__resize:after{content:\"\";opacity:.4;transform:rotate(135deg);position:absolute;right:-3px;bottom:2px;width:24px;height:1px;background:#000}.service-dialog__resize:before{content:\"\";opacity:.4;transform:rotate(135deg);position:absolute;right:-6px;bottom:0px;width:22px;height:1px;background:#000}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { unref, getCurrentScope, onScopeDispose, ref, watch, reactive, defineComponent, computed, isVNode, createVNode, onMounted, nextTick, openBlock, createBlock, mergeProps, toHandlers, createSlots, withCtx, createElementBlock, resolveDynamicComponent, toDisplayString, createElementVNode, createCommentVNode, normalizeStyle, Fragment, createTextVNode, withDirectives, normalizeClass, renderList, createApp } from "vue";
import { ElLoading, ElDialog, ElButton } from "element-plus";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal || freeSelf || Function("return this")();
var _root = root$1;
var root = _root;
var Symbol$3 = root.Symbol;
var _Symbol = Symbol$3;
var Symbol$2 = _Symbol;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
var nativeObjectToString$1 = objectProto$2.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$1 = Object.prototype;
var nativeObjectToString = objectProto$1.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$1 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag$2(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$2;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var getPrototype$1 = overArg(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$1;
function isObjectLike$1(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$1;
var baseGetTag$1 = _baseGetTag, getPrototype = _getPrototype, isObjectLike = isObjectLike_1;
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag$1(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject;
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$1;
var baseGetTag = _baseGetTag, isObject = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction;
var isArray = Array.isArray;
var isArray_1 = isArray;
const definePropType = (val) => val;
const componentProps = definePropType([
  String,
  Object,
  Function
]);
const buttonProps = definePropType([Array, Object, Function]);
const DialogBeforeCloseFn = definePropType([Function]);
const dialogProps = {
  title: {
    type: componentProps,
    default: ""
  },
  content: {
    type: componentProps,
    default: ""
  },
  buttons: {
    type: buttonProps,
    default: []
  },
  iframeSrc: {
    type: String,
    default: ""
  },
  width: {
    type: String,
    default: "520px"
  },
  height: {
    type: String,
    default: ""
  },
  zIndex: {
    type: Number,
    default: 1e3
  },
  top: {
    type: String,
    default: ""
  },
  class: {
    type: String,
    default: ""
  },
  fullScreenEnable: {
    type: Boolean,
    default: true
  },
  fullscreen: {
    type: Boolean,
    default: false
  },
  resize: {
    type: Boolean,
    default: false
  },
  canModalClose: {
    type: Boolean,
    default: false
  },
  beforeClose: {
    type: DialogBeforeCloseFn,
    default: () => {
    }
  },
  afterClose: {
    type: Function,
    default: () => {
    }
  },
  afterOpen: {
    type: Function,
    default: () => {
    }
  }
};
var __glob_0_0 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwMDc3NjI5NTcyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3OTMiIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMzQxLjQ2OCA1NjkuMTQ2SDE3My40OGMtNjEuNzY2IDAtMTExLjk5MiA1MC4yMjgtMTExLjk5MiAxMTEuOTkzdjE2Ny45ODdjMCA2MS43NjcgNTAuMjI2IDExMS45OTQgMTExLjk5MiAxMTEuOTk0aDE2Ny45OWM2MS43MzcgMCAxMTEuOTkyLTUwLjIyNyAxMTEuOTkyLTExMS45OTRWNjgxLjE0Yy0wLjAwMS02MS43NjUtNTAuMjU2LTExMS45OTMtMTExLjk5NC0xMTEuOTkzeiBtNTUuOTk2IDI3OS45OGMwIDMwLjg3LTI1LjEyNyA1NS45OTctNTUuOTk2IDU1Ljk5N0gxNzMuNDhjLTMwLjg5NiAwLTU1Ljk5NS0yNS4xMjUtNTUuOTk1LTU1Ljk5N1Y2ODEuMTRjMC0zMC44NyAyNS4wOTktNTUuOTk4IDU1Ljk5NS01NS45OThoMTY3Ljk5YzMwLjg2OCAwIDU1Ljk5NSAyNS4xMjggNTUuOTk1IDU1Ljk5OHYxNjcuOTg3eiBtMTMxLjc4OC0zMTYuMThMNzYxLjQ0IDMwMC43NTl2MTg0LjM5M2MwIDE1LjQ3NSAxMi41MjMgMjcuOTk5IDI3Ljk5OCAyNy45OTkgMTUuNDQ5IDAgMjcuOTk5LTEyLjUyNCAyNy45OTktMjhWMjMzLjE3YzAtMTUuNDc1LTEyLjU1LTI3Ljk5Ny0yNy45OTktMjcuOTk3SDUzNy40NTVjLTE1LjQ3NiAwLTI3Ljk5OSAxMi41MjItMjcuOTk5IDI3Ljk5NyAwIDE1LjQ3NiAxMi41MjMgMjcuOTk4IDI3Ljk5OSAyNy45OThoMTg0LjM5Mkw0ODkuNjYgNDkzLjM1NWMtMTAuOTM2IDEwLjkzNi0xMC45MzYgMjguNjU0IDAgMzkuNTlhMjcuOTEgMjcuOTEgMCAwIDAgMTkuNzk2IDguMjAzIDI3LjkxIDI3LjkxIDAgMCAwIDE5Ljc5Ni04LjIwMnogbTMxNi4xOC00NjcuNzY0SDE3My40OGMtNjEuNzY2IDAtMTExLjk5MiA1MC4yMjctMTExLjk5MiAxMTEuOTkydjMwNy45NzljMCAxNS40NzUgMTIuNTIzIDI3Ljk5OSAyNy45OTggMjcuOTk5IDE1LjQ0OCAwIDI3Ljk5OS0xMi41MjQgMjcuOTk5LTI4VjE3Ny4xNzZjMC0zMC44NyAyNS4wOTktNTUuOTk3IDU1Ljk5NS01NS45OTdoNjcxLjk1M2MzMC44NyAwIDU1Ljk5NyAyNS4xMjggNTUuOTk3IDU1Ljk5N3Y2NzEuOTUyYzAgMzAuODctMjUuMTI4IDU1Ljk5Ny01NS45OTcgNTUuOTk3SDUzNy40NTVjLTE1LjQ3NiAwLTI3Ljk5OSAxMi41MjMtMjcuOTk5IDI3Ljk5OCAwIDE1LjQ3NyAxMi41MjMgMjggMjcuOTk5IDI4aDMwNy45NzhjNjEuNzM4IDAgMTExLjk5My01MC4yMjcgMTExLjk5My0xMTEuOTk0VjE3Ny4xNzRjMC02MS43NjYtNTAuMjU1LTExMS45OTItMTExLjk5My0xMTEuOTkyeiIgcC1pZD0iNDc5NCIgZmlsbD0iIzMzMzMzMyI+PC9wYXRoPjwvc3ZnPg==";
var __glob_0_1 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjAwMDc4MjA1MDAyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwNTIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE1Mjc0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEzMS41IiBoZWlnaHQ9IjEyOCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMC42NjYxMDMgMjkwLjA3NDQ5NG02Ni42MTAyOTEgMGw2MDAuMDM4ODIxIDBxNjYuNjEwMjkxIDAgNjYuNjEwMjkxIDY2LjYxMDI5MWwwIDYwMC4wMzg4MjFxMCA2Ni42MTAyOTEtNjYuNjEwMjkxIDY2LjYxMDI5MWwtNjAwLjAzODgyMSAwcS02Ni42MTAyOTEgMC02Ni42MTAyOTEtNjYuNjEwMjkxbDAtNjAwLjAzODgyMXEwLTY2LjYxMDI5MSA2Ni42MTAyOTEtNjYuNjEwMjkxWiIgZmlsbD0iIzY2NjY2NiIgcC1pZD0iMTUyNzUiPjwvcGF0aD48cGF0aCBkPSJNOTg1LjI1OTQ1NSAwLjY3OTQyNWgtNjAwLjAyNTQ5OWE2Ni42MTAyOTEgNjYuNjEwMjkxIDAgMCAwLTY2LjYxMDI5MSA2Ni42MTAyOTF2MTUxLjg3MTQ2M2g0MTguNTM5MTAxYTY2LjYxMDI5MSA2Ni42MTAyOTEgMCAwIDEgNjYuNjEwMjkxIDY2LjYxMDI5djQ0OC4xNTQwMzdoMTgxLjQ4NjM5OGE2Ni42MTAyOTEgNjYuNjEwMjkxIDAgMCAwIDY2LjYxMDI5MS02Ni42MTAyOTFWNjcuMjg5NzE2YTY2LjYxMDI5MSA2Ni42MTAyOTEgMCAwIDAtNjYuNjEwMjkxLTY2LjYxMDI5MXoiIGZpbGw9IiM2NjY2NjYiIHAtaWQ9IjE1Mjc2Ij48L3BhdGg+PC9zdmc+";
const getAssetsImages = (fileName) => new URL({ "../public/fullscreen.svg": __glob_0_0, "../public/minscreen.svg": __glob_0_1 }[`../public/${fileName}`], self.location).href;
const store = {};
var store$1 = {
  setInstance(id, proxy) {
    store[id] = proxy;
  },
  getInstance(id) {
    return store[id];
  }
};
var _a;
const isClient = typeof window !== "undefined";
const isString = (val) => typeof val === "string";
const noop = () => {
};
isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function unrefElement(elRef) {
  var _a2;
  const plain = resolveUnref(elRef);
  return (_a2 = plain == null ? void 0 : plain.$el) != null ? _a2 : plain;
}
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
isClient ? window.location : void 0;
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
_global[globalKey];
function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window: window2 = defaultWindow,
    eventFilter
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  const mouseHandlerWrapper = (event) => {
    return eventFilter === void 0 ? mouseHandler(event) : eventFilter(() => mouseHandler(event), {});
  };
  const touchHandlerWrapper = (event) => {
    return eventFilter === void 0 ? touchHandler(event) : eventFilter(() => touchHandler(event), {});
  };
  if (window2) {
    useEventListener(window2, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(window2, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch) {
      useEventListener(window2, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(window2, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window2, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}
function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window: window2 = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = ref(target != null ? target : window2 == null ? void 0 : window2.document.body);
  const elementX = ref(0);
  const elementY = ref(0);
  const elementPositionX = ref(0);
  const elementPositionY = ref(0);
  const elementHeight = ref(0);
  const elementWidth = ref(0);
  const isOutside = ref(true);
  let stop = () => {
  };
  if (window2) {
    stop = watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window2.pageXOffset;
      elementPositionY.value = top + window2.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
__spreadValues2({
  linear: identity
}, _TransitionPresets);
let mouse;
var Vresize = {
  mounted(el, binding) {
    const dialog = binding.value.dialog.dialogContentRef.$el;
    mouse = reactive(useMouseInElement(dialog));
    const vm = store$1.getInstance("dialog");
    const minW = 260;
    const minH = 64;
    el.onmousedown = function(e) {
      var _a2, _b;
      e.preventDefault();
      const iframe = dialog.querySelector("iframe");
      if (iframe)
        iframe.style.pointerEvents = "none";
      const innerWidth = window.innerWidth;
      const headerHeight = dialog.querySelector("header").offsetHeight;
      const footerHeight = (_b = (_a2 = dialog.querySelector("footer")) == null ? void 0 : _a2.offsetHeight) != null ? _b : 0;
      document.onmousemove = function() {
        const { elementX, elementY, x, isOutside } = mouse;
        const dialogLeftDistance = x - elementX;
        const height = elementY - headerHeight - footerHeight;
        const outDisable = (dialogLeftDistance <= 1 || x > innerWidth) && isOutside;
        const insideDisable = elementX <= minW || height <= minH;
        if (outDisable || insideDisable)
          return;
        vm.width.value = elementX + "px";
        vm.height.value = elementY - headerHeight - footerHeight + "px";
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        if (iframe)
          iframe.style.pointerEvents = "auto";
      };
    };
  },
  unmounted() {
    mouse.stop();
  }
};
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1,
  class: "service-dialog__title"
};
const _hoisted_3 = ["src"];
const _hoisted_4 = {
  class: "service-dialog__footer"
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const __default__ = defineComponent({
  name: "DialogService"
});
var _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: dialogProps,
  emits: {
    destroy: () => true
  },
  setup(__props, {
    expose,
    emit
  }) {
    const props = __props;
    const vResize = Vresize;
    const dialogVisible = ref(false);
    const dialog = ref();
    let iframeLoading;
    const _height = ref("");
    let vm = null;
    const {
      content,
      fullScreenEnable,
      iframeSrc,
      top,
      zIndex,
      beforeClose,
      afterClose,
      afterOpen,
      canModalClose,
      resize
    } = props;
    const fullscreen = ref(props.fullscreen);
    const width = ref(props.width);
    const height = ref(props.height);
    const title = ref(props.title);
    const buttons = ref(props.buttons);
    const bindClass = ["service-dialog", props.class, {
      fullscreen: fullscreen.value,
      "is-iframe": !!iframeSrc
    }];
    const dialogContent = ref();
    const dialogContentWrap = ref();
    const dialogEvents = {
      closed: () => {
        emit("destroy");
        isFunction_1(afterClose) && afterClose(vm);
      },
      opened: () => {
        isFunction_1(afterOpen) && afterOpen(vm);
      }
    };
    const titleComponent = getComponent(title.value);
    const contentComponent = getComponent(content);
    const _button = computed(() => {
      if (isVNode(buttons.value)) {
        return buttons.value;
      }
      if (isFunction_1(buttons.value)) {
        return buttons.value({
          vm: store$1.getInstance("dialog"),
          component: dialogContent.value,
          getFooterBtns
        });
      }
      if (isArray_1(buttons.value)) {
        let btns = [];
        buttons.value.forEach((item) => {
          if (typeof item === "string") {
            console.warn("\u8BF7\u4F20\u5165\u6B63\u786E\u7684 buttons \u53C2\u6570");
          } else if (isPlainObject_1(item) || isFunction_1(item) || isVNode(item)) {
            btns.push(item);
          }
        });
        return btns;
      }
    });
    watch(() => fullscreen.value, (val) => {
      height.value = val ? "100%" : _height.value;
    });
    watch(() => height.value, (val) => {
      if (fullscreen.value)
        return;
      _height.value = val;
    }, {
      immediate: true
    });
    function handleFullScreen() {
      fullscreen.value = !fullscreen.value;
    }
    function getComponent(data) {
      return computed(() => {
        if (isFunction_1(data)) {
          return data.bind(null, vm);
        }
        if (isVNode(data)) {
          return data;
        }
        if (!data && iframeSrc) {
          return createVNode("iframe", {
            "src": iframeSrc,
            "width": "100%",
            "height": "100%",
            "frameborder": "0",
            "scrolling": "auto",
            "onReady": true,
            "onLoad": () => {
              iframeLoading.close();
            }
          }, null);
        }
      });
    }
    function generateBtn(btn) {
      if (isVNode(btn)) {
        return btn;
      }
      if (isFunction_1(btn)) {
        return btn({
          vm,
          ctx: _button,
          component: dialogContent.value
        });
      }
      const _a2 = btn, {
        label,
        type
      } = _a2, props2 = __objRest(_a2, [
        "label",
        "type"
      ]);
      const btnProps = __spreadProps(__spreadValues({}, props2), {
        onClick: () => handleBtnClick(btn)
      });
      return createVNode(ElButton, mergeProps({
        "type": type
      }, btnProps), _isSlot(label) ? label : {
        default: () => [label]
      });
    }
    function handleBtnClick(btn) {
      if (isFunction_1(btn.onClick)) {
        btn.onClick({
          vm,
          ctx: btn,
          component: dialogContent.value
        });
      }
    }
    function getFooterBtns(cb) {
      setTimeout(() => {
        cb && (buttons.value = cb(dialogContent.value));
      });
    }
    function hide() {
      dialogVisible.value = false;
    }
    function close() {
      if (isFunction_1(beforeClose)) {
        beforeClose(vm, hide);
      } else {
        hide();
      }
    }
    function handleBeforeClose(done) {
      if (isFunction_1(beforeClose)) {
        beforeClose(vm, done);
      } else {
        done();
      }
    }
    const exposeData = {
      hide,
      close,
      title,
      buttons,
      fullscreen,
      height,
      width
    };
    expose(exposeData);
    store$1.setInstance("dialog", exposeData);
    onMounted(() => {
      dialogVisible.value = true;
      nextTick(() => {
        vm = store$1.getInstance("dialog");
      });
      if (!iframeSrc)
        return;
      setTimeout(() => {
        iframeLoading = ElLoading.service({
          target: dialogContentWrap.value
        });
      }, 0);
    });
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(unref(ElDialog), mergeProps({
        draggable: "",
        modelValue: dialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event),
        class: bindClass,
        width: width.value,
        top: unref(top),
        "z-index": unref(zIndex),
        fullscreen: fullscreen.value,
        "before-close": handleBeforeClose
      }, toHandlers(dialogEvents), {
        "close-on-click-modal": unref(canModalClose),
        "close-on-press-escape": unref(canModalClose),
        ref_key: "dialog",
        ref: dialog
      }), createSlots({
        header: withCtx(() => [unref(titleComponent) ? (openBlock(), createElementBlock("div", _hoisted_1, [(openBlock(), createBlock(resolveDynamicComponent(unref(titleComponent)), {
          class: "service-dialog-title"
        }))])) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(title.value), 1)), unref(fullScreenEnable) ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "service-dialog__icon",
          onClick: handleFullScreen
        }, [createElementVNode("img", {
          src: fullscreen.value ? unref(getAssetsImages)("minscreen.svg") : unref(getAssetsImages)("fullscreen.svg")
        }, null, 8, _hoisted_3)])) : createCommentVNode("", true)]),
        default: withCtx(() => [createElementVNode("div", {
          ref_key: "dialogContentWrap",
          ref: dialogContentWrap,
          class: "service-dialog__content",
          style: normalizeStyle({
            height: height.value
          })
        }, [unref(contentComponent) ? (openBlock(), createBlock(resolveDynamicComponent(isVNode(unref(contentComponent)) ? unref(contentComponent) : unref(contentComponent)()), {
          key: 0,
          ref_key: "dialogContent",
          ref: dialogContent
        }, null, 512)) : (openBlock(), createElementBlock(Fragment, {
          key: 1
        }, [createTextVNode(toDisplayString(unref(content)), 1)], 64)), withDirectives(createElementVNode("div", {
          class: normalizeClass({
            "service-dialog__resize": true,
            hidden: !unref(resize) || fullscreen.value
          })
        }, null, 2), [[unref(vResize), {
          dialog: dialog.value,
          width: width.value
        }]])], 4)]),
        _: 2
      }, [isVNode(unref(_button)) || ((_a2 = unref(_button)) == null ? void 0 : _a2.length) !== 0 ? {
        name: "footer",
        fn: withCtx(() => [createElementVNode("div", _hoisted_4, [isVNode(unref(_button)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(_button)), {
          key: 0
        })) : (openBlock(true), createElementBlock(Fragment, {
          key: 1
        }, renderList(unref(_button), (item) => {
          return openBlock(), createBlock(resolveDynamicComponent(generateBtn(item)));
        }), 256))])])
      } : void 0]), 1040, ["modelValue", "width", "top", "z-index", "fullscreen", "close-on-click-modal", "close-on-press-escape"]);
    };
  }
}));
var dialog_vue_vue_type_style_index_0_lang = "";
const appContext = {
  provides: {},
  components: {},
  directives: {}
};
const service = (options = {}) => {
  var _a2;
  const container = document.createElement("div");
  const props = __spreadProps(__spreadValues({}, options), {
    onDestroy: () => {
      App.unmount();
    }
  });
  const App = createApp(_sfc_main, props);
  try {
    (_a2 = Object.getOwnPropertySymbols(appContext.provides)) == null ? void 0 : _a2.forEach((key) => {
      App.provide(key, appContext.provides[key]);
    });
    Object.keys(appContext.components).forEach((key) => {
      App.component(key, appContext.components[key]);
    });
    Object.keys(appContext.directives).forEach((key) => {
      App.directive(key, appContext.directives[key]);
    });
  } catch (e) {
  }
  App.mount(container);
  document.body.appendChild(container.firstElementChild);
  const instance = store$1.getInstance("dialog");
  return instance;
};
service.initCtx = (ctx = {}) => {
  Object.assign(appContext, ctx);
};
export { service as default };
//# sourceMappingURL=dialog-service.js.map
