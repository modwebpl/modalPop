# modalPop
Pure JS function which create a custom modal popups with any kind of message or close button - supports callback functions.


* require babel
* require <a href="https://github.com/modwebpl/modweb_">modweb</a> CSS framework
* tested on webpack 3.12.0


Usage:

- id: set ID name of modal popup
- msg: set default message box
- width: set popup max width
- btnMsg: set default close button text
- btnClass: set default button class name
- cb: name of the callback function which runs immediately after modal popup close or click
- cbInit: ('click' or 'anim') immediately after click or animation end

example:

import {modalPop} from './js_dir/modalPop.js';<br><br>
new modalPop({<br>
&nbsp;&nbsp;  id: 'mPop',<br>
&nbsp;&nbsp;  msg: '<span class="alert">Default alert message.</span>',<br>
&nbsp;&nbsp;  btnMsg: 'Close'<br>
&nbsp;&nbsp;  btnClass: 'class1 class2'<br>
});<br><br>

<a href="http://www.modweb.pl/projects/css-framework/">demo</a>
