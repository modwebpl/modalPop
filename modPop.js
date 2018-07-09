export let modPop = function ({id = 'mPop', msg = 'Success', width = '700px', bg = 'transparent', border = '10px', shadow = '4px 6px 20px rgba(0,0,0,.3)', zIndex = '900', btnMsg = 'OK', btnClass = 'btn btn--ok', cb}) {
  this.init(id, msg, width, bg, border, shadow, zIndex, btnMsg, btnClass, cb);
};

modPop.prototype = {
  constructor: modPop,

  init: function (id, msg, width, bg, border, shadow, zIndex, btnMsg, btnClass, cb) {
    var _this = this;

    if (!_this._setVars(id, msg, width, bg, border, shadow, zIndex, btnMsg, btnClass)) return;
    _this._setEvents(cb);
  },

  _setVars: function (id, msg, width, bg, border, shadow, zIndex, btnMsg, btnClass) {
    var _this = this;

    _this._parent = document.getElementsByTagName('body')[0];
    if (!_this._parent) return false;


    // create elements

    _this._pop = document.createElement('div');
    _this._id = id;
    _this._setStyle(_this._pop, {
      'width': '100%',
      'height': '100%',
      'position': 'fixed',
      'background': bg,
      'overflow': 'hidden',
      'display': 'flex',
      'opacity': '0',
      '-webkit-box-align': 'center',
      '-ms-flex-align': 'center',
      'align-items': 'center',
      '-webkit-box-pack': 'center',
      '-ms-flex-pack': 'center',
      'justify-content': 'center',
      'z-index': zIndex
    });

    _this._wrap = document.createElement('div');
    _this._setStyle(_this._wrap, {
      'maxWidth': '' + width,
      'box-shadow': shadow,
      'border-radius': border,
      'background-color': '#fff',
      'width': '100%',
      'text-align': 'center',
      'padding': '2em 1em',
    });
    _this._pop.prepend(_this._wrap);

    _this._btnWrap = document.createElement('div');
    _this._setStyle(_this._btnWrap, {
      'width': '100%',
      'marginTop': '2em',
      'display': 'flex',
      '-webkit-box-pack': 'center',
      '-ms-flex-pack': 'center',
      'justify-content': 'center'
    });
    _this._wrap.append(_this._btnWrap);

    _this._btn = document.createElement('a');
    _this._btn.className += btnClass;
    _this._btn.innerText = btnMsg;
    _this._btnWrap.append(_this._btn);

    _this._title = document.createElement('div');
    _this._wrap.prepend(_this._title);

    _this._parent.prepend(_this._pop);

    _this._alert = msg;

    _this._tl = new TimelineLite({
      onReverseComplete: function(){
        _this._parent.removeChild(_this._pop);
      }
    });

    return true;
  },

  _setEvents: function (cb) {
    var _this = this;

    _this._open();
    _this._close(cb);
  },

  _open: function () {
    var _this = this;

    _this._title.innerHTML = _this._alert;

    _this._tl.set(_this._wrap, {y: '-50%'})
      .to(_this._pop, 0.5, {autoAlpha: 1})
      .to(_this._wrap, 0.5, {y: '0%', ease: Power3.easeInOut}, '-=0.5');
  },
  
  _setStyle = function (el, propertyObject) {
    for (let property in propertyObject) el.style[property] = propertyObject[property];
  };

  _close: function (cb) {
    var _this = this;

    _this._btn._elh = _this._btn._elh || {};
    _this._btn._elh.click = function () {
      _this._tl.reverse();
      if (cb && typeof(cb) === 'function') cb();
    };
    _this._btn.addEventListener('click', _this._btn._elh.click);
  }
};
