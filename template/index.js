import Div from './components/Div.js'
import sd from 'string-dom'

/** @jsx sd */

const Root = (
  <html>
    <head>
      <meta charset="utf-8"/>
    </head>
    <body>
      <Div class="heading">hsx</Div>
    </body>
  </html>
)

document.getElementById('root').innerHTML = Root
