import sd from 'string-dom'

import '../../config/reset.scss'
import '../../config/base.scss'

import './main.scss'

/** @jsx sd */

const Main = ({ children, name }) => (
  <div class={ name }>
    { children }
  </div>
)

export default Main
