import { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button.jsx'
import QuantitySelector from '../QuantitySelector/QuantitySelector.jsx'
import styles from './ProductCard.module.css'

// Карточка товара: локальное состояние — выбранное количество
function ProductCard({ title, price, image, onAddToCart, onBuyNow }) {
  const [quantity, setQuantity] = useState(1)

  return (
    <article className={styles.card}>
      <img className={styles.image} src={image} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{price * quantity} BYN</p>
      <QuantitySelector value={quantity} onChange={setQuantity} />
      <div className={styles.actions}>
        <Button onClick={() => onAddToCart(quantity)}>В корзину</Button>
        <Button variant="secondary" onClick={() => onBuyNow(quantity)}>
          Купить сейчас
        </Button>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onBuyNow: PropTypes.func.isRequired,
}

export default ProductCard
