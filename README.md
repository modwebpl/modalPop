# modalPop
Pure JS function which create a custom modal popups with any kind of message or close button - supports callback functions.


* require babel
* tested on webpack 3.12.0


Usage:

- id: set ID name of modal popup (default: modPop)
- msg: set default message box
- width: set popup max width (default: 700px)
- background: set background (default: transparent)
- zIndex: set z-index (default: 900)
- btnMsg: set default close button text
- border: set border radius (default: 10px)
- shadow: set popup box-shadow (default: 4px 6px 20px rgba(0,0,0,.3))
- btnClass: set default button class name
- cb: name of the callback function which runs immediately after click or animation end
- cbInit: ('click' or 'anim') immediately after click or animation end

example:

import {modPop} from './js_dir/modPop.js';<br><br>
new modalPop({<br>
&nbsp;&nbsp;  id: 'mPop',<br>
&nbsp;&nbsp;  msg: '<span class="alert">Default alert message.</span>',<br>
&nbsp;&nbsp;  btnMsg: 'Close'<br>
&nbsp;&nbsp;  btnClass: 'class1 class2'<br>
});<br><br>

<a href="http://www.modweb.pl/projects/css-framework/">demo</a>
