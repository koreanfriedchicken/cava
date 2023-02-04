import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BagState } from "../context/BagContext"

const OrderModal = ({ setOrderModal }) => {

  const { state, dispatch } = BagState()
  const [ totalPrice, setTotalPrice] = useState(0)

  const handleRemove = (itemid) => {
    dispatch({
      type: 'REMOVE',
      payload: itemid
    })
  }

  const handleModify = (itemid) => {
    setOrderModal(false)
    dispatch({
      type: 'MODDING',
      payload: itemid
    })
  }

  useEffect(() => {
    setTotalPrice(
      state.bag.reduce((total, item) => total + (item.price * item.quantity), 0)
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
                      <div className='ordermodal__list__itemquantity'>
                          <select value={i.quantity} onChange={(e) => {
                            dispatch({
                              type: 'CHANGE',
                              payload: {
                                id: i.uuid,
                                quantity: e.target.value
                              }
                            })
                          }}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                          </select>
                      </div>
                      <div className='ordermodal__list__itemprice'>{(i.quantity * i.price).toFixed(2)}</div>
                    </div>
                  </div>
                  <div className='ordermodal__list__ingredients'>
                    {i.ingredients.map((j) => {
                      return <span className='ordermodal__list__ingredient'>{`${j.name}, `}</span>
                    })}
                  </div>
                  <div className='ordermodal__list__options'>
                    <Link className='ordermodal_modify' to='/builder'>
                      <div onClick={() => handleModify(i.uuid)}>Modify</div>
                    </Link>
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
            <div className='ordermodal__addmore' onClick={() => setOrderModal(false)}>Add More Items</div>
            <Link className='ordermodal__checkout link' to='/checkout'>
              <div>Checkout</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderModal