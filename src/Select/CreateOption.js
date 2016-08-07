import cx from 'classnames'
import { PropTypes } from 'react'

const CreateOption = ({ isFocused, addLabelText, children }) => (
  <li className={cx({ 'uk-active': isFocused })}>
    <a>
      {addLabelText}&nbsp;
      <span className="uk-text-bold">
        {children}
      </span>
    </a>
  </li>
)

CreateOption.propTypes = {
  addLabelText: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  isFocused: PropTypes.bool.isRequired,
}

export default CreateOption
