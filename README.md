# modalPop
Pure JS function which create a custom modal popups with any kind of message or close button - supports callback functions.


* require babel
* require GSAP

Usage:

- id - set ID name of modal popup (default: modPop)
- alert - set default message box
- width - set popup max width (default: 700px)
- background - set background (default: transparent)
- zIndex - set z-index (default: 900)
- btnMsg - set default close button text
- border - set border radius (default: 10px)
- shadow - set popup box-shadow (default: 4px 6px 20px rgba(0,0,0,.3))
- btnClass - set default button class name
- cb - name of the callback function which runs immediately after modal close

# usage:

// import module
import {modPop} from "./tpl/modPop";<br><br>
// global<br>call
window.modPop = function(...args){<br>
&nbsp;&nbsp;new modPop(...args);<br>
};<br>

modPop({<br>
&nbsp;&nbsp;  msg: '<span class="alert">Default alert message.</span>',<br>
&nbsp;&nbsp;  btnMsg: 'Close'<br>
&nbsp;&nbsp;  btnClass: 'example-class1 example-class2'<br>
});<br><br><br>

as bright as the sun, as straight as wire =)

<br><br>

<a href="http://www.modweb.pl/projects/css-framework/">demo here</a>
