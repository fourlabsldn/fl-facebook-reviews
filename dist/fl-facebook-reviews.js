function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

var _classCallCheck = interopDefault(classCallCheck);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _global$1 = interopDefault(_global);


var require$$0$2 = Object.freeze({
  default: _global$1
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core$1 = interopDefault(_core);
var version = _core.version;

var require$$2$1 = Object.freeze({
	default: _core$1,
	version: version
});

var _aFunction = createCommonjsModule(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var _aFunction$1 = interopDefault(_aFunction);


var require$$0$3 = Object.freeze({
  default: _aFunction$1
});

var _ctx = createCommonjsModule(function (module) {
// optional / simple context binding
var aFunction = interopDefault(require$$0$3);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
});

var _ctx$1 = interopDefault(_ctx);


var require$$1 = Object.freeze({
  default: _ctx$1
});

var _isObject = createCommonjsModule(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var _isObject$1 = interopDefault(_isObject);


var require$$0$5 = Object.freeze({
  default: _isObject$1
});

var _anObject = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$5);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var _anObject$1 = interopDefault(_anObject);


var require$$3 = Object.freeze({
  default: _anObject$1
});

var _fails = createCommonjsModule(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var _fails$1 = interopDefault(_fails);


var require$$0$6 = Object.freeze({
  default: _fails$1
});

var _descriptors = createCommonjsModule(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !interopDefault(require$$0$6)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _descriptors$1 = interopDefault(_descriptors);


var require$$2$4 = Object.freeze({
  default: _descriptors$1
});

var _domCreate = createCommonjsModule(function (module) {
var isObject = interopDefault(require$$0$5)
  , document = interopDefault(require$$0$2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var _domCreate$1 = interopDefault(_domCreate);


var require$$0$7 = Object.freeze({
  default: _domCreate$1
});

var _ie8DomDefine = createCommonjsModule(function (module) {
module.exports = !interopDefault(require$$2$4) && !interopDefault(require$$0$6)(function(){
  return Object.defineProperty(interopDefault(require$$0$7)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var _ie8DomDefine$1 = interopDefault(_ie8DomDefine);


var require$$2$3 = Object.freeze({
  default: _ie8DomDefine$1
});

var _toPrimitive = createCommonjsModule(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = interopDefault(require$$0$5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
});

var _toPrimitive$1 = interopDefault(_toPrimitive);


var require$$1$1 = Object.freeze({
  default: _toPrimitive$1
});

var _objectDp = createCommonjsModule(function (module, exports) {
var anObject       = interopDefault(require$$3)
  , IE8_DOM_DEFINE = interopDefault(require$$2$3)
  , toPrimitive    = interopDefault(require$$1$1)
  , dP             = Object.defineProperty;

exports.f = interopDefault(require$$2$4) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
});

var _objectDp$1 = interopDefault(_objectDp);
var f = _objectDp.f;

var require$$2$2 = Object.freeze({
  default: _objectDp$1,
  f: f
});

var _propertyDesc = createCommonjsModule(function (module) {
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
});

var _propertyDesc$1 = interopDefault(_propertyDesc);


var require$$1$2 = Object.freeze({
  default: _propertyDesc$1
});

var _hide = createCommonjsModule(function (module) {
var dP         = interopDefault(require$$2$2)
  , createDesc = interopDefault(require$$1$2);
module.exports = interopDefault(require$$2$4) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var _hide$1 = interopDefault(_hide);


var require$$0$4 = Object.freeze({
  default: _hide$1
});

var _export = createCommonjsModule(function (module) {
var global    = interopDefault(require$$0$2)
  , core      = interopDefault(require$$2$1)
  , ctx       = interopDefault(require$$1)
  , hide      = interopDefault(require$$0$4)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
});

var _export$1 = interopDefault(_export);


var require$$2 = Object.freeze({
  default: _export$1
});

var es6_object_defineProperty = createCommonjsModule(function (module) {
var $export = interopDefault(require$$2);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !interopDefault(require$$2$4), 'Object', {defineProperty: interopDefault(require$$2$2).f});
});

interopDefault(es6_object_defineProperty);

var defineProperty$2 = createCommonjsModule(function (module) {
var $Object = interopDefault(require$$2$1).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
});

var defineProperty$3 = interopDefault(defineProperty$2);


var require$$0$1 = Object.freeze({
  default: defineProperty$3
});

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": interopDefault(require$$0$1), __esModule: true };
});

var defineProperty$1 = interopDefault(defineProperty);


var require$$0 = Object.freeze({
	default: defineProperty$1
});

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _defineProperty = interopDefault(require$$0);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var _createClass = interopDefault(createClass);

var constants = {
   monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
   globeIcon: '\n  <svg\n     xmlns:dc="http://purl.org/dc/elements/1.1/"\n     xmlns:cc="http://creativecommons.org/ns#"\n     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n     xmlns:svg="http://www.w3.org/2000/svg"\n     xmlns="http://www.w3.org/2000/svg"\n     version="1.1"\n     id="svg2"\n     viewBox="0 0 300 299.99999"\n     height="0.9em"\n     width="0.9em">\n    <defs\n       id="defs4" />\n    <metadata\n       id="metadata7">\n      <rdf:RDF>\n        <cc:Work\n           rdf:about="">\n          <dc:format>image/svg+xml</dc:format>\n          <dc:type\n             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n          <dc:title></dc:title>\n        </cc:Work>\n      </rdf:RDF>\n    </metadata>\n    <g\n       transform="translate(0,-752.36222)"\n       id="layer1">\n      <path\n         id="path4192"\n         d="M 122.82495,1050.6503 C 69.68355,1040.7977 24.947571,1001.8474 7.9046971,950.5925 -3.800174,915.3912 -1.3764915,872.92923 14.231865,839.7425 c 14.332252,-30.47343 39.946996,-56.257 70.841047,-71.30792 12.068838,-5.87969 20.118188,-8.75621 32.442468,-11.59368 8.35965,-1.92469 10.83108,-2.13587 28.77115,-2.45838 21.85029,-0.39281 28.20167,0.16902 41.93189,3.70922 16.76667,4.32309 34.25061,12.71285 51.02795,24.48599 9.21686,6.46773 26.31043,23.58516 32.95419,33.00023 14.5032,20.55286 24.13031,44.66862 26.74968,67.00756 1.40345,11.969 0.48785,41.89502 -1.57609,51.51373 -12.13003,56.53068 -56.10233,101.45625 -112.79539,115.24075 -7.59598,1.8469 -9.40951,1.9724 -31.83581,2.2033 -18.58774,0.1913 -25.12115,0 -29.918,-0.893 z m 76.57987,-16.8663 c 10.98211,-4.4624 13.54294,-7.6394 13.57001,-16.8349 0.0243,-8.2708 1.04898,-14.8297 4.31301,-27.60844 2.25919,-8.84477 2.81367,-12.58184 3.13126,-21.10422 l 0.38592,-10.35623 -8.38414,-8.16281 c -9.3427,-9.09607 -12.8526,-11.21882 -22.47221,-13.59088 -8.58246,-2.11632 -14.82873,-2.96965 -28.92223,-3.9512 -11.38613,-0.79298 -26.86951,-2.98533 -32.64706,-4.62262 -3.6955,-1.04727 -5.0485,-3.18108 -5.64684,-8.90564 -0.45914,-4.3928 -0.36813,-4.73565 1.96136,-7.38878 3.2408,-3.69106 9.52967,-6.05364 16.50059,-6.19889 l 5.32835,-0.11103 4.64432,7.66097 c 2.55437,4.21351 5.21892,7.77152 5.92123,7.90668 2.16983,0.41756 2.39601,-2.62225 0.5973,-8.02738 -2.37406,-7.13408 -1.82447,-19.18504 1.45546,-31.91382 3.03709,-11.78639 4.92496,-15.74155 13.05306,-27.34687 3.71719,-5.30741 6.98655,-10.04479 7.26526,-10.52754 0.43546,-0.75429 -8.02611,-11.9975 -18.37469,-24.41513 -2.78552,-3.34244 -18.46538,-17.23845 -25.15898,-22.29671 -2.8597,-2.16104 -3.3921,-2.27601 -10.7398,-2.31908 -6.88737,-0.0404 -8.61545,-0.35609 -15.83704,-2.8933 l -8.10612,-2.84796 -18.743368,4.96079 c -35.226758,9.32342 -30.970903,7.76079 -35.53373,13.04694 -2.210225,2.56062 -5.279854,6.23054 -6.821365,8.15539 l -2.802785,3.4997 2.867184,4.93131 c 1.576961,2.71222 3.488462,5.05096 4.247788,5.19718 0.759343,0.14627 2.718276,-0.66113 4.353197,-1.79412 l 2.97259,-2.06001 3.833967,1.27343 c 5.808834,1.9294 8.643817,4.21807 10.985179,8.86831 2.533631,5.03208 2.640861,7.84031 0.587122,15.37632 -2.812945,10.32193 -4.54975,18.6917 -4.566609,22.00683 -0.01063,2.02962 1.390282,7.10676 3.703408,13.42474 2.046025,5.58837 4.854018,14.47576 6.240016,19.74977 2.605032,9.91276 5.33842,16.78282 7.337452,18.44187 1.829847,1.51864 2.164295,0.32657 1.223163,-4.35966 -1.674577,-8.33837 -1.225123,-8.67578 2.978696,-2.23617 7.09945,10.87527 14.066035,16.98888 26.829725,23.54473 l 6.52059,3.3492 22.70588,0.38356 c 24.84192,0.41965 25.24021,0.4968 25.23892,4.88848 -3.8e-4,1.31958 -1.31106,8.79542 -2.91263,16.61298 l -2.91191,14.21375 2.4712,10.13905 c 2.57284,10.55601 4.82946,16.31211 8.93989,22.80361 4.27043,6.7444 15.29121,22.2113 16.5731,23.2593 1.60231,1.31 5.68282,0.6825 11.84531,-1.8216 z m 85.99736,-89.22423 c 2.2224,-4.29768 6.5763,-20.20976 7.33023,-26.78971 1.75241,-15.29393 -0.0915,-45.73616 -3.12799,-51.64505 -0.80085,-1.55835 -17.73123,-8.21252 -28.21404,-11.08898 l -7.95604,-2.18312 -11.34695,11.54325 c -13.06108,13.28702 -13.87242,14.76858 -12.40604,22.65363 0.98484,5.29568 4.69464,12.03102 11.22046,20.37131 4.56788,5.83795 11.8117,11.73669 19.23908,15.66665 7.93164,4.19677 10.96133,6.67074 14.68375,11.99041 6.20534,8.86799 8.31144,11.63046 8.88572,11.65498 0.30561,0.0136 1.06692,-0.96498 1.69182,-2.17337 z m -5.69954,-99.1019 c 0,-5.37819 -27.99355,-41.67742 -36.37763,-47.17088 -2.11464,-1.38558 -2.19121,-1.38388 -3.30617,0.0732 -3.6218,4.7331 -4.00805,6.95081 -4.02564,23.11307 -0.009,8.51641 0.2997,16.31701 0.68661,17.33463 0.49766,1.30895 1.7085,2.13164 4.13886,2.81209 4.02553,1.12708 5.63636,0.72748 11.09049,-2.75128 2.22327,-1.41806 4.42142,-2.5783 4.88478,-2.5783 0.46336,0 5.35285,2.24385 10.86557,4.98634 10.02961,4.98958 12.04313,5.68862 12.04313,4.18111 z M 158.20133,781.75925 c 15.76969,-0.81915 16.05582,-0.8643 18.22608,-2.87673 4.31644,-4.00253 9.7901,-11.06885 9.10485,-11.75411 -1.00751,-1.00752 -17.55057,-5.0541 -25.15937,-6.15421 -5.64346,-0.81597 -8.08812,-0.76225 -17.08068,0.3753 -11.81651,1.49477 -24.93569,4.03399 -27.2549,5.27519 -1.81034,0.96887 -2.42147,0.42974 11.32515,9.9907 9.81807,6.82862 7.10783,6.37655 30.83887,5.14386 z"/>\n    </g>\n  </svg>',
   arrowDownIcon: '\n  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 1080 1080" enable-background="new 0 0 1080 1080" xml:space="preserve">\n      <path fill="#9B9B9B" d="M878.767,410.955L573.344,726.237c-7.79,8.048-18.167,12.085-28.544,12.085\n            c-9.963,0-19.94-3.727-27.652-11.206L201.852,421.694c-15.773-15.269-16.174-40.423-0.906-56.209\n            c15.307-15.76,40.462-16.148,56.209-0.88l286.751,277.758l277.771-286.738c15.281-15.76,40.475-16.148,56.196-0.88\n            C893.647,370.014,894.048,395.169,878.767,410.955z" />\n  </svg>',
   facebookIcon: '\n    <svg\n       xmlns:dc="http://purl.org/dc/elements/1.1/"\n       xmlns:cc="http://creativecommons.org/ns#"\n       xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n       xmlns:svg="http://www.w3.org/2000/svg"\n       xmlns="http://www.w3.org/2000/svg"\n       xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n       xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n       width="21.290087mm"\n       height="21.290678mm"\n       viewBox="0 0 75.437315 75.43941"\n       id="svg2"\n       version="1.1"\n       inkscape:version="0.91 r13725"\n       sodipodi:docname="facebookIcon.svg">\n      <defs\n         id="defs4" />\n      <sodipodi:namedview\n         id="base"\n         borderopacity="1.0"\n         inkscape:pageopacity="0.0"\n         inkscape:pageshadow="2"\n         inkscape:zoom="1.979899"\n         inkscape:cx="30.346803"\n         inkscape:cy="-19.308794"\n         inkscape:document-units="px"\n         inkscape:current-layer="layer1"\n         showgrid="false"\n         fit-margin-top="0"\n         fit-margin-left="0"\n         fit-margin-right="0"\n         fit-margin-bottom="0"\n         inkscape:window-width="1366"\n         inkscape:window-height="744"\n         inkscape:window-x="1920"\n         inkscape:window-y="312"\n         inkscape:window-maximized="1" />\n      <metadata\n         id="metadata7">\n        <rdf:RDF>\n          <cc:Work\n             rdf:about="">\n            <dc:format>image/svg+xml</dc:format>\n            <dc:type\n               rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n            <dc:title></dc:title>\n          </cc:Work>\n        </rdf:RDF>\n      </metadata>\n      <g\n         inkscape:label="Layer 1"\n         inkscape:groupmode="layer"\n         id="layer1"\n         transform="translate(-2.2774431,2.503373)">\n        <path\n           inkscape:connector-curvature="0"\n           id="path4149"\n           d="M 5.4213544,72.816043 C 3.9725581,72.503157 2.7727168,71.343933 2.3995258,69.896501 2.2895879,69.470089 2.2780805,66.181902 2.2780805,35.202434 c 0,-37.4901524 -0.036339,-34.55292777 0.4397517,-35.54542878 0.2690795,-0.56093946 1.1442973,-1.44182662 1.7068743,-1.71793492 0.974783,-0.4784193 -1.97393,-0.4417978 35.5726585,-0.4417978 30.495654,0 34.286389,0.012828 34.687825,0.117389 1.452816,0.378411 2.605852,1.59008794 2.915919,3.06421747 0.09841,0.46786863 0.112974,4.88501053 0.113634,34.46101503 7.66e-4,22.899657 -0.02491,34.0863 -0.0782,34.422684 -0.256244,1.617475 -1.669517,3.027816 -3.299053,3.292211 -0.322729,0.05236 -3.814823,0.0801 -10.133084,0.08048 l -9.640651,7.66e-4 0,-14.528059 0,-14.528059 4.870139,0 4.870138,0 0.06296,-0.172496 c 0.105828,-0.289964 1.495481,-11.294654 1.443406,-11.430358 -0.04471,-0.11652 -0.50803,-0.126924 -5.652196,-0.126924 l -5.60349,0 0.02716,-4.427416 c 0.02621,-4.272633 0.03301,-4.448388 0.194511,-5.027285 0.54061,-1.937774 1.817569,-2.830342 4.348959,-3.039833 0.505991,-0.04187 2.304891,-0.07668 3.997556,-0.07735 2.734902,-0.0011 3.082754,-0.01472 3.124107,-0.122482 0.02559,-0.06688 0.04653,-2.393123 0.04653,-5.16961 0,-4.257234 -0.01705,-5.0652042 -0.1088,-5.1569586 C 66.076316,9.0207847 65.384424,8.9415704 62.99693,8.764233 61.219934,8.6322423 56.32021,8.5798554 55.330408,8.6822641 c -3.694642,0.382262 -6.562976,1.6543479 -8.822362,3.9126549 -2.234189,2.233123 -3.489269,5.00892 -3.988833,8.821902 -0.05139,0.392239 -0.100062,2.658075 -0.122268,5.691827 l -0.03689,5.040173 -4.880443,0.01973 -4.880442,0.01973 0,5.826556 0,5.826557 4.887408,0.01973 4.887407,0.01973 0,14.527491 0,14.527492 -18.227152,-0.0061 C 8.8049277,72.924654 5.8407898,72.906623 5.4213544,72.816043 Z"\n           style="fill:#ffffff" />\n      </g>\n    </svg>'
};

function compile(str) {
  var container = document.createElement('div');
  container.innerHTML = str;
  return container.children[0];
}

var CLASS_PREFIX = 'ExpansibleTextBox';

var ExpansibleTextBox = function () {
  function ExpansibleTextBox(text, maxCharacters, modulePrefix) {
    var _this = this;

    _classCallCheck(this, ExpansibleTextBox);

    if (typeof text !== 'string') {
      throw new Error('Text is not string');
    }
    this.text = text;
    this.maxCharacters = maxCharacters;
    var cssPrefix = modulePrefix + '-' + CLASS_PREFIX;

    this.container = document.createElement('p');
    this.container.classList.add('' + cssPrefix);

    this.textBox = document.createElement('span');
    this.container.appendChild(this.textBox);

    this.expanded = true;
    if (text.length > maxCharacters) {
      this.seeMoreBtn = document.createElement('span');
      this.seeMoreBtn.classList.add(cssPrefix + '-seeMore');

      this.seeMoreBtn.addEventListener('click', function () {
        return _this.toggleExpand();
      });
      this.container.appendChild(this.seeMoreBtn);
      this.toggleExpand();
    } else {
      this.textBox.textContent = this.text;
    }
  }

  _createClass(ExpansibleTextBox, [{
    key: 'getBox',
    value: function getBox() {
      return this.container;
    }
  }, {
    key: 'toggleExpand',
    value: function toggleExpand() {
      if (this.expanded) {
        this.textBox.textContent = this.trimText(this.text);
        this.seeMoreBtn.textContent = 'See More';
      } else {
        this.textBox.textContent = this.text;
        this.seeMoreBtn.textContent = 'See Less';
      }
      this.expanded = !this.expanded;
    }
  }, {
    key: 'trimText',
    value: function trimText(text) {
      var elipsis = '...';
      return text.slice(0, this.maxCharacters - elipsis.length).trim() + elipsis;
    }
  }]);

  return ExpansibleTextBox;
}();

var maxCharacters = 142;
var CSS_PREFIX = 'Post';

var Post = function () {
  /**
   * @param  {Object} review
   * @return {HTMLElement}
   */
  function Post(review, modulePrefix) {
    _classCallCheck(this, Post);

    var reviewUserName = review.reviewer.name;
    var reviewUserUrl = 'https://www.facebook.com/' + review.reviewer.id;
    var reviewUserPic = review.reviewer.picture;
    var reviewText = review.review_text;
    var reviewStars = review.rating;
    var reviewDate = review.created_time;
    var slvUrl = 'https://www.facebook.com/slvglobal';
    var slvReviewsUrl = slvUrl + '/reviews';

    var cssPrefix = modulePrefix + '_' + CSS_PREFIX;
    var postStr = '\n    <div class="' + cssPrefix + '">\n      <div class="' + cssPrefix + '-header">\n        <img class="' + cssPrefix + '-header-image"src="' + reviewUserPic + '" alt="">\n        <div class="' + cssPrefix + '-header-text">\n          <span class="' + cssPrefix + '-header-text-top">\n            <a class="' + cssPrefix + '-header-text-top-name" href=' + reviewUserUrl + ' target="_blank">\n              ' + reviewUserName + '\n            </a>\n            reviewed\n            <a class="' + cssPrefix + '-header-text-top-actionTarget" href="' + slvUrl + '" target="_blank">\n              SLV\n            </a>\n              \u2013\n            <a class="' + cssPrefix + '-header-text-stars" href="' + slvReviewsUrl + '" target="_blank">\n              ' + reviewStars + '\n            </a>\n          </span>\n          <span class="' + cssPrefix + '-header-text-bottom">\n            ' + constants.monthNames[new Date(reviewDate).getMonth()] + '\n            ' + new Date(reviewDate).getDate() + '\n            <span class="' + cssPrefix + '-header-text-globe">' + constants.globeIcon + '</span>\n          </span>\n        </div>\n        <span class="' + cssPrefix + '-header-arrowDown">' + constants.arrowDownIcon + '</span>\n      </div>\n    </div>';

    var post = compile(postStr);
    var reviewTextBox = new ExpansibleTextBox(reviewText, maxCharacters, cssPrefix);
    post.appendChild(reviewTextBox.getBox());
    this.post = post;
  }

  _createClass(Post, [{
    key: 'getContainer',
    value: function getContainer() {
      return this.post;
    }
  }]);

  return Post;
}();

var CLASS_PREFIX$1 = 'ScoreBoard';

var ScoreBoard = function () {
  function ScoreBoard(summary, MODULE_PREFIX) {
    _classCallCheck(this, ScoreBoard);

    var pageUrl = summary.url;
    var pageAverage = summary.average;
    var pageReviewCount = summary.count;
    var reviewValues = Object.keys(summary.values).map(function (v) {
      return summary.values[v];
    });

    var maxVal = reviewValues.reduce(function (max, v) {
      return v > max ? v : max;
    }, 0);
    var barSize = function barSize(val) {
      return 'calc((100% - 6em) * ' + val / maxVal + ')';
    };

    var cssPrefix = MODULE_PREFIX + '_' + CLASS_PREFIX$1;
    var scoreBoard = '<div class="' + cssPrefix + '">\n      <div class="' + cssPrefix + '-header">\n        <a class="' + cssPrefix + '-header-mainScore" href=' + pageUrl + ' target="_blank">\n          ' + pageAverage + '\n        </a>\n        <div class="' + cssPrefix + '-header-scoreDetails">\n          <span class="' + cssPrefix + '-header-scoreDetails-starCount">' + pageAverage + ' of 5 stars</span>\n          <span class="' + cssPrefix + '-header-scoreDetails-reviewCount">' + pageReviewCount + ' reviews</span>\n        </div>\n      </div>\n      <div class="' + cssPrefix + '-body">\n        <span class="' + cssPrefix + '-body-reviewCountStarScore">\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-stars">5</span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-bar" style="width:' + barSize(reviewValues[4]) + ';"></span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-reviews">' + reviewValues[4] + '</span>\n        </span>\n        <span class="' + cssPrefix + '-body-reviewCountStarScore">\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-stars">4</span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-bar" style="width:' + barSize(reviewValues[3]) + ';"></span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-reviews">' + reviewValues[3] + '</span>\n        </span>\n        <span class="' + cssPrefix + '-body-reviewCountStarScore">\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-stars">3</span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-bar" style="width:' + barSize(reviewValues[2]) + ';"></span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-reviews">' + reviewValues[2] + '</span>\n        </span>\n        <span class="' + cssPrefix + '-body-reviewCountStarScore">\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-stars">2</span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-bar" style="width:' + barSize(reviewValues[1]) + ';"></span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-reviews">' + reviewValues[1] + '</span>\n        </span>\n        <span class="' + cssPrefix + '-body-reviewCountStarScore">\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-stars">1</span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-bar" style="width:' + barSize(reviewValues[0]) + ';"></span>\n          <span class="' + cssPrefix + '-body-reviewCountStarScore-reviews">' + reviewValues[0] + '</span>\n        </span>\n      </div>\n    </div>';
    this.container = compile(scoreBoard);
  }

  _createClass(ScoreBoard, [{
    key: 'getContainer',
    value: function getContainer() {
      return this.container;
    }
  }]);

  return ScoreBoard;
}();

var MODULE_PREFIX = 'fl-fr';
window.flFacebookReviews = function (xdiv) {
  var loadedData = void 0;
  try {
    loadedData = JSON.parse(xdiv.dataset.info);
  } catch (e) {
    throw new Error('Invalid data given in data-info property.');
  }

  xdiv.classList.add(MODULE_PREFIX);

  var leftColumn = document.createElement('div');
  leftColumn.classList.add(MODULE_PREFIX + '_leftColumn');
  xdiv.appendChild(leftColumn);

  var facebookLogoBar = document.createElement('a');
  facebookLogoBar.setAttribute('href', loadedData.summary.url);
  facebookLogoBar.setAttribute('target', '_blank');
  facebookLogoBar.classList.add(MODULE_PREFIX + '_facebookLogoBar');
  facebookLogoBar.innerHTML = constants.facebookIcon;
  leftColumn.appendChild(facebookLogoBar);

  var reviewsBar = document.createElement('a');
  reviewsBar.setAttribute('href', loadedData.summary.url);
  reviewsBar.setAttribute('target', '_blank');
  reviewsBar.classList.add(MODULE_PREFIX + '_reviewsBar');
  reviewsBar.innerHTML = 'Reviews <span>' + constants.arrowDownIcon + '</span>';
  leftColumn.appendChild(reviewsBar);

  var scoreBoard = new ScoreBoard(loadedData.summary, MODULE_PREFIX);
  leftColumn.appendChild(scoreBoard.getContainer());

  var postsContainer = document.createElement('div');
  postsContainer.classList.add(MODULE_PREFIX + '_postsContainer');
  xdiv.appendChild(postsContainer);

  loadedData.reviews.forEach(function (review) {
    var post = new Post(review, MODULE_PREFIX);
    postsContainer.appendChild(post.getContainer());
  });
};
//# sourceMappingURL=fl-facebook-reviews.js.map
