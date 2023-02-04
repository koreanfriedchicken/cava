import { Link } from "react-router-dom"

const LentilAvocadoBowl = () => {
  return (
    <div className='page'>
      <img src={process.env.PUBLIC_URL + '/lentilbowl.avif'} alt='menuitem'/>
      <div className='page__content'>
        <Link className='link' to='/'>
          <div>back to menu</div>
        </Link>
        <h1>LENTIL AVOCADO BOWL</h1>
        <div>$13.35 ● 770 Cal</div>
        <p>A plant-based bowl that's all about texture. Great for when you want to feel healthy 
          but don't want to sacrifice flavor. With falafel, roasted veggies, roasted eggplant, hummus, avocado, pickled onions, Persian cucumber, lentil tabbouleh, cabbage slaw, spinach, SuperGreens, skhug, garlic dressing.</p>
        <div>Contains: Wheat, Soy, Sesame, Vegetarian, Vegan</div>
        <div className='page__buttons'>
          <div className='page__customize'>Customize</div>
          <div className='page__add'>Add to Bag</div>
        </div>
      </div>
    </div>
  )
}

export default LentilAvocadoBowl