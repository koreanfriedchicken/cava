import { BagState } from "../context/BagContext"

const OrderModal = ({ setOrderModal }) => {

  const { state, dispatch } = BagState()
  const newbag = state.bag

  newbag.map((i, n) => {
    i.ingredients.map((j) => {
      console.log(j)
    })
  })

  return (
    <div className='ordermodal'>
      <div className='ordermodal__background' onClick={() => setOrderModal(false)}>

      </div>
      <div className='ordermodal__modal'>
        <div className='ordermodal__location'>
          Pickup from New York
        </div>
        <div className='ordermodal__list'>
          {
              newbag.map((i, n) => {
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
                    <div>Remove</div>
                  </div>
                </div>
              })
          }
        </div>
        <div className='ordermodal__total'></div>
        <div className='ordermodal__buttons'></div>
      </div>
    </div>
  )
}

export default OrderModal