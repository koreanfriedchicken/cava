import { useState, useEffect } from "react"
import { BagState } from "../context/BagContext"

const Checkout = ({ setOrderModal }) => {

  const { state, dispatch } = BagState()

  const [subtotal, setSubtotal] = useState(0)


  useEffect(() => {
    setSubtotal(
      state.bag.reduce((total, item) => total + (item.price * item.quantity), 0)
    ) 
    setOrderModal(false)
  }, [state.bag])

  return (
    <div className='checkout'>
      <div className='checkout__content'>
        <h1>CHECKOUT</h1>

        <h2>ORDER SUMMARY</h2>

        {state.bag.length > 0 && state.bag.map((i) => {
          return <div className='checkout__item'>
            <div className='checkout__itemleft'>
              <div>{i.quantity}</div>
              <div>{i.name}</div>
            </div>
            <div>{i.price.toFixed(2)}</div>
          </div>
        })}

        <div className='checkout__line'>
          <div>Subtotal</div>
          <div>{subtotal.toFixed(2)}</div>
        </div>

        <div className='checkout__line'>
          <div>Tax</div>
          <div>{(subtotal * .08).toFixed(2)}</div>
        </div>

        <div className='checkout__line checkout__total'>
          <div>Total</div>
          <div>{(subtotal + (subtotal * .08)).toFixed(2)}</div>
        </div>

        <div className='checkout__submit'>Place Order</div>
      </div>
    </div>
  )
}

export default Checkout