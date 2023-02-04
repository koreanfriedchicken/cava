import { Link } from "react-router-dom"

const HarissaAvocadoBowl = () => {
  return (
    <div className='page'>
      <img src={process.env.PUBLIC_URL + '/harissabowl.avif'} alt='menuitem'/>
      <div className='page__content'>
        <Link className='link' to='/'>
          <div>back to menu</div>
        </Link>
        <h1>HARISSA AVOCADO BOWL</h1>
        <div>$14.60 ● 880 Cal</div>
        <p>An extra colorful, vibrant, and bold bowl (it's our top seller!) that gives you a double dose of spiciness with harissa honey chicken 
          and our hot harissa vinaigrette. Plus, Crazy Feta, hummus, fire-roasted corn, avocado, pickled onions, Persian cucumber, feta, basmati rice, 
          and SuperGreens.</p>
        <div>Contains: Milk, Sesame</div>
        <div className='page__buttons'>
          <div className='page__customize'>Customize</div>
          <div className='page__add'>Add to Bag</div>
        </div>
      </div>
    </div>
  )
}

export default HarissaAvocadoBowl