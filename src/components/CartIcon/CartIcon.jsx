import PropTypes from 'prop-types'
import cartSvg from '../../assets/cart.svg'
import styles from './CartIcon.module.css'

// Иконка корзины со счётчиком; счётчик скрыт, пока корзина пуста
function CartIcon({ count = 0 }) {
  return (
    <div className={styles.wrap} aria-label={`Корзина: ${count}`}>
      <img src={cartSvg} alt="" width="28" height="28" />
      {count > 0 && <span className={styles.badge}>{count}</span>}
    </div>
  )
}

CartIcon.propTypes = {
  count: PropTypes.number,
}

export default CartIcon
