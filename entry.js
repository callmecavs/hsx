import sd from 'string-dom'
import Header from './header.js'

/** @jsx sd */

const Root = (
  <div id="root" class="root">
    <Header>
      This is the header content, below is an image loaded using require:
      <img class="image" src={ require('./image.png') }/>
    </Header>
  </div>
)

document.body.innerHTML += Root
