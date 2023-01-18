import { Link } from "react-router-dom"

const BalsamicDateChicken = () => {
  return (
    <div className='page'>
      <img src='balsamicbowl.avif'/>
      <div className='page__content'>
        <Link className='link' to='/'>
          <div>back to menu</div>
        </Link>
        <h1>BALSAMIC DATE CHICKEN</h1>
        <div>$10.95 ● 645 Cal</div>
        <p>An homage to the cozy and comforting flavors we love, with a mildly sweet note thanks to our seasonal balsamic date vinaigrette. 
          There's grilled chicken, roasted eggplant dip, roasted red pepper hummus, fire-roasted corn, cabbage slaw, tomato + cucumber, brown rice, spinach.</p>
        <div>Contains: Sesame</div>
        <div className='page__buttons'>
          <div className='page__customize'>Customize</div>
          <div className='page__add'>Add to Bag</div>
        </div>
      </div>
    </div>
  )
}

export default BalsamicDateChicken