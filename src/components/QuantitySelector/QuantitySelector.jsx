import PropTypes from 'prop-types'
import styles from './QuantitySelector.module.css'

// Селектор количества; значение хранит родитель, компонент лишь вызывает onChange
function QuantitySelector({ value, min = 1, max = 99, onChange }) {
  return (
    <div className={styles.selector}>
      <button
        type="button"
        className={styles.step}
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        aria-label="Уменьшить"
      >
        −
      </button>
      <span className={styles.value}>{value}</span>
      <button
        type="button"
        className={styles.step}
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        aria-label="Увеличить"
      >
        +
      </button>
    </div>
  )
}

QuantitySelector.propTypes = {
  value: PropTypes.number.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default QuantitySelector
