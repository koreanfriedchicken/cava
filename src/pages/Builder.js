import { useCallback, useEffect, useState } from "react"
import { BagState } from "../context/BagContext"
import { Link } from "react-router-dom"

const Builder = () => {

  const { state, dispatch } = BagState()

  const [price, setPrice] = useState(10.95)
  const [cal, setCal] = useState(0)
  const [order, setOrder] = useState([])
  const [uniqueItems, setUniqueItems] = useState({greens: 0, grains: 0, dips: 0})
  const [errorModal, setErrorModal] = useState(false)
  const [modding, setModding] = useState()

  //holding async value
  let green = 0
  let grain = 0
  let dips = 0

  //sample data
  const sampledata={
    'arugula':{
      img:'arugula.avif',
      name: 'Arugula',
      cal: 10,
      type: 'greens',
      price: 0
    }, 
    'supergreens':{
      img:'supergreens.avif',
      name: 'SuperGreens',
      cal: 20,
      type: 'greens',
      price: 0
    },
    'babyspinach':{
      img:'babyspinach.avif',
      name: 'Baby Spinach',
      cal: 10,
      type: 'greens',
      price: 0
    },
    'romaine':{
      img:'romaine.avif',
      name: 'Romaine',
      cal: 10,
      type: 'greens',
      price: 0
    },
    'splendidgreens':{
      img:'splendid.avif',
      name: 'Splendid Greens',
      cal: 10,
      type: 'greens',
      price: 0
    },
    'saffronrice':{
      img:'saffronrice.avif',
      name: 'Saffron Basmati Rice',
      cal: 145,
      type: 'grains',
      price: 0
    },
    'brownrice':{
      img:'brownrice.avif',
      name: 'Brown Rice',
      cal: 155,
      type: 'grains',
      price: 0
    },
    'blacklentils':{
      img:'blacklentils.avif',
      name: 'Black Lentils',
      cal: 130,
      type: 'grains',
      price: 0
    },
    'rightrice':{
      img:'rightrice.avif',
      name: 'Right Rice',
      cal: 185,
      type: 'grains',
      price: .65
    },
    'tzatziki':{
      img:'tzatziki.avif',
      name: 'Tzatziki',
      cal: 35,
      type: 'dips',
      price: 0
    },
    'hummus':{
      img:'hummus.avif',
      name: 'Traditional Hummus',
      cal: 45,
      type: 'dips',
      price: 0
    },
    'feta':{
      img:'feta.avif',
      name: 'Crazy Feta',
      cal: 70,
      type: 'dips',
      price: 0
    },
    'harissa':{
      img:'harissa.avif',
      name: 'Harissa',
      cal: 70,
      type: 'dips',
      price: 0
    },
    'redpepperhummus':{
      img:'red_pepper_hummus.avif',
      name: 'Red Pepper Hummus',
      cal: 30,
      type: 'dips',
      price: 0
    },
    'roastedeggplant':{
      img:'roasted_eggplant_dip.avif',
      name: 'Roasted Eggplant Dip',
      cal: 10,
      type: 'dips',
      price: 0
    },
  }



  useEffect(() => {
    return () => {
      dispatch({
        type: 'DONEMOD'
      })
    }
  }, [dispatch])



  const handleAdd = useCallback((item) => {
    console.log(uniqueItems)
      if(item.type === 'greens' && uniqueItems.greens === 0 && green === 0){
        setUniqueItems((prevItems) => ({ ...prevItems, greens: 1}))
        setOrder(prevOrder => [...prevOrder, {...item}])
        setCal(prevCal => prevCal + item.cal)
        setPrice(prevPrice => prevPrice + item.price)
        green++
        return
      }

      if(item.type === 'grains' && uniqueItems.grains === 0 && grain === 0){
        setUniqueItems((prevItems) => ({ ...prevItems, grains: 1}))
        setOrder(prevOrder => [...prevOrder, {...item}])
        setCal(prevCal => prevCal + item.cal)
        setPrice(prevPrice => prevPrice + item.price)
        grain++
        return
      }

      if(item.type === 'dips' && uniqueItems.dips < 3 && dips < 3){
        const newDips = uniqueItems.dips += 1
        setUniqueItems((prevItems) => ({ ...prevItems, dips: newDips }))
        setOrder(prevOrder => [...prevOrder, {...item}])
        setCal(prevCal => prevCal + item.cal)
        setPrice(prevPrice => prevPrice + item.price)
        dips++
        return
      }

      setErrorModal(true)

  }, [dips, grain, green, uniqueItems])

  const handleRemove = (item, index) => {
    if(item.type === 'greens'){
      setUniqueItems({ ...uniqueItems, greens: 0})
    }
    if(item.type === 'grains'){
      setUniqueItems({ ...uniqueItems, grains: 0})
    }
    if(item.type === 'dips'){
      const newDips = uniqueItems.dips -= 1
      setUniqueItems({ ...uniqueItems, dips: newDips})
    }

    //splice to remove item
    const newOrder = order
    newOrder.splice(index, 1)
    setOrder(newOrder)
    setCal(cal - item.cal)
    setPrice(price - item.price)
  }

  //add order to bag
  const handleBag = () => {
    if(order.length < 1){
      return
    }
    if(modding) {
      dispatch({
        type: 'REMOVE',
        payload: modding.uuid
      })
    }

    const bowl = {
      uuid: crypto.randomUUID(),
      ingredients: [...order],
      quantity: 1,
      price: price,
      modding: false,
      name: 'Greens + Grains Bowl'
    }

    dispatch({
      type: 'ADD',
      payload: bowl
    })
  }

  useEffect(() => {
    state.bag.forEach((i) => {
      if(i.modding === true){
        setModding(i)
        i.ingredients.forEach((ing) => {
          handleAdd(ing)
        })
      }
    })
  }, [state.bag, handleAdd])

  return (
    <>
    {errorModal && 
    <div className='builder__errormodal'>
      <div className='builder__errormodalcontent'>
        <div>Limit reached for this ingredient</div>
        <div>Remove current ingredient to add more</div>
        <div className='builder__okay' onClick={() => setErrorModal(false)}>Okay</div>
      </div>
    </div>}
    <div className='builder'>
      <div className='builder__options'>
        <div className='builder__option'>
          <div className='builder__label'>
            <div>GREENS</div>
            <div>Select one green.</div>
          </div>
          <div className='builder__grid'>
          <div className='builder__item' 
            onClick={() => handleAdd(sampledata.arugula)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.arugula.img}`} alt='ingredient'></img>
              <div>{sampledata.arugula.name}</div>
              <div>{sampledata.arugula.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.supergreens)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.supergreens.img}`} alt='ingredient'></img>
              <div>{sampledata.supergreens.name}</div>
              <div>{sampledata.supergreens.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.babyspinach)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.babyspinach.img}`} alt='ingredient'></img>
              <div>{sampledata.babyspinach.name}</div>
              <div>{sampledata.babyspinach.cal}</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.romaine)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.romaine.img}`} alt='ingredient'></img>
              <div>{sampledata.romaine.name}</div>
              <div>{sampledata.babyspinach.cal}</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.splendidgreens)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.splendidgreens.img}`} alt='ingredient'></img>
              <div>{sampledata.splendidgreens.name}</div>
              <div>{sampledata.splendidgreens.cal}</div>
            </div>       
          </div>
        </div>

        <div className='builder__option'>
          <div className='builder__label'>
            <div>GRAINS</div>
            <div>Select one grain.</div>
          </div>
          <div className='builder__grid'>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.saffronrice)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.saffronrice.img}`} alt='ingredient'></img>
              <div>{sampledata.saffronrice.name}</div>
              <div>{sampledata.saffronrice.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.brownrice)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.brownrice.img}`} alt='ingredient'></img>
              <div>{sampledata.brownrice.name}</div>
              <div>{sampledata.brownrice.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.blacklentils)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.blacklentils.img}`} alt='ingredient'></img>
              <div>{sampledata.blacklentils.name}</div>
              <div>{sampledata.blacklentils.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.rightrice)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.rightrice.img}`} alt='ingredient'></img>
              <div>{sampledata.rightrice.name}</div>
              <div>{sampledata.rightrice.cal} Cal</div>
              <div>+ ${sampledata.rightrice.price} </div>
            </div>         
          </div>
        </div>

        <div className='builder__option'>
          <div className='builder__label'>
            <div>DIPS + SPREADS</div>
            <div>Select up to three dips. Select again to add multiple scoops.</div>
          </div>
          <div className='builder__grid'>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.tzatziki)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.tzatziki.img}`} alt='ingredient'></img>
              <div>{sampledata.tzatziki.name}</div>
              <div>{sampledata.tzatziki.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.hummus)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.hummus.img}`} alt='ingredient'></img>
              <div>{sampledata.hummus.name}</div>
              <div>{sampledata.hummus.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.feta)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.feta.img}`} alt='ingredient'></img>
              <div>{sampledata.feta.name}</div>
              <div>{sampledata.feta.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.harissa)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.harissa.img}`} alt='ingredient'></img>
              <div>{sampledata.harissa.name}</div>
              <div>{sampledata.harissa.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.redpepperhummus)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.redpepperhummus.img}`} alt='ingredient'></img>
              <div>{sampledata.redpepperhummus.name}</div>
              <div>{sampledata.redpepperhummus.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.roastedeggplant)}>
              <img src={process.env.PUBLIC_URL + `/${sampledata.roastedeggplant.img}`} alt='ingredient'></img>
              <div>{sampledata.roastedeggplant.name}</div>
              <div>{sampledata.roastedeggplant.cal} Cal</div>
            </div>                            
          </div>
        </div>
      </div>

      
      <div className='builder__order'>
        <div className='builder__order__top'>
          <div className='builder__order__back'>Back to Menu</div>
          <div className='builder__order__title'>GREEN + GRAINS BOWL</div>
          <div className='builder__order__info'>
            <div className='builder__order__price'>${price.toFixed(2)}</div>
            <div className='builder__order__spacer'>•</div>
            <div className='builder__order__calories'>{cal} Cal</div>
          </div>
        </div>

        <div className='builder__order__list'>
        {order.length > 0 && order.map((i, n) => {
            return <div className='builder__order__list__item' key={n}>
                <img src={process.env.PUBLIC_URL + `/${i.img}`} alt='ingredient'></img>
                <p>{i.name}</p>
                <p className='builder__order__remove' onClick={() => handleRemove(i, n)}>X</p>
              </div>
          })}
        </div>
        <div className='builder__order__bottom'>
          <Link onClick={handleBag} className={order.length > 0 ? 'builder__notempty addtobag' : 'addtobag'} to='/'>
            <div >Add to bag</div>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Builder