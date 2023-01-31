import { Link } from "react-router-dom"

const GreekSalad = () => {
  return (
    <div className='page'>
      <img src='greeksalad.avif' alt='menuitem'/>
      <div className='page__content'>
        <Link className='link' to='/'>
          <div>back to menu</div>
        </Link>
        <h1>GREEK SALAD</h1>
        <div>$10.95 ● 600 Cal</div>
        <p>No need to reinvent the wheel; it's all about classic tangy and savory Mediterranean flavors here. 
          That means a base of romaine and arugula, with hummus and everything that makes a Greek salad so great: 
          grilled chicken, tzatziki, feta, Persian cucumber, tomato, Kalamata olives, Greek vinaigrette.</p>
        <div>Contains: Sesame, Milk</div>
        <div className='page__buttons'>
          <div className='page__customize'>Customize</div>
          <div className='page__add'>Add to Bag</div>
        </div>
      </div>
    </div>
  )
}

export default GreekSalad