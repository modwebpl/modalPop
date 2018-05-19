export let modalPop = function (id, modalText = 'Success', width = '700', closeText = 'OK', cb) {
  this.init(id, modalText, width, closeText, cb);
};

modalPop.prototype = {
  constructor: modalPop,

  init: function (id, modalText, width, closeText, cb) {
    var _this = this;

    if (!_this._setVars(id, modalText, width, closeText)) return;
    _this._setEvents(cb);
  },

  _setVars: function (id, modalText, width, closeText) {
    var _this = this;

    _this._parent = document.getElementsByTagName('body')[0];
    if (!_this._parent) return false;

    const pop = document.createElement('div');
    const closeBtn = id + '_xBtn';
    pop.id = id;
    pop.className += 'row h100 fix bg--overlay z999 flex align-center justify-center hidden';
    pop.setAttribute('data-close', closeBtn);
    pop.setAttribute('role', 'alertdialog');

    const wrap = document.createElement('div');
    wrap.className += 'row shad txt-center bg--white padl50 padr50 padt50 padb40 xs-padl25 xs-padr25 xs-padt25 xs-padb25';
    pop.prepend(wrap);

    const btnWrap = document.createElement('div');
    btnWrap.className += 'row mt30 flex justify-center';
    wrap.append(btnWrap);

    const btn = document.createElement('a');
    btn.className += 'btn btn--ok';
    btn.id = closeBtn;
    btn.innerText = closeText;
    btn.setAttribute('role', 'button');
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

    _this._alert = modalText;

    _this._tl = new TimelineLite();
    _this._tl2 = new TimelineLite();

    CSSPlugin; // webpack "provide" plugin purpose only

    return true;
  },

  _setEvents: function (cb) {
    var _this = this;

    _this._fixIE(); // poor nasty IE11 :(
    _this._open();
    _this._close(cb);
  },
  
  _fixIE: function(){
    HTMLElement = typeof(HTMLElement) != 'undefiend' ? HTMLElement : Element;

    HTMLElement.prototype.prepend = function (element) {
      if (this.firstChild) {
        return this.insertBefore(element, this.firstChild);
      } else {
        return this.appendChild(element);
      }
    };

    HTMLElement.prototype.append = function (element) {
      if (this.firstChild) {
        return this.insertBefore(element, this.firstChild);
      } else {
        return this.appendChild(element);
      }
    };
    
    if (!('remove' in Element.prototype)) {
      Element.prototype.remove = function () {
        if (this.parentNode) {
          this.parentNode.removeChild(this);
        }
      }
    }
  },

  _open: function () {
    var _this = this;

    _this._tl2.kill();
    _this._pop.style.display = 'flex';
    _this._title.innerHTML = _this._alert;
    _this._tl.set(_this._popWrap, {y: '-50%'})
      .to(_this._pop, 0.5, {autoAlpha: 1})
      .to(_this._popWrap, 0.5, {y: '0%'}, '-=0.4');
  },

  _close: function (cb) {
    var _this = this,
      modalClose = _this._closePop;

    modalClose._elh = modalClose._elh || {};
    modalClose._elh.click = function () {
      _this._tl2.to(_this._pop, 0.5, {autoAlpha: 0})
        .to(_this._popWrap, 0.5, {y: '-50%'}, '-=0.4');
      setTimeout(function () {
        _this._pop.remove();
      }, 600);
      _this._tl.kill();
      if (cb && typeof(cb) === 'function') cb();
    };
    _this._closePop.addEventListener('click', modalClose._elh.click);
  }
};
