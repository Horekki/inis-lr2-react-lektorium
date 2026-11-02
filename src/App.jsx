import { useState } from 'react'
import Logo from './components/Logo/Logo.jsx'
import CartIcon from './components/CartIcon/CartIcon.jsx'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import Button from './components/Button/Button.jsx'
import courseImage from './assets/course.svg'
import styles from './App.module.css'

function App() {
  // Счётчик корзины и сообщение живут в App: их делят карточка, иконка и кнопка очистки
  const [cartCount, setCartCount] = useState(0)
  const [message, setMessage] = useState('')

  const clearCart = () => {
    setCartCount(0)
    setMessage('Корзина очищена')
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Logo />
        <CartIcon count={cartCount} />
      </header>

      <main className={styles.main}>
        <ProductCard
          title="Онлайн-курс «Основы TypeScript»"
          price={49}
          image={courseImage}
          onAddToCart={(qty) => {
            setCartCount((c) => c + qty)
            setMessage(`Добавлено в корзину: ${qty}`)
          }}
          onBuyNow={(qty) => setMessage(`Оформление заказа: ${qty} шт.`)}
        />
        <aside className={styles.side}>
          <p className={styles.message}>
            {message || 'Выберите количество и добавьте курс в корзину.'}
          </p>
          <Button variant="secondary" disabled={cartCount === 0} onClick={clearCart}>
            Очистить корзину
          </Button>
        </aside>
      </main>
    </div>
  )
}

export default App
