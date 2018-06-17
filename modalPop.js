export let modalPop = function ({id = 'mPop', msg = 'Success', width = '700', btnMsg = 'OK', btnClass = 'btn btn--ok', cb, cbInit = 'click'}) {
  this.init(id, msg, width, btnMsg, btnClass, cb, cbInit);
};

modalPop.prototype = {
  constructor: modalPop,

  init: function (id, msg, width, btnMsg, btnClass, cb, cbInit) {
    var _this = this;

    if (!_this._setVars(id, msg, width, btnMsg, btnClass, cb, cbInit)) return;
    _this._setEvents(cb, cbInit);
  },

  _setVars: function (id, msg, width, btnMsg, btnClass, cb, cbInit) {
    var _this = this;

    _this._parent = document.getElementsByTagName('body')[0];
    if (!_this._parent) return false;


    // create elements
    const pop = document.createElement('div');
    const closeBtn = id + '_xBtn';
    pop.id = id;
    pop.className += 'row h100 fix bg--overlay z900 flex align-center justify-center hidden';

    const wrap = document.createElement('div');
    wrap.className += 'row shad txt-center bg--white padl50 padr50 padt50 padb40 xs-padl25 xs-padr25 xs-padt25 xs-padb25';
    pop.prepend(wrap);

    const btnWrap = document.createElement('div');
    btnWrap.className += 'row mt30 flex justify-center';
    wrap.append(btnWrap);

    const btn = document.createElement('a');
    btn.className += btnClass;
    btn.id = closeBtn;
    btn.innerText = btnMsg;
    btnWrap.append(btn);

    const title = document.createElement('div');
    wrap.prepend(title);

    _this._parent.prepend(pop);

    _this._pop = _this._parent.querySelector('#' + id);
    if (!_this._pop) return false;

    _this._popWrap = _this._pop.firstElementChild;
    if (!_this._popWrap) return false;

    _this._title = _this._popWrap.firstElementChild;
    if (!_this._title) return false;

    _this._closePop = _this._pop.querySelector('#' + closeBtn);
    if (!_this._closePop) return false;

    _this._width = width;
    _this._popWrap.style.maxWidth = _this._width + 'px';

    _this._alert = msg;

    _this._tl = new TimelineLite();
    _this._tl2 = new TimelineLite({
      paused: true,
      onComplete: function () {
        _this._pop.remove();
        _this._tl.clear();
        if (cb && typeof(cb) === 'function' && cbInit === 'anim') cb();
      }
    });

    CSSPlugin;

    return true;
  },

  _setEvents: function (cb, cbInit) {
    var _this = this;

    _this._init();
    _this._close(cb, cbInit);
  },

  _init: function () {
    var _this = this;

    _this._pop.style.display = 'flex';
    _this._title.innerHTML = _this._alert;

    _this._tl.set(_this._popWrap, {y: '-50%'})
      .to(_this._pop, 0.5, {autoAlpha: 1})
      .to(_this._popWrap, 0.5, {y: '0%'}, '-=0.4');
  },

  _close: function (cb, cbInit) {
    var _this = this;

    const modalClose = _this._closePop;

    modalClose._elhs = modalClose._elhs || {};
    modalClose._elhs.click = function () {
      _this._tl2.play()
        .to(_this._pop, 0.5, {autoAlpha: 0})
        .to(_this._popWrap, 0.5, {y: '-50%'}, '-=0.4');
      if (cb && typeof(cb) === 'function' && cbInit === 'click') cb();
    };
    _this._closePop.addEventListener('click', modalClose._elhs.click);
  }
};
