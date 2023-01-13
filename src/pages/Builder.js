import { useState } from "react"

const Builder = () => {

  const [price, setPrice] = useState(10.95)
  const [cal, setCal] = useState(0)
  const [order, setOrder] = useState([])
  const [uniqueItems, setUniqueItems] = useState({greens: 0, grains: 0, dips: 0})
  const [errorModal, setErrorModal] = useState(false)

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

  const handleAdd = (item) => {
      if(item.type === 'greens' && uniqueItems.greens === 0){
        setUniqueItems({ ...uniqueItems, greens: 1})
        setOrder([...order, {...item}])
        setCal(cal + item.cal)
        setPrice(price + item.price)
      }

      if(item.type === 'grains' && uniqueItems.grains === 0){
        setUniqueItems({ ...uniqueItems, grains: 1})
        setOrder([...order, {...item}])
        setCal(cal + item.cal)
        setPrice(price + item.price)
      }

      if(item.type === 'dips' && uniqueItems.dips < 3){
        const newDips = uniqueItems.dips += 1
        setUniqueItems({ ...uniqueItems, dips: newDips})
        setOrder([...order, {...item}])
        setCal(cal + item.cal)
        setPrice(price + item.price)
      }
  }

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

  return (
    <>
    {errorModal && 
    <div className='builder__errormodal'>
      <div className='builder__errormodalcontent'>
        <div>This is limited to one</div>
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
              <img src={sampledata.arugula.img}></img>
              <div>{sampledata.arugula.name}</div>
              <div>{sampledata.arugula.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.supergreens)}>
              <img src={sampledata.supergreens.img}></img>
              <div>{sampledata.supergreens.name}</div>
              <div>{sampledata.supergreens.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.babyspinach)}>
              <img src={sampledata.babyspinach.img}></img>
              <div>{sampledata.babyspinach.name}</div>
              <div>{sampledata.babyspinach.cal}</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.romaine)}>
              <img src={sampledata.romaine.img}></img>
              <div>{sampledata.romaine.name}</div>
              <div>{sampledata.babyspinach.cal}</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.splendidgreens)}>
              <img src={sampledata.splendidgreens.img}></img>
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
              <img src={sampledata.saffronrice.img}></img>
              <div>{sampledata.saffronrice.name}</div>
              <div>{sampledata.saffronrice.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.brownrice)}>
              <img src={sampledata.brownrice.img}></img>
              <div>{sampledata.brownrice.name}</div>
              <div>{sampledata.brownrice.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.blacklentils)}>
              <img src={sampledata.blacklentils.img}></img>
              <div>{sampledata.blacklentils.name}</div>
              <div>{sampledata.blacklentils.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.rightrice)}>
              <img src={sampledata.rightrice.img}></img>
              <div>{sampledata.rightrice.name}</div>
              <div>{sampledata.rightrice.cal} Cal</div>
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
              <img src={sampledata.tzatziki.img}></img>
              <div>{sampledata.tzatziki.name}</div>
              <div>{sampledata.tzatziki.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.hummus)}>
              <img src={sampledata.hummus.img}></img>
              <div>{sampledata.hummus.name}</div>
              <div>{sampledata.hummus.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.feta)}>
              <img src={sampledata.feta.img}></img>
              <div>{sampledata.feta.name}</div>
              <div>{sampledata.feta.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.harissa)}>
              <img src={sampledata.harissa.img}></img>
              <div>{sampledata.harissa.name}</div>
              <div>{sampledata.harissa.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.redpepperhummus)}>
              <img src={sampledata.redpepperhummus.img}></img>
              <div>{sampledata.redpepperhummus.name}</div>
              <div>{sampledata.redpepperhummus.cal} Cal</div>
            </div>
            <div className='builder__item' 
            onClick={() => handleAdd(sampledata.roastedeggplant)}>
              <img src={sampledata.roastedeggplant.img}></img>
              <div>{sampledata.roastedeggplant.name}</div>
              <div>{sampledata.roastedeggplant.cal} Cal</div>
            </div>                            
          </div>
        </div>
      </div>

      
      <div className='builder__order'>
        <div className='builder__order__title'>GREEN + GRAINS BOWL</div>
        <div className='builder__order__info'>
          <div className='builder__order__price'>${price.toFixed(2)}</div>
          <div className='builder__order__calories'>{cal} Cal</div>
        </div>
        <div className='builder__order__list'>
        {order.length > 0 && order.map((i, n) => {
            return <div className='builder__order__list__item' key={n}>
                <img src={i.img}></img>
                <p>{i.name}</p>
                <p onClick={() => handleRemove(i, n)}>X</p>
              </div>
          })}
        </div>
        <div className='builder__addtobag'>Add to bag</div>
      </div>
    </div>
    </>
  )
}

export default Builder