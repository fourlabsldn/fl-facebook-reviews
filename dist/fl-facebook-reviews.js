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

var _classCallCheck = (classCallCheck && typeof classCallCheck === 'object' && 'default' in classCallCheck ? classCallCheck['default'] : classCallCheck);

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var require$$2 = (_core && typeof _core === 'object' && 'default' in _core ? _core['default'] : _core);

var _fails = createCommonjsModule(function (module) {
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
});

var require$$1 = (_fails && typeof _fails === 'object' && 'default' in _fails ? _fails['default'] : _fails);

var _descriptors = createCommonjsModule(function (module) {
// Thank's IE8 for his funny defineProperty
module.exports = !require$$1(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$0$2 = (_descriptors && typeof _descriptors === 'object' && 'default' in _descriptors ? _descriptors['default'] : _descriptors);

var _isObject = createCommonjsModule(function (module) {
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
});

var require$$0$3 = (_isObject && typeof _isObject === 'object' && 'default' in _isObject ? _isObject['default'] : _isObject);

var _toPrimitive = createCommonjsModule(function (module) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require$$0$3;
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

var require$$1$1 = (_toPrimitive && typeof _toPrimitive === 'object' && 'default' in _toPrimitive ? _toPrimitive['default'] : _toPrimitive);

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var require$$3 = (_global && typeof _global === 'object' && 'default' in _global ? _global['default'] : _global);

var _domCreate = createCommonjsModule(function (module) {
var isObject = require$$0$3
  , document = require$$3.document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
});

var require$$0$4 = (_domCreate && typeof _domCreate === 'object' && 'default' in _domCreate ? _domCreate['default'] : _domCreate);

var _ie8DomDefine = createCommonjsModule(function (module) {
module.exports = !require$$0$2 && !require$$1(function(){
  return Object.defineProperty(require$$0$4('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
});

var require$$2$2 = (_ie8DomDefine && typeof _ie8DomDefine === 'object' && 'default' in _ie8DomDefine ? _ie8DomDefine['default'] : _ie8DomDefine);

var _anObject = createCommonjsModule(function (module) {
var isObject = require$$0$3;
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
});

var require$$3$1 = (_anObject && typeof _anObject === 'object' && 'default' in _anObject ? _anObject['default'] : _anObject);

var _objectDp = createCommonjsModule(function (module, exports) {
var anObject       = require$$3$1
  , IE8_DOM_DEFINE = require$$2$2
  , toPrimitive    = require$$1$1
  , dP             = Object.defineProperty;

exports.f = require$$0$2 ? Object.defineProperty : function defineProperty(O, P, Attributes){
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

var require$$2$1 = (_objectDp && typeof _objectDp === 'object' && 'default' in _objectDp ? _objectDp['default'] : _objectDp);

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

var require$$1$2 = (_propertyDesc && typeof _propertyDesc === 'object' && 'default' in _propertyDesc ? _propertyDesc['default'] : _propertyDesc);

var _hide = createCommonjsModule(function (module) {
var dP         = require$$2$1
  , createDesc = require$$1$2;
module.exports = require$$0$2 ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
});

var require$$0$5 = (_hide && typeof _hide === 'object' && 'default' in _hide ? _hide['default'] : _hide);

var _aFunction = createCommonjsModule(function (module) {
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
});

var require$$0$6 = (_aFunction && typeof _aFunction === 'object' && 'default' in _aFunction ? _aFunction['default'] : _aFunction);

var _ctx = createCommonjsModule(function (module) {
// optional / simple context binding
var aFunction = require$$0$6;
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

var require$$1$3 = (_ctx && typeof _ctx === 'object' && 'default' in _ctx ? _ctx['default'] : _ctx);

var _export = createCommonjsModule(function (module, exports) {
var global    = require$$3
  , core      = require$$2
  , ctx       = require$$1$3
  , hide      = require$$0$5
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

var require$$2$3 = (_export && typeof _export === 'object' && 'default' in _export ? _export['default'] : _export);

var es6_object_defineProperty = createCommonjsModule(function (module) {
var $export = require$$2$3;
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require$$0$2, 'Object', {defineProperty: require$$2$1.f});
});

var defineProperty$1 = createCommonjsModule(function (module) {
var $Object = require$$2.Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
});

var require$$0$1 = (defineProperty$1 && typeof defineProperty$1 === 'object' && 'default' in defineProperty$1 ? defineProperty$1['default'] : defineProperty$1);

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": require$$0$1, __esModule: true };
});

var require$$0 = (defineProperty && typeof defineProperty === 'object' && 'default' in defineProperty ? defineProperty['default'] : defineProperty);

var createClass = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

var _defineProperty = require$$0;

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

var _createClass = (createClass && typeof createClass === 'object' && 'default' in createClass ? createClass['default'] : createClass);

var constants = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  globeIcon: '\n  <svg\n     xmlns:dc="http://purl.org/dc/elements/1.1/"\n     xmlns:cc="http://creativecommons.org/ns#"\n     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n     xmlns:svg="http://www.w3.org/2000/svg"\n     xmlns="http://www.w3.org/2000/svg"\n     version="1.1"\n     id="svg2"\n     viewBox="0 0 300 299.99999"\n     height="0.9em"\n     width="0.9em">\n    <defs\n       id="defs4" />\n    <metadata\n       id="metadata7">\n      <rdf:RDF>\n        <cc:Work\n           rdf:about="">\n          <dc:format>image/svg+xml</dc:format>\n          <dc:type\n             rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n          <dc:title></dc:title>\n        </cc:Work>\n      </rdf:RDF>\n    </metadata>\n    <g\n       transform="translate(0,-752.36222)"\n       id="layer1">\n      <path\n         id="path4192"\n         d="M 122.82495,1050.6503 C 69.68355,1040.7977 24.947571,1001.8474 7.9046971,950.5925 -3.800174,915.3912 -1.3764915,872.92923 14.231865,839.7425 c 14.332252,-30.47343 39.946996,-56.257 70.841047,-71.30792 12.068838,-5.87969 20.118188,-8.75621 32.442468,-11.59368 8.35965,-1.92469 10.83108,-2.13587 28.77115,-2.45838 21.85029,-0.39281 28.20167,0.16902 41.93189,3.70922 16.76667,4.32309 34.25061,12.71285 51.02795,24.48599 9.21686,6.46773 26.31043,23.58516 32.95419,33.00023 14.5032,20.55286 24.13031,44.66862 26.74968,67.00756 1.40345,11.969 0.48785,41.89502 -1.57609,51.51373 -12.13003,56.53068 -56.10233,101.45625 -112.79539,115.24075 -7.59598,1.8469 -9.40951,1.9724 -31.83581,2.2033 -18.58774,0.1913 -25.12115,0 -29.918,-0.893 z m 76.57987,-16.8663 c 10.98211,-4.4624 13.54294,-7.6394 13.57001,-16.8349 0.0243,-8.2708 1.04898,-14.8297 4.31301,-27.60844 2.25919,-8.84477 2.81367,-12.58184 3.13126,-21.10422 l 0.38592,-10.35623 -8.38414,-8.16281 c -9.3427,-9.09607 -12.8526,-11.21882 -22.47221,-13.59088 -8.58246,-2.11632 -14.82873,-2.96965 -28.92223,-3.9512 -11.38613,-0.79298 -26.86951,-2.98533 -32.64706,-4.62262 -3.6955,-1.04727 -5.0485,-3.18108 -5.64684,-8.90564 -0.45914,-4.3928 -0.36813,-4.73565 1.96136,-7.38878 3.2408,-3.69106 9.52967,-6.05364 16.50059,-6.19889 l 5.32835,-0.11103 4.64432,7.66097 c 2.55437,4.21351 5.21892,7.77152 5.92123,7.90668 2.16983,0.41756 2.39601,-2.62225 0.5973,-8.02738 -2.37406,-7.13408 -1.82447,-19.18504 1.45546,-31.91382 3.03709,-11.78639 4.92496,-15.74155 13.05306,-27.34687 3.71719,-5.30741 6.98655,-10.04479 7.26526,-10.52754 0.43546,-0.75429 -8.02611,-11.9975 -18.37469,-24.41513 -2.78552,-3.34244 -18.46538,-17.23845 -25.15898,-22.29671 -2.8597,-2.16104 -3.3921,-2.27601 -10.7398,-2.31908 -6.88737,-0.0404 -8.61545,-0.35609 -15.83704,-2.8933 l -8.10612,-2.84796 -18.743368,4.96079 c -35.226758,9.32342 -30.970903,7.76079 -35.53373,13.04694 -2.210225,2.56062 -5.279854,6.23054 -6.821365,8.15539 l -2.802785,3.4997 2.867184,4.93131 c 1.576961,2.71222 3.488462,5.05096 4.247788,5.19718 0.759343,0.14627 2.718276,-0.66113 4.353197,-1.79412 l 2.97259,-2.06001 3.833967,1.27343 c 5.808834,1.9294 8.643817,4.21807 10.985179,8.86831 2.533631,5.03208 2.640861,7.84031 0.587122,15.37632 -2.812945,10.32193 -4.54975,18.6917 -4.566609,22.00683 -0.01063,2.02962 1.390282,7.10676 3.703408,13.42474 2.046025,5.58837 4.854018,14.47576 6.240016,19.74977 2.605032,9.91276 5.33842,16.78282 7.337452,18.44187 1.829847,1.51864 2.164295,0.32657 1.223163,-4.35966 -1.674577,-8.33837 -1.225123,-8.67578 2.978696,-2.23617 7.09945,10.87527 14.066035,16.98888 26.829725,23.54473 l 6.52059,3.3492 22.70588,0.38356 c 24.84192,0.41965 25.24021,0.4968 25.23892,4.88848 -3.8e-4,1.31958 -1.31106,8.79542 -2.91263,16.61298 l -2.91191,14.21375 2.4712,10.13905 c 2.57284,10.55601 4.82946,16.31211 8.93989,22.80361 4.27043,6.7444 15.29121,22.2113 16.5731,23.2593 1.60231,1.31 5.68282,0.6825 11.84531,-1.8216 z m 85.99736,-89.22423 c 2.2224,-4.29768 6.5763,-20.20976 7.33023,-26.78971 1.75241,-15.29393 -0.0915,-45.73616 -3.12799,-51.64505 -0.80085,-1.55835 -17.73123,-8.21252 -28.21404,-11.08898 l -7.95604,-2.18312 -11.34695,11.54325 c -13.06108,13.28702 -13.87242,14.76858 -12.40604,22.65363 0.98484,5.29568 4.69464,12.03102 11.22046,20.37131 4.56788,5.83795 11.8117,11.73669 19.23908,15.66665 7.93164,4.19677 10.96133,6.67074 14.68375,11.99041 6.20534,8.86799 8.31144,11.63046 8.88572,11.65498 0.30561,0.0136 1.06692,-0.96498 1.69182,-2.17337 z m -5.69954,-99.1019 c 0,-5.37819 -27.99355,-41.67742 -36.37763,-47.17088 -2.11464,-1.38558 -2.19121,-1.38388 -3.30617,0.0732 -3.6218,4.7331 -4.00805,6.95081 -4.02564,23.11307 -0.009,8.51641 0.2997,16.31701 0.68661,17.33463 0.49766,1.30895 1.7085,2.13164 4.13886,2.81209 4.02553,1.12708 5.63636,0.72748 11.09049,-2.75128 2.22327,-1.41806 4.42142,-2.5783 4.88478,-2.5783 0.46336,0 5.35285,2.24385 10.86557,4.98634 10.02961,4.98958 12.04313,5.68862 12.04313,4.18111 z M 158.20133,781.75925 c 15.76969,-0.81915 16.05582,-0.8643 18.22608,-2.87673 4.31644,-4.00253 9.7901,-11.06885 9.10485,-11.75411 -1.00751,-1.00752 -17.55057,-5.0541 -25.15937,-6.15421 -5.64346,-0.81597 -8.08812,-0.76225 -17.08068,0.3753 -11.81651,1.49477 -24.93569,4.03399 -27.2549,5.27519 -1.81034,0.96887 -2.42147,0.42974 11.32515,9.9907 9.81807,6.82862 7.10783,6.37655 30.83887,5.14386 z"/>\n    </g>\n  </svg>',
  arrowDownIcon: '\n  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 1080 1080" enable-background="new 0 0 1080 1080" xml:space="preserve">\n      <path fill="#9B9B9B" d="M878.767,410.955L573.344,726.237c-7.79,8.048-18.167,12.085-28.544,12.085\n            c-9.963,0-19.94-3.727-27.652-11.206L201.852,421.694c-15.773-15.269-16.174-40.423-0.906-56.209\n            c15.307-15.76,40.462-16.148,56.209-0.88l286.751,277.758l277.771-286.738c15.281-15.76,40.475-16.148,56.196-0.88\n            C893.647,370.014,894.048,395.169,878.767,410.955z" />\n  </svg>'
};

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
    var postStr = '\n    <div class="' + cssPrefix + '">\n      <div class="' + cssPrefix + '-header">\n        <img class="' + cssPrefix + '-header-image"src="' + reviewUserPic + '" alt="">\n        <div class="' + cssPrefix + '-header-text">\n          <span class="' + cssPrefix + '-header-text-top">\n            <a class="' + cssPrefix + '-header-text-top-name" href=' + reviewUserUrl + '>\n              ' + reviewUserName + '\n            </a>\n            reviewed\n            <a class="' + cssPrefix + '-header-text-top-actionTarget" href="' + slvUrl + '">\n              SLV\n            </a>\n              –\n            <a class="' + cssPrefix + '-header-text-stars" href="' + slvReviewsUrl + '">\n              ' + reviewStars + '\n            </a>\n          </span>\n          <span class="' + cssPrefix + '-header-text-bottom">\n            ' + constants.monthNames[new Date(reviewDate).getMonth()] + '\n            ' + new Date(reviewDate).getDate() + '\n            <span class="' + cssPrefix + '-header-text-globe">' + constants.globeIcon + '</span>\n          </span>\n        </div>\n        <span class="' + cssPrefix + '-header-arrowDown">' + constants.arrowDownIcon + '</span>\n      </div>\n    </div>';

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

function compile(str) {
  var container = document.createElement('div');
  container.innerHTML = str;
  return container.children[0];
}

var MODULE_PREFIX = 'fl-fr';
xController(function (xdiv) {
  var loadedData = {
    'summary': {
      'url': 'https://www.facebook.com/fourlabsldn/',
      'average': 4.8,
      'count': 377,
      'values': {
        1: 5,
        2: 2,
        3: 3,
        4: 43,
        5: 324
      }
    },
    'reviews': [{
      'rating': 5,
      'created_time': '2016-06-15T16:53:32+0000',
      'review_text': 'I did a 4 week mental health placement in March, which was my first experience of volunteering abroad and I am so glad I volunteered with SLV. SLV is an extremely organised, caring and energetic company and I always felt safe. All of the volunteers, supervisors, coordinators and nationals are extremely nice and supportive and make being out of your comfort zone so much easier. SLV gives you the experience of local Sri Lankan culture, which I thoroughly enjoyed. This included travelling to projects on the local bus, living with a Sri Lankan family, and eating the local food. The SLV team members would always be keen to share tips to help us get settled such as which activities work well in particular projects to where the best milkshake place is. The nationals were eager to teach us words in Sinhala and always happy to answer questions we had about Sri Lankan culture. The family I stayed with and all of the families I met were so welcoming and caring and cooked amazing food! The projects timetable gives you the opportunity to gain experience in a range of different places from colleges to orphanages to temples. So there is a lot of opportunity to learn and gain experience. Also, being on the mental health placement I got to shadow an extremely inspirational psychiatrist and attend workshops on meditation and creative therapy. I really enjoyed these events and learnt a lot from them. At the end of the 4 weeks I was not ready to leave as I had so much fun with the SLV team and was going to miss the people and the beautiful country. Thank you so much to my Sri Lankan family, the nationals, coordinators and volunteers I met for making my experience volunteering in Sri Lanka so amazing!',
      'reviewer': {
        'name': 'Jonny Schmid',
        'id': '10203747248060595',
        'picture': 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12963617_10209069075862964_6734895078487402276_n.jpg?oh=f69f77402807d7839d904e2ccf13de3e&oe=57CB075D'
      }
    }, {
      'rating': 4,
      'created_time': '2016-09-05T23:00:00.000Z',
      'review_text': 'I found out about SLV through advertisements on Facebook and Twitter in 2014. Since I am a passionate traveller and studied Psychology in university, I was immediately drawn to SLV. I did a 6 week placement in the Mental Health and Special Needs placement. I had an amazing experience from day 1. I was housed with a lovely group of other SLV volunteers and an absolutely lovely family, who looked after us with so much warmth and love. Our induction week was very structured and organised, and gave us a very informative outlook on what SLV do. In my placement, I encountered some challenges with patients and students that have made me a stronger working professional and has allowed me to feel confident in overcoming most challenges that I am faced with back in the work world. I have cherished some great memories of SLV that I intend to hold on to forever.',
      'reviewer': {
        'name': 'Emma Cumming',
        'id': '887590330',
        'picture': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p50x50/13124663_10156886681725331_4159308296755368677_n.jpg?oh=691086fbc8061ff64dcc8b93a9559eb8&oe=57D490A5'
      }
    }, {
      'rating': 5,
      'created_time': '2016-04-01T23:00:00.000Z',
      'review_text': 'I was lucky enough to complete a 4 week mental health placement with SLV from November-December 2015 and it was an amazing experience. Whilst i was apprehensive about the Teaching projects at first, i did find that i enjoyed these projects once i started them. The mental health projects were extremely valuable and reignited my passion for working in Mental Health. The Coordinators, nationals and all the staff were really helpful and friendly, and i found all the other volunteers to be really friendly as well which made me feel less nervous. It was definitely challenging and eye-opening but i would recommend it to anyone. Sri Lanka is a beautiful country and i enjoyed exploring it and trying new things. I gave up my job at King\'s College Hospital to go to Sri Lanka, and i didn\'t regret it for a second.. Since i have been back i have had other job offers within the NHS and i believe this is due to the incredible cross-cultural experience i gained with SLV. Hopefully i can take what i learned and apply it to my new job within Mental Health. Thank you so much for the experience!',
      'reviewer': {
        'name': 'Danielle Proctor',
        'id': 'danielle.proctor.7',
        'picture': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c0.2.50.50/p50x50/10981607_10204994926144339_5571974026086666108_n.jpg?oh=ae63430bc3b97a2863226f0fbb56919e&oe=57D7F7D0'
      }
    }]
  };

  loadedData.reviews.forEach(function (review) {
    var post = new Post(review, MODULE_PREFIX);
    xdiv.appendChild(post.getContainer());
  });
});
//# sourceMappingURL=fl-facebook-reviews.js.map
