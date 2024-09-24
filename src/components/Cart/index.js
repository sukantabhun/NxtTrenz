import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, onClickRemove} = value
      const showEmptyView = cartList.length === 0
      const onClickRemoveAll = () => {
        onClickRemove()
      }

      const totalSum = () => {
        let price = 0

        cartList.forEach(cartItem => {
          price += cartItem.price
        })

        return price
      }

      return (
        <>
          <Header />

          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="cart-head-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    onClick={onClickRemoveAll}
                    className="remove-all-button"
                  >
                    <h1>Remove All</h1>
                  </button>
                </div>
                <CartListView />
                <div className="align-items">
                  <h1>
                    Order Total: <span>{totalSum()}</span>
                  </h1>
                  <p>{cartList.length} items in the cart</p>
                  <button type="button" className="logout-desktop-btn">
                    <h1>Checkout</h1>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
