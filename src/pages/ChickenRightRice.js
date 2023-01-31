import { Link } from "react-router-dom"

const ChickenRightRice = () => {
  return (
    <div className='page'>
      <img src='rightbowl.avif' alt='menuitem'/>
      <div className='page__content'>
        <Link className='link' to='/'>
          <div>back to menu</div>
        </Link>
        <h1>CHICKEN + RIGHTRICE</h1>
        <div>$11.60 ● 750 Cal</div>
        <p>A healthy and hearty bowl with classic Greek flavors built on a base of protein-packed, lower-carb RightRice (made from lentil, pea, and chickpea flours). Includes grilled chicken, tzatziki, hummus, feta, Persian cucumber, tomato + onion, pickled onion, and arugula. Finished with Greek vinaigrette.</p>
        <div>Contains: Milk, Sesame</div>
        <div className='page__buttons'>
          <div className='page__customize'>Customize</div>
          <div className='page__add'>Add to Bag</div>
        </div>
      </div>
    </div>
  )
}

export default ChickenRightRice