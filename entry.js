const sd = require('string-dom')

/** @jsx sd */

const Root = (
  <div id="root" class="root">
    root div
  </div>
)

document.innerHTML += Root
