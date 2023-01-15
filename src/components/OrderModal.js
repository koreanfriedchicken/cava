import { useEffect, useState } from "react"
import { BagState } from "../context/BagContext"

const OrderModal = ({ setOrderModal }) => {

  const { state, dispatch } = BagState()
  const [ totalPrice, setTotalPrice] = useState(0)

  const handleRemove = (index) => {
    dispatch({
      type: 'REMOVE',
      payload: index
    })
  }

  useEffect(() => {
    setTotalPrice(
      state.bag.reduce((total, item) => total + item.price, 0)
    ) 
  }, [state.bag])

  return (
    <div className='ordermodal'>
      <div className='ordermodal__background' onClick={() => setOrderModal(false)}>

      </div>
      <div className='ordermodal__modal'>
        <div className='ordermodal__location'>
          Pickup from Antarctica
        </div>
        <div className='ordermodal__list'>
          {
              state.bag.map((i, n) => {
                return <div className='ordermodal__list__item'>
                  <div className='ordermodal__list__itemheader'>
                    <div className='ordermodal__list__itemleft'>
                      <div className='ordermodal__list__itemname'>GREENS + GRAINS BOWL</div>
                    </div>
                    <div className='ordermodal__list__itemright'>
                      <div className='ordermodal__list__itemarrow'>A</div>
                      <div className='ordermodal__list__itemquantity'>{i.quantity}</div>
                      <div className='ordermodal__list__itemprice'>{i.price.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className='ordermodal__list__ingredients'>
                    {i.ingredients.map((j) => {
                      return <span className='ordermodal__list__ingredient'>{`${j.name}, `}</span>
                    })}
                  </div>
                  <div className='ordermodal__list__options'>
                    <div>Modify</div>
                    <div onClick={() => handleRemove(i.uuid)}>Remove</div>
                  </div>
                </div>
              })
          }
        </div>
        <div className='ordermodal__footer'>
          <div className='ordermodal__total'>
            <div>Bag Total</div>
            <div>${totalPrice.toFixed(2)}</div>
          </div>
          <div className='ordermodal__buttons'>
            <div className='ordermodal__addmore'>Add More Items</div>
            <div className='ordermodal__checkout'>Checkout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal