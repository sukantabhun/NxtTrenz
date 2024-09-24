import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  onAddQuantity: () => {},
  onRemoveQuantity: () => {},
  onClickRemove: () => {},
})

export default CartContext
