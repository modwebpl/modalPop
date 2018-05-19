# modalPop
create custom modaluar popup

* require babel
* require modweb CSS framework
* tested on webpack 3.12.0


Usage:

- id: div id name
- modalText: default message box
- width: popup max width
- closeText: default close button text
- cb: name of the callback function which runs immediately after modal popup close

example:

import {modalPop} from './js_dir/modalPop.js';
new modalPop(id, modalText, width, closeText, cb);
