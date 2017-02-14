import sd from 'string-dom'
import Header from './header.js'

/** @jsx sd */

const Root = (
  <div id="root" class="root">
    <Header>
      This is the header content
    </Header>
  </div>
)

document.body.innerHTML += Root
