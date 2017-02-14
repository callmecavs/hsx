import sd from 'string-dom'

/** @jsx sd */

const Div = ({ children, name }) => (
  <div class={ name }>
    { children }
  </div>
)

export default Div
