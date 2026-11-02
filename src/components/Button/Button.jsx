import PropTypes from 'prop-types'
import styles from './Button.module.css'

// Кнопка с вариантами primary/secondary и состоянием disabled (Variants из ЛР1)
function Button({ children, variant = 'primary', disabled = false, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
